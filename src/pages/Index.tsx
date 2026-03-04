import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, Cpu, Brain, Users, CheckCircle, Star, GraduationCap, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-robotics.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 } as const,
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container relative py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Училище по роботика в Русе – RoboPioneers
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
                LEGO Robotics, Science и AI обучение за деца от 5 до 18 години в Русе. 
                Подготвяме следващото поколение иноватори в град Русе.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/контакти#пробни-уроци">
                  <Button variant="hero" size="lg">
                    Запиши се
                  </Button>
                </Link>
                <Link to="/програми">
                  <Button variant="heroOutline" size="lg">
                    Вижте програмите
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} /> Присъствено в Русе</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} /> Малки групи</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} /> Пробни уроци през януари и септември</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src={heroImage}
                alt="Деца учат роботика в RoboPioneers Русе"
                className="rounded-2xl shadow-2xl"
                loading="eager"
                width={640}
                height={360}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Защо да изберете нашето училище по роботика в Русе
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              RoboPioneers съчетава STEM обучение в Русе с модерни технологии и вдъхновяващи преподаватели.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: GraduationCap, title: "От 2015 г. в Русе", desc: "Стотици русенски деца преминаха през нашите курсове. Много от тях избраха техническите науки за свой път." },
              { icon: Users, title: "Учители по професия", desc: "Дългогодишни преподаватели по информатика и ИТ с опит, методика и разбиране на всяко дете." },
              { icon: Brain, title: "Мислене, не инструкции", desc: "Учим децата да мислят, анализират и създават – вместо просто да следват стъпки." },
              { icon: Bot, title: "Подготовка за бъдещето", desc: "Изграждаме пионери – хора, които задават въпроси, търсят решения и не се страхуват от неизвестното." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs overview */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-4">
              Програми по възраст
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Курсове по роботика в Русе, адаптирани за всяка възраст – от 5 до 18 години.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                age: "5–7 години",
                title: "Малки изследователи",
                desc: "LEGO роботика за деца в Русе. Първи стъпки в света на технологиите чрез игра и творчество.",
                color: "bg-success",
                icon: Lightbulb,
              },
              {
                age: "8–11 години",
                title: "Млади инженери",
                desc: "Обучение по роботика и програмиране в Русе. Строене, кодиране и решаване на задачи.",
                color: "bg-primary",
                icon: Cpu,
              },
              {
                age: "12–18 години",
                title: "Бъдещи иноватори",
                desc: "Напреднало STEM обучение в Русе. AI, 3D принтиране и подготовка за състезания.",
                color: "bg-accent",
                icon: Star,
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${program.color} h-2`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${program.color} flex items-center justify-center`}>
                      <program.icon size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">{program.age}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.desc}</p>
                  <Link to="/програми">
                    <Button variant="outline" size="sm">Научете повече</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold mb-4">
              Предимства на обучението в Русе
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {[
              "Присъствено обучение по роботика в Русе",
              "Малки групи – до 8 деца",
              "Безплатен пробен урок за нови ученици",
              "Редовен контакт с родителите",
              "Сертификати за завършени курсове",
              "Подготовка за национални и международни състезания",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-3 p-4 bg-card rounded-xl card-shadow"
              >
                <CheckCircle className="text-success mt-0.5 shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Заявете интерес за пробен урок в Русе
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Безплатни пробни уроци провеждаме през януари и септември. Запишете се, за да ви уведомим!
            </p>
            <Link to="/контакти#пробни-уроци">
              <Button variant="hero" size="lg" className="animate-pulse-glow">
                Запиши се
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
