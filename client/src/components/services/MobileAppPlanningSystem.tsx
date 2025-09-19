import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/i18n/lang";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Smartphone,
  Shield,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Upload,
  FileText,
  ShoppingCart,
  GraduationCap,
  Heart,
  Users,
  Calendar,
  MapPin,
  Zap,
  Globe,
  Star,
  Play,
  Settings,
  Camera,
  MessageCircle,
  CreditCard,
  BarChart3,
  Lock,
  Bell,
  Share2,
  Palette,
  Code,
  Database,
  Cloud,
  Gamepad2,
  Music,
  Car,
  Home,
  Briefcase,
  Calculator,
  Send,
  Apple,
  Monitor,
  X
} from "lucide-react";
import { SiAndroid } from "react-icons/si";

interface AppPlanningStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface AppTypeOption {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  features: string[];
}

interface FeatureOption {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: 'core' | 'business' | 'advanced';
  required: boolean;
}

interface PlatformOption {
  id: 'ios' | 'android' | 'both';
  title: string;
  description: string;
  icon: any;
  recommended?: boolean;
}

interface ProjectDetails {
  appType: string;
  platforms: string[];
  features: string[];
  projectName: string;
  projectDescription: string;
  timeline: string;
  budget: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  additionalNotes: string;
  files: File[];
}

export default function MobileAppPlanningSystem() {
  const { dir } = useLanguage();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    appType: '',
    platforms: [],
    features: [],
    projectName: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    additionalNotes: '',
    files: []
  });

  const planningSteps: AppPlanningStep[] = [
    {
      id: 1,
      title: 'نوع التطبيق',
      description: 'حدد نوع وطبيعة التطبيق المطلوب',
      completed: !!projectDetails.appType
    },
    {
      id: 2,
      title: 'المنصات',
      description: 'اختر المنصات المستهدفة',
      completed: projectDetails.platforms.length > 0
    },
    {
      id: 3,
      title: 'الميزات',
      description: 'حدد الميزات والوظائف المطلوبة',
      completed: projectDetails.features.length > 0
    },
    {
      id: 4,
      title: 'تفاصيل المشروع',
      description: 'أدخل تفاصيل مشروعك',
      completed: !!(projectDetails.projectName && projectDetails.projectDescription)
    },
    {
      id: 5,
      title: 'الملفات والمراجع',
      description: 'ارفع الملفات والمراجع',
      completed: true // Always available
    },
    {
      id: 6,
      title: 'إرسال الطلب',
      description: 'مراجعة وإرسال طلب التطوير',
      completed: false
    }
  ];

  const appTypes: AppTypeOption[] = [
    {
      id: 'ecommerce',
      title: 'تطبيق تجاري',
      description: 'متاجر إلكترونية ومنصات بيع وشراء',
      icon: ShoppingCart,
      color: 'emerald',
      bgColor: 'bg-emerald-50 hover:bg-emerald-100',
      features: ['متجر إلكتروني', 'بوابات دفع', 'إدارة منتجات', 'تتبع شحنات']
    },
    {
      id: 'educational',
      title: 'تطبيق تعليمي',
      description: 'منصات تعلم ومناهج دراسية',
      icon: GraduationCap,
      color: 'blue',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      features: ['دورات تفاعلية', 'اختبارات', 'شهادات', 'تتبع التقدم']
    },
    {
      id: 'healthcare',
      title: 'تطبيق صحي',
      description: 'خدمات طبية واستشارات صحية',
      icon: Heart,
      color: 'red',
      bgColor: 'bg-red-50 hover:bg-red-100',
      features: ['حجز مواعيد', 'ملف طبي', 'استشارات', 'تذكير أدوية']
    },
    {
      id: 'social',
      title: 'تطبيق اجتماعي',
      description: 'شبكات اجتماعية ومنصات تواصل',
      icon: Users,
      color: 'purple',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      features: ['منشورات', 'محادثات', 'مجموعات', 'بث مباشر']
    },
    {
      id: 'booking',
      title: 'تطبيق حجوزات',
      description: 'حجز خدمات ومواعيد وأماكن',
      icon: Calendar,
      color: 'orange',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      features: ['جدولة مواعيد', 'دفع أونلاين', 'تذكيرات', 'تقييمات']
    },
    {
      id: 'delivery',
      title: 'تطبيق توصيل',
      description: 'خدمات توصيل وتتبع طلبات',
      icon: MapPin,
      color: 'green',
      bgColor: 'bg-green-50 hover:bg-green-100',
      features: ['تتبع GPS', 'إشعارات', 'دفع آمن', 'تقييم خدمة']
    },
    {
      id: 'entertainment',
      title: 'تطبيق ترفيهي',
      description: 'ألعاب ووسائط ترفيهية',
      icon: Gamepad2,
      color: 'pink',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      features: ['محتوى تفاعلي', 'ألعاب', 'فيديوهات', 'مشاركة اجتماعية']
    },
    {
      id: 'business',
      title: 'تطبيق أعمال',
      description: 'حلول إدارية ومؤسسية',
      icon: Briefcase,
      color: 'slate',
      bgColor: 'bg-slate-50 hover:bg-slate-100',
      features: ['إدارة مهام', 'تقارير', 'فرق عمل', 'تحليلات']
    }
  ];

  const platformOptions: PlatformOption[] = [
    {
      id: 'both',
      title: 'أندرويد و iOS',
      description: 'تطوير لكلا النظامين (موصى)',
      icon: Smartphone,
      recommended: true
    },
    {
      id: 'android',
      title: 'أندرويد فقط',
      description: 'نظام أندرويد (Google Play)',
      icon: SiAndroid
    },
    {
      id: 'ios',
      title: 'iOS فقط', 
      description: 'نظام آبل (App Store)',
      icon: Apple
    }
  ];

  const featureOptions: FeatureOption[] = [
    // Core Features
    {
      id: 'user-auth',
      title: 'نظام المستخدمين',
      description: 'تسجيل دخول وإنشاء حسابات',
      icon: Users,
      category: 'core',
      required: true
    },
    {
      id: 'push-notifications',
      title: 'الإشعارات الفورية',
      description: 'إرسال إشعارات للمستخدمين',
      icon: Bell,
      category: 'core',
      required: false
    },
    {
      id: 'offline-mode',
      title: 'العمل بدون إنترنت',
      description: 'وضعية عدم الاتصال',
      icon: Shield,
      category: 'core',
      required: false
    },
    
    // Business Features
    {
      id: 'payment-gateway',
      title: 'بوابات الدفع',
      description: 'دفع آمن عبر الإنترنت',
      icon: CreditCard,
      category: 'business',
      required: false
    },
    {
      id: 'analytics',
      title: 'التحليلات',
      description: 'تقارير وإحصائيات تفصيلية',
      icon: BarChart3,
      category: 'business',
      required: false
    },
    {
      id: 'social-sharing',
      title: 'مشاركة اجتماعية',
      description: 'مشاركة على وسائل التواصل',
      icon: Share2,
      category: 'business',
      required: false
    },
    {
      id: 'chat-system',
      title: 'نظام محادثة',
      description: 'دردشة مباشرة بين المستخدمين',
      icon: MessageCircle,
      category: 'business',
      required: false
    },
    
    // Advanced Features
    {
      id: 'ai-integration',
      title: 'الذكاء الاصطناعي',
      description: 'ميزات ذكية وتعلم آلي',
      icon: Zap,
      category: 'advanced',
      required: false
    },
    {
      id: 'gps-location',
      title: 'تحديد الموقع GPS',
      description: 'خدمات الموقع والخرائط',
      icon: MapPin,
      category: 'advanced',
      required: false
    },
    {
      id: 'camera-integration',
      title: 'تكامل الكاميرا',
      description: 'التقاط ومعالجة الصور',
      icon: Camera,
      category: 'advanced',
      required: false
    },
    {
      id: 'cloud-sync',
      title: 'مزامنة سحابية',
      description: 'نسخ احتياطي وتزامن البيانات',
      icon: Cloud,
      category: 'advanced',
      required: false
    }
  ];

  const handleStepChange = (step: number) => {
    if (step <= currentStep + 1) {
      setCurrentStep(step);
    }
  };

  const handleAppTypeSelect = (appTypeId: string) => {
    setProjectDetails(prev => ({ ...prev, appType: appTypeId }));
  };

  const handlePlatformSelect = (platform: string) => {
    setProjectDetails(prev => {
      const newPlatforms = prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform];
      return { ...prev, platforms: newPlatforms };
    });
  };

  const handleFeatureSelect = (featureId: string) => {
    setProjectDetails(prev => {
      const newFeatures = prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId];
      return { ...prev, features: newFeatures };
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setProjectDetails(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
      toast({
        title: "تم رفع الملفات",
        description: `تم رفع ${newFiles.length} ملف بنجاح`
      });
    }
  };

  const removeFile = (index: number) => {
    setProjectDetails(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitProject = async () => {
    try {
      // Here we would typically send the data to the API
      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سيتم التواصل معك خلال 24 ساعة لمناقشة التفاصيل"
      });
      
      // Reset form or redirect to success page
      console.log('Project submitted:', projectDetails);
      
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم يتم إرسال الطلب، حاول مرة أخرى",
        variant: "destructive"
      });
    }
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return !!projectDetails.appType;
      case 2:
        return projectDetails.platforms.length > 0;
      case 3:
        return projectDetails.features.length > 0;
      case 4:
        return !!(projectDetails.projectName && projectDetails.projectDescription && projectDetails.contactName && projectDetails.contactEmail);
      default:
        return true;
    }
  };

  const getProgressPercentage = () => {
    const updatedSteps = planningSteps.map((step, index) => ({
      ...step,
      completed: index + 1 === 1 ? !!projectDetails.appType :
                index + 1 === 2 ? projectDetails.platforms.length > 0 :
                index + 1 === 3 ? projectDetails.features.length > 0 :
                index + 1 === 4 ? !!(projectDetails.projectName && projectDetails.projectDescription && projectDetails.contactName && projectDetails.contactEmail) :
                index + 1 === 5 ? true :
                index + 1 === 6 ? false : false
    }));
    const completedSteps = updatedSteps.filter(step => step.completed).length;
    return (completedSteps / planningSteps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-sky-light/10 to-white py-12" dir={dir}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header with Progress */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div 
                className="p-3 bg-primary/10 rounded-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Smartphone className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div 
                className="p-3 bg-primary/10 rounded-2xl"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Apple className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              تطوير تطبيقات الموبايل
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              خطط مشروع تطبيقك بكل تفاصيله من خلال نظامنا التفاعلي المتطور
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">مرحلة التخطيط</span>
              <span className="text-sm font-medium text-primary">{Math.round(getProgressPercentage())}%</span>
            </div>
            <Progress value={getProgressPercentage()} className="h-2 mb-6" />
            
            {/* Step Indicators */}
            <div className="grid grid-cols-6 gap-2">
              {planningSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={cn(
                    "p-3 rounded-xl text-center cursor-pointer transition-all duration-300",
                    currentStep === step.id
                      ? "bg-primary text-white shadow-lg"
                      : step.completed
                      ? "bg-primary/10 text-primary"
                      : "bg-gray-100 text-gray-500"
                  )}
                  onClick={() => handleStepChange(step.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-xs font-medium mb-1">
                    {step.id === currentStep && <div className="w-2 h-2 bg-white rounded-full mx-auto mb-1" />}
                  </div>
                  <div className="text-xs font-medium">
                    {step.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            
            {/* Step 1: App Type Selection */}
            {currentStep === 1 && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    ما نوع التطبيق الذي تريد تطويره؟
                  </h2>
                  <p className="text-gray-600">
                    اختر النوع الذي يناسب فكرة مشروعك
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {appTypes.map((appType) => {
                    const IconComponent = appType.icon;
                    const isSelected = projectDetails.appType === appType.id;
                    
                    return (
                      <motion.div
                        key={appType.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card 
                          className={cn(
                            "cursor-pointer transition-all duration-300 border-2",
                            isSelected 
                              ? "border-primary shadow-lg ring-2 ring-primary/20" 
                              : "border-gray-200 hover:border-primary/50",
                            appType.bgColor
                          )}
                          onClick={() => handleAppTypeSelect(appType.id)}
                          data-testid={`option-apptype-${appType.id}`}
                        >
                          <CardHeader className="text-center pb-4">
                            <div className={cn(
                              "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300",
                              `bg-${appType.color}-100`,
                              isSelected && "scale-110"
                            )}>
                              <IconComponent className={`w-8 h-8 text-${appType.color}-600`} />
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-900">
                              {appType.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-gray-600 text-sm mb-4 text-center">
                              {appType.description}
                            </p>
                            <div className="space-y-2">
                              {appType.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-xs text-gray-700">
                                  <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Platform Selection */}
            {currentStep === 2 && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    اختر المنصات المستهدفة
                  </h2>
                  <p className="text-gray-600">
                    حدد أنظمة التشغيل التي تريد دعمها
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {platformOptions.map((platform) => {
                    const IconComponent = platform.icon;
                    const isSelected = projectDetails.platforms.includes(platform.id);
                    
                    return (
                      <motion.div
                        key={platform.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card 
                          className={cn(
                            "cursor-pointer transition-all duration-300 border-2 relative",
                            isSelected 
                              ? "border-primary shadow-lg ring-2 ring-primary/20 bg-primary/5" 
                              : "border-gray-200 hover:border-primary/50"
                          )}
                          onClick={() => handlePlatformSelect(platform.id)}
                          data-testid={`option-platform-${platform.id}`}
                        >
                          {platform.recommended && (
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                              موصى به
                            </Badge>
                          )}
                          <CardHeader className="text-center">
                            <div className={cn(
                              "w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300",
                              "bg-primary/10",
                              isSelected && "scale-110 bg-primary/20"
                            )}>
                              <IconComponent className="w-10 h-10 text-primary" />
                            </div>
                            <CardTitle className="text-xl font-bold text-gray-900">
                              {platform.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-center pt-0">
                            <p className="text-gray-600">
                              {platform.description}
                            </p>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="mt-4 flex justify-center"
                              >
                                <CheckCircle className="w-6 h-6 text-primary" />
                              </motion.div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Features Selection */}
            {currentStep === 3 && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    اختر ميزات التطبيق
                  </h2>
                  <p className="text-gray-600">
                    حدد الوظائف والميزات التي تريدها في تطبيقك
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Core Features */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-2" />
                      الميزات الأساسية
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {featureOptions.filter(f => f.category === 'core').map((feature) => {
                        const IconComponent = feature.icon;
                        const isSelected = projectDetails.features.includes(feature.id);
                        
                        return (
                          <motion.div
                            key={feature.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Card 
                              className={cn(
                                "cursor-pointer transition-all duration-300 border",
                                isSelected 
                                  ? "border-primary bg-primary/5" 
                                  : "border-gray-200 hover:border-primary/50",
                                feature.required && "border-orange-200 bg-orange-50"
                              )}
                              onClick={() => !feature.required && handleFeatureSelect(feature.id)}
                              data-testid={`option-feature-${feature.id}`}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                                    "bg-primary/10"
                                  )}>
                                    <IconComponent className="w-5 h-5 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="font-semibold text-gray-900 text-sm">
                                        {feature.title}
                                      </h4>
                                      {feature.required && <Badge variant="secondary" className="text-xs">مطلوبة</Badge>}
                                      {isSelected && <CheckCircle className="w-4 h-4 text-primary" />}
                                    </div>
                                    <p className="text-gray-600 text-xs">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Business Features */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 text-primary mr-2" />
                      الميزات التجارية
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {featureOptions.filter(f => f.category === 'business').map((feature) => {
                        const IconComponent = feature.icon;
                        const isSelected = projectDetails.features.includes(feature.id);
                        
                        return (
                          <motion.div
                            key={feature.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Card 
                              className={cn(
                                "cursor-pointer transition-all duration-300 border",
                                isSelected 
                                  ? "border-primary bg-primary/5" 
                                  : "border-gray-200 hover:border-primary/50"
                              )}
                              onClick={() => handleFeatureSelect(feature.id)}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                                    "bg-primary/10"
                                  )}>
                                    <IconComponent className="w-5 h-5 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="font-semibold text-gray-900 text-sm">
                                        {feature.title}
                                      </h4>
                                      {isSelected && <CheckCircle className="w-4 h-4 text-primary" />}
                                    </div>
                                    <p className="text-gray-600 text-xs">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Advanced Features */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-primary mr-2" />
                      الميزات المتقدمة
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {featureOptions.filter(f => f.category === 'advanced').map((feature) => {
                        const IconComponent = feature.icon;
                        const isSelected = projectDetails.features.includes(feature.id);
                        
                        return (
                          <motion.div
                            key={feature.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Card 
                              className={cn(
                                "cursor-pointer transition-all duration-300 border",
                                isSelected 
                                  ? "border-primary bg-primary/5" 
                                  : "border-gray-200 hover:border-primary/50"
                              )}
                              onClick={() => handleFeatureSelect(feature.id)}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                                    "bg-primary/10"
                                  )}>
                                    <IconComponent className="w-5 h-5 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="font-semibold text-gray-900 text-sm">
                                        {feature.title}
                                      </h4>
                                      {isSelected && <CheckCircle className="w-4 h-4 text-primary" />}
                                    </div>
                                    <p className="text-gray-600 text-xs">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Project Details */}
            {currentStep === 4 && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    تفاصيل المشروع
                  </h2>
                  <p className="text-gray-600">
                    أدخل معلومات مشروعك وبيانات التواصل
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Project Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <FileText className="w-5 h-5 text-primary mr-2" />
                      معلومات المشروع
                    </h3>
                    
                    <div>
                      <Label htmlFor="projectName">اسم المشروع *</Label>
                      <Input
                        id="projectName"
                        data-testid="input-project-name"
                        value={projectDetails.projectName}
                        onChange={(e) => setProjectDetails(prev => ({...prev, projectName: e.target.value}))}
                        placeholder="أدخل اسم مشروعك"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectDescription">وصف المشروع *</Label>
                      <Textarea
                        id="projectDescription"
                        data-testid="input-project-description"
                        value={projectDetails.projectDescription}
                        onChange={(e) => setProjectDetails(prev => ({...prev, projectDescription: e.target.value}))}
                        placeholder="اشرح فكرة مشروعك بالتفصيل..."
                        className="mt-2"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline">الإطار الزمني المطلوب</Label>
                      <Select onValueChange={(value) => setProjectDetails(prev => ({...prev, timeline: value}))}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="حدد الإطار الزمني" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">عاجل (أقل من شهر)</SelectItem>
                          <SelectItem value="1-2months">1-2 شهر</SelectItem>
                          <SelectItem value="2-4months">2-4 أشهر</SelectItem>
                          <SelectItem value="flexible">مرن</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget">الميزانية المتاحة</Label>
                      <Select onValueChange={(value) => setProjectDetails(prev => ({...prev, budget: value}))}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="حدد نطاق الميزانية" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5000-15000">5,000 - 15,000 ريال</SelectItem>
                          <SelectItem value="15000-30000">15,000 - 30,000 ريال</SelectItem>
                          <SelectItem value="30000-50000">30,000 - 50,000 ريال</SelectItem>
                          <SelectItem value="50000+">أكثر من 50,000 ريال</SelectItem>
                          <SelectItem value="custom">ميزانية مخصصة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <Users className="w-5 h-5 text-primary mr-2" />
                      بيانات التواصل
                    </h3>
                    
                    <div>
                      <Label htmlFor="contactName">اسم المسؤول *</Label>
                      <Input
                        id="contactName"
                        data-testid="input-contact-name"
                        value={projectDetails.contactName}
                        onChange={(e) => setProjectDetails(prev => ({...prev, contactName: e.target.value}))}
                        placeholder="الاسم الكامل"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactEmail">البريد الإلكتروني *</Label>
                      <Input
                        id="contactEmail"
                        data-testid="input-contact-email"
                        type="email"
                        value={projectDetails.contactEmail}
                        onChange={(e) => setProjectDetails(prev => ({...prev, contactEmail: e.target.value}))}
                        placeholder="example@email.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactPhone">رقم الجوال</Label>
                      <Input
                        id="contactPhone"
                        value={projectDetails.contactPhone}
                        onChange={(e) => setProjectDetails(prev => ({...prev, contactPhone: e.target.value}))}
                        placeholder="+966 50 123 4567"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalNotes">ملاحظات إضافية</Label>
                      <Textarea
                        id="additionalNotes"
                        value={projectDetails.additionalNotes}
                        onChange={(e) => setProjectDetails(prev => ({...prev, additionalNotes: e.target.value}))}
                        placeholder="أي معلومات إضافية مهمة..."
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Files Upload */}
            {currentStep === 5 && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    رفع الملفات والمراجع
                  </h2>
                  <p className="text-gray-600">
                    ارفع أي ملفات مرجعية تساعد في فهم مشروعك
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  {/* File Upload Area */}
                  <motion.div
                    className="border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => fileInputRef.current?.click()}
                    data-testid="button-upload-files"
                  >
                    <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      اسحب الملفات هنا أو انقر للتحديد
                    </h3>
                    <p className="text-gray-600 mb-4">
                      يمكنك رفع الصور، ملفات PDF، Word، أو أي مستندات مرجعية
                    </p>
                    <Button variant="outline" className="mt-4">
                      <Upload className="w-4 h-4 mr-2" />
                      اختيار الملفات
                    </Button>
                  </motion.div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {/* Uploaded Files List */}
                  {projectDetails.files.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        الملفات المرفوعة ({projectDetails.files.length})
                      </h3>
                      <div className="space-y-3">
                        {projectDetails.files.map((file, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{file.name}</p>
                              <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* File Upload Tips */}
                  <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-3">نصائح لرفع الملفات:</h4>
                    <ul className="text-blue-700 text-sm space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        صور توضيحية لتصميم التطبيق المطلوب
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        مستندات تحدد متطلبات العمل
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        أمثلة على تطبيقات مشابهة (screenshots)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        شعار الشركة أو الهوية البصرية
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Review and Submit */}
            {currentStep === 6 && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    مراجعة طلب المشروع
                  </h2>
                  <p className="text-gray-600">
                    تأكد من جميع التفاصيل قبل إرسال الطلب
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Project Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="w-5 h-5 text-primary mr-2" />
                        ملخص المشروع
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <span className="font-medium text-gray-700">نوع التطبيق:</span>
                        <span className="mr-2">
                          {appTypes.find(t => t.id === projectDetails.appType)?.title || 'غير محدد'}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">المنصات:</span>
                        <span className="mr-2">
                          {projectDetails.platforms.map(p => 
                            platformOptions.find(opt => opt.id === p)?.title
                          ).join(', ') || 'غير محدد'}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">عدد الميزات:</span>
                        <span className="mr-2">{projectDetails.features.length} ميزة</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">اسم المشروع:</span>
                        <span className="mr-2">{projectDetails.projectName || 'غير محدد'}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Features List */}
                  {projectDetails.features.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Star className="w-5 h-5 text-primary mr-2" />
                          الميزات المحددة
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-3">
                          {projectDetails.features.map(featureId => {
                            const feature = featureOptions.find(f => f.id === featureId);
                            const IconComponent = feature?.icon || CheckCircle;
                            return (
                              <div key={featureId} className="flex items-center gap-2">
                                <IconComponent className="w-4 h-4 text-primary" />
                                <span className="text-sm text-gray-700">{feature?.title}</span>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Files Summary */}
                  {projectDetails.files.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Upload className="w-5 h-5 text-primary mr-2" />
                          الملفات المرفقة
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-600">
                          تم رفع {projectDetails.files.length} ملف بنجاح
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Submit Button */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      size="lg"
                      onClick={handleSubmitProject}
                      className="px-12 py-4 text-lg"
                      data-testid="button-submit-project"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      إرسال طلب المشروع
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      سيتم التواصل معك خلال 24 ساعة لمناقشة التفاصيل
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Navigation Footer */}
            <div className="flex justify-between items-center p-6 border-t border-gray-100 bg-gray-50">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                data-testid="button-previous-step"
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                السابق
              </Button>

              <div className="text-sm text-gray-500">
                {currentStep} من {planningSteps.length}
              </div>

              {currentStep < 6 && (
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  data-testid="button-next-step"
                  disabled={!canProceedToNext()}
                  className="flex items-center"
                >
                  التالي
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}

              {currentStep === 6 && (
                <div className="w-20" /> // Spacer to balance layout
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}