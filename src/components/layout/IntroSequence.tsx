"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "../ui/text-reveal";

interface IntroSequenceProps {
  text: string;
  videoId: string;
  onComplete: () => void;
  playbackRate?: number;
  startTime?: number;
}

export function IntroSequence({ text, videoId, onComplete, playbackRate = 1.0, startTime = 7 }: IntroSequenceProps) {
  const [showText, setShowText] = useState(true); 
  const [showLogo, setShowLogo] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 3500);
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), 5500);
    const completeTimer = setTimeout(() => onComplete(), 8500);

    // Set up YouTube player API for playback rate control
    const setupYouTubePlayer = () => {
      if ((window as any).YT && (window as any).YT.Player && iframeRef.current) {
        try {
          const player = new (window as any).YT.Player(iframeRef.current, {
            events: {
              'onReady': (event: any) => {
                event.target.setPlaybackRate(playbackRate);
                console.log(`Intro video playback rate set to ${playbackRate}x`);
              }
            }
          });
        } catch (error) {
          console.log('Error setting intro playback rate:', error);
        }
      }
    };

    // Check for YouTube API availability
    setupYouTubePlayer();

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, playbackRate]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="intro-container"
          className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 3, ease: "easeInOut" } }}
        >
          {/* Video Layer as Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-10 pointer-events-none bg-brand-dark"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <iframe
                  ref={iframeRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ width: '100vw', height: '100vh', objectFit: 'cover', zIndex: 10 }}
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&start=${startTime}&playinline=1&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  title="brg-video"
                ></iframe>
              <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 to-brand-dark/80 pointer-events-none" />
             </div>
            {/* Cinematic vignette overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-dark/95" />
          </motion.div>

          {/* Content Layer (Text and Logo) */}
          <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl px-8 w-full h-full">
            <motion.div
               animate={{ y: showLogo ? -80 : 0 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="flex justify-center w-full"
            >
              <motion.div animate={{ opacity: showText ? 1 : 0 }} transition={{ duration: 0.5 }}>
                  <TextReveal
                    text={text}
                    className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.2] drop-shadow-[0_4px_24px_rgba(212,175,55,0.4)]"
                    startReveal={showText} 
                  />
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={
                showLogo 
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 50, filter: "blur(8px)" }
              }
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute mt-48 flex items-center justify-center" 
            >
                <img src="/logo.png" alt="Ultimate-Buildings Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_16px_rgba(212,175,55,0.6)]" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
