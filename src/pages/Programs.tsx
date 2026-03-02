import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, Cpu, Star, Clock, Users, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 } as const,
  }),
};

const programs = [
  {
    age: "5–7 години",
    title: "Курсове по роботика за деца в Русе",
    subtitle: "Малки изследователи",
    desc: "Първи стъпки в LEGO роботиката за деца в Русе. Децата учат основни концепции чрез игра, строене и въображение. Развиват логическо мислене, креативност и работа в екип в среда, съобразена с тяхната възраст.",
    details: ["LEGO Education SPIKE Essential", "Основи на механиката и конструирането", "Творчески проекти и въображение", "Работа в малки групи"],
    icon: Lightbulb,
    color: "bg-success",
    duration: "1 час/седмица",
    groupSize: "До 6 деца",
  },
  {
    age: "8–11 години",
    title: "Обучение по роботика и програмиране в Русе",
    subtitle: "Млади инженери",
    desc: "Курсове по роботика в Русе за деца, които искат да навлязат по-дълбоко в програмирането и инженерството. Използваме LEGO SPIKE Prime с визуално програмиране, сензори и мотори. Децата развиват аналитично мислене и умения за решаване на проблеми.",
    details: ["LEGO SPIKE Prime", "Блоково програмиране", "Сензори и мотори", "Подготовка за състезания"],
    icon: Cpu,
    color: "bg-primary",
    duration: "1.5 часа/седмица",
    groupSize: "До 8 деца",
  },
  {
    age: "12–18 години",
    title: "Напреднало STEM обучение в Русе",
    subtitle: "Бъдещи иноватори",
    desc: "Напреднали курсове по роботика, изкуствен интелект и програмиране за тийнейджъри в Русе. Python, машинно обучение, компютърни науки и реални проекти, които подготвят учениците за бъдещето.",
    details: ["Python програмиране", "Изкуствен интелект и ML", "Компютърни науки", "Международни състезания"],
    icon: Star,
    color: "bg-accent",
    duration: "2 часа/седмица",
    groupSize: "До 8 ученика",
  },
];

const Programs = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Програми по роботика в Русе
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Курсове по роботика за деца в Русе – от 5 до 18 години. LEGO Robotics, Science и AI обучение.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 space-y-4 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              Нашите учебни програми са разработени по собствена методика, изградена върху дългогодишния ни преподавателски опит и практиката ни в работата с деца. В обучението използваме материалите на <strong className="text-foreground">LEGO Education</strong>, като внедряваме и най-новите им програми, свързани с Наука, изкуствен интелект и компютърни науки.
            </p>
            <p>
              Съдържанието е внимателно адаптирано спрямо възрастта и нивото на децата. Работим гъвкаво и съобразяваме методите си с начина, по който новите поколения възприемат информация. Благодарение на над 15 години наблюдение и практика, познаваме промените в мотивацията, концентрацията и начина на учене на учениците и постоянно развиваме програмите си, за да отговарят на тези нужди.
            </p>
          </motion.div>
          <div className="flex flex-col gap-16">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-5 gap-8 items-start"
              >
                <motion.div variants={fadeUp} custom={0} className="md:col-span-3 bg-card rounded-xl p-8 card-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center`}>
                      <program.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-muted-foreground">{program.age}</span>
                      <p className="text-xs text-muted-foreground">{program.subtitle}</p>
                    </div>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{program.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{program.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {program.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Award size={16} className="text-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link to="/контакти">
                    <Button variant="hero">Запишете се</Button>
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} custom={1} className="md:col-span-2 space-y-4">
                  <div className="bg-muted rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={18} className="text-primary" />
                      <span className="font-semibold text-sm">Продължителност</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{program.duration}</p>
                  </div>
                  <div className="bg-muted rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={18} className="text-primary" />
                      <span className="font-semibold text-sm">Размер на групата</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{program.groupSize}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
