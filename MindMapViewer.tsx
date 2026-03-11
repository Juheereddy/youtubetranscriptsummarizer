
import React from 'react';
import { Card } from '@/components/ui/card';

interface MindMapNode {
  name: string;
  children?: MindMapNode[];
  size?: number;
}

interface MindMapViewerProps {
  data: MindMapNode;
}

const MindMapViewer: React.FC<MindMapViewerProps> = ({ data }) => {
  const renderNode = (node: MindMapNode, level: number = 0) => {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500'
    ];

    const sizes = ['text-xl', 'text-lg', 'text-base', 'text-sm'];
    const paddings = ['p-6', 'p-4', 'p-3', 'p-2'];

    return (
      <div key={node.name} className={`flex flex-col items-center ${level > 0 ? 'mt-4' : ''}`}>
        <div 
          className={`
            bg-gradient-to-r ${colors[level % colors.length]} 
            text-white rounded-lg ${paddings[Math.min(level, 3)]} 
            ${sizes[Math.min(level, 3)]} font-semibold 
            shadow-lg hover:shadow-xl transition-all duration-300 
            hover:scale-105 cursor-pointer border border-white/20
            backdrop-blur-sm
          `}
        >
          {node.name}
        </div>
        
        {node.children && node.children.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-gradient-to-b from-white/40 to-transparent mb-2"></div>
                {renderNode(child, level + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="bg-white/5 border-white/10 p-8 min-h-[500px] overflow-auto">
      <div className="flex justify-center">
        {renderNode(data)}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-white/60 text-sm">
          💡 Interactive mind map showing key concepts and relationships from the video summary
        </p>
      </div>
    </Card>
  );
};

export default MindMapViewer;
