import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from './AnimatedCard';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText?: string;
  actionLink?: string;
  tags?: string[];
  features?: string[];
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
  features,
  className,
  iconColor = "#55a9da",
}) => {
  return (
    <AnimatedCard className={`p-6 h-full ${className}`} hoverEffect="lift">
      <div className="flex flex-col h-full">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <span 
                  className="w-1.5 h-1.5 rounded-full mr-2"
                  style={{ backgroundColor: iconColor }}
                ></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

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
          <Link 
            to={actionLink} 
            className="text-wex-red hover:underline font-medium inline-flex items-center"
          >
            {actionText} →
          </Link>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ResourceCard;