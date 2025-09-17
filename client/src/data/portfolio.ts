// Enhanced Portfolio Data with Bilingual Support and KPIs
export interface PortfolioProject {
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  sector: string;
  sectorAr: string;
  year: number;
  status: 'published' | 'draft' | 'archived';
  kpis: KPI[];
  tech: string[];
  coverImage: string;
  gallery: GalleryItem[];
  summaryEn: string;
  summaryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  challengeEn: string;
  challengeAr: string;
  solutionEn: string;
  solutionAr: string;
  services: string[];
  servicesAr: string[];
  duration: string;
  durationAr: string;
  teamSize: number;
  budget?: string;
  budgetAr?: string;
  websiteUrl?: string;
  githubUrl?: string;
  testimonial?: {
    name: string;
    nameAr: string;
    position: string;
    positionAr: string;
    content: string;
    contentAr: string;
    avatar?: string;
    rating: number;
  };
  features: string[];
  featuresAr: string[];
  results: string[];
  resultsAr: string[];
}

export interface KPI {
  id: string;
  label: string;
  labelAr: string;
  value: string;
  description: string;
  descriptionAr: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
  unit?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  altAr: string;
  type: 'image' | 'video';
  caption?: string;
  captionAr?: string;
}

// Sample Portfolio Data (6 projects with bilingual content)
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'ecommerce-platform-almarai',
    title: 'E-Commerce Platform for AlMarai',
    titleAr: 'منصة تجارة إلكترونية للمراعي',
    client: 'AlMarai Company',
    clientAr: 'شركة المراعي',
    sector: 'E-commerce',
    sectorAr: 'تجارة إلكترونية',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'revenue_increase',
        label: 'Revenue Increase',
        labelAr: 'زيادة الإيرادات',
        value: '340%',
        description: 'Monthly revenue growth after platform launch',
        descriptionAr: 'نمو الإيرادات الشهرية بعد إطلاق المنصة',
        icon: 'TrendingUp',
        trend: 'up'
      },
      {
        id: 'conversion_rate',
        label: 'Conversion Rate',
        labelAr: 'معدل التحويل',
        value: '12.8%',
        description: 'Customer conversion from visitors to buyers',
        descriptionAr: 'تحويل العملاء من زوار إلى مشترين',
        icon: 'Target',
        trend: 'up'
      },
      {
        id: 'user_satisfaction',
        label: 'User Satisfaction',
        labelAr: 'رضا المستخدمين',
        value: '4.9/5',
        description: 'Average customer rating and feedback',
        descriptionAr: 'متوسط تقييم العملاء وآرائهم',
        icon: 'Star',
        trend: 'up'
      },
      {
        id: 'page_load_time',
        label: 'Page Load Time',
        labelAr: 'وقت تحميل الصفحة',
        value: '1.2s',
        description: 'Average page loading speed optimization',
        descriptionAr: 'تحسين متوسط سرعة تحميل الصفحات',
        icon: 'Zap',
        trend: 'down'
      }
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'ElasticSearch'],
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
        alt: 'E-commerce homepage design',
        altAr: 'تصميم الصفحة الرئيسية للتجارة الإلكترونية',
        type: 'image',
        caption: 'Clean and modern homepage design',
        captionAr: 'تصميم صفحة رئيسية نظيف وعصري'
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
        alt: 'Product catalog interface',
        altAr: 'واجهة كتالوج المنتجات',
        type: 'image',
        caption: 'Advanced product filtering and search',
        captionAr: 'تصفية وبحث متقدم للمنتجات'
      }
    ],
    summaryEn: 'Comprehensive e-commerce solution with advanced features for dairy product sales and distribution.',
    summaryAr: 'حل تجارة إلكترونية شامل مع ميزات متقدمة لبيع وتوزيع منتجات الألبان.',
    descriptionEn: 'A complete digital transformation project that modernized AlMarai\'s sales channel through a sophisticated e-commerce platform. The solution integrates inventory management, customer relationship tools, and real-time analytics.',
    descriptionAr: 'مشروع تحول رقمي شامل قام بتحديث قناة مبيعات المراعي من خلال منصة تجارة إلكترونية متطورة. يتكامل الحل مع إدارة المخزون وأدوات علاقات العملاء والتحليلات في الوقت الفعلي.',
    challengeEn: 'AlMarai needed a scalable platform to handle high-volume dairy product sales with complex inventory management, cold chain logistics integration, and multi-channel customer engagement.',
    challengeAr: 'احتاجت المراعي إلى منصة قابلة للتوسع للتعامل مع مبيعات منتجات الألبان عالية الحجم مع إدارة مخزون معقدة وتكامل لوجستيات السلسلة الباردة ومشاركة العملاء متعددة القنوات.',
    solutionEn: 'We developed a robust e-commerce ecosystem featuring real-time inventory tracking, automated logistics management, personalized customer experiences, and comprehensive analytics dashboard for business insights.',
    solutionAr: 'طورنا نظاماً بيئياً قوياً للتجارة الإلكترونية يتميز بتتبع المخزون في الوقت الفعلي، وإدارة اللوجستيات الآلية، وتجارب العملاء المخصصة، ولوحة تحليلات شاملة لرؤى الأعمال.',
    services: ['Web Development', 'Mobile Apps', 'System Integration', 'UX/UI Design'],
    servicesAr: ['تطوير المواقع', 'تطبيقات الجوال', 'تكامل الأنظمة', 'تصميم UX/UI'],
    duration: '8 months',
    durationAr: '8 أشهر',
    teamSize: 12,
    websiteUrl: 'https://almarai.com',
    features: [
      'Advanced Product Catalog',
      'Real-time Inventory Management',
      'Multi-payment Gateway Integration',
      'Customer Analytics Dashboard',
      'Mobile-responsive Design',
      'Arabic/English Support'
    ],
    featuresAr: [
      'كتالوج منتجات متقدم',
      'إدارة مخزون في الوقت الفعلي',
      'تكامل بوابات دفع متعددة',
      'لوحة تحليلات العملاء',
      'تصميم متجاوب مع الأجهزة المحمولة',
      'دعم العربية/الإنجليزية'
    ],
    results: [
      '340% increase in online revenue',
      '12.8% conversion rate improvement',
      '60% reduction in cart abandonment',
      '4.9/5 customer satisfaction score'
    ],
    resultsAr: [
      '340% زيادة في الإيرادات الإلكترونية',
      '12.8% تحسن في معدل التحويل',
      '60% انخفاض في هجر سلة التسوق',
      '4.9/5 نقاط رضا العملاء'
    ],
    testimonial: {
      name: 'Ahmed Al-Rashid',
      nameAr: 'أحمد الراشد',
      position: 'Digital Marketing Director',
      positionAr: 'مدير التسويق الرقمي',
      content: 'Genius Software Core delivered beyond our expectations. The platform transformed our digital presence and significantly boosted our sales.',
      contentAr: 'قدمت جينيوس سوفت وير كور ما يفوق توقعاتنا. المنصة حولت حضورنا الرقمي وعززت مبيعاتنا بشكل كبير.',
      rating: 5
    }
  },
  {
    slug: 'government-portal-riyadh',
    title: 'Smart Government Portal - Riyadh Municipality',
    titleAr: 'بوابة حكومية ذكية - أمانة الرياض',
    client: 'Riyadh Municipality',
    clientAr: 'أمانة مدينة الرياض',
    sector: 'Government',
    sectorAr: 'حكومي',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'service_efficiency',
        label: 'Service Efficiency',
        labelAr: 'كفاءة الخدمة',
        value: '85%',
        description: 'Reduction in service processing time',
        descriptionAr: 'انخفاض في وقت معالجة الخدمات',
        icon: 'Clock',
        trend: 'up'
      },
      {
        id: 'citizen_satisfaction',
        label: 'Citizen Satisfaction',
        labelAr: 'رضا المواطنين',
        value: '92%',
        description: 'Overall satisfaction with digital services',
        descriptionAr: 'الرضا العام عن الخدمات الرقمية',
        icon: 'Users',
        trend: 'up'
      },
      {
        id: 'digital_adoption',
        label: 'Digital Adoption',
        labelAr: 'التبني الرقمي',
        value: '78%',
        description: 'Citizens using digital services vs traditional',
        descriptionAr: 'المواطنون الذين يستخدمون الخدمات الرقمية مقابل التقليدية',
        icon: 'Smartphone',
        trend: 'up'
      }
    ],
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Azure', 'OAuth 2.0'],
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
        alt: 'Government portal dashboard',
        altAr: 'لوحة معلومات البوابة الحكومية',
        type: 'image'
      }
    ],
    summaryEn: 'Digital transformation initiative for Riyadh Municipality to streamline citizen services and improve government efficiency.',
    summaryAr: 'مبادرة تحول رقمي لأمانة الرياض لتبسيط خدمات المواطنين وتحسين الكفاءة الحكومية.',
    descriptionEn: 'A comprehensive digital government solution that enables citizens to access municipal services online, reducing bureaucracy and improving service delivery efficiency.',
    descriptionAr: 'حل حكومي رقمي شامل يمكن المواطنين من الوصول إلى الخدمات البلدية عبر الإنترنت، مما يقلل البيروقراطية ويحسن كفاءة تقديم الخدمات.',
    challengeEn: 'The municipality needed to digitize over 200 services while ensuring security, accessibility, and seamless integration with existing government systems.',
    challengeAr: 'احتاجت الأمانة إلى رقمنة أكثر من 200 خدمة مع ضمان الأمان والوصولية والتكامل السلس مع الأنظمة الحكومية الحالية.',
    solutionEn: 'We created a unified portal with single sign-on, document management, payment integration, and real-time service tracking capabilities.',
    solutionAr: 'أنشأنا بوابة موحدة مع تسجيل دخول واحد وإدارة المستندات وتكامل المدفوعات وقدرات تتبع الخدمات في الوقت الفعلي.',
    services: ['Government Solutions', 'Digital Transformation', 'Security Implementation', 'System Integration'],
    servicesAr: ['الحلول الحكومية', 'التحول الرقمي', 'تنفيذ الأمان', 'تكامل الأنظمة'],
    duration: '12 months',
    durationAr: '12 شهر',
    teamSize: 15,
    features: [
      'Single Sign-On (SSO)',
      'Document Management System',
      'Multi-language Support',
      'Mobile Application',
      'Payment Gateway Integration',
      'Service Status Tracking'
    ],
    featuresAr: [
      'تسجيل دخول واحد',
      'نظام إدارة المستندات',
      'دعم متعدد اللغات',
      'تطبيق الجوال',
      'تكامل بوابة الدفع',
      'تتبع حالة الخدمة'
    ],
    results: [
      '85% reduction in service processing time',
      '92% citizen satisfaction rate',
      '78% digital adoption rate',
      '50% decrease in paper usage'
    ],
    resultsAr: [
      '85% انخفاض في وقت معالجة الخدمات',
      '92% معدل رضا المواطنين',
      '78% معدل التبني الرقمي',
      '50% انخفاض في استخدام الورق'
    ]
  },
  {
    slug: 'healthcare-management-system',
    title: 'Healthcare Management System - King Fahd Hospital',
    titleAr: 'نظام إدارة الرعاية الصحية - مستشفى الملك فهد',
    client: 'King Fahd Hospital',
    clientAr: 'مستشفى الملك فهد',
    sector: 'Healthcare',
    sectorAr: 'صحي',
    year: 2023,
    status: 'published',
    kpis: [
      {
        id: 'patient_satisfaction',
        label: 'Patient Satisfaction',
        labelAr: 'رضا المرضى',
        value: '94%',
        description: 'Overall patient satisfaction with digital services',
        descriptionAr: 'رضا المرضى العام عن الخدمات الرقمية',
        icon: 'Heart',
        trend: 'up'
      },
      {
        id: 'appointment_efficiency',
        label: 'Appointment Efficiency',
        labelAr: 'كفاءة المواعيد',
        value: '67%',
        description: 'Reduction in appointment waiting time',
        descriptionAr: 'انخفاض في وقت انتظار المواعيد',
        icon: 'Calendar',
        trend: 'up'
      },
      {
        id: 'system_uptime',
        label: 'System Uptime',
        labelAr: 'وقت تشغيل النظام',
        value: '99.9%',
        description: 'System availability and reliability',
        descriptionAr: 'توفر النظام وموثوقيته',
        icon: 'Shield',
        trend: 'up'
      }
    ],
    tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'FHIR', 'HL7'],
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop',
        alt: 'Healthcare system interface',
        altAr: 'واجهة نظام الرعاية الصحية',
        type: 'image'
      }
    ],
    summaryEn: 'Comprehensive healthcare management system improving patient care and hospital operations efficiency.',
    summaryAr: 'نظام إدارة رعاية صحية شامل يحسن رعاية المرضى وكفاءة عمليات المستشفى.',
    descriptionEn: 'An integrated healthcare management solution that streamlines patient records, appointment scheduling, medical inventory, and clinical workflows while ensuring HIPAA compliance.',
    descriptionAr: 'حل إدارة رعاية صحية متكامل يبسط سجلات المرضى وجدولة المواعيد والمخزون الطبي وسير العمل السريري مع ضمان الامتثال لمعايير HIPAA.',
    challengeEn: 'The hospital needed to modernize legacy systems while maintaining patient data security and integrating with various medical equipment and third-party services.',
    challengeAr: 'احتاج المستشفى إلى تحديث الأنظمة القديمة مع الحفاظ على أمان بيانات المرضى والتكامل مع مختلف الأجهزة الطبية والخدمات الخارجية.',
    solutionEn: 'We developed a modular healthcare platform with electronic health records, telemedicine capabilities, inventory management, and comprehensive reporting tools.',
    solutionAr: 'طورنا منصة رعاية صحية مرنة مع السجلات الصحية الإلكترونية وقدرات الطب عن بعد وإدارة المخزون وأدوات التقارير الشاملة.',
    services: ['Healthcare IT', 'System Integration', 'Data Migration', 'Compliance Implementation'],
    servicesAr: ['تكنولوجيا المعلومات الصحية', 'تكامل الأنظمة', 'ترحيل البيانات', 'تنفيذ الامتثال'],
    duration: '10 months',
    durationAr: '10 أشهر',
    teamSize: 18,
    features: [
      'Electronic Health Records (EHR)',
      'Appointment Management',
      'Telemedicine Platform',
      'Medical Inventory Tracking',
      'Prescription Management',
      'Patient Portal'
    ],
    featuresAr: [
      'السجلات الصحية الإلكترونية',
      'إدارة المواعيد',
      'منصة الطب عن بعد',
      'تتبع المخزون الطبي',
      'إدارة الوصفات الطبية',
      'بوابة المرضى'
    ],
    results: [
      '94% patient satisfaction rate',
      '67% reduction in appointment waiting time',
      '99.9% system uptime',
      '45% improvement in workflow efficiency'
    ],
    resultsAr: [
      '94% معدل رضا المرضى',
      '67% انخفاض في وقت انتظار المواعيد',
      '99.9% وقت تشغيل النظام',
      '45% تحسن في كفاءة سير العمل'
    ]
  },
  {
    slug: 'fintech-mobile-app',
    title: 'Digital Banking App - Saudi Bank',
    titleAr: 'تطبيق البنكية الرقمية - البنك السعودي',
    client: 'Saudi Bank',
    clientAr: 'البنك السعودي',
    sector: 'Finance',
    sectorAr: 'مالي',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'transaction_volume',
        label: 'Daily Transactions',
        labelAr: 'المعاملات اليومية',
        value: '2.5M',
        description: 'Average daily transaction volume',
        descriptionAr: 'متوسط حجم المعاملات اليومية',
        icon: 'CreditCard',
        trend: 'up'
      },
      {
        id: 'security_score',
        label: 'Security Score',
        labelAr: 'نقاط الأمان',
        value: '99.8%',
        description: 'Security compliance and fraud prevention',
        descriptionAr: 'الامتثال الأمني ومنع الاحتيال',
        icon: 'Shield',
        trend: 'up'
      },
      {
        id: 'app_rating',
        label: 'App Store Rating',
        labelAr: 'تقييم متجر التطبيقات',
        value: '4.8/5',
        description: 'Average rating across app stores',
        descriptionAr: 'متوسط التقييم عبر متاجر التطبيقات',
        icon: 'Star',
        trend: 'up'
      }
    ],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Blockchain', 'Biometric Auth', 'AWS'],
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
        alt: 'Mobile banking app interface',
        altAr: 'واجهة تطبيق البنكية المحمولة',
        type: 'image'
      }
    ],
    summaryEn: 'Next-generation mobile banking application with advanced security features and seamless user experience.',
    summaryAr: 'تطبيق بنكي محمول من الجيل التالي مع ميزات أمان متقدمة وتجربة مستخدم سلسة.',
    descriptionEn: 'A comprehensive digital banking solution offering secure transactions, investment management, and personalized financial insights through an intuitive mobile interface.',
    descriptionAr: 'حل بنكي رقمي شامل يقدم معاملات آمنة وإدارة الاستثمارات ورؤى مالية مخصصة من خلال واجهة محمولة بديهية.',
    challengeEn: 'The bank required a cutting-edge mobile app that could handle millions of transactions while maintaining the highest security standards and regulatory compliance.',
    challengeAr: 'احتاج البنك إلى تطبيق محمول متطور يمكنه التعامل مع ملايين المعاملات مع الحفاظ على أعلى معايير الأمان والامتثال التنظيمي.',
    solutionEn: 'We delivered a feature-rich banking app with biometric authentication, AI-powered fraud detection, real-time notifications, and comprehensive financial management tools.',
    solutionAr: 'قدمنا تطبيقاً بنكياً غنياً بالميزات مع المصادقة البيومترية وكشف الاحتيال المدعوم بالذكاء الاصطناعي والإشعارات في الوقت الفعلي وأدوات الإدارة المالية الشاملة.',
    services: ['Mobile Development', 'Cybersecurity', 'AI Integration', 'Blockchain Implementation'],
    servicesAr: ['تطوير الجوال', 'الأمن السيبراني', 'تكامل الذكاء الاصطناعي', 'تنفيذ البلوك تشين'],
    duration: '14 months',
    durationAr: '14 شهر',
    teamSize: 22,
    features: [
      'Biometric Authentication',
      'Real-time Transaction Monitoring',
      'Investment Portfolio Management',
      'AI-powered Financial Insights',
      'Contactless Payments',
      'Multi-currency Support'
    ],
    featuresAr: [
      'المصادقة البيومترية',
      'مراقبة المعاملات في الوقت الفعلي',
      'إدارة محفظة الاستثمار',
      'الرؤى المالية المدعومة بالذكاء الاصطناعي',
      'المدفوعات اللاتلامسية',
      'دعم متعدد العملات'
    ],
    results: [
      '2.5M daily transactions processed',
      '99.8% security compliance score',
      '4.8/5 average app store rating',
      '89% customer adoption rate'
    ],
    resultsAr: [
      '2.5 مليون معاملة يومية تتم معالجتها',
      '99.8% نقاط الامتثال الأمني',
      '4.8/5 متوسط تقييم متجر التطبيقات',
      '89% معدل تبني العملاء'
    ]
  },
  {
    slug: 'logistics-optimization-platform',
    title: 'Smart Logistics Platform - Aramex Saudi',
    titleAr: 'منصة اللوجستيات الذكية - أرامكس السعودية',
    client: 'Aramex Saudi',
    clientAr: 'أرامكس السعودية',
    sector: 'Logistics',
    sectorAr: 'لوجستيات',
    year: 2023,
    status: 'published',
    kpis: [
      {
        id: 'delivery_efficiency',
        label: 'Delivery Efficiency',
        labelAr: 'كفاءة التسليم',
        value: '43%',
        description: 'Improvement in delivery time optimization',
        descriptionAr: 'تحسن في تحسين وقت التسليم',
        icon: 'Truck',
        trend: 'up'
      },
      {
        id: 'cost_reduction',
        label: 'Operational Costs',
        labelAr: 'التكاليف التشغيلية',
        value: '28%',
        description: 'Reduction in operational expenses',
        descriptionAr: 'انخفاض في المصاريف التشغيلية',
        icon: 'DollarSign',
        trend: 'down'
      },
      {
        id: 'tracking_accuracy',
        label: 'Tracking Accuracy',
        labelAr: 'دقة التتبع',
        value: '99.5%',
        description: 'Real-time package tracking precision',
        descriptionAr: 'دقة تتبع الطرود في الوقت الفعلي',
        icon: 'MapPin',
        trend: 'up'
      }
    ],
    tech: ['Flutter', 'Django', 'PostgreSQL', 'Redis', 'Google Maps API', 'IoT Sensors'],
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
        alt: 'Logistics platform dashboard',
        altAr: 'لوحة معلومات منصة اللوجستيات',
        type: 'image'
      }
    ],
    summaryEn: 'AI-powered logistics optimization platform streamlining supply chain operations and delivery management.',
    summaryAr: 'منصة تحسين اللوجستيات المدعومة بالذكاء الاصطناعي لتبسيط عمليات سلسلة التوريد وإدارة التسليم.',
    descriptionEn: 'An intelligent logistics management system that optimizes route planning, tracks shipments in real-time, and provides predictive analytics for supply chain efficiency.',
    descriptionAr: 'نظام إدارة لوجستيات ذكي يحسن تخطيط المسارات ويتتبع الشحنات في الوقت الفعلي ويوفر التحليلات التنبؤية لكفاءة سلسلة التوريد.',
    challengeEn: 'Aramex needed to optimize complex delivery routes across Saudi Arabia while providing real-time visibility and reducing operational costs.',
    challengeAr: 'احتاجت أرامكس إلى تحسين مسارات التسليم المعقدة عبر المملكة العربية السعودية مع توفير الرؤية في الوقت الفعلي وتقليل التكاليف التشغيلية.',
    solutionEn: 'We developed an AI-driven platform with machine learning algorithms for route optimization, IoT integration for real-time tracking, and predictive maintenance capabilities.',
    solutionAr: 'طورنا منصة مدعومة بالذكاء الاصطناعي مع خوارزميات التعلم الآلي لتحسين المسارات وتكامل إنترنت الأشياء للتتبع في الوقت الفعلي وقدرات الصيانة التنبؤية.',
    services: ['AI Development', 'IoT Integration', 'Mobile Applications', 'Data Analytics'],
    servicesAr: ['تطوير الذكاء الاصطناعي', 'تكامل إنترنت الأشياء', 'تطبيقات الجوال', 'تحليل البيانات'],
    duration: '9 months',
    durationAr: '9 أشهر',
    teamSize: 14,
    features: [
      'AI Route Optimization',
      'Real-time GPS Tracking',
      'Predictive Analytics',
      'Automated Dispatch System',
      'Customer Notification System',
      'Performance Dashboard'
    ],
    featuresAr: [
      'تحسين المسار بالذكاء الاصطناعي',
      'تتبع GPS في الوقت الفعلي',
      'التحليلات التنبؤية',
      'نظام الإرسال الآلي',
      'نظام إشعارات العملاء',
      'لوحة معلومات الأداء'
    ],
    results: [
      '43% improvement in delivery efficiency',
      '28% reduction in operational costs',
      '99.5% tracking accuracy',
      '35% increase in customer satisfaction'
    ],
    resultsAr: [
      '43% تحسن في كفاءة التسليم',
      '28% انخفاض في التكاليف التشغيلية',
      '99.5% دقة التتبع',
      '35% زيادة في رضا العملاء'
    ]
  },
  {
    slug: 'educational-platform-ksu',
    title: 'Smart Learning Management System - KSU',
    titleAr: 'نظام إدارة التعلم الذكي - جامعة الملك سعود',
    client: 'King Saud University',
    clientAr: 'جامعة الملك سعود',
    sector: 'Education',
    sectorAr: 'تعليمي',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'student_engagement',
        label: 'Student Engagement',
        labelAr: 'مشاركة الطلاب',
        value: '87%',
        description: 'Active participation in online learning',
        descriptionAr: 'المشاركة النشطة في التعلم عبر الإنترنت',
        icon: 'Users',
        trend: 'up'
      },
      {
        id: 'course_completion',
        label: 'Course Completion',
        labelAr: 'إتمام الدورات',
        value: '92%',
        description: 'Students completing their courses',
        descriptionAr: 'الطلاب الذين يكملون دوراتهم',
        icon: 'BookOpen',
        trend: 'up'
      },
      {
        id: 'performance_improvement',
        label: 'Performance Boost',
        labelAr: 'تحسن الأداء',
        value: '34%',
        description: 'Average grade improvement',
        descriptionAr: 'متوسط تحسن الدرجات',
        icon: 'TrendingUp',
        trend: 'up'
      }
    ],
    tech: ['Next.js', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS S3'],
    coverImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop',
        alt: 'Educational platform interface',
        altAr: 'واجهة المنصة التعليمية',
        type: 'image'
      }
    ],
    summaryEn: 'Comprehensive e-learning platform enhancing educational delivery and student engagement at university level.',
    summaryAr: 'منصة تعلم إلكتروني شاملة تعزز التعليم وتفاعل الطلاب على مستوى الجامعة.',
    descriptionEn: 'An advanced learning management system featuring virtual classrooms, AI-powered personalized learning paths, interactive content delivery, and comprehensive progress tracking.',
    descriptionAr: 'نظام إدارة تعلم متقدم يتميز بالفصول الافتراضية ومسارات التعلم المخصصة المدعومة بالذكاء الاصطناعي وتقديم المحتوى التفاعلي وتتبع التقدم الشامل.',
    challengeEn: 'The university needed a scalable platform to support 50,000+ students with diverse learning needs while maintaining high-quality educational standards.',
    challengeAr: 'احتاجت الجامعة إلى منصة قابلة للتوسع لدعم أكثر من 50,000 طالب مع احتياجات تعليمية متنوعة مع الحفاظ على معايير تعليمية عالية الجودة.',
    solutionEn: 'We created a comprehensive LMS with adaptive learning algorithms, integrated video conferencing, automated assessment tools, and analytics for personalized education.',
    solutionAr: 'أنشأنا نظام إدارة تعلم شامل مع خوارزميات التعلم التكيفي والمؤتمرات المرئية المتكاملة وأدوات التقييم الآلي والتحليلات للتعليم المخصص.',
    services: ['E-Learning Solutions', 'Video Streaming', 'AI Implementation', 'System Architecture'],
    servicesAr: ['حلول التعلم الإلكتروني', 'بث الفيديو', 'تنفيذ الذكاء الاصطناعي', 'هندسة الأنظمة'],
    duration: '11 months',
    durationAr: '11 شهر',
    teamSize: 16,
    features: [
      'Virtual Classrooms',
      'AI-Powered Learning Paths',
      'Interactive Content Library',
      'Automated Grading System',
      'Progress Analytics',
      'Mobile Learning App'
    ],
    featuresAr: [
      'الفصول الافتراضية',
      'مسارات التعلم المدعومة بالذكاء الاصطناعي',
      'مكتبة المحتوى التفاعلي',
      'نظام التقييم الآلي',
      'تحليلات التقدم',
      'تطبيق التعلم المحمول'
    ],
    results: [
      '87% student engagement rate',
      '92% course completion rate',
      '34% average performance improvement',
      '95% faculty satisfaction'
    ],
    resultsAr: [
      '87% معدل مشاركة الطلاب',
      '92% معدل إتمام الدورات',
      '34% متوسط تحسن الأداء',
      '95% رضا أعضاء هيئة التدريس'
    ]
  }
];

// Filter options for the portfolio
export const portfolioFilters = {
  industries: [
    { value: '', label: 'All Industries', labelAr: 'جميع الصناعات' },
    { value: 'E-commerce', label: 'E-commerce', labelAr: 'تجارة إلكترونية' },
    { value: 'Government', label: 'Government', labelAr: 'حكومي' },
    { value: 'Healthcare', label: 'Healthcare', labelAr: 'صحي' },
    { value: 'Finance', label: 'Finance', labelAr: 'مالي' },
    { value: 'Logistics', label: 'Logistics', labelAr: 'لوجستيات' },
    { value: 'Education', label: 'Education', labelAr: 'تعليمي' }
  ],
  
  technologies: [
    'React', 'Vue.js', 'Angular', 'Next.js', 'Flutter', 'React Native',
    'Node.js', 'Express.js', 'Laravel', 'Django', 'Spring Boot',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
    'AWS', 'Azure', 'Docker', 'Kubernetes'
  ],
  
  services: [
    { value: 'Web Development', labelAr: 'تطوير المواقع' },
    { value: 'Mobile Apps', labelAr: 'تطبيقات الجوال' },
    { value: 'System Integration', labelAr: 'تكامل الأنظمة' },
    { value: 'UX/UI Design', labelAr: 'تصميم UX/UI' },
    { value: 'AI Implementation', labelAr: 'تنفيذ الذكاء الاصطناعي' },
    { value: 'Cybersecurity', labelAr: 'الأمن السيبراني' }
  ],
  
  years: [2024, 2023, 2022, 2021],
  
  sortOptions: [
    { value: 'newest', label: 'Newest First', labelAr: 'الأحدث أولاً' },
    { value: 'oldest', label: 'Oldest First', labelAr: 'الأقدم أولاً' },
    { value: 'alphabetical', label: 'Alphabetical', labelAr: 'أبجدياً' },
    { value: 'industry', label: 'By Industry', labelAr: 'حسب الصناعة' }
  ]
};