export const SERVICES = [
  {
    id: 'mobile',
    title: 'تطبيقات الهواتف الذكية',
    description: 'نطور تطبيقات احترافية وسريعة الاستجابة لأنظمة iOS و Android بأحدث التقنيات والمعايير العالمية مع واجهات مستخدم حديثة وتجربة استخدام مميزة',
    icon: 'fas fa-mobile-alt',
    category: 'mobile',
    featured: false,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    deliveryTime: '4-8 أسابيع',
    startingPrice: '15,000 ريال'
  },
  {
    id: 'web',
    title: 'تطوير المواقع والمنصات',
    description: 'إنشاء مواقع ومنصات إلكترونية متطورة وسريعة الاستجابة بتصميم جذاب وأداء عالي مع أنظمة إدارة محتوى سهلة الاستخدام',
    icon: 'fas fa-code',
    category: 'web',
    featured: true,
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    deliveryTime: '3-6 أسابيع',
    startingPrice: '8,000 ريال'
  },
  {
    id: 'design',
    title: 'تصميم الجرافيكس والهوية البصرية',
    description: 'تصميم الشعارات والهوية البصرية والمواد التسويقية الإبداعية التي تعكس قيم علامتك التجارية وتجذب العملاء',
    icon: 'fas fa-palette',
    category: 'design',
    featured: false,
    technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Illustrator', 'Photoshop'],
    deliveryTime: '1-3 أسابيع',
    startingPrice: '2,500 ريال'
  },
  {
    id: 'marketing',
    title: 'التسويق الرقمي والإعلانات',
    description: 'استراتيجيات تسويق رقمية شاملة وحملات إعلانية مدروسة على منصات التواصل الاجتماعي ومحركات البحث لزيادة المبيعات والوصول',
    icon: 'fas fa-bullhorn',
    category: 'marketing',
    featured: false,
    technologies: ['Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'Analytics'],
    deliveryTime: 'مستمر',
    startingPrice: '3,000 ريال/شهرياً'
  },
  {
    id: 'smart',
    title: 'الحلول الذكية والذكاء الاصطناعي',
    description: 'تطوير حلول برمجية ذكية ومتقدمة باستخدام تقنيات الذكاء الاصطناعي والتعلم الآلي لأتمتة العمليات وتحسين الكفاءة',
    icon: 'fas fa-brain',
    category: 'smart',
    featured: true,
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Machine Learning', 'Computer Vision'],
    deliveryTime: '6-12 أسبوع',
    startingPrice: '25,000 ريال'
  },
  {
    id: 'erp',
    title: 'أنظمة إدارة الموارد ERPNext',
    description: 'تطبيق وتخصيص أنظمة إدارة الموارد المؤسسية الشاملة لتنظيم جميع جوانب أعمالك من المحاسبة إلى إدارة المخزون والموارد البشرية',
    icon: 'fas fa-cogs',
    category: 'erp',
    featured: false,
    technologies: ['ERPNext', 'Python', 'Frappe Framework', 'MariaDB', 'Redis'],
    deliveryTime: '8-16 أسبوع',
    startingPrice: '20,000 ريال'
  }
];

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', name: 'جميع المشاريع' },
  { id: 'mobile', name: 'تطبيقات الهواتف' },
  { id: 'web', name: 'مواقع الإنترنت' },
  { id: 'design', name: 'تصميم جرافيكي' },
  { id: 'erp', name: 'أنظمة ERP' },
];

export const COMPANY_INFO = {
  name: 'Genius Software Core',
  shortName: 'GSC',
  tagline: 'حول فكرتك إلى منتج رقمي يصنع فرقاً',
  description: 'نساعدك في تحويل أفكارك إلى حلول رقمية مبتكرة ومتطورة تواكب احتياجات عملك وتحقق أهدافك التجارية بأحدث التقنيات والمعايير العالمية',
  mission: 'مساعدة الشركات والأفراد في تحقيق أهدافهم من خلال حلول برمجية مبتكرة وموثوقة',
  vision: 'أن نكون الشريك التقني الأول للشركات في المنطقة العربية',
  phone: '+967 735158003',
  email: 'info@geniussoftwarecore.com',
  address: 'الرياض، المملكة العربية السعودية',
  workingHours: 'الأحد - الخميس: 9:00 ص - 6:00 م',
  socialMedia: {
    whatsapp: 'https://wa.me/967735158003',
    telegram: 'https://t.me/geniussoftwarecore',
    linkedin: 'https://linkedin.com/company/genius-software-core',
    github: 'https://github.com/genius-software-core',
    facebook: 'https://facebook.com/geniussoftwarecore',
    twitter: 'https://twitter.com/geniussoftware',
    instagram: 'https://instagram.com/geniussoftwarecore'
  }
};

export const STATS = [
  { value: '5+', label: 'سنوات خبرة', icon: 'fas fa-calendar-alt' },
  { value: '150+', label: 'مشروع منجز', icon: 'fas fa-project-diagram' },
  { value: '80+', label: 'عميل راضي', icon: 'fas fa-users' },
  { value: '24/7', label: 'دعم فني', icon: 'fas fa-headset' }
];
