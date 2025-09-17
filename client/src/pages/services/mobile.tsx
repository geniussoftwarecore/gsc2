import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/lang";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { ServiceHero } from "@/components/services/mobile/ServiceHero";
import { FeatureGrid } from "@/components/services/mobile/FeatureGrid";
import { UseCases } from "@/components/services/mobile/UseCases";
import { Integrations } from "@/components/services/mobile/Integrations";
import { TechStack } from "@/components/services/mobile/TechStack";
import { ProcessTimeline } from "@/components/services/mobile/ProcessTimeline";
import { Deliverables } from "@/components/services/mobile/Deliverables";
import { GettingStarted } from "@/components/services/mobile/GettingStarted";
import { StickyCTA } from "@/components/services/mobile/StickyCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Smartphone, Eye, ArrowRight, Star, CheckCircle, Globe, Heart, Users, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileServiceData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  features: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
  };
  useCases: {
    title: string;
    items: string[];
  };
  integrations: {
    title: string;
    items: string[];
  };
  tech: {
    title: string;
    stack: string[];
  };
  process: {
    title: string;
    steps: string[];
  };
  deliverables: {
    title: string;
    items: string[];
  };
  gettingStarted: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    desc: string;
    primary: string;
    secondary: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export default function MobileDetail() {
  const { lang, dir } = useLanguage();
  const [, setLocation] = useLocation();
  const [mobileData, setMobileData] = useState<MobileServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAppCategory, setSelectedAppCategory] = useState("all");
  const [selectedAppForDetails, setSelectedAppForDetails] = useState<any>(null);
  const [showAppDetailsModal, setShowAppDetailsModal] = useState(false);

  // Mobile Apps Data
  const getMobileApps = () => [
    // System Optimization Apps
    {
      name: "مُحسن نظام الأندرويد",
      description: "تطبيق متقدم لتحسين أداء نظام الأندرويد وحل المشاكل الشائعة",
      features: ["تنظيف ذاكرة التخزين المؤقت", "إدارة الذاكرة الذكية", "تسريع الجهاز", "إصلاح أخطاء النظام", "توفير البطارية"],
      category: "system"
    },
    {
      name: "Android System Optimizer",
      description: "Advanced app for optimizing Android system performance and fixing common issues",
      features: ["Cache Cleaner", "Smart Memory Management", "Device Speed Booster", "System Error Fixes", "Battery Saver"],
      category: "system"
    },
    {
      name: "مُصلح مشاكل iOS",
      description: "أداة شاملة لحل مشاكل نظام iOS وتحسين الأداء",
      features: ["إصلاح تجمد الشاشة", "حل مشاكل التطبيقات", "تحسين سرعة النظام", "إدارة التخزين", "إصلاح أخطاء التحديث"],
      category: "system"
    },
    {
      name: "iOS Problem Solver",
      description: "Comprehensive tool for solving iOS system issues and improving performance",
      features: ["Screen Freeze Fix", "App Crash Solutions", "System Speed Enhancement", "Storage Management", "Update Error Fixes"],
      category: "system"
    },
    {
      name: "منظف الهاتف الذكي",
      description: "تطبيق قوي لتنظيف وتحسين هواتف الأندرويد والايفون",
      features: ["إزالة الملفات المؤقتة", "تنظيف الصور المكررة", "إدارة التطبيقات غير المستخدمة", "تحسين الذاكرة", "حماية الخصوصية"],
      category: "system"
    },
    {
      name: "Smart Phone Cleaner",
      description: "Powerful app for cleaning and optimizing Android and iPhone devices",
      features: ["Temp Files Removal", "Duplicate Photos Cleaner", "Unused Apps Manager", "Memory Optimization", "Privacy Protection"],
      category: "system"
    },
    {
      name: "حارس البطارية الذكي",
      description: "تطبيق متطور لإدارة البطارية وتوفير الطاقة في الهواتف الذكية",
      features: ["مراقبة استهلاك البطارية", "أوضاع الطاقة الذكية", "تحليل التطبيقات المستهلكة", "جدولة الشحن", "تنبيهات البطارية"],
      category: "system"
    },
    {
      name: "Smart Battery Guard",
      description: "Advanced app for battery management and power saving in smartphones",
      features: ["Battery Usage Monitor", "Smart Power Modes", "Power-Hungry Apps Analysis", "Charging Schedule", "Battery Alerts"],
      category: "system"
    },
    // Existing apps...
    {
      name: "تطبيق توصيل طعام",
      description: "منصة توصيل طعام متكاملة مع تتبع مباشر وتجربة استخدام استثنائية",
      features: ["قوائم طعام تفاعلية", "تخصيص الطلبات", "تتبع GPS للتوصيل", "طرق دفع متعددة", "تقييم المطاعم والسائقين"],
      category: "ecommerce"
    },
    {
      name: "Food Delivery", 
      description: "Food ordering and delivery platform with live tracking and exceptional user experience",
      features: ["Interactive Food Menus", "Order Customization", "GPS Delivery Tracking", "Multiple Payment Methods", "Restaurant & Driver Rating"],
      category: "ecommerce"
    },
    {
      name: "المحاسبة الشخصية",
      description: "تطبيق ذكي لإدارة الأموال والمصروفات الشخصية مع تحليل مالي متقدم",
      features: ["تتبع المصروفات التلقائي", "إنشاء ميزانيات ذكية", "تصنيف المعاملات", "تقارير مالية مفصلة", "تنبيهات الميزانية"],
      category: "finance"
    },
    {
      name: "Personal Finance",
      description: "Smart personal money and expense management app with advanced financial analytics", 
      features: ["Automatic Expense Tracking", "Smart Budget Creation", "Transaction Categorization", "Detailed Financial Reports", "Budget Alerts"],
      category: "finance"
    },
    {
      name: "متابعة صحية",
      description: "تطبيق ذكي لمراقبة الصحة اليومية وتتبع العادات الصحية",
      features: ["تتبع الأعراض اليومية", "تذكير بالأدوية", "مراقبة العلامات الحيوية", "يوميات صحية", "تقارير طبية"],
      category: "healthcare"
    },
    {
      name: "Health Monitoring",
      description: "Smart app for daily health monitoring and tracking healthy habits",
      features: ["Daily Symptom Tracking", "Medication Reminders", "Vital Signs Monitoring", "Health Diary", "Medical Reports"],
      category: "healthcare"
    },
    {
      name: "Social Media Manager",
      description: "Comprehensive platform for managing social media accounts with advanced analytics tools",
      features: ["Multi-Account Management", "Post Scheduling", "Performance Analytics", "Comment Management", "Detailed Reports"],
      category: "marketing"
    },
    {
      name: "حملات إعلانية",
      description: "تطبيق شامل لإدارة وتشغيل الحملات الإعلانية الرقمية بكفاءة عالية",
      features: ["إنشاء حملات متعددة المنصات", "استهداف الجمهور الذكي", "تحليل الأداء المتقدم", "إدارة الميزانيات", "تقارير مفصلة في الوقت الفعلي"],
      category: "marketing"
    }
  ];

  const getDetailedAppInfo = (appName: string) => {
    const appDetails = {
      // System Optimization Apps Details
      "مُحسن نظام الأندرويد": {
        name: "مُحسن نظام الأندرويد",
        description: "تطبيق متقدم لتحسين أداء نظام الأندرويد وحل المشاكل الشائعة",
        fullDescription: "تطبيق شامل ومتطور مصمم خصيصاً لتحسين أداء أجهزة الأندرويد وحل المشاكل الشائعة التي تواجه المستخدمين. يستخدم خوارزميات ذكية لتحليل النظام وتنظيفه وتسريعه بشكل آمن وفعال.",
        keyFeatures: ["تنظيف ذاكرة التخزين المؤقت", "إدارة الذاكرة الذكية", "تسريع الجهاز", "إصلاح أخطاء النظام", "توفير البطارية", "مراقبة الأداء في الوقت الفعلي", "إدارة التطبيقات المشغلة", "تنظيف الملفات غير المرغوبة"],
        technicalFeatures: ["تحليل عميق للنظام", "خوارزميات تنظيف متقدمة", "مراقبة الأداء المستمرة", "واجهة سهلة الاستخدام", "تقارير مفصلة", "نسخ احتياطية آمنة"],
        benefits: ["تحسين سرعة الجهاز بنسبة 40%", "توفير مساحة تخزين كبيرة", "إطالة عمر البطارية", "تقليل التجمد والإغلاق المفاجئ", "تجربة استخدام أكثر سلاسة", "حماية الخصوصية"],
        targetAudience: ["مستخدمي أجهزة الأندرويد", "المهتمين بأداء الجهاز", "المستخدمين الذين يواجهون بطء", "أصحاب الأجهزة القديمة", "المطورين"],
        timeline: "3-4 أسابيع",
        technologies: ["Android SDK", "Kotlin", "System APIs", "Background Services", "Material Design", "Performance Analytics"]
      },
      "Android System Optimizer": {
        name: "Android System Optimizer",
        description: "Advanced app for optimizing Android system performance and fixing common issues",
        fullDescription: "Comprehensive and advanced application designed specifically to improve Android device performance and solve common user problems. Uses smart algorithms to analyze, clean, and speed up the system safely and effectively.",
        keyFeatures: ["Cache Cleaner", "Smart Memory Management", "Device Speed Booster", "System Error Fixes", "Battery Saver", "Real-time Performance Monitoring", "Running Apps Manager", "Junk Files Cleanup"],
        technicalFeatures: ["Deep System Analysis", "Advanced Cleaning Algorithms", "Continuous Performance Monitoring", "User-friendly Interface", "Detailed Reports", "Safe Backups"],
        benefits: ["40% Device Speed Improvement", "Significant Storage Space Saving", "Extended Battery Life", "Reduced Freezing and Crashes", "Smoother User Experience", "Privacy Protection"],
        targetAudience: ["Android Device Users", "Performance Enthusiasts", "Users Experiencing Slowdowns", "Older Device Owners", "Developers"],
        timeline: "3-4 weeks",
        technologies: ["Android SDK", "Kotlin", "System APIs", "Background Services", "Material Design", "Performance Analytics"]
      },
      "مُصلح مشاكل iOS": {
        name: "مُصلح مشاكل iOS",
        description: "أداة شاملة لحل مشاكل نظام iOS وتحسين الأداء",
        fullDescription: "أداة متخصصة ومتطورة لحل مشاكل أجهزة الايفون والايباد التي تعمل بنظام iOS. يركز التطبيق على إصلاح المشاكل الشائعة مثل التجمد، بطء الاستجابة، ومشاكل التطبيقات، مع توفير حلول آمنة وفعالة.",
        keyFeatures: ["إصلاح تجمد الشاشة", "حل مشاكل التطبيقات", "تحسين سرعة النظام", "إدارة التخزين", "إصلاح أخطاء التحديث", "تحسين أداء البطارية", "إصلاح مشاكل الاتصال", "استعادة البيانات المفقودة"],
        technicalFeatures: ["تشخيص تلقائي للمشاكل", "إصلاحات آمنة ومعتمدة", "واجهة بسيطة وسهلة", "تقارير تفصيلية", "نسخ احتياطية تلقائية", "دعم جميع إصدارات iOS"],
        benefits: ["حل سريع للمشاكل الشائعة", "تحسين الأداء العام", "توفير الوقت والجهد", "حماية البيانات", "عدم الحاجة لخبرة تقنية", "دعم فني متميز"],
        targetAudience: ["مستخدمي أجهزة iOS", "من يواجهون مشاكل تقنية", "المستخدمين غير التقنيين", "أصحاب الأجهزة القديمة", "الشركات"],
        timeline: "4-5 أسابيع",
        technologies: ["iOS SDK", "Swift", "Core Foundation", "System Diagnostics", "iCloud Integration", "Apple Guidelines"]
      },
      "iOS Problem Solver": {
        name: "iOS Problem Solver",
        description: "Comprehensive tool for solving iOS system issues and improving performance",
        fullDescription: "Specialized and advanced tool for solving iPhone and iPad problems running iOS. The app focuses on fixing common issues like freezing, slow response, and app problems, providing safe and effective solutions.",
        keyFeatures: ["Screen Freeze Fix", "App Crash Solutions", "System Speed Enhancement", "Storage Management", "Update Error Fixes", "Battery Performance Improvement", "Connection Issues Fix", "Lost Data Recovery"],
        technicalFeatures: ["Automatic Problem Diagnosis", "Safe and Approved Fixes", "Simple and Easy Interface", "Detailed Reports", "Automatic Backups", "Support for All iOS Versions"],
        benefits: ["Quick Solutions for Common Problems", "Overall Performance Improvement", "Time and Effort Saving", "Data Protection", "No Technical Expertise Required", "Excellent Technical Support"],
        targetAudience: ["iOS Device Users", "Those Facing Technical Issues", "Non-technical Users", "Older Device Owners", "Businesses"],
        timeline: "4-5 weeks",
        technologies: ["iOS SDK", "Swift", "Core Foundation", "System Diagnostics", "iCloud Integration", "Apple Guidelines"]
      },
      "منظف الهاتف الذكي": {
        name: "منظف الهاتف الذكي",
        description: "تطبيق قوي لتنظيف وتحسين هواتف الأندرويد والايفون",
        fullDescription: "تطبيق شامل ومتطور للتنظيف العميق والتحسين الذكي للهواتف الذكية. يعمل مع أنظمة الأندرويد و iOS لإزالة الملفات غير الضرورية، تحسين الأداء، وحماية الخصوصية بطريقة آمنة وفعالة.",
        keyFeatures: ["إزالة الملفات المؤقتة", "تنظيف الصور المكررة", "إدارة التطبيقات غير المستخدمة", "تحسين الذاكرة", "حماية الخصوصية", "تنظيف WhatsApp", "إدارة التنزيلات", "ضغط الفيديوهات"],
        technicalFeatures: ["تحليل ذكي للملفات", "خوارزميات تنظيف متقدمة", "فحص أمني شامل", "واجهة تفاعلية", "تشفير البيانات", "استعادة آمنة"],
        benefits: ["توفير مساحة تخزين كبيرة", "تحسين سرعة الجهاز", "حماية البيانات الشخصية", "إطالة عمر الجهاز", "تجربة استخدام محسنة", "راحة البال"],
        targetAudience: ["جميع مستخدمي الهواتف الذكية", "من يعانون من نقص المساحة", "المهتمين بالخصوصية", "المستخدمين العاديين", "المحترفين"],
        timeline: "3-4 أسابيع",
        technologies: ["Cross-platform Framework", "File System APIs", "Security Protocols", "Image Processing", "Cloud Integration", "Machine Learning"]
      },
      "Smart Phone Cleaner": {
        name: "Smart Phone Cleaner",
        description: "Powerful app for cleaning and optimizing Android and iPhone devices",
        fullDescription: "Comprehensive and advanced application for deep cleaning and smart optimization of smartphones. Works with Android and iOS systems to remove unnecessary files, improve performance, and protect privacy safely and effectively.",
        keyFeatures: ["Temp Files Removal", "Duplicate Photos Cleaner", "Unused Apps Manager", "Memory Optimization", "Privacy Protection", "WhatsApp Cleaner", "Downloads Manager", "Video Compression"],
        technicalFeatures: ["Smart File Analysis", "Advanced Cleaning Algorithms", "Comprehensive Security Scan", "Interactive Interface", "Data Encryption", "Safe Recovery"],
        benefits: ["Significant Storage Space Saving", "Device Speed Improvement", "Personal Data Protection", "Extended Device Life", "Enhanced User Experience", "Peace of Mind"],
        targetAudience: ["All Smartphone Users", "Those Suffering from Low Storage", "Privacy-conscious Users", "Regular Users", "Professionals"],
        timeline: "3-4 weeks",
        technologies: ["Cross-platform Framework", "File System APIs", "Security Protocols", "Image Processing", "Cloud Integration", "Machine Learning"]
      },
      "حارس البطارية الذكي": {
        name: "حارس البطارية الذكي",
        description: "تطبيق متطور لإدارة البطارية وتوفير الطاقة في الهواتف الذكية",
        fullDescription: "تطبيق ذكي ومتقدم لإدارة وتحسين أداء البطارية في الهواتف الذكية. يستخدم تقنيات الذكاء الاصطناعي لتحليل عادات الاستخدام وتقديم حلول مخصصة لإطالة عمر البطارية وتحسين الأداء.",
        keyFeatures: ["مراقبة استهلاك البطارية", "أوضاع الطاقة الذكية", "تحليل التطبيقات المستهلكة", "جدولة الشحن", "تنبيهات البطارية", "توقع عمر البطارية", "تحسين الشحن", "إحصائيات مفصلة"],
        technicalFeatures: ["تحليل AI للاستهلاك", "خوارزميات توفير الطاقة", "مراقبة في الوقت الفعلي", "تعلم أنماط الاستخدام", "تحسينات تلقائية", "تقارير تفصيلية"],
        benefits: ["إطالة عمر البطارية بنسبة 30%", "تحسين صحة البطارية", "توقعات دقيقة للشحن", "توفير في استهلاك الطاقة", "عمر أطول للجهاز", "راحة البال"],
        targetAudience: ["مستخدمي الهواتف الذكية", "المستخدمين الكثيفين", "المسافرين", "أصحاب الأجهزة القديمة", "المهتمين بالتكنولوجيا"],
        timeline: "4-5 أسابيع",
        technologies: ["AI/ML Algorithms", "Battery APIs", "System Monitoring", "Predictive Analytics", "Power Management", "Data Visualization"]
      },
      "Smart Battery Guard": {
        name: "Smart Battery Guard",
        description: "Advanced app for battery management and power saving in smartphones",
        fullDescription: "Smart and advanced application for managing and optimizing battery performance in smartphones. Uses artificial intelligence technologies to analyze usage habits and provide customized solutions to extend battery life and improve performance.",
        keyFeatures: ["Battery Usage Monitor", "Smart Power Modes", "Power-Hungry Apps Analysis", "Charging Schedule", "Battery Alerts", "Battery Life Prediction", "Charging Optimization", "Detailed Statistics"],
        technicalFeatures: ["AI Consumption Analysis", "Power Saving Algorithms", "Real-time Monitoring", "Usage Pattern Learning", "Automatic Optimizations", "Detailed Reports"],
        benefits: ["30% Battery Life Extension", "Improved Battery Health", "Accurate Charging Predictions", "Power Consumption Savings", "Longer Device Lifespan", "Peace of Mind"],
        targetAudience: ["Smartphone Users", "Heavy Users", "Travelers", "Older Device Owners", "Technology Enthusiasts"],
        timeline: "4-5 weeks",
        technologies: ["AI/ML Algorithms", "Battery APIs", "System Monitoring", "Predictive Analytics", "Power Management", "Data Visualization"]
      },
      "تطبيق توصيل طعام": {
        name: "تطبيق توصيل طعام",
        description: "منصة توصيل طعام متكاملة مع تتبع مباشر وتجربة استخدام استثنائية",
        fullDescription: "تطبيق توصيل طعام متطور يربط بين العملاء والمطاعم والسائقين. يوفر تجربة طلب سلسة مع تتبع الطلبات في الوقت الفعلي وخيارات دفع متنوعة ونظام تقييم شامل. مصمم لتبسيط عملية طلب الطعام وتحسين خدمة التوصيل.",
        keyFeatures: ["قوائم طعام تفاعلية", "تخصيص الطلبات", "تتبع GPS للتوصيل", "طرق دفع متعددة", "تقييم المطاعم والسائقين", "عروض وكوبونات", "تاريخ الطلبات", "إشعارات فورية"],
        technicalFeatures: ["خرائط Google المتقدمة", "معالجة مدفوعات آمنة", "إدارة الطلبات الذكية", "واجهات متعددة", "تحسين المسارات", "قاعدة بيانات مركزية"],
        benefits: ["سهولة طلب الطعام", "توصيل سريع ودقيق", "خيارات واسعة من المطاعم", "توفير الوقت والجهد", "أسعار تنافسية", "خدمة عملاء ممتازة"],
        targetAudience: ["محبي الطعام", "العائلات", "المهنيين المشغولين", "الطلاب", "كبار السن"],
        timeline: "7-9 أسابيع",
        technologies: ["React Native", "Google Maps", "Socket.io", "Payment Gateway", "Firebase", "GPS Tracking"]
      },
      "Food Delivery": {
        name: "Food Delivery",
        description: "Food ordering and delivery platform with live tracking and exceptional user experience",
        fullDescription: "Advanced food delivery app that connects customers, restaurants, and drivers. Provides seamless ordering experience with real-time order tracking, diverse payment options, and comprehensive rating system. Designed to simplify food ordering process and improve delivery service.",
        keyFeatures: ["Interactive Food Menus", "Order Customization", "GPS Delivery Tracking", "Multiple Payment Methods", "Restaurant & Driver Rating", "Offers & Coupons", "Order History", "Instant Notifications"],
        technicalFeatures: ["Advanced Google Maps", "Secure Payment Processing", "Smart Order Management", "Multi-platform Interface", "Route Optimization", "Centralized Database"],
        benefits: ["Easy Food Ordering", "Fast & Accurate Delivery", "Wide Restaurant Options", "Time & Effort Saving", "Competitive Prices", "Excellent Customer Service"],
        targetAudience: ["Food Lovers", "Families", "Busy Professionals", "Students", "Seniors"],
        timeline: "7-9 weeks",
        technologies: ["React Native", "Google Maps", "Socket.io", "Payment Gateway", "Firebase", "GPS Tracking"]
      },
      "المحاسبة الشخصية": {
        name: "المحاسبة الشخصية",
        description: "تطبيق ذكي لإدارة الأموال والمصروفات الشخصية مع تحليل مالي متقدم",
        fullDescription: "تطبيق محاسبة شخصية متطور يساعد المستخدمين على إدارة أموالهم بذكاء. يتضمن تتبع المصروفات، وضع الميزانيات، وتحليل العادات المالية. يوفر رؤى مالية قيمة ويساعد على تحقيق الأهداف المالية الشخصية.",
        keyFeatures: ["تتبع المصروفات التلقائي", "إنشاء ميزانيات ذكية", "تصنيف المعاملات", "تقارير مالية مفصلة", "تنبيهات الميزانية", "أهداف الادخار", "تحليل الاتجاهات المالية", "إدارة الديون"],
        technicalFeatures: ["مزامنة البنوك", "تشفير البيانات المالية", "واجهة سهلة الاستخدام", "تحليلات ذكية", "نسخ احتياطية آمنة", "تصدير التقارير"],
        benefits: ["تحسين الإدارة المالية", "توفير المال", "تحقيق الأهداف المالية", "فهم أفضل للعادات المالية", "تقليل الديون", "زيادة الادخار"],
        targetAudience: ["الأفراد", "العائلات", "الطلاب", "المهنيين الشباب", "أي شخص يريد إدارة أمواله"],
        timeline: "4-5 أسابيع",
        technologies: ["React Native", "Plaid API", "Chart.js", "SQLite", "Bank Integration", "Encryption"]
      },
      "Personal Finance": {
        name: "Personal Finance",
        description: "Smart personal money and expense management app with advanced financial analytics",
        fullDescription: "Advanced personal finance app that helps users manage their money intelligently. Includes expense tracking, budget creation, and financial habit analysis. Provides valuable financial insights and helps achieve personal financial goals.",
        keyFeatures: ["Automatic Expense Tracking", "Smart Budget Creation", "Transaction Categorization", "Detailed Financial Reports", "Budget Alerts", "Savings Goals", "Financial Trend Analysis", "Debt Management"],
        technicalFeatures: ["Bank Synchronization", "Financial Data Encryption", "User-friendly Interface", "Smart Analytics", "Secure Backups", "Report Export"],
        benefits: ["Better Financial Management", "Money Saving", "Achieving Financial Goals", "Better Understanding of Financial Habits", "Debt Reduction", "Increased Savings"],
        targetAudience: ["Individuals", "Families", "Students", "Young Professionals", "Anyone wanting to manage money"],
        timeline: "4-5 weeks",
        technologies: ["React Native", "Plaid API", "Chart.js", "SQLite", "Bank Integration", "Encryption"]
      }
    };
    
    return appDetails[appName as keyof typeof appDetails];
  };

  const getAppCategories = () => [
    { id: "all", name: dir === 'rtl' ? "جميع التطبيقات" : "All Apps" },
    { id: "system", name: dir === 'rtl' ? "تحسين الأنظمة" : "System Optimization" },
    { id: "ecommerce", name: dir === 'rtl' ? "التجارة الإلكترونية" : "E-commerce" },
    { id: "finance", name: dir === 'rtl' ? "المالية" : "Finance" },
    { id: "healthcare", name: dir === 'rtl' ? "الصحة" : "Healthcare" },
    { id: "marketing", name: dir === 'rtl' ? "التسويق" : "Marketing" }
  ];

  const getFilteredApps = () => {
    const apps = getMobileApps();
    if (selectedAppCategory === "all") return apps;
    return apps.filter(app => app.category === selectedAppCategory);
  };

  useEffect(() => {
    const loadMobileServiceData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/locales/${lang}/services.mobile.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to load mobile service data: ${response.status}`);
        }
        
        const data = await response.json();
        setMobileData(data);
      } catch (err) {
        console.error('Failed to load mobile service data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMobileServiceData();
  }, [lang]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-lg font-medium text-gray-600">
            {lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}
          </span>
        </div>
      </div>
    );
  }

  if (!mobileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {lang === 'ar' ? 'خطأ في تحميل البيانات' : 'Failed to load service data'}
          </h1>
          <p className="text-gray-600">
            {lang === 'ar' ? 'تعذر تحميل بيانات خدمة تطبيقات الموبايل' : 'Could not load mobile app service data'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={mobileData.seo.title}
        description={mobileData.seo.description}
      />
      
      <main className="bg-white">
        {/* Hero Section */}
        <ServiceHero
          title={mobileData.hero.title}
          subtitle={mobileData.hero.subtitle}
          description={mobileData.hero.description}
          primaryCta={mobileData.hero.primaryCta}
          secondaryCta={mobileData.hero.secondaryCta}
        />

        {/* Features Grid */}
        <FeatureGrid
          title={mobileData.features.title}
          features={mobileData.features.items}
        />

        {/* Use Cases */}
        <UseCases
          title={mobileData.useCases.title}
          items={mobileData.useCases.items}
        />

        {/* Integrations */}
        <Integrations
          title={mobileData.integrations.title}
          items={mobileData.integrations.items}
        />

        {/* Tech Stack */}
        <TechStack
          title={mobileData.tech.title}
          stack={mobileData.tech.stack}
        />

        {/* Process Timeline */}
        <ProcessTimeline
          title={mobileData.process.title}
          steps={mobileData.process.steps}
        />

        {/* Deliverables */}
        <Deliverables
          title={mobileData.deliverables.title}
          items={mobileData.deliverables.items}
        />

        {/* Getting Started */}
        <GettingStarted
          title={mobileData.gettingStarted.title}
          items={mobileData.gettingStarted.items}
        />

        {/* Mobile Apps Examples Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-6">
                  {dir === 'rtl' ? 'أمثلة من التطبيقات المطورة' : 'Mobile App Examples'}
                </h2>
                <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
                  {dir === 'rtl' 
                    ? 'تصفح مجموعة متنوعة من التطبيقات المحمولة التي يمكننا تطويرها لك، كل تطبيق مصمم بعناية ليلبي احتياجاتك الخاصة'
                    : 'Browse a variety of mobile applications we can develop for you, each app carefully designed to meet your specific needs'
                  }
                </p>
              </motion.div>

              {/* Category Filters */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {getAppCategories().map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedAppCategory(category.id)}
                    variant={selectedAppCategory === category.id ? "default" : "outline"}
                    className={cn(
                      "rounded-xl px-6 py-3 font-medium transition-all duration-300",
                      selectedAppCategory === category.id
                        ? "bg-primary text-white shadow-lg"
                        : "hover:bg-primary/10 hover:border-primary"
                    )}
                    data-testid={`category-filter-${category.id}`}
                  >
                    {category.name}
                  </Button>
                ))}
              </motion.div>

              {/* Apps Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAppCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {getFilteredApps().map((app, index) => (
                    <motion.div
                      key={`${selectedAppCategory}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                        <CardHeader>
                          <CardTitle className="text-lg font-bold text-brand-text-primary flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-primary" />
                            {app.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-brand-text-muted mb-4 leading-relaxed">
                            {app.description}
                          </p>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-brand-text-primary text-sm mb-2">
                                {dir === 'rtl' ? 'الميزات الرئيسية:' : 'Key Features:'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {app.features.map((feature, featureIndex) => (
                                  <Badge 
                                    key={featureIndex} 
                                    variant="secondary" 
                                    className="text-xs"
                                  >
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2">
                              {/* View Details Button */}
                              <Button
                                onClick={() => {
                                  setSelectedAppForDetails(app);
                                  setShowAppDetailsModal(true);
                                }}
                                variant="outline"
                                className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                                size="sm"
                                aria-label={`View details for ${app.name}`}
                                data-testid={`view-details-app-${app.name.replace(/\s+/g, '-')}`}
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                <span className="font-medium">
                                  {dir === 'rtl' ? 'عرض التفاصيل' : 'View Details'}
                                </span>
                              </Button>
                              
                              {/* Apply Now Button */}
                              <Button
                                onClick={() => {
                                  // Navigate to contact page with app name pre-selected
                                  setLocation(`/contact?service=${encodeURIComponent(app.name)}`);
                                }}
                                className="flex-1 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                                size="sm"
                                aria-label={`Apply for ${app.name}`}
                                data-testid={`apply-app-${app.name.replace(/\s+/g, '-')}`}
                              >
                                <span className="font-medium">
                                  {dir === 'rtl' ? 'اطلب الآن' : 'Apply Now'}
                                </span>
                                <ArrowRight 
                                  className={cn(
                                    "w-4 h-4 ml-2 transition-transform duration-200",
                                    dir === 'rtl' && "rotate-180 ml-0 mr-2"
                                  )} 
                                />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Call to Action for Custom App */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-primary/10 to-brand-sky-accent/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-brand-text-primary mb-4">
                    {dir === 'rtl' ? 'لديك فكرة تطبيق مختلفة؟' : 'Have a Different App Idea?'}
                  </h3>
                  <p className="text-brand-text-muted mb-6 max-w-2xl mx-auto">
                    {dir === 'rtl' 
                      ? 'نطور تطبيقات الهواتف المحمولة المخصصة حسب احتياجاتك الخاصة - أخبرنا عن فكرتك وسنحولها إلى تطبيق احترافي' 
                      : 'We develop custom mobile applications based on your specific needs - tell us your idea and we\'ll turn it into professional mobile app'
                    }
                  </p>
                  <Button 
                    onClick={() => setLocation('/contact')}
                    size="lg" 
                    className="rounded-xl px-8 py-3"
                  >
                    {dir === 'rtl' ? 'ناقش فكرتك معنا' : 'Discuss Your Idea'}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-brand-sky-base text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {mobileData.cta.title}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {mobileData.cta.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div>
                  <button
                    onClick={() => window.location.href = '/contact?service=mobile-apps'}
                    className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    data-testid="final-cta-primary"
                  >
                    {mobileData.cta.primary}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => window.location.href = '/contact?service=mobile-apps&type=consultation'}
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-2xl transition-all duration-300 font-medium"
                    data-testid="final-cta-secondary"
                  >
                    {mobileData.cta.secondary}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <StickyCTA
          title={mobileData.cta.title}
          description={mobileData.cta.desc}
          primaryLabel={mobileData.cta.primary}
          secondaryLabel={mobileData.cta.secondary}
        />

        {/* App Details Modal */}
        {selectedAppForDetails && (
          <Dialog open={showAppDetailsModal} onOpenChange={setShowAppDetailsModal}>
            <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto 
              sm:max-h-[90vh] sm:m-4 m-2 
              w-[calc(100vw-16px)] sm:w-auto
              p-4 sm:p-6 
              rounded-xl sm:rounded-2xl
              scroll-smooth">
              <DialogHeader className="pb-4">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-brand-text-primary flex items-start sm:items-center gap-3 leading-tight">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 sm:mt-0 flex-shrink-0" />
                  <span className="break-words">{selectedAppForDetails.name}</span>
                </DialogTitle>
              </DialogHeader>
              
              {(() => {
                const appDetails = getDetailedAppInfo(selectedAppForDetails.name);
                if (!appDetails) {
                  // Show fallback content when detailed app info is not available
                  return (
                    <div className="space-y-6 py-4">
                      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-3">
                          {dir === 'rtl' ? 'نظرة عامة' : 'Overview'}
                        </h3>
                        <p className="text-brand-text-muted leading-relaxed">
                          {selectedAppForDetails.description}
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 w-full sm:max-w-md">
                        <h4 className="font-bold text-green-800 mb-2">
                          {dir === 'rtl' ? 'مدة التطوير' : 'Development Timeline'}
                        </h4>
                        <p className="text-green-700 text-lg font-semibold">
                          {dir === 'rtl' ? '4-6 أسابيع' : '4-6 weeks'}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-4 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary" />
                          {dir === 'rtl' ? 'المميزات الرئيسية' : 'Key Features'}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedAppForDetails.features?.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg touch-manipulation">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-brand-text-muted">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t mt-2">
                        <Button
                          onClick={() => {
                            setShowAppDetailsModal(false);
                            setLocation(`/contact?service=${encodeURIComponent(selectedAppForDetails.name)}`);
                          }}
                          className="flex-1 bg-primary hover:bg-primary-dark text-white rounded-xl py-4 sm:py-3 min-h-[48px] touch-manipulation"
                          size="lg"
                        >
                          <ArrowRight className={cn(
                            "w-5 h-5 mr-2",
                            dir === 'rtl' && "rotate-180 mr-0 ml-2"
                          )} />
                          {dir === 'rtl' ? 'اطلب هذا التطبيق الآن' : 'Request This App Now'}
                        </Button>
                        <Button
                          onClick={() => setShowAppDetailsModal(false)}
                          variant="outline"
                          className="flex-1 rounded-xl py-4 sm:py-3 min-h-[48px] border-2 touch-manipulation"
                          size="lg"
                        >
                          {dir === 'rtl' ? 'إغلاق' : 'Close'}
                        </Button>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
                    {/* Overview Section */}
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-3">
                        {dir === 'rtl' ? 'نظرة عامة' : 'Overview'}
                      </h3>
                      <p className="text-brand-text-muted leading-relaxed">
                        {appDetails.fullDescription}
                      </p>
                    </div>

                    {/* Timeline Only */}
                    <div className="bg-green-50 rounded-lg p-4 w-full sm:max-w-md">
                      <h4 className="font-bold text-green-800 mb-2">
                        {dir === 'rtl' ? 'مدة التطوير' : 'Development Timeline'}
                      </h4>
                      <p className="text-green-700 text-lg font-semibold">{appDetails.timeline}</p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        {dir === 'rtl' ? 'المميزات الرئيسية' : 'Key Features'}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {appDetails.keyFeatures.map((feature: string, index: number) => (
                          <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg touch-manipulation">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-brand-text-muted">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Features */}
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        {dir === 'rtl' ? 'المميزات التقنية' : 'Technical Features'}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {appDetails.technicalFeatures.map((feature: string, index: number) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-800">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" />
                        {dir === 'rtl' ? 'الفوائد والمزايا' : 'Benefits & Advantages'}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {appDetails.benefits.map((benefit: string, index: number) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-green-800">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        {dir === 'rtl' ? 'الفئة المستهدفة' : 'Target Audience'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {appDetails.targetAudience.map((audience: string, index: number) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1">
                            {audience}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary mb-4 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-primary" />
                        {dir === 'rtl' ? 'التقنيات المستخدمة' : 'Technologies Used'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {appDetails.technologies.map((tech: string, index: number) => (
                          <Badge key={index} variant="outline" className="px-3 py-1 border-primary text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t mt-2">
                      <Button
                        onClick={() => {
                          setShowAppDetailsModal(false);
                          setLocation(`/contact?service=${encodeURIComponent(selectedAppForDetails.name)}`);
                        }}
                        className="flex-1 bg-primary hover:bg-primary-dark text-white rounded-xl py-4 sm:py-3 min-h-[48px] touch-manipulation"
                        size="lg"
                      >
                        <ArrowRight className={cn(
                          "w-5 h-5 mr-2",
                          dir === 'rtl' && "rotate-180 mr-0 ml-2"
                        )} />
                        {dir === 'rtl' ? 'اطلب هذا التطبيق الآن' : 'Request This App Now'}
                      </Button>
                      <Button
                        onClick={() => setShowAppDetailsModal(false)}
                        variant="outline"
                        className="flex-1 rounded-xl py-4 sm:py-3 min-h-[48px] border-2 touch-manipulation"
                        size="lg"
                      >
                        {dir === 'rtl' ? 'إغلاق' : 'Close'}
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </DialogContent>
          </Dialog>
        )}
      </main>
    </>
  );
}