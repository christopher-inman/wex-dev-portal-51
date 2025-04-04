
import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import Button from './Button';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText?: string;
  actionLink?: string;
  tags?: string[];
  className?: string;
  iconColor?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon: Icon,
  actionText = "View Resource",
  actionLink = "#",
  tags,
  className,
  iconColor = "#55a9da", // Default to WEX light blue if no color provided
}) => {
  // Generate a lighter background color based on the icon color for the container
  const getBackgroundColor = () => {
    // Default light background for the WEX light blue
    return `${iconColor}15`; // 15% opacity version of the color
  };

  return (
    <AnimatedCard className={`p-6 h-full ${className}`} hoverEffect="lift">
      <div className="flex flex-col h-full">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: getBackgroundColor() }}
        >
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-6 flex-grow">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs py-1 px-2 bg-foreground/5 rounded text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          <Button variant="text" to={actionLink}>{actionText}</Button>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ResourceCard;
