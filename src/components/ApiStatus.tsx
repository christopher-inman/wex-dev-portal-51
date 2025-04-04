
import React from 'react';
import { Check, AlertTriangle, X } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface ApiStatusItemProps {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  latency?: string;
  lastUpdated?: string;
}

const apiStatuses: ApiStatusItemProps[] = [
  { 
    name: 'Payment Processing API', 
    status: 'operational', 
    latency: '45ms',
    lastUpdated: '1 min ago'
  },
  { 
    name: 'Fleet Management API', 
    status: 'operational', 
    latency: '62ms',
    lastUpdated: '2 min ago'
  },
  { 
    name: 'Benefits API', 
    status: 'degraded', 
    latency: '230ms',
    lastUpdated: '30 sec ago'
  },
  { 
    name: 'Transaction Reporting API', 
    status: 'operational', 
    latency: '89ms',
    lastUpdated: '1 min ago'
  },
  { 
    name: 'Authentication Service', 
    status: 'operational', 
    latency: '52ms',
    lastUpdated: '5 min ago'
  }
];

const ApiStatusItem: React.FC<ApiStatusItemProps> = ({ name, status, latency, lastUpdated }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'operational':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'down':
        return <X className="w-5 h-5 text-wex-red" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'down':
        return 'Service Disruption';
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400';
      case 'degraded':
        return 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400';
      case 'down':
        return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400';
    }
  };

  return (
    <div className="p-4 border-b border-border/50 last:border-b-0">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex items-center mt-1 text-sm">
            <div className={`flex items-center px-2 py-0.5 rounded-full ${getStatusClass()}`}>
              {getStatusIcon()}
              <span className="ml-1.5">{getStatusText()}</span>
            </div>
            {latency && <span className="text-xs text-foreground/60 ml-4">Latency: {latency}</span>}
          </div>
        </div>
        {lastUpdated && (
          <div className="text-xs text-foreground/60">
            Updated {lastUpdated}
          </div>
        )}
      </div>
    </div>
  );
};

const ApiStatus: React.FC = () => {
  const allOperational = apiStatuses.every(api => api.status === 'operational');
  const hasDegradedServices = apiStatuses.some(api => api.status === 'degraded');
  const hasDownServices = apiStatuses.some(api => api.status === 'down');

  const getOverallStatusClass = () => {
    if (hasDownServices) return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
    if (hasDegradedServices) return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
    return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
  };

  const getOverallStatusText = () => {
    if (hasDownServices) return 'System Disruption';
    if (hasDegradedServices) return 'Partial System Degradation';
    return 'All Systems Operational';
  };

  return (
    <AnimatedCard className="h-full">
      <div className="p-5 border-b border-border">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">API Status</h3>
          <div className={`${getOverallStatusClass()} text-xs rounded-full px-3 py-1 font-medium`}>
            {getOverallStatusText()}
          </div>
        </div>
      </div>
      <div>
        {apiStatuses.map((api, index) => (
          <ApiStatusItem key={index} {...api} />
        ))}
      </div>
      <div className="p-4 border-t border-border bg-muted/10">
        <a href="#" className="text-wex-blue hover:underline text-sm font-medium">
          View detailed status page →
        </a>
      </div>
    </AnimatedCard>
  );
};

export default ApiStatus;
