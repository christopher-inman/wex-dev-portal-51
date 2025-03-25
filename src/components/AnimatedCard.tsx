
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'border' | 'none';
  clickEffect?: boolean;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  hoverEffect = 'lift',
  clickEffect = false,
  onClick,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getHoverClasses = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'hover-card';
      case 'glow':
        return 'hover:shadow-lg hover:shadow-accent/20';
      case 'border':
        return 'hover:border-accent';
      case 'none':
        return '';
      default:
        return '';
    }
  };

  const handleMouseDown = () => {
    if (clickEffect) setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (clickEffect) setIsPressed(false);
  };

  const clickClasses = isPressed ? 'scale-[0.98] shadow-inner' : '';

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden glass-card transition-all duration-300',
        getHoverClasses(),
        clickClasses,
        className
      )}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ willChange: 'transform, box-shadow' }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
