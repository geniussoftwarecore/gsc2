import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { 
  Users, 
  TrendingUp, 
  Headphones, 
  ExternalLink,
  BarChart3,
  UserCheck,
  MessageSquare
} from "lucide-react";

export function CRMShowcase() {
  const { dir } = useLanguage();
  const { t } = useTranslation();

  // Define CRM cards with language support
  const crmCards = [
    {
      title: dir === 'rtl' ? "الكيانات الأساسية" : "Core Entities"
    },
    {
      title: dir === 'rtl' ? "مسار المبيعات" : "Sales Pipeline"
    },
    {
      title: dir === 'rtl' ? "التذاكر والدعم" : "Tickets & Support"
    }
  ];
  const icons = [Users, TrendingUp, Headphones];
  const colors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600', 
    'from-purple-500 to-purple-600'
  ];

  return (
    <section className="py-20 bg-brand-text-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-0 left-0 fill-current text-white">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('crm.title')}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {dir === 'rtl' 
              ? 'نظام شامل لإدارة العملاء والمبيعات والدعم الفني'
              : 'Comprehensive system for customer, sales, and support management'
            }
          </motion.p>
        </motion.div>

        {/* CRM Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {crmCards.map((card, index) => {
            const IconComponent = icons[index];
            const colorClass = colors[index];
            
            return (
              <motion.div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                data-testid={`crm-card-${index}`}
              >
                {/* Background Gradient */}
                <motion.div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                    colorClass
                  )}
                  initial={false}
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={cn(
                    "w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300",
                    colorClass
                  )}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Feature Indicators */}
                  <div className="space-y-2">
                    {index === 0 && (
                      <>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <UserCheck className="w-4 h-4" />
                          <span>{dir === 'rtl' ? 'إدارة العملاء' : 'Customer Management'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <BarChart3 className="w-4 h-4" />
                          <span>{dir === 'rtl' ? 'التقارير المتقدمة' : 'Advanced Reports'}</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4" />
                          <span>{dir === 'rtl' ? 'تتبع المبيعات' : 'Sales Tracking'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <BarChart3 className="w-4 h-4" />
                          <span>{dir === 'rtl' ? 'مؤشرات الأداء' : 'Performance Metrics'}</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <MessageSquare className="w-4 h-4" />
                          <span>{dir === 'rtl' ? 'إدارة التذاكر' : 'Ticket Management'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Headphones className="w-4 h-4" />
                          <span>{dir === 'rtl' ? 'دعم العملاء' : 'Customer Support'}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-60"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Open Demo Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            data-testid="open-crm-demo"
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {t('crm.openDemo')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}