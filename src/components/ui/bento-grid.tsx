import { cn } from "@/lib/utils";

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
         "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
   return (
     <div
       className={cn(
         "row-span-1 rounded-xl group/bento hover:shadow-glass-lg transition duration-500 shadow-glass-sm p-6 dark:bg-card dark:border-white/5 border border-transparent justify-between flex flex-col space-y-4 backdrop-blur-xl",
         className
       )}
     >
       {header}
       <div className="group-hover/bento:translate-x-2 transition duration-200">
         {icon}
          <div className="font-display font-bold text-foreground mb-4 mt-3 text-lg">
            {title}
          </div>
          <div className="font-body font-normal text-muted-foreground text-base leading-relaxed min-h-[60px]">
            {description}
          </div>
       </div>
     </div>
   );
};
