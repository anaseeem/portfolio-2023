import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Heading1Props {
  children: ReactNode
  className?: string
}

export const Heading1: React.FC<Heading1Props> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "text-right text-4xl xsm:text-6xl md:text-7xl lg:text-8xl uppercase font-semibold",
        className
      )}>
      {children}
    </h1>
  );
};

interface Heading2Props {
  children: ReactNode
  className?: string
}

export const Heading2: React.FC<Heading2Props> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-3xl xsm:text-5xl md:text-6xl uppercase font-semibold py-5",
        className
      )}>
      {children}
    </h2>
  );
};
