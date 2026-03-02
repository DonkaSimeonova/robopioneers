import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Rocket, Brain, Lightbulb, Users } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "От 2015 г. в Русе", desc: "Стотици русенски деца преминаха през нашите курсове. Много от тях избраха техническите науки за свой път." },
  { icon: Users, title: "Учители по професия", desc: "Дългогодишни преподаватели по информатика и ИТ с опит, методика и разбиране на всяко дете." },
  { icon: Brain, title: "Мислене, не инструкции", desc: "Учим децата да мислят, анализират и създават – вместо просто да следват стъпки." },
  { icon: Rocket, title: "Подготовка за бъдещето", desc: "Изграждаме пионери – хора, които задават въпроси, търсят решения и не се страхуват от неизвестното." },
  { icon: Lightbulb, title: "Повече от роботика", desc: "Любопитство, постоянство, самостоятелност и смелост да експериментират." },
  { icon: Heart, title: "Ясна мисия", desc: "Уверени, мислещи и търсещи млади хора, готови да бъдат част от създаването на бъдещето." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

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
            Защо да изберете нашето училище по роботика?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Опит, методика и мисия от 2015 г. – RoboPioneers в Русе.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none space-y-6 text-muted-foreground"
          >
            <p>
              <strong className="text-foreground">RoboPioneers работи в Русе от 2015 година.</strong> През годините стотици русенски деца преминаха през нашите курсове по роботика. Много от тях избраха техническите науки за свой професионален път, а някои днес преподават рамо до рамо с нас. Това е най-голямото доказателство за устойчивостта и смисъла на нашата работа.
            </p>
            <p>
              Ние сме <strong className="text-foreground">учители по професия</strong> и дългогодишни преподаватели по информатика и информационни технологии. Знаем, че истинското обучение е дълъг процес, който изисква търпение, последователност и разбиране на всяко дете. Затова при нас роботиката не е само сглобяване и програмиране. <strong className="text-foreground">Тя е инструмент за изграждане на мислене, характер и увереност.</strong>
            </p>
            <p>
              Вярваме, че не можем със сигурност да предвидим професиите на бъдещето. Но можем да подготвим децата за тях, като ги изградим като <strong className="text-foreground">пионери</strong> – хора, които задават въпроси, търсят решения, приемат грешките като част от развитието и не се страхуват от неизвестното.
            </p>
            <p>
              В нашето училище децата развиват не само технически умения, а <strong className="text-foreground">любопитство, постоянство, самостоятелност и смелост</strong> да експериментират. Учим ги да мислят, да анализират и да създават, вместо просто да следват инструкции.
            </p>
            <p>
              Избирайки нашето училище по роботика, вие избирате среда с опит, методика и ясна мисия – <strong className="text-foreground">да изграждаме уверени, мислещи и търсещи млади хора</strong>, готови не просто да посрещнат бъдещето, а да бъдат част от неговото създаване.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h2 className="font-display font-bold text-xl mb-3">{item.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
