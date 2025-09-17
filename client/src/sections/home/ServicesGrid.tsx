import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Link, 
  Palette, 
  Server,
  ArrowRight
} from "lucide-react";

export function ServicesGrid() {
  const { dir } = useLanguage();
  const { t } = useTranslation();

  // Define service items with language support
  const serviceItems = [
    {
      title: dir === 'rtl' ? "تطبيقات الويب" : "Web Apps",
      desc: dir === 'rtl' ? "حلول ويب متطورة وسريعة الاستجابة" : "Advanced and responsive web solutions"
    },
    {
      title: dir === 'rtl' ? "تطبيقات الجوال" : "Mobile Apps",
      desc: dir === 'rtl' ? "تطبيقات ذكية لأندرويد و iOS" : "Smart applications for Android & iOS"
    },
    {
      title: dir === 'rtl' ? "أنظمة ERP/CRM" : "ERP/CRM Systems",
      desc: dir === 'rtl' ? "حلول شاملة لإدارة الأعمال والعملاء" : "Comprehensive business and customer management"
    },
    {
      title: dir === 'rtl' ? "التكاملات" : "Integrations",
      desc: dir === 'rtl' ? "ربط الأنظمة وتبادل البيانات" : "System connectivity and data exchange"
    },
    {
      title: dir === 'rtl' ? "التصميم وتجربة المستخدم" : "Design & UX",
      desc: dir === 'rtl' ? "واجهات جذابة وتجارب مميزة" : "Attractive interfaces and distinctive experiences"
    },
    {
      title: dir === 'rtl' ? "DevOps والبنية التحتية" : "DevOps",
      desc: dir === 'rtl' ? "حلول موثوقة وقابلة للتوسع" : "Reliable and scalable infrastructure"
    }
  ];

  const icons = [Globe, Smartphone, Database, Link, Palette, Server];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-sky-light to-white">
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
            {t('services.title')}
          </motion.h2>
          <motion.p
            className="text-lg text-brand-text-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceItems.map((service, index) => {
            const IconComponent = icons[index] || Globe;
            
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-sky-base hover:border-primary overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                data-testid={`service-card-${index}`}
              >
                {/* Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-sky-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-brand-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-muted mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center gap-2 text-primary font-medium cursor-pointer group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                  >
                    <span>{t('services.learnMore')}</span>
                    <ArrowRight 
                      className={cn(
                        "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                        dir === 'rtl' && "rotate-180 group-hover:-translate-x-1"
                      )} 
                    />
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1 h-1 bg-brand-sky-accent rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
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
            data-testid="view-all-services"
          >
            {t('services.viewAll')}
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