import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, Smartphone, Shield, CheckCircle, Target, Palette, Globe, Plug, Store, Filter, Package, FileText, Settings, BookOpen, GraduationCap, BarChart3, Info, X, ChevronRight, Calendar, Code, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { toCanonicalKey } from "@/lib/services-normalize";
import React, { useMemo, useState, useEffect, lazy, Suspense, useCallback } from "react";
import ConsolidatedERPNextV15Section from "@/components/erpnext/ConsolidatedERPNextV15Section";
import MobileAppPlanningSystem from "@/components/services/MobileAppPlanningSystem";

// Service interface
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  featured: string;
  technologies: string[];
  deliveryTime: string;
  startingPrice?: number;
}

// Service Subcategory interface
interface ServiceSubcategory {
  id: string;
  serviceId: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: Array<{ phase: string; note: string }>;
  technologies: string[];
  targetAudience: string;
  deliverables: string[];
  prerequisites: string;
  complexity: string;
  createdAt: Date;
  updatedAt: Date;
}

// App Card interface
interface AppCard {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  keyFeatures: string[];
  tag?: string;
  longDesc: string;
  stack: string[];
  integrations: string[];
  timeline: Array<{ phase: string; note: string }>;
  pricingNote: string;
  faqs: Array<{ q: string; a: string }>;
  images: string[];
  ctaLink: string;
}

// Enhanced app categories with translation support
const useAppCategories = () => {
  const { t } = useTranslation();
  
  return [
    { key: 'all', label: t('mobileAppPage.filters.all', 'جميع الأنواع') },
    { key: 'ecommerce', label: t('mobileAppPage.filters.ecommerce', 'تجارة إلكترونية') },
    { key: 'services', label: t('mobileAppPage.filters.services', 'خدمات عند الطلب') },
    { key: 'education', label: t('mobileAppPage.filters.education', 'تعليم') },
    { key: 'health', label: t('mobileAppPage.filters.health', 'صحة') },
    { key: 'fintech', label: t('mobileAppPage.filters.fintech', 'مالية/مدفوعات') },
    { key: 'logistics', label: t('mobileAppPage.filters.logistics', 'توصيل/نقل') },
    { key: 'media', label: t('mobileAppPage.filters.media', 'وسائط/ترفيه') }
  ];
};

// Enhanced app cards with complete 16-20 cards to meet requirements
const useAppCards = () => {
  return [
    // E-commerce Category (3 cards)
    { 
      id: 'ec1', 
      category: 'ecommerce', 
      title: 'متجر إلكتروني متعدد البائعين', 
      shortDesc: 'تحويل البيع إلى أونلاين مع إدارة مخزون ودفع آمن', 
      keyFeatures: ['سلة شراء متقدمة', 'بوابات دفع محلية وعالمية', 'كوبونات وعروض', 'تقارير المبيعات', 'دعم عربي/إنجليزي'], 
      tag: 'Enterprise',
      longDesc: 'منصة تجارة إلكترونية شاملة تدعم البائعين المتعددين مع إدارة كاملة للمخزون والطلبات وتتبع الشحنات',
      stack: ['React Native', 'Node.js/Express', 'PostgreSQL', 'Redis', 'Stripe'],
      integrations: ['بوابات الدفع المحلية', 'خدمات الشحن', 'إدارة المخزون', 'تحليلات المبيعات'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة احتياجات العمل والمستخدمين' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهات تفاعلية وسهلة' },
        { phase: 'التطوير والتكامل', note: 'بناء النظام وربط الخدمات' },
        { phase: 'الاختبار والتسليم', note: 'اختبار شامل وتدريب المستخدمين' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يدعم التطبيق عدة بائعين؟', a: 'نعم، يدعم عدد غير محدود من البائعين مع لوحة تحكم منفصلة لكل بائع.' },
        { q: 'ما هي طرق الدفع المدعومة؟', a: 'يدعم جميع بوابات الدفع المحلية والعالمية مثل فيزا وماستركارد والتحويل البنكي.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'ec2', 
      category: 'ecommerce', 
      title: 'متجر D2C سريع الإطلاق', 
      shortDesc: 'أطلق متجرك خلال أسابيع', 
      keyFeatures: ['قوالب جاهزة', 'دفع آمن', 'ربط شحن', 'إشعارات فورية'], 
      tag: 'MVP',
      longDesc: 'حل سريع لإطلاق متجر إلكتروني بسيط وفعال للشركات الناشئة والمتاجر الصغيرة',
      stack: ['Flutter', 'Firebase', 'Cloud Functions', 'Stripe'],
      integrations: ['Stripe', 'Firebase Push', 'خدمات الشحن المحلية'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: '1-2 أسبوع' },
        { phase: 'التصميم وتجربة المستخدم', note: '1 أسبوع' },
        { phase: 'التطوير والتكامل', note: '2-3 أسابيع' },
        { phase: 'الاختبار والتسليم', note: '1 أسبوع' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'كم يستغرق إطلاق المتجر؟', a: '4-6 أسابيع من بداية العمل حتى الإطلاق.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'ec3', 
      category: 'ecommerce', 
      title: 'تطبيق عروض وكوبونات', 
      shortDesc: 'منصة للعروض والخصومات الذكية', 
      keyFeatures: ['كوبونات QR', 'عروض موقعية', 'برنامج ولاء', 'تتبع الاستخدام', 'تحليلات متقدمة'], 
      longDesc: 'تطبيق ذكي يجمع العروض والخصومات من المتاجر المختلفة مع نظام كوبونات متطور ونقاط الولاء',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
      integrations: ['خرائط Google', 'QR Code Scanner', 'نظام الإشعارات'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'تحديد المتطلبات والميزات' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم تجربة مستخدم مميزة' },
        { phase: 'التطوير والتكامل', note: 'تطوير الميزات وربط الأنظمة' },
        { phase: 'الاختبار والتسليم', note: 'اختبار وإطلاق التطبيق' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'كيف يعمل نظام الكوبونات؟', a: 'عبر QR codes فريدة لكل عرض مع تتبع لاستخدام الكوبونات ومنع التكرار.' }
      ],
      images: [],
      ctaLink: '/contact'
    },

    // Services Category (3 cards)
    { 
      id: 'sv1', 
      category: 'services', 
      title: 'طلب خدمات عند الطلب', 
      shortDesc: 'حجوزات وفوترة وتتبع مزودين', 
      keyFeatures: ['خرائط وتتبع', 'مواعيد ودفعات', 'مراجعات العملاء', 'نظام تقييم', 'دعم متعدد الخدمات'],
      longDesc: 'منصة شاملة لحجز الخدمات عند الطلب مع تتبع المزودين ونظام دفع متكامل',
      stack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      integrations: ['خرائط Google', 'بوابات الدفع', 'الإشعارات الفورية'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة نوع الخدمات وسير العمل' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم رحلة المستخدم والمزود' },
        { phase: 'التطوير والتكامل', note: 'تطوير التطبيق وربط الخدمات' },
        { phase: 'الاختبار والتسليم', note: 'اختبار النظام وتدريب المستخدمين' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يدعم تتبع الخدمة فوريًا؟', a: 'نعم، تتبع فوري للخدمة والمزود مع إشعارات لحظية.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'sv2', 
      category: 'services', 
      title: 'تطبيق صيانة منزلية', 
      shortDesc: 'كهرباء، سباكة، تكييف بنقرة واحدة', 
      keyFeatures: ['حجز فوري', 'فنيين معتمدين', 'تسعير شفاف', 'ضمان الخدمة', 'متابعة الطلب'], 
      longDesc: 'تطبيق متخصص في الصيانة المنزلية يربط العملاء بالفنيين المعتمدين لجميع خدمات الصيانة',
      stack: ['Flutter', 'Firebase', 'Cloud Functions', 'Google Maps'],
      integrations: ['خرائط للموقع', 'نظام الدفع', 'تقييم الفنيين'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'تحديد أنواع الخدمات المطلوبة' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهة سهلة للحجز' },
        { phase: 'التطوير والتكامل', note: 'تطوير نظام المطابقة والحجز' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع فنيين حقيقيين' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'كيف يتم اختيار الفني؟', a: 'بناءً على القرب الجغرافي والتقييمات والتخصص المطلوب.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'sv3', 
      category: 'services', 
      title: 'منصة خدمات تنظيف', 
      shortDesc: 'تنظيف منازل ومكاتب بمعايير عالية', 
      keyFeatures: ['جدولة ذكية', 'فرق مدربة', 'مواد آمنة', 'تقييم بعد الخدمة', 'اشتراكات دورية'], 
      longDesc: 'منصة احترافية لخدمات التنظيف مع إمكانية جدولة الخدمات الدورية وضمان الجودة',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'Socket.io'],
      integrations: ['نظام الجدولة', 'تتبع الفريق', 'نظام التقييم'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة سوق خدمات التنظيف' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم نظام الحجز والجدولة' },
        { phase: 'التطوير والتكامل', note: 'تطوير النظام وربط الفرق' },
        { phase: 'الاختبار والتسليم', note: 'اختبار العمليات مع فرق التنظيف' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يمكن جدولة خدمات دورية؟', a: 'نعم، يمكن إعداد جدولة أسبوعية أو شهرية مع خصومات للاشتراكات.' }
      ],
      images: [],
      ctaLink: '/contact'
    },

    // Education Category (3 cards)
    { 
      id: 'ed1', 
      category: 'education', 
      title: 'منصة تعلم إلكتروني', 
      shortDesc: 'كورسات، اختبارات، شهادات', 
      keyFeatures: ['بث مباشر', 'اختبارات تفاعلية', 'لوحة مدرس', 'تتبع التقدم', 'شهادات معتمدة'],
      longDesc: 'منصة تعليمية شاملة تدعم التعلم المباشر والتفاعلي مع نظام إدارة محتوى متقدم',
      stack: ['React Native', 'WebRTC', 'PostgreSQL', 'AWS S3'],
      integrations: ['نظام الدفع', 'بث الفيديو', 'إدارة الشهادات'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'تحديد المحتوى التعليمي والميزات' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم تجربة تعلم تفاعلية' },
        { phase: 'التطوير والتكامل', note: 'تطوير المنصة وربط الأنظمة' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع معلمين وطلاب' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يدعم البث المباشر؟', a: 'نعم، مع إمكانية التفاعل المباشر والمشاركة والتسجيل.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'ed2', 
      category: 'education', 
      title: 'تطبيق تعلم لغات', 
      shortDesc: 'تعلم اللغات بطريقة تفاعلية وممتعة', 
      keyFeatures: ['دروس تفاعلية', 'تقييم النطق', 'ألعاب تعليمية', 'متابعة اليومية', 'دردشة مع ناطقين'], 
      longDesc: 'تطبيق متطور لتعلم اللغات باستخدام الذكاء الاصطناعي لتقييم النطق والتفاعل',
      stack: ['Flutter', 'AI/ML APIs', 'Firebase', 'Speech Recognition'],
      integrations: ['تقييم النطق بالذكاء الاصطناعي', 'نظام التحفيز', 'مجتمع المتعلمين'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'تحديد اللغات والمنهجية' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم تجربة تعلم ممتعة' },
        { phase: 'التطوير والتكامل', note: 'تطوير ميزات الذكاء الاصطناعي' },
        { phase: 'الاختبار والتسليم', note: 'اختبار دقة النطق والتعلم' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'كيف يعمل تقييم النطق؟', a: 'باستخدام تقنيات الذكاء الاصطناعي لتحليل النطق وتقديم تصحيحات فورية.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'ed3', 
      category: 'education', 
      title: 'مدرسة افتراضية', 
      shortDesc: 'إدارة مدرسية شاملة ومتكاملة', 
      keyFeatures: ['حضور وغياب', 'درجات ونتائج', 'تواصل أولياء أمور', 'جدول حصص', 'مكتبة رقمية'], 
      longDesc: 'نظام إدارة مدرسي متكامل يربط المعلمين والطلاب وأولياء الأمور في منصة واحدة',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'WebRTC'],
      integrations: ['نظام الحضور', 'إدارة الدرجات', 'التواصل المباشر'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة النظام التعليمي المطلوب' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهات للطلاب والمعلمين' },
        { phase: 'التطوير والتكامل', note: 'تطوير جميع الوحدات المطلوبة' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع مدرسة حقيقية' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يدعم التعلم عن بُعد؟', a: 'نعم، مع فصول افتراضية وإدارة كاملة للتعلم الإلكتروني.' }
      ],
      images: [],
      ctaLink: '/contact'
    },

    // Health Category (3 cards)
    { 
      id: 'he1', 
      category: 'health', 
      title: 'عيادة عن بُعد', 
      shortDesc: 'مواعيد، وصفات، سجلات', 
      keyFeatures: ['مكالمات فيديو', 'وصفات PDF', 'سجلات مشفرة', 'تذكير بالدواء', 'تقارير طبية'],
      longDesc: 'تطبيق طبي متقدم يربط المرضى بالأطباء مع حفظ كامل للسجلات الطبية والخصوصية',
      stack: ['React Native', 'WebRTC', 'PostgreSQL', 'End-to-End Encryption'],
      integrations: ['مكالمات الفيديو المشفرة', 'إدارة الوصفات', 'تأمين البيانات الطبية'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة المتطلبات الطبية والقانونية' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهة طبية احترافية' },
        { phase: 'التطوير والتكامل', note: 'تطوير مع معايير الأمان الطبي' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع أطباء حقيقيين' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل البيانات الطبية آمنة؟', a: 'نعم، مع تشفير كامل ومعايير HIPAA للخصوصية الطبية.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'he2', 
      category: 'health', 
      title: 'متابعة اللياقة الذكية', 
      shortDesc: 'تمارين، تغذية، تتبع صحي شامل', 
      keyFeatures: ['برامج تمارين مخصصة', 'تتبع السعرات', 'مراقبة الوزن', 'تحفيز ذكي', 'تقارير صحية'], 
      longDesc: 'تطبيق لياقة شامل يستخدم الذكاء الاصطناعي لتخصيص برامج التمارين والتغذية',
      stack: ['Flutter', 'AI/ML', 'Firebase', 'HealthKit/Google Fit'],
      integrations: ['أجهزة اللياقة الذكية', 'حساب السعرات', 'مجتمع اللياقة'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة برامج اللياقة والتغذية' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم تجربة تحفيزية' },
        { phase: 'التطوير والتكامل', note: 'تطوير خوارزميات التخصيص' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع مدربين ومستخدمين' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يتكامل مع الأجهزة الذكية؟', a: 'نعم، مع جميع أجهزة اللياقة المشهورة مثل Fitbit وApple Watch.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'he3', 
      category: 'health', 
      title: 'إدارة العيادات', 
      shortDesc: 'نظام شامل لإدارة العيادات والمرضى', 
      keyFeatures: ['حجز المواعيد', 'ملفات المرضى', 'إدارة المخزون', 'الفوترة الطبية', 'تقارير إدارية'], 
      longDesc: 'نظام إدارة متكامل للعيادات الطبية مع إدارة كاملة للمواعيد والملفات والفوترة',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'PDF Generation'],
      integrations: ['أنظمة الدفع الطبية', 'أجهزة طبية', 'تأمين صحي'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة سير العمل في العيادة' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم نظام سهل للأطباء' },
        { phase: 'التطوير والتكامل', note: 'تطوير جميع وحدات الإدارة' },
        { phase: 'الاختبار والتسليم', note: 'تجريب في عيادة حقيقية' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يدعم التأمين الصحي؟', a: 'نعم، مع ربط مباشر بشركات التأمين المحلية والدولية.' }
      ],
      images: [],
      ctaLink: '/contact'
    },

    // Fintech Category (3 cards)
    { 
      id: 'fi1', 
      category: 'fintech', 
      title: 'محفظة ومدفوعات رقمية', 
      shortDesc: 'تحصيل وسداد آمن مع ميزات متقدمة', 
      keyFeatures: ['KYC متقدم', 'تقارير مالية', 'تصاريح دقيقة', 'حماية متعددة الطبقات', 'دعم عملات متعددة'],
      longDesc: 'محفظة رقمية متقدمة مع أعلى معايير الأمان والتوافق مع اللوائح المالية',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'Blockchain', 'Encryption'],
      integrations: ['البنوك المحلية', 'أنظمة KYC', 'شبكات الدفع العالمية'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة المتطلبات المالية والقانونية' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهة آمنة وسهلة' },
        { phase: 'التطوير والتكامل', note: 'تطوير مع أعلى معايير الأمان' },
        { phase: 'الاختبار والتسليم', note: 'اختبار أمني شامل وترخيص' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'ما هي معايير الأمان المطبقة؟', a: 'معايير PCI DSS وتشفير عسكري مع مصادقة متعددة العوامل.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'fi2', 
      category: 'fintech', 
      title: 'منصة استثمار ذكية', 
      shortDesc: 'استثمار آمن مع نصائح مالية ذكية', 
      keyFeatures: ['محفظة متنوعة', 'تحليلات السوق', 'استثمار تلقائي', 'إدارة المخاطر', 'تقارير أداء'], 
      longDesc: 'منصة استثمار متطورة تستخدم الذكاء الاصطناعي لتقديم نصائح مالية مخصصة',
      stack: ['Flutter', 'AI/ML', 'Real-time APIs', 'Advanced Analytics'],
      integrations: ['أسواق المال العالمية', 'تحليلات اقتصادية', 'البنوك والوسطاء'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة الأسواق المالية المستهدفة' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهة استثمار بديهية' },
        { phase: 'التطوير والتكامل', note: 'تطوير خوارزميات الاستثمار' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع بيانات سوق حقيقية' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل الاستثمار مضمون؟', a: 'نوفر أدوات إدارة المخاطر ولكن الاستثمار يحمل مخاطر طبيعية.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'fi3', 
      category: 'fintech', 
      title: 'نظام التمويل الجماعي', 
      shortDesc: 'منصة تمويل جماعي للمشاريع', 
      keyFeatures: ['إدارة المشاريع', 'نظام تبرعات', 'تتبع الأهداف', 'شفافية كاملة', 'تقارير للمانحين'], 
      longDesc: 'منصة تمويل جماعي متطورة تربط أصحاب المشاريع بالمستثمرين والمتبرعين',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'Payment Gateways'],
      integrations: ['بوابات دفع متعددة', 'أنظمة البنوك', 'شبكات التواصل'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة نموذج التمويل الجماعي' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهة جذابة للمشاريع' },
        { phase: 'التطوير والتكامل', note: 'تطوير آليات التمويل والتتبع' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع مشاريع تجريبية' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'ما هي شروط نشر المشروع؟', a: 'مراجعة دقيقة للمشروع والفريق مع ضمانات حماية للمستثمرين.' }
      ],
      images: [],
      ctaLink: '/contact'
    },

    // Logistics Category (3 cards)
    { 
      id: 'lg1', 
      category: 'logistics', 
      title: 'نظام توصيل طلبات', 
      shortDesc: 'أسطول وتتبع حي مع إدارة شاملة', 
      keyFeatures: ['خرائط حية', 'مسارات ذكية', 'إثبات التسليم', 'إدارة الأسطول', 'تحسين الطرق'],
      longDesc: 'نظام توصيل متطور مع تتبع فوري وإدارة ذكية للأسطول وتحسين المسارات',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'Google Maps', 'Socket.io'],
      integrations: ['خرائط وملاحة', 'تتبع المركبات', 'أنظمة الدفع'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة احتياجات التوصيل والمناطق' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهة للعملاء والسائقين' },
        { phase: 'التطوير والتكامل', note: 'تطوير نظام التتبع والتوجيه' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع أسطول تجريبي' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'كيف يتم تحسين المسارات؟', a: 'خوارزميات ذكية تحلل حالة المرور والمسافات لأفضل مسار.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'lg2', 
      category: 'logistics', 
      title: 'إدارة المخازن الذكية', 
      shortDesc: 'نظام مخازن متطور مع تتبع دقيق', 
      keyFeatures: ['مسح QR/Barcode', 'تتبع المخزون', 'تقارير حية', 'تنبيهات نفاد', 'إدارة الموردين'], 
      longDesc: 'نظام إدارة مخازن ذكي مع تتبع دقيق للمخزون وتحليلات متقدمة',
      stack: ['Flutter', 'Node.js', 'PostgreSQL', 'Barcode Scanner'],
      integrations: ['أنظمة المسح', 'إدارة الموردين', 'تقارير الأعمال'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة عمليات المخزن الحالية' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم واجهة عملية للعمال' },
        { phase: 'التطوير والتكامل', note: 'تطوير نظام المسح والتتبع' },
        { phase: 'الاختبار والتسليم', note: 'تجريب في مخزن حقيقي' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'هل يدعم المسح بالباركود؟', a: 'نعم، مع دعم جميع أنواع الباركود و QR codes.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'lg3', 
      category: 'logistics', 
      title: 'شحن وتتبع البضائع', 
      shortDesc: 'نظام شحن متكامل مع تتبع عالمي', 
      keyFeatures: ['تتبع عالمي', 'حساب التكلفة', 'جدولة الشحن', 'تأمين البضائع', 'إشعارات التسليم'], 
      longDesc: 'نظام شحن شامل يربط مع شركات الشحن العالمية لتتبع شامل وإدارة متقدمة',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'APIs شركات الشحن'],
      integrations: ['DHL, FedEx, UPS', 'أنظمة التأمين', 'حاسبات التكلفة'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'دراسة شركات الشحن والمتطلبات' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم نظام تتبع واضح' },
        { phase: 'التطوير والتكامل', note: 'ربط مع APIs شركات الشحن' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع شحنات حقيقية' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'ما هي شركات الشحن المدعومة؟', a: 'جميع الشركات الرئيسية محليًا وعالميًا مع APIs موحدة.' }
      ],
      images: [],
      ctaLink: '/contact'
    },

    // Media & Entertainment Category (3 cards)
    { 
      id: 'md1', 
      category: 'media', 
      title: 'منصة محتوى ووسائط', 
      shortDesc: 'فيديو وبث وتفاعل مع الجمهور', 
      keyFeatures: ['رفع وسائط متقدم', 'تعليقات وتفاعل', 'تنبيهات Push', 'بث مباشر', 'أنظمة اشتراك'],
      longDesc: 'منصة محتوى شاملة تدعم جميع أنواع الوسائط مع تفاعل قوي ونظام اشتراكات',
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'CDN', 'WebRTC'],
      integrations: ['خدمات CDN', 'معالجة الفيديو', 'أنظمة الدفع'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'تحديد نوع المحتوى والجمهور' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم تجربة مشاهدة مميزة' },
        { phase: 'التطوير والتكامل', note: 'تطوير نظام الرفع والبث' },
        { phase: 'الاختبار والتسليم', note: 'اختبار الأداء مع محتوى كثيف' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'ما هي أنواع الملفات المدعومة؟', a: 'جميع صيغ الفيديو والصوت مع معالجة تلقائية للجودة.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
    { 
      id: 'md2', 
      category: 'media', 
      title: 'تطبيق ألعاب تفاعلية', 
      shortDesc: 'ألعاب جماعية ومسابقات مع جوائز', 
      keyFeatures: ['ألعاب متعددة اللاعبين', 'مسابقات يومية', 'نظام نقاط', 'جوائز حقيقية', 'ترتيب عالمي'], 
      longDesc: 'منصة ألعاب تفاعلية مع مسابقات منتظمة ونظام جوائز يجذب المستخدمين',
      stack: ['Unity/Flutter', 'Real-time Gaming', 'Node.js', 'Socket.io'],
      integrations: ['نظام الجوائز', 'بوابات الدفع', 'شبكات التواصل'],
      timeline: [
        { phase: 'تحليل المتطلبات', note: 'تحديد نوع الألعاب والمسابقات' },
        { phase: 'التصميم وتجربة المستخدم', note: 'تصميم تجربة لعب ممتعة' },
        { phase: 'التطوير والتكامل', note: 'تطوير الألعاب ونظام الجوائز' },
        { phase: 'الاختبار والتسليم', note: 'اختبار مع لاعبين حقيقيين' }
      ],
      pricingNote: '',
      faqs: [
        { q: 'كيف يتم توزيع الجوائز؟', a: 'نظام توزيع تلقائي مع تحقق هوية ونقل مباشر للجوائز.' }
      ],
      images: [],
      ctaLink: '/contact'
    },
  ];
};

export default function ServiceDetailClean() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const { lang, dir } = useLanguage();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAppDetails, setSelectedAppDetails] = useState<AppCard | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(8);

  // Use the translated categories and cards
  const categories = useAppCategories();
  const appCards = useAppCards();

  // Handle deep linking with hash fragments
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#details-')) {
        const appId = hash.replace('#details-', '');
        const app = appCards.find(card => card.id === appId);
        if (app) {
          setSelectedAppDetails(app);
          setIsDetailsModalOpen(true);
        }
      } else if (isDetailsModalOpen) {
        setIsDetailsModalOpen(false);
        setSelectedAppDetails(null);
      }
    };

    // Check initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isDetailsModalOpen]);

  // Handle modal close - update URL hash
  const handleCloseModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedAppDetails(null);
    // Remove hash from URL without triggering navigation
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Handle view details click
  const handleViewDetails = (app: AppCard) => {
    setSelectedAppDetails(app);
    setIsDetailsModalOpen(true);
    // Add hash to URL for deep linking
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#details-${app.id}`);
  };

  // App Details Modal Component
  const AppDetailsModal = () => {
    if (!selectedAppDetails || !isDetailsModalOpen) return null;

    return (
      <Dialog open={isDetailsModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent 
          className="max-w-4xl max-h-[90vh] overflow-y-auto" 
          dir={dir}
          aria-labelledby={`details-title-${selectedAppDetails.id}`}
          aria-describedby={`details-description-${selectedAppDetails.id}`}
        >
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle 
              id={`details-title-${selectedAppDetails.id}`}
              className="text-xl font-bold text-gray-900 dark:text-white pr-4"
            >
              {selectedAppDetails.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCloseModal}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label={t('mobileAppPage.details.close', 'إغلاق')}
            >
              <X className="w-5 h-5" />
            </Button>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('mobileAppPage.details.overview', 'نظرة عامة')}</h3>
              </div>
              <p 
                id={`details-description-${selectedAppDetails.id}`}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {selectedAppDetails.longDesc}
              </p>
            </motion.div>

            {/* Key Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('mobileAppPage.details.keyFeatures', 'الميزات الرئيسية')}</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(Array.isArray(selectedAppDetails.keyFeatures) ? selectedAppDetails.keyFeatures : [selectedAppDetails.keyFeatures]).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack & Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Tech Stack */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('mobileAppPage.details.stack', 'التقنيات المستخدمة')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedAppDetails.stack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Plug className="w-5 h-5 text-purple-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('mobileAppPage.details.integrations', 'التكاملات')}</h3>
                </div>
                <ul className="space-y-1">
                  {selectedAppDetails.integrations.map((integration, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <ChevronRight className={cn("w-4 h-4 text-gray-400", dir === 'rtl' && "rotate-180")} />
                      <span>{integration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('mobileAppPage.details.timeline', 'المدة المتوقعة والخط الزمني')}</h3>
              </div>
              <div className="space-y-3">
                {selectedAppDetails.timeline.map((phase, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{phase.phase}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{phase.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>


            {/* FAQs Section */}
            {selectedAppDetails.faqs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('mobileAppPage.details.faqs', 'أسئلة شائعة')}</h3>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {selectedAppDetails.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-right">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <Button
                size="lg"
                className="flex-1"
                onClick={() => {
                  setLocation('/contact');
                  handleCloseModal();
                }}
                data-testid={`button-start-now-${selectedAppDetails.id}`}
              >
                {t('mobileAppPage.details.startNow', 'ابدأ الآن')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setLocation(`/contact?service=mobile-apps&app=${encodeURIComponent(selectedAppDetails.title)}&category=${selectedAppDetails.category}&serviceName=${encodeURIComponent(service?.title || 'تطوير تطبيقات الهواتف الذكية')}`);
                  handleCloseModal();
                }}
                data-testid={`button-request-modal-${selectedAppDetails.id}`}
              >
                {t('mobileAppPage.details.requestApp', 'اطلب التطبيق')}
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  // Optimized service query - fetch specific service by ID (with URL normalization)
  const normalizedId = toCanonicalKey(id || '');
  const { data: service, isLoading, error } = useQuery<Service>({
    queryKey: ['/api/services', normalizedId],
    queryFn: async () => {
      const response = await fetch(`/api/services/${normalizedId}`);
      if (!response.ok) {
        throw new Error('Service not found');
      }
      return response.json();
    },
  });

  // Service subcategories query - fetch subcategories for this service
  const { data: serviceSubcategories, isLoading: subcategoriesLoading } = useQuery<ServiceSubcategory[]>({
    queryKey: ['/api/service-subcategories/by-service', id],
    queryFn: async () => {
      const response = await fetch(`/api/service-subcategories/by-service/${id}`);
      if (!response.ok) {
        return []; // Return empty array if no subcategories found
      }
      return response.json();
    },
    enabled: !!id && !!service
  });

  // Filter cards based on selected category with performance optimization
  const filteredCards = useMemo(() => {
    if (selectedCategory === 'all') {
      return appCards;
    }
    return appCards.filter(card => card.category === selectedCategory);
  }, [selectedCategory, appCards]);

  // Optimize category change handler
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // Performance optimization callbacks
  const loadMoreCards = useCallback(() => {
    setVisibleCards(prev => Math.min(prev + 8, filteredCards.length));
  }, [filteredCards.length]);

  const displayedCards = useMemo(() => {
    return filteredCards.slice(0, visibleCards);
  }, [filteredCards, visibleCards]);

  // Reset visible cards when category changes
  useEffect(() => {
    setVisibleCards(8);
  }, [selectedCategory]);

  // Check if this is the mobile app development service
  const isMobileAppService = service?.id === '27490f60-528e-47c4-9201-231cc60212e6';

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" dir={dir}>
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-32 w-full mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center" dir={dir}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {lang === 'ar' ? 'الخدمة غير موجودة' : 'Service Not Found'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {lang === 'ar' ? 'عذراً، لم نتمكن من العثور على الخدمة المطلوبة' : 'Sorry, we could not find the requested service'}
          </p>
          <Button onClick={() => setLocation('/services')}>
            <ArrowLeft className={cn("w-4 h-4 mr-2", dir === 'rtl' && "rotate-180 mr-0 ml-2")} />
            {lang === 'ar' ? 'العودة للخدمات' : 'Back to Services'}
          </Button>
        </div>
      </div>
    );
  }

  // If not mobile app service, show the ERPNext section or basic service view
  if (!isMobileAppService) {
    const Icon = Smartphone; // Default icon for services
    
    return (
      <>
        <SEOHead
          title={`${service.title} - ${lang === 'ar' ? 'جينيوس سوفتوير' : 'Genius Software'}`}
          description={service.description}
          keywords={service.technologies?.join(', ')}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" dir={dir}>
          
          {/* ERPNext v15 Section - Only show for ERP services */}
          {service && service.category === 'erp' && (
            <ConsolidatedERPNextV15Section />
          )}

          {/* Back Button */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                variant="ghost" 
                onClick={() => setLocation('/services')}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <ArrowLeft className={cn("w-4 h-4 mr-2", dir === 'rtl' && "rotate-180 mr-0 ml-2")} />
                {lang === 'ar' ? 'العودة للخدمات' : 'Back to Services'}
              </Button>
            </motion.div>
          </div>

          {/* Basic Service Display */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  {service.description}
                </p>

                {/* Technologies */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Delivery Time */}
                {service.deliveryTime && (
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span>{service.deliveryTime}</span>
                  </div>
                )}
              </motion.div>

              {/* Service Subcategories - Show for specific services only */}
              {service && ['mobile', 'web', 'desktop', 'design', 'marketing'].includes(service.category) && 
               serviceSubcategories && serviceSubcategories.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {lang === 'ar' ? 'أنواع وتخصصات الخدمة' : 'Service Types & Specializations'}
                  </h2>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {serviceSubcategories.map((subcategory, index) => (
                      <motion.div
                        key={subcategory.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700"
                        data-testid={`subcategory-${subcategory.id}`}
                      >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {subcategory.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                          {subcategory.description}
                        </p>

                        {/* Key Features */}
                        {subcategory.features && subcategory.features.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                              {lang === 'ar' ? 'المميزات الرئيسية:' : 'Key Features:'}
                            </h4>
                            <ul className="space-y-1">
                              {subcategory.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        {subcategory.technologies && subcategory.technologies.length > 0 && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {subcategory.technologies.slice(0, 3).map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Timeline and Pricing */}
                        <div className="space-y-2">
                          {subcategory.timeline && subcategory.timeline.length > 0 && (
                            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                              <Calendar className="w-3 h-3 mr-2" />
                              <span>{subcategory.timeline.length} مراحل - {subcategory.timeline.map(t => t.note).join(', ')}</span>
                            </div>
                          )}
                          
                          {subcategory.pricing && (
                            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                              <Target className="w-3 h-3 mr-2" />
                              {subcategory.pricing}
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-600">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full text-xs"
                            onClick={() => setLocation(`/contact?service=${service.id}&subcategory=${subcategory.id}`)}
                            data-testid={`button-request-${subcategory.id}`}
                          >
                            {lang === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Service Features/Content would go here */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {lang === 'ar' ? 'تفاصيل الخدمة' : 'Service Details'}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed">
                  {lang === 'ar' 
                    ? 'تواصل معنا للحصول على تفاصيل أكثر حول هذه الخدمة والبدء في مشروعك.'
                    : 'Contact us to get more details about this service and start your project.'
                  }
                </p>

                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={() => setLocation(`/contact?service=${service.id}`)}
                    className="mr-4"
                  >
                    {lang === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setLocation('/services')}
                  >
                    {lang === 'ar' ? 'تصفح خدمات أخرى' : 'Browse Other Services'}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Mobile App Development Service Page  
  return (
    <>
      <SEOHead
        title="تطوير تطبيقات الموبايل - خدماتنا | Genius Software Core"
        description="خطط مشروع تطبيقك بكل تفاصيله من خلال نظامنا التفاعلي المتطور لتطوير تطبيقات الموبايل"
        keywords="تطوير تطبيقات، أندرويد، iOS، تطبيقات جوال، React Native، Flutter"
      />
      
      <MobileAppPlanningSystem />
    </>
  );
}
