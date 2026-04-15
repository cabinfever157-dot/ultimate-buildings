import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
   return (
     <div
       className={cn(
         "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
         className
       )}
     >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
   const Content = (
     <motion.div
       whileHover={{ scale: 1.02 }}
        className={cn(
          "relative row-span-1 rounded-2xl group/bento hover:shadow-glass-xl transition duration-500 shadow-glass-md p-6 bg-[#0a0f18]/50 dark:border-white/10 border border-white/5 justify-between flex flex-col space-y-4 backdrop-blur-3xl w-full h-full overflow-hidden cursor-pointer",
          className
        )}
     >
       <BorderBeam size={200} duration={8} delay={Math.random() * 2} className="opacity-0 group-hover/bento:opacity-100 transition-opacity duration-700" colorFrom="#d4af37" colorTo="#d4af37" />
       {header}
       <div className="group-hover/bento:translate-x-3 transition duration-300 mt-auto flex items-center gap-4 relative z-10 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
         <div className="p-2 bg-brand-primary/10 rounded-lg group-hover/bento:bg-brand-primary/20 transition-colors">
           {icon}
         </div>
         <div className="font-display font-bold text-white tracking-wide text-lg shrink-0">
           {title}
         </div>
       </div>
     </motion.div>
   );

   return href ? (
     <Link href={href} className="block w-full h-full">
       {Content}
     </Link>
   ) : (
     Content
   );
};
