
import React from 'react';
import VideoAnalyzer from '@/components/VideoAnalyzer';
import FeatureCard from '@/components/FeatureCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { 
  Brain, 
  Globe, 
  Zap, 
  FileText, 
  Youtube, 
  Sparkles,
  Shield,
  Clock
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Youtube,
      title: "Universal YouTube Support",
      description: "Works with any YouTube video - with or without subtitles. Our AI extracts and processes audio content directly.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Summarization",
      description: "Advanced AI models create comprehensive, structured summaries highlighting key points and insights.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Translation",
      description: "Translate summaries into 12+ languages including Spanish, French, German, Japanese, and more.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Interactive Mind Maps",
      description: "Visualize video content through AI-generated mind maps showing relationships between concepts.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get comprehensive video analysis in minutes, not hours. Optimized for speed and accuracy.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your data is processed securely. We don't store video content or personal information.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-12 px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
              <Youtube className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              AI Video Summarizer
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform any YouTube video into comprehensive summaries, translations, and interactive mind maps. 
            Powered by advanced AI for content that matters to you.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">No subtitles required • Real-time processing • Multi-language support</span>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 space-y-16">
          {/* Video Analyzer */}
          <section>
            <VideoAnalyzer />
          </section>

          {/* Features Grid */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Powerful Features for Every User
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Everything you need to extract maximum value from video content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                />
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                How It Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Paste URL", desc: "Enter any YouTube video URL" },
                { step: "2", title: "AI Processing", desc: "Advanced AI extracts and analyzes content" },
                { step: "3", title: "Generate Summary", desc: "Get comprehensive, structured summaries" },
                { step: "4", title: "Explore & Share", desc: "Translate, visualize, and export results" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-12 px-4 border-t border-white/10 mt-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-white/60" />
            <span className="text-white/60">Built with AI • Always improving • Always free</span>
          </div>
          <p className="text-white/50 text-sm">
            Transform your video learning experience with AI-powered insights
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
