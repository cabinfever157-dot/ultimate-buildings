"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  videoId: string;
  opacity?: number;
  zIndex?: number;
  playbackRate?: number;
  startTime?: number;
}

export function BackgroundVideo({
  videoId,
  opacity = 0.5,
  zIndex = -1,
  playbackRate = 1.0,
  startTime = 0
}: BackgroundVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Check if YouTube API is available
    const checkYouTubeAPI = () => {
      if ((window as any).YT && (window as any).YT.Player && iframeRef.current) {
        try {
          const player = new (window as any).YT.Player(iframeRef.current, {
            events: {
              'onReady': (event: any) => {
                event.target.setPlaybackRate(playbackRate);
                console.log(`Video playback rate set to ${playbackRate}x`);
              }
            }
          });
        } catch (error) {
          console.log('Error setting playback rate:', error);
        }
      } else {
        // If API not ready, try again after delay
        setTimeout(checkYouTubeAPI, 1000);
      }
    };
    
    // Start checking for YouTube API
    checkYouTubeAPI();
  }, [videoId, playbackRate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed inset-0"
      style={{ zIndex }}
    >
      <iframe
        ref={iframeRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ 
          width: '100vw', 
          height: '100vh', 
          objectFit: 'cover',
          opacity: opacity,
          zIndex: 10
        }}
                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&start=${startTime || 0}&end=270&playinline=1&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        title="background-video"
       />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark/60 pointer-events-none" />
    </motion.div>
  );
}