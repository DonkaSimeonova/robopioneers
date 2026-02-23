import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Heart, Rocket, Shield, Award, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 } as const,
  }),
};

const reasons = [
  {
    icon: MapPin,
    title: "Локално присъствие в Русе",
    desc: "Присъствено обучение по роботика в град Русе. Децата учат в модерна зала с професионално оборудване.",
  },
  {
    icon: Users,
    title: "Общност в Русе",
    desc: "Част от растяща общност от млади изследователи в Русе. Организираме локални състезания и демонстрации.",
  },
  {
    icon: Rocket,
    title: "Подготовка за бъдещи професии",
    desc: "STEM обучение в Русе, което развива умения за бъдещето – програмиране, инженерство и критично мислене.",
  },
  {
    icon: Shield,
    title: "Безопасна и вдъхновяваща среда",
    desc: "Сигурна учебна среда с пълен контакт с родителите. Прозрачност и доверие.",
  },
  {
    icon: Award,
    title: "Доказани резултати",
    desc: "Нашите ученици от Русе участват в национални и международни състезания по роботика.",
  },
  {
    icon: Heart,
    title: "Страст към обучението",
    desc: "Вдъхновяваме любов към технологиите и науката. Учим децата, че ученето може да бъде забавно.",
  },
];

const WhyUs = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Защо RoboPioneers в Русе
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Водещото училище по роботика в Русе с мисия да вдъхнови следващото поколение иноватори.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                  <reason.icon size={24} className="text-primary-foreground" />
                </div>
                <h2 className="font-display font-bold text-xl mb-3">{reason.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/контакти">
              <Button variant="hero" size="lg">
                Запишете се за безплатен пробен урок
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
