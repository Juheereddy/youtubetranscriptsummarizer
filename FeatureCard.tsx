
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient 
}) => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <CardHeader className="pb-3">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-white text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
