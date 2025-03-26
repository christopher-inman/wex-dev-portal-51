
import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';

interface ApiCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  variant?: 'default' | 'featured';
  className?: string;
  onClick?: () => void;
  iconColor?: string;
}

const ApiCard: React.FC<ApiCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  variant = 'default',
  className,
  onClick,
  iconColor,
}) => {
  return (
    <AnimatedCard
      className={cn(
        'p-6 relative overflow-visible',
        variant === 'featured' ? 'border-2 border-wex-red/20' : '',
        className
      )}
      hoverEffect="lift"
      clickEffect={!!onClick}
      onClick={onClick}
    >
      {variant === 'featured' && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wex-red text-white text-xs px-4 py-1.5 rounded-full font-medium shadow-md">
          Featured
        </div>
      )}
      <div className="flex flex-col h-full">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          variant === 'featured' 
            ? 'bg-wex-red/10 text-wex-red' 
            : 'bg-background border border-border'
        )}>
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="mt-auto space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-foreground/80">
                <span className={cn(
                  "w-1.5 h-1.5 rounded-full mr-2",
                  variant === 'featured' ? 'bg-wex-red' : iconColor ? 'bg-transparent' : 'bg-wex-blue'
                )} style={iconColor && !variant ? { backgroundColor: iconColor } : {}}></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimatedCard>
  );
};

export default ApiCard;
