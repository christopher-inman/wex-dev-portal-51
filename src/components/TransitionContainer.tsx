
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TransitionContainerProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animation?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'scale';
}

const TransitionContainer: React.FC<TransitionContainerProps> = ({
  children,
  delay = 0,
  duration = 500,
  className,
  animation = 'fade-in',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ref.current) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.style.opacity = '1';
                ref.current.style.transform = 'translateY(0) translateX(0) scale(1)';
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-in':
        return 'opacity-0 translate-y-[10px]';
      case 'fade-in-right':
        return 'opacity-0 translate-x-[20px]';
      case 'fade-in-left':
        return 'opacity-0 -translate-x-[20px]';
      case 'scale':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getInitialStyles(), className)}
      style={{ transition: `all ${duration}ms ease-out` }}
    >
      {children}
    </div>
  );
};

export default TransitionContainer;
