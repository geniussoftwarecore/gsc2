import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, LucideIcon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/i18n/lang";

interface ContactChannel {
  icon: LucideIcon;
  title: string;
  info: string;
  action: string;
  description: string;
}

export function ContactChannels() {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  const contactInfo: ContactChannel[] = [
    {
      icon: Phone,
      title: dir === 'rtl' ? 'الهاتف' : 'Phone',
      info: "+967 777 123 456",
      action: "tel:+967777123456",
      description: dir === 'rtl' ? 'متاح 24/7 للطوارئ' : 'Available 24/7 for emergencies',
    },
    {
      icon: Mail,
      title: dir === 'rtl' ? 'البريد الإلكتروني' : 'Email',
      info: "info@geniuscore.dev",
      action: "mailto:info@geniuscore.dev",
      description: dir === 'rtl' ? 'نرد خلال 24 ساعة' : 'Response within 24 hours',
    },
    {
      icon: MessageCircle,
      title: dir === 'rtl' ? 'واتساب' : 'WhatsApp',
      info: "+967 777 123 456",
      action: "https://wa.me/967777123456",
      description: dir === 'rtl' ? 'تواصل فوري' : 'Instant communication',
    },
    {
      icon: MapPin,
      title: dir === 'rtl' ? 'العنوان' : 'Address',
      info: dir === 'rtl' ? 'صنعاء، اليمن' : 'Sana\'a, Yemen',
      action: "#",
      description: dir === 'rtl' ? 'مكتبنا الرئيسي' : 'Our main office',
    },
  ];

  return (
    <Section size="xl" background="white">
      <Container size="lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="text-center p-8" hover={true}>
              <CardContent className="p-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary text-4xl mb-6 flex justify-center"
                >
                  <info.icon size={48} />
                </motion.div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {info.title}
                </h3>
                <a
                  href={info.action}
                  className="text-primary font-semibold block mb-3 hover:text-primary-dark transition-colors text-lg"
                >
                  {info.info}
                </a>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {info.description}
                </p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}