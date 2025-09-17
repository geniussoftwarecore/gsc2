import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { COMPANY_INFO, STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Users, User, Palette, Smartphone, TrendingUp, MessageCircle, Eye, Heart, Target, Lightbulb, Shield, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/i18n/lang";

export default function About() {
  const { t } = useTranslation();
  const { lang, dir } = useLanguage();
  const isRTL = dir === 'rtl';
  
  const teamMembers = [
    {
      name: "أحمد محمد",
      role: "المدير التقني",
      bio: "خبرة +8 سنوات في تطوير التطبيقات والأنظمة",
      icon: User,
      skills: ["React", "Node.js", "Python", "AWS"],
    },
    {
      name: "سارة أحمد",
      role: "مصممة UI/UX",
      bio: "متخصصة في تصميم تجربة المستخدم وواجهات التطبيقات",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      name: "محمد علي",
      role: "مطور تطبيقات محمولة",
      bio: "خبير في تطوير التطبيقات للأندرويد و iOS",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      name: "فاطمة خالد",
      role: "أخصائية تسويق رقمي",
      bio: "خبيرة في استراتيجيات التسويق الرقمي وإدارة وسائل التواصل",
      icon: TrendingUp,
      skills: ["Google Ads", "Social Media", "SEO", "Analytics"],
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "تأسيس الشركة",
      description: "انطلاق رحلتنا في عالم التكنولوجيا مع رؤية واضحة",
    },
    {
      year: "2024",
      title: "أول مشروع كبير",
      description: "تطوير نظام ERP متكامل لشركة رائدة في المنطقة",
    },
    {
      year: "2024",
      title: "توسع الفريق",
      description: "انضمام خبراء جدد في التصميم والتطوير",
    },
    {
      year: "2025",
      title: "إطلاق أطرنا المفتوحة",
      description: "مشاركة أدواتنا التقنية مع مجتمع المطورين",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "الابتكار",
      description: "نسعى دائماً لإيجاد حلول مبتكرة تلبي احتياجات العملاء",
    },
    {
      icon: Users,
      title: "التعاون",
      description: "نؤمن بقوة العمل الجماعي وأهمية التعاون مع عملائنا",
    },
    {
      icon: Target,
      title: "الجودة",
      description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا",
    },
    {
      icon: Heart,
      title: "التركيز على العميل",
      description: "رضا العميل هو أولويتنا القصوى في كل ما نقوم به",
    },
  ];

  return (
    <>
      <PageHeader 
        title={dir === 'rtl' ? 'معلومات عنا' : 'About Us'}
        subtitle={dir === 'rtl' 
          ? 'نحن شركة رائدة في مجال تطوير البرمجيات، نقدم حلولاً تقنية مبتكرة تساعد الشركات على النمو والازدهار في العصر الرقمي'
          : 'We are a leading software development company providing innovative technical solutions to help businesses grow and thrive in the digital age'
        }
        background="light"
      />

      <Section size="xl" background="white">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3}>
              <h2 className={`text-4xl lg:text-5xl font-bold text-secondary mb-6 ${dir ? 'text-right' : 'text-left'}`}>
                {t('about.storyTitle')}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${dir ? 'text-right' : 'text-left'}`}>
                {t('about.storyParagraph1').replace('{companyName}', COMPANY_INFO.name)}
              </p>
              <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${dir ? 'text-right' : 'text-left'}`}>
                {t('about.storyParagraph2')}
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl text-base font-semibold"
                >
                  <i className="fas fa-handshake mr-2"></i>
                  {t('about.partnership')}
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary/10 to-primary/25 rounded-2xl shadow-2xl p-20 flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary"
                >
                  <Users size={120} />
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      <Section size="xl" background="light">
        <Container size="md">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              رحلتنا عبر الزمن
            </h2>
            <p className="text-xl text-gray-600">
              المحطات المهمة في تطور شركتنا
            </p>
          </AnimatedText>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6" hover={true}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="xl" background="white">
        <Container size="lg">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              إنجازاتنا بالأرقام
            </h2>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-8" hover={true}>
                <CardContent className="p-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-primary mb-4"
                  >
                    {stat.value}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {stat.label}
                  </h3>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="xl" background="light">
        <Container size="lg">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              فريقنا المميز
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة من الخبراء والمتخصصين الذين يعملون بشغف لتحقيق رؤيتنا
            </p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 text-center" hover={true}>
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6"
                  >
                    <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-primary/40 shadow-lg flex items-center justify-center">
                      <member.icon className="text-primary" size={48} />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="xl" background="white">
        <Container size="lg">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المبادئ التي توجه عملنا وتشكل ثقافتنا المؤسسية
            </p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 text-center" hover={true}>
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl text-primary mb-4"
                  >
                    <value.icon size={48} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="xl" background="gradient">
        <Container size="md" className="text-center">
          <AnimatedSection delay={0.3}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              جاهزون للعمل معك
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              دعنا نتعاون معاً لتحويل رؤيتك إلى واقع رقمي مبهر
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl text-base font-semibold"
                >
                  <MessageCircle size={20} className="mr-2" />
                  ابدأ محادثة
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl text-base font-semibold"
                >
                  <Eye size={20} className="mr-2" />
                  اطلع على أعمالنا
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}