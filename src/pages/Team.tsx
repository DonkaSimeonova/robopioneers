import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Rocket } from "lucide-react";
import teacher1 from "@/assets/team-teacher-1.jpg";
import teacher2 from "@/assets/team-teacher-2.jpg";
import engineer from "@/assets/team-engineer.jpg";
import social from "@/assets/team-social.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const teamMembers = [
  {
    name: "Иван Петров",
    role: "Преподавател по информатика и ИТ",
    image: teacher1,
    desc: "Иван е учител по информатика с над 15 години опит в образованието. Той е един от основателите на RoboPioneers и е работил с над 500 деца от различни възрасти. Неговият подход съчетава структурираност и свобода за експерименти.",
    quote: "„Всяко дете има свой ритъм на учене – моята задача е да го открия и да вървя заедно с него."",
  },
  {
    name: "Мария Георгиева",
    role: "Преподавател по информатика и ИТ",
    image: teacher2,
    desc: "Мария е дългогодишен преподавател по информационни технологии с методически опит и задълбочено разбиране за работата с деца. Тя развива учебните програми и адаптира съдържанието спрямо нуждите на всяка група.",
    quote: "„Истинското учене започва, когато детето спре да се страхува да сгреши."",
  },
  {
    name: "Александър Димитров",
    role: "STEM инженер · Бивш ученик на школата",
    image: engineer,
    desc: "Александър е инженер в STEM областта и бивш ученик на RoboPioneers. Започнал е като дете в нашите първи групи, а днес преподава рамо до рамо с основателите. Неговият път е най-силното доказателство, че роботиката може да се превърне в професия.",
    quote: "„Тук се научих да мисля като инженер – сега искам да предам това на следващите."",
  },
  {
    name: "Елена Тодорова",
    role: "Студент „Социални дейности" · Асистент",
    image: social,
    desc: "Елена е студент по социални дейности с интерес към приобщаващото образование и работа с деца със специфични образователни потребности. Тя подпомага преподавателите и създава подкрепяща среда, в която всяко дете се чувства прието.",
    quote: "„Всяко дете заслужава среда, в която се чувства сигурно и може да бъде себе си."",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Екипът на RoboPioneers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Зад нашето училище по роботика в Русе стои екип от преподаватели с педагогически опит, инженер в STEM областта – бивш ученик на школата – и специалист с подготовка в социални дейности и работа с деца със специфични образователни потребности. Съчетаваме педагогика, технологии и подкрепяща среда.
          </motion.p>
        </div>
      </section>

      {/* Team cards */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} – преподавател по роботика в Русе`}
                    loading="lazy"
                    width={640}
                    height={896}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold mb-1">{member.name}</h2>
                  <p className="text-sm font-semibold text-accent mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.desc}</p>
                  <p className="text-sm italic text-foreground/70 border-l-2 border-accent pl-4">
                    {member.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Какво ни обединява */}
      <section className="py-16 bg-muted">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Какво ни обединява
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Общата ни мисия е да развиваме логическо мислене, любопитство, увереност и умения у всяко дете – чрез роботика, STEM, наука и изкуствен интелект. Вярваме, че най-доброто обучение се случва в среда, която съчетава експертиза, търпение и истинска загриженост за развитието на учениците.
            </p>
          </motion.div>
        </div>
      </section>

      {/* История на успеха */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-l-4 border-accent bg-accent/5 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Rocket size={20} className="text-accent-foreground" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">История на успеха</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Един от нашите преподаватели днес е <strong className="text-foreground">бивш ученик на RoboPioneers</strong>. Започнал е като дете в първите ни групи по роботика, а днес е инженер в STEM областта и преподава рамо до рамо с основателите на школата.
              </p>
              <p>
                Неговият път – <strong className="text-foreground">от ученик до преподавател и инженер</strong> – е реално доказателство, че обучението по роботика може да се превърне в професионален път. Това е историята, която ни мотивира всеки ден.
              </p>
            </div>
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
              Искате ли да се запознаете с нашия екип?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Заявете интерес за пробен урок или се свържете с нас за повече информация.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/запиши-се">
                <Button variant="hero" size="lg">Заяви интерес</Button>
              </Link>
              <Link to="/контакти">
                <Button variant="heroOutline" size="lg">Свържете се с нас</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
