import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

export function PortfolioPreview() {
  const { dir } = useLanguage();
  const { t } = useTranslation();

  // Sample portfolio items with bilingual support
  const portfolioItems = [
    {
      title: dir === 'rtl' ? 'منصة تجارة إلكترونية' : 'E-commerce Platform',
      description: dir === 'rtl' ? 'منصة شاملة للتجارة الإلكترونية مع إدارة متكاملة للمخزون والمبيعات' : 'Comprehensive e-commerce platform with integrated inventory and sales management',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      category: dir === 'rtl' ? 'تطبيقات الويب' : 'Web Applications'
    },
    {
      title: dir === 'rtl' ? 'تطبيق إدارة المشاريع' : 'Project Management App',
      description: dir === 'rtl' ? 'تطبيق متطور لإدارة المشاريع والفرق مع تتبع المهام والزمن' : 'Advanced project and team management app with task and time tracking',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: dir === 'rtl' ? 'تطبيقات الجوال' : 'Mobile Applications'
    },
    {
      title: dir === 'rtl' ? 'نظام ERP شامل' : 'Complete ERP System',
      description: dir === 'rtl' ? 'نظام شامل لإدارة موارد المؤسسة مع وحدات المحاسبة والمخزون والموارد البشرية' : 'Comprehensive ERP system with accounting, inventory, and HR modules',
      image: '/api/placeholder/600/400',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      category: dir === 'rtl' ? 'أنظمة المؤسسات' : 'Enterprise Systems'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-brand-sky-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p
            className="text-lg text-brand-text-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-sky-base hover:border-primary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              data-testid={`portfolio-item-${index}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-brand-sky-base to-primary">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-brand-sky-accent/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium">{item.category}</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                >
                  <Button
                    size="sm"
                    variant="secondary"
                    className="text-primary border-white bg-white hover:bg-gray-100"
                  >
                    {t('portfolio.viewProject')}
                  </Button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-brand-sky-light text-primary text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-brand-text-muted mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.div
                  className="flex items-center gap-2 text-primary font-medium cursor-pointer group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                >
                  <span>{t('portfolio.viewProject')}</span>
                  <ArrowRight 
                    className={cn(
                      "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                      dir === 'rtl' && "rotate-180 group-hover:-translate-x-1"
                    )} 
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold group"
            data-testid="view-all-portfolio"
          >
            {t('portfolio.viewAll')}
            <ArrowRight 
              className={cn(
                "w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1",
                dir === 'rtl' && "rotate-180 mr-2 ml-0 group-hover:-translate-x-1"
              )} 
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}