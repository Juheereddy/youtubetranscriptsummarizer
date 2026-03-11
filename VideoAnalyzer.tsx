
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  FileText, 
  Globe, 
  Brain, 
  Loader2, 
  CheckCircle,
  Youtube,
  Sparkles,
  Download
} from 'lucide-react';
import MindMapViewer from './MindMapViewer';
import { useToast } from '@/hooks/use-toast';

interface AnalysisResult {
  title: string;
  duration: string;
  transcript: string;
  summary: string;
  translatedSummary?: string;
  mindMapData?: any;
}

const VideoAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isGeneratingMindMap, setIsGeneratingMindMap] = useState(false);
  const { toast } = useToast();

  const languages = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'bn', name: 'Bengali' },
  ];

  const isValidYouTubeUrl = (url: string) => {
    const regex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return regex.test(url);
  };

  const simulateAnalysis = async () => {
    if (!isValidYouTubeUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube URL",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);

    // Simulate progress updates
    const progressSteps = [
      { step: 20, message: "Extracting video information..." },
      { step: 40, message: "Generating transcript..." },
      { step: 60, message: "Processing with AI..." },
      { step: 80, message: "Creating summary..." },
      { step: 100, message: "Analysis complete!" }
    ];

    for (const { step, message } of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProgress(step);
      
      if (step < 100) {
        toast({
          title: "Processing",
          description: message,
        });
      }
    }

    // Simulate analysis result
    const mockResult: AnalysisResult = {
      title: "How AI is Transforming the Future of Technology",
      duration: "12:34",
      transcript: `Welcome to today's video about artificial intelligence and its impact on our future. In this comprehensive discussion, we'll explore how AI is revolutionizing various industries including healthcare, education, transportation, and entertainment.

First, let's talk about healthcare. AI-powered diagnostic tools are now capable of detecting diseases earlier and more accurately than traditional methods. Machine learning algorithms can analyze medical images, predict patient outcomes, and even assist in drug discovery.

In education, AI is personalizing learning experiences for students worldwide. Adaptive learning platforms adjust content difficulty based on individual progress, while AI tutors provide 24/7 support to learners.

Transportation is being transformed through autonomous vehicles and smart traffic management systems. These technologies promise to reduce accidents, improve efficiency, and create more sustainable urban environments.

The entertainment industry is leveraging AI for content creation, recommendation systems, and immersive experiences. From AI-generated music to personalized movie suggestions, the possibilities are endless.

However, with great power comes great responsibility. We must address ethical concerns, ensure privacy protection, and work towards inclusive AI development that benefits all of humanity.

In conclusion, AI is not just a technological advancement; it's a paradigm shift that will define the next century. By embracing its potential while addressing its challenges, we can create a future where AI serves as a powerful tool for human progress.`,
      summary: `This video explores how artificial intelligence is revolutionizing multiple industries and shaping our future:

**Key Areas of AI Impact:**

🏥 **Healthcare Revolution**
- AI diagnostic tools detect diseases earlier and more accurately
- Machine learning analyzes medical images and predicts patient outcomes
- Accelerated drug discovery processes

🎓 **Educational Transformation**
- Personalized learning experiences through adaptive platforms
- AI tutors providing 24/7 student support
- Content difficulty adjusted based on individual progress

🚗 **Transportation Innovation**
- Autonomous vehicles reducing accidents and improving efficiency
- Smart traffic management systems
- More sustainable urban environments

🎬 **Entertainment Evolution**
- AI-powered content creation and curation
- Personalized recommendation systems
- Immersive AI-generated experiences

⚖️ **Ethical Considerations**
- Privacy protection and data security
- Inclusive AI development for all humanity
- Responsible implementation and governance

**Conclusion:** AI represents a paradigm shift that will define the next century, requiring balanced adoption that maximizes benefits while addressing challenges responsibly.`
    };

    setResult(mockResult);
    setIsAnalyzing(false);
    setProgress(0);

    toast({
      title: "Analysis Complete!",
      description: "Your video summary is ready.",
    });
  };

  const translateSummary = async () => {
    if (!selectedLanguage || !result) return;

    setIsTranslating(true);
    
    // Simulate translation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockTranslations: { [key: string]: string } = {
      'es': `Este video explora cómo la inteligencia artificial está revolucionando múltiples industrias y dando forma a nuestro futuro:

**Áreas Clave del Impacto de la IA:**

🏥 **Revolución en la Salud**
- Las herramientas de diagnóstico de IA detectan enfermedades más temprano y con mayor precisión
- El aprendizaje automático analiza imágenes médicas y predice resultados de pacientes
- Procesos acelerados de descubrimiento de medicamentos

🎓 **Transformación Educativa**
- Experiencias de aprendizaje personalizadas a través de plataformas adaptativas
- Tutores de IA que brindan soporte las 24 horas
- Dificultad del contenido ajustada según el progreso individual

🚗 **Innovación en Transporte**
- Vehículos autónomos que reducen accidentes y mejoran la eficiencia
- Sistemas inteligentes de gestión de tráfico
- Entornos urbanos más sostenibles

**Conclusión:** La IA representa un cambio de paradigma que definirá el próximo siglo.`,
      'fr': `Cette vidéo explore comment l'intelligence artificielle révolutionne plusieurs industries et façonne notre avenir:

**Domaines Clés d'Impact de l'IA:**

🏥 **Révolution de la Santé**
- Les outils de diagnostic IA détectent les maladies plus tôt et avec plus de précision
- L'apprentissage automatique analyse les images médicales et prédit les résultats des patients
- Processus accélérés de découverte de médicaments

🎓 **Transformation Éducative**
- Expériences d'apprentissage personnalisées via des plateformes adaptatives
- Tuteurs IA fournissant un support 24h/24
- Difficulté du contenu ajustée selon les progrès individuels

🚗 **Innovation des Transports**
- Véhicules autonomes réduisant les accidents et améliorant l'efficacité
- Systèmes intelligents de gestion du trafic
- Environnements urbains plus durables

**Conclusion:** L'IA représente un changement de paradigme qui définira le prochain siècle.`,
      'de': `Dieses Video erkundet, wie künstliche Intelligenz mehrere Branchen revolutioniert und unsere Zukunft prägt:

**Schlüsselbereiche des KI-Einflusses:**

🏥 **Gesundheitsrevolution**
- KI-Diagnosetools erkennen Krankheiten früher und genauer
- Maschinelles Lernen analysiert medizinische Bilder und sagt Patientenergebnisse voraus
- Beschleunigte Arzneimittelentdeckungsprozesse

🎓 **Bildungstransformation**
- Personalisierte Lernerfahrungen durch adaptive Plattformen
- KI-Tutoren bieten 24/7-Support
- Inhaltschwierigkeit an individuellen Fortschritt angepasst

🚗 **Transportinnovation**
- Autonome Fahrzeuge reduzieren Unfälle und verbessern Effizienz
- Intelligente Verkehrsmanagementsysteme
- Nachhaltigere städtische Umgebungen

**Fazit:** KI stellt einen Paradigmenwechsel dar, der das nächste Jahrhundert definieren wird.`,
      'it': `Questo video esplora come l'intelligenza artificiale sta rivoluzionando molteplici industrie e plasmando il nostro futuro:

**Aree Chiave dell'Impatto dell'IA:**

🏥 **Rivoluzione Sanitaria**
- Gli strumenti diagnostici IA rilevano le malattie prima e con maggiore precisione
- L'apprendimento automatico analizza immagini mediche e predice risultati dei pazienti
- Processi accelerati di scoperta farmaci

🎓 **Trasformazione Educativa**
- Esperienze di apprendimento personalizzate tramite piattaforme adattive
- Tutor IA che forniscono supporto 24/7
- Difficoltà del contenuto regolata in base al progresso individuale

🚗 **Innovazione dei Trasporti**
- Veicoli autonomi che riducono incidenti e migliorano efficienza
- Sistemi intelligenti di gestione del traffico
- Ambienti urbani più sostenibili

**Conclusione:** L'IA rappresenta un cambio di paradigma che definirà il prossimo secolo.`,
      'pt': `Este vídeo explora como a inteligência artificial está revolucionando múltiplas indústrias e moldando nosso futuro:

**Áreas-Chave do Impacto da IA:**

🏥 **Revolução da Saúde**
- Ferramentas de diagnóstico IA detectam doenças mais cedo e com maior precisão
- Aprendizado de máquina analisa imagens médicas e prevê resultados de pacientes
- Processos acelerados de descoberta de medicamentos

🎓 **Transformação Educacional**
- Experiências de aprendizado personalizadas através de plataformas adaptativas
- Tutores IA fornecendo suporte 24/7
- Dificuldade do conteúdo ajustada com base no progresso individual

🚗 **Inovação em Transporte**
- Veículos autônomos reduzindo acidentes e melhorando eficiência
- Sistemas inteligentes de gestão de tráfego
- Ambientes urbanos mais sustentáveis

**Conclusão:** A IA representa uma mudança de paradigma que definirá o próximo século.`,
      'ru': `Это видео исследует, как искусственный интеллект революционизирует множество отраслей и формирует наше будущее:

**Ключевые области влияния ИИ:**

🏥 **Революция в здравоохранении**
- Диагностические инструменты ИИ обнаруживают болезни раньше и точнее
- Машинное обучение анализирует медицинские изображения и предсказывает исходы пациентов
- Ускоренные процессы открытия лекарств

🎓 **Трансформация образования**
- Персонализированный опыт обучения через адаптивные платформы
- ИИ-наставники, обеспечивающие поддержку 24/7
- Сложность контента настраивается в зависимости от индивидуального прогресса

🚗 **Инновации в транспорте**
- Автономные транспортные средства снижают аварии и повышают эффективность
- Интеллектуальные системы управления трафиком
- Более устойчивые городские среды

**Заключение:** ИИ представляет смену парадигмы, которая определит следующее столетие.`,
      'ja': `このビデオでは、人工知能が複数の業界をどのように革命的に変え、私たちの未来を形作っているかを探ります：

**AIの影響の主要分野：**

🏥 **医療革命**
- AI診断ツールが病気をより早く正確に検出
- 機械学習が医療画像を分析し患者の結果を予測
- 薬物発見プロセスの加速

🎓 **教育の変革**
- 適応型プラットフォームによる個人化された学習体験
- 24時間7日サポートを提供するAIチューター
- 個人の進歩に基づいてコンテンツの難易度を調整

🚗 **交通イノベーション**
- 事故を減らし効率を向上させる自動運転車
- スマート交通管理システム
- より持続可能な都市環境

**結論：** AIは次の世紀を定義するパラダイムシフトを表しています。`,
      'ko': `이 비디오는 인공지능이 여러 산업을 어떻게 혁신하고 우리의 미래를 형성하고 있는지 탐구합니다:

**AI 영향의 주요 영역:**

🏥 **의료 혁명**
- AI 진단 도구가 질병을 더 일찍 정확하게 탐지
- 머신러닝이 의료 이미지를 분석하고 환자 결과를 예측
- 약물 발견 프로세스 가속화

🎓 **교육 혁신**
- 적응형 플랫폼을 통한 개인화된 학습 경험
- 24시간 지원을 제공하는 AI 튜터
- 개인 진도에 따라 조정되는 콘텐츠 난이도

🚗 **교통 혁신**
- 사고를 줄이고 효율성을 향상시키는 자율주행차
- 스마트 교통 관리 시스템
- 더 지속 가능한 도시 환경

**결론:** AI는 다음 세기를 정의할 패러다임 변화를 나타냅니다.`,
      'zh': `这个视频探讨了人工智能如何革命性地改变多个行业并塑造我们的未来：

**AI影响的关键领域：**

🏥 **医疗革命**
- AI诊断工具能更早、更准确地检测疾病
- 机器学习分析医学图像并预测患者结果
- 加速药物发现过程

🎓 **教育变革**
- 通过适应性平台提供个性化学习体验
- AI导师提供24/7支持
- 根据个人进度调整内容难度

🚗 **交通创新**
- 自动驾驶汽车减少事故并提高效率
- 智能交通管理系统
- 更可持续的城市环境

**结论：** AI代表了将定义下个世纪的范式转变。`,
      'ar': `يستكشف هذا الفيديو كيف يحدث الذكاء الاصطناعي ثورة في صناعات متعددة ويشكل مستقبلنا:

**المجالات الرئيسية لتأثير الذكاء الاصطناعي:**

🏥 **ثورة الرعاية الصحية**
- أدوات التشخيص بالذكاء الاصطناعي تكتشف الأمراض مبكراً وبدقة أكبر
- التعلم الآلي يحلل الصور الطبية ويتنبأ بنتائج المرضى
- عمليات اكتشاف الأدوية المتسارعة

🎓 **التحول التعليمي**
- تجارب تعلم مخصصة من خلال منصات تكيفية
- مدرسون بالذكاء الاصطناعي يقدمون الدعم على مدار الساعة
- صعوبة المحتوى تتكيف حسب التقدم الفردي

🚗 **ابتكار النقل**
- المركبات ذاتية القيادة تقلل الحوادث وتحسن الكفاءة
- أنظمة إدارة المرور الذكية
- بيئات حضرية أكثر استدامة

**الخلاصة:** يمثل الذكاء الاصطناعي تحولاً جذرياً سيحدد القرن القادم.`,
      'hi': `यह वीडियो खोजता है कि कैसे कृत्रिम बुद्धिमत्ता कई उद्योगों में क्रांति ला रही है और हमारे भविष्य को आकार दे रही है:

**AI प्रभाव के मुख्य क्षेत्र:**

🏥 **स्वास्थ्य क्रांति**
- AI निदान उपकरण रोगों का पहले और अधिक सटीक रूप से पता लगाते हैं
- मशीन लर्निंग चिकित्सा छवियों का विश्लेषण करती है और रोगी परिणामों की भविष्यवाणी करती है
- त्वरित दवा खोज प्रक्रियाएं

🎓 **शैक्षिक रूपांतरण**
- अनुकूली प्लेटफार्मों के माध्यम से व्यक्तिगत शिक्षा अनुभव
- AI शिक्षक 24/7 सहायता प्रदान करते हैं
- व्यक्तिगत प्रगति के आधार पर सामग्री की कठिनाई समायोजित

🚗 **परिवहन नवाचार**
- स्वायत्त वाहन दुर्घटनाओं को कम करते हैं और दक्षता में सुधार करते हैं
- स्मार्ट ट्रैफिक प्रबंधन सिस्टम
- अधिक टिकाऊ शहरी वातावरण

**निष्कर्ष:** AI एक प्रतिमान बदलाव का प्रतिनिधित्व करता है जो अगली सदी को परिभाषित करेगा।`,
      'bn': `এই ভিডিওটি অনুসন্ধান করে যে কিভাবে কৃত্রিম বুদ্ধিমত্তা একাধিক শিল্পে বিপ্লব ঘটাচ্ছে এবং আমাদের ভবিষ্যত গঠন করছে:

**AI প্রভাবের মূল ক্ষেত্রসমূহ:**

🏥 **স্বাস্থ্যসেবা বিপ্লব**
- AI নির্ণয় সরঞ্জামগুলি রোগ আগে এবং আরও নির্ভুলভাবে সনাক্ত করে
- মেশিন লার্নিং চিকিৎসা চিত্র বিশ্লেষণ করে এবং রোগীর ফলাফল পূর্বাভাস দেয়
- ত্বরিত ওষুধ আবিষ্কার প্রক্রিয়া

🎓 **শিক্ষাগত রূপান্তর**
- অভিযোজনশীল প্ল্যাটফর্মের মাধ্যমে ব্যক্তিগতকৃত শেখার অভিজ্ঞতা
- AI শিক্ষকরা ২৪/৭ সহায়তা প্রদান করেন
- ব্যক্তিগত অগ্রগতির ভিত্তিতে বিষয়বস্তুর কঠিনতা সমন্বিত

🚗 **পরিবহন উদ্ভাবন**
- স্বায়ত্তশাসিত যানবাহন দুর্ঘটনা কমায় এবং দক্ষতা বৃদ্ধি করে
- স্মার্ট ট্রাফিক ব্যবস্থাপনা সিস্টেম
- আরও টেকসই শহুরে পরিবেশ

**উপসংহার:** AI একটি প্যারাডাইম পরিবর্তনের প্রতিনিধিত্ব করে যা আগামী শতাব্দীকে সংজ্ঞায়িত করবে।`
    };

    // Get the translated summary or fallback message
    const translatedText = mockTranslations[selectedLanguage] || 
      `Translation of the complete summary to ${languages.find(l => l.code === selectedLanguage)?.name} is not available in this demo. The full summary would be translated here in a real implementation.`;

    setResult(prev => prev ? {
      ...prev,
      translatedSummary: translatedText
    } : null);

    setIsTranslating(false);
    
    toast({
      title: "Translation Complete!",
      description: `Summary translated to ${languages.find(l => l.code === selectedLanguage)?.name}`,
    });
  };

  const generateMindMap = async () => {
    if (!result) return;

    setIsGeneratingMindMap(true);
    
    // Simulate mindmap generation
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const mockMindMapData = {
      name: "AI Transforming Technology",
      children: [
        {
          name: "Healthcare",
          children: [
            { name: "Diagnostic Tools", size: 100 },
            { name: "Medical Imaging", size: 80 },
            { name: "Drug Discovery", size: 90 }
          ]
        },
        {
          name: "Education",
          children: [
            { name: "Personalized Learning", size: 85 },
            { name: "AI Tutors", size: 75 },
            { name: "Adaptive Platforms", size: 70 }
          ]
        },
        {
          name: "Transportation",
          children: [
            { name: "Autonomous Vehicles", size: 95 },
            { name: "Smart Traffic", size: 80 },
            { name: "Sustainability", size: 85 }
          ]
        },
        {
          name: "Entertainment",
          children: [
            { name: "Content Creation", size: 75 },
            { name: "Recommendations", size: 80 },
            { name: "Immersive Experiences", size: 70 }
          ]
        }
      ]
    };

    setResult(prev => prev ? {
      ...prev,
      mindMapData: mockMindMapData
    } : null);

    setIsGeneratingMindMap(false);
    
    toast({
      title: "Mind Map Generated!",
      description: "Interactive mind map is ready to explore.",
    });
  };

  return (
    <div className="space-y-8">
      {/* URL Input Section */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Youtube className="h-6 w-6 text-red-500" />
            YouTube Video Analyzer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Input
              placeholder="Paste YouTube URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button 
              onClick={simulateAnalysis}
              disabled={isAnalyzing || !url}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Analyze Video
                </>
              )}
            </Button>
          </div>
          
          {isAnalyzing && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-white/80 text-center">
                Processing your video... {progress}%
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle className="h-6 w-6 text-green-400" />
                {result.title}
              </CardTitle>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {result.duration}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/10">
                <TabsTrigger value="summary" className="text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  Summary
                </TabsTrigger>
                <TabsTrigger value="transcript" className="text-white">
                  <Play className="h-4 w-4 mr-2" />
                  Transcript
                </TabsTrigger>
                <TabsTrigger value="translate" className="text-white">
                  <Globe className="h-4 w-4 mr-2" />
                  Translate
                </TabsTrigger>
                <TabsTrigger value="mindmap" className="text-white">
                  <Brain className="h-4 w-4 mr-2" />
                  Mind Map
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">AI-Generated Summary</h3>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <pre className="whitespace-pre-wrap text-white/90 leading-relaxed">
                      {result.summary}
                    </pre>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Summary
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="transcript" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Full Transcript</h3>
                  <Textarea
                    value={result.transcript}
                    readOnly
                    className="min-h-[400px] bg-white/5 border-white/10 text-white"
                  />
                </div>
              </TabsContent>

              <TabsContent value="translate" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Translation</h3>
                  <div className="flex gap-3">
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button 
                      onClick={translateSummary}
                      disabled={!selectedLanguage || isTranslating}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isTranslating ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Translating...
                        </>
                      ) : (
                        <>
                          <Globe className="h-4 w-4 mr-2" />
                          Translate
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {result.translatedSummary && (
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <pre className="whitespace-pre-wrap text-white/90 leading-relaxed">
                        {result.translatedSummary}
                      </pre>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="mindmap" className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Interactive Mind Map</h3>
                    {!result.mindMapData && (
                      <Button 
                        onClick={generateMindMap}
                        disabled={isGeneratingMindMap}
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                      >
                        {isGeneratingMindMap ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Brain className="h-4 w-4 mr-2" />
                            Generate Mind Map
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                  
                  {result.mindMapData ? (
                    <MindMapViewer data={result.mindMapData} />
                  ) : (
                    <div className="bg-white/5 rounded-lg p-12 border border-white/10 text-center">
                      <Brain className="h-16 w-16 text-white/40 mx-auto mb-4" />
                      <p className="text-white/60">Click "Generate Mind Map" to create an interactive visualization</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VideoAnalyzer;
