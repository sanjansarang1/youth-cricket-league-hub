
"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export function CountUp({
  end,
  suffix = "",
  duration = 2000,
  className,
  formatter = (value) => value.toString(),
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;

    const step = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(startValue + easedProgress * (end - startValue));
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  };

  // Easing function for a more natural feel
  const easeOutQuad = (t: number) => {
    return t * (2 - t);
  };

  return (
    <div ref={counterRef} className={cn("", className)}>
      {formatter(count)}{suffix}
    </div>
  );
}
