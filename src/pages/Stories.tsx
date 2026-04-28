import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, GraduationCap, Sparkles, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import alumni1 from "@/assets/story-alumni-1.jpg";
import alumni2 from "@/assets/story-alumni-2.jpg";
import alumni3 from "@/assets/story-alumni-3.jpg";
import current1 from "@/assets/story-current-1.jpg";
import current2 from "@/assets/story-current-2.jpg";
import current3 from "@/assets/story-current-3.jpg";
import current4 from "@/assets/story-current-4.jpg";
import current5 from "@/assets/story-current-5.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const featured = [
  {
    name: "Александър, 22 г.",
    image: alumni1,
    desc: "Александър започна при нас като 9-годишно дете в първите ни групи. Днес е инженер в STEM областта и преподавател в RoboPioneers. Неговият път е най-силното доказателство, че роботиката може да се превърне в призвание.",
    quote: "\u201EТук се научих да мисля като инженер \u2013 сега искам да предам това на следващите.\u201C",
  },
  {
    name: "Виктор, 17 г.",
    image: alumni2,
    desc: "Виктор е с нас от 5 години. След национални отличия в роботиката днес учи в Математическата гимназия и подготвя кандидатстване в технически университет.",
    quote: "\u201EПрестанах да се страхувам от трудните задачи \u2013 започнах да ги обичам.\u201C",
  },
  {
    name: "Мария, 16 г.",
    image: alumni3,
    desc: "Мария дойде стеснителна и колеблива. След няколко години в школата тя води собствени проекти, програмира свободно и обмисля бъдеще в софтуерното инженерство.",
    quote: "\u201EРоботиката ми показа, че мога да създавам \u2013 не само да консумирам технологии.\u201C",
  },
  {
    name: "Стефан, 14 г.",
    image: current3,
    desc: "Стефан започна на 8 години. Днес участва в състезателния отбор и помага на по-малките деца в групата като млад наставник.",
    quote: "\u201EНай-хубавото е, когато роботът най-после направи това, което си замислил.\u201C",
  },
  {
    cta: true,
  },
];

const alumniDetailed = [
  {
    name: "Александър \u2013 от ученик до преподавател",
    image: alumni1,
    text: "Започна на 9 години в първите ни групи през 2015 г. Завърши техническа специалност и се върна в RoboPioneers \u2013 този път от другата страна на бюрото. Днес работи като инженер и води занимания за по-големите ученици.",
    tag: "STEM инженер · Преподавател",
  },
  {
    name: "Виктор \u2013 пътят към техническия университет",
    image: alumni2,
    text: "След 5 години в школата и редица отличия в национални състезания по роботика, Виктор учи в Математическата гимназия в Русе и се подготвя да кандидатства „Изкуствен интелект" в технически университет.",
    tag: "Ученик · Бъдещ студент по AI",
  },
  {
    name: "Мария \u2013 откритият талант",
    image: alumni3,
    text: "От стеснително дете до самостоятелен млад програмист. Мария разработва собствени проекти, участва в хакатони и обмисля кариера в софтуерното инженерство.",
    tag: "Ученик · Млад програмист",
  },
];

const currentStudents = [
  {
    name: "Калоян, 8 г.",
    image: current1,
    text: "Калоян е в групата „Малки изследователи". За няколко месеца сглоби първия си LEGO робот и започна да обяснява на родителите си как работят зъбните колела.",
    quote: "„Моят робот мига, защото аз така му казах!"",
  },
  {
    name: "Михаела, 10 г.",
    image: current2,
    text: "Михаела програмира на таблет и обича да измисля собствени мисии за робота си. Учи се да дебъгва и да не се отказва, когато нещо не работи.",
    quote: "„Най-яко е, когато сама намеря грешката."",
  },
  {
    name: "Стефан, 13 г.",
    image: current3,
    text: "Част от състезателния отбор. Помага на по-малките и развива увереността си като млад наставник.",
    quote: "„Обичам да обяснявам на по-малките \u2013 тогава сам разбирам по-добре."",
  },
  {
    name: "Ива, 6 г.",
    image: current4,
    text: "Ива е в най-малката група. Чрез игра и LEGO открива формите, цветовете и първите принципи на конструирането.",
    quote: "„Това е моят влак \u2013 виж как се движи!"",
  },
  {
    name: "Даниел, 13 г.",
    image: current5,
    text: "Даниел работи с 3D принтер и проектира собствени детайли за роботите на групата. Любимата му дума е „прототип".",
    quote: "„Искам да правя неща, които още не съществуват."",
  },
];

const Stories = () => {
  return (
    <Layout>
      {/* SEO meta */}
      <title>Истории на наши ученици | RoboPioneers \u2013 училище по роботика в Русе</title>
      <meta
        name="description"
        content="Реални истории на ученици от RoboPioneers \u2013 училище по роботика в Русе. Курсове по роботика за деца, STEM обучение и пътят от ученик до бъдеща професия."
      />
      <link rel="canonical" href="/истории" />

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Истории на наши ученици
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/90 text-xl mb-4 font-medium"
          >
            Вижте как роботиката се превръща в умения, увереност и бъдещи професии
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 text-base md:text-lg leading-relaxed"
          >
            Зад всяко дете в нашите курсове по роботика в Русе стои собствена история. Представяме реални пътища на настоящи и бивши ученици, които показват как STEM обучението променя начина им на мислене и им отваря нови възможности.
          </motion.p>
        </div>
      </section>

      {/* Featured carousel */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Избрани истории
            </h2>
            <p className="text-muted-foreground text-lg">
              Деца и младежи, чийто път започна с първия LEGO робот.
            </p>
          </motion.div>

          <Carousel opts={{ loop: true }} className="px-2 md:px-12">
            <CarouselContent>
              {featured.map((item, i) => (
                <CarouselItem key={i}>
                  {item.cta ? (
                    <div className="bg-card rounded-2xl card-shadow p-8 md:p-12 hero-gradient text-center">
                      <Sparkles className="text-primary-foreground mx-auto mb-4" size={40} />
                      <h3 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                        Вашето дете може да е следващото
                      </h3>
                      <p className="text-primary-foreground/85 text-lg mb-8 max-w-xl mx-auto">
                        Запишете се за пробен урок или заявете интерес към курсовете ни по роботика за деца в Русе.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/запиши-се">
                          <Button variant="hero" size="lg">Запиши се</Button>
                        </Link>
                        <Link to="/запиши-се">
                          <Button variant="heroOutline" size="lg">Заяви интерес</Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-card rounded-2xl overflow-hidden card-shadow">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="aspect-[3/4] md:aspect-auto overflow-hidden">
                          <img
                            src={item.image}
                            alt={`${item.name} – ученик в RoboPioneers Русе`}
                            loading="lazy"
                            width={768}
                            height={1024}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{item.name}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                          <div className="border-l-4 border-accent pl-5 py-2">
                            <Quote className="text-accent mb-2" size={24} />
                            <p className="font-display text-xl md:text-2xl italic text-foreground leading-snug">
                              {item.quote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Пътят продължава */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-5">
              <GraduationCap size={28} className="text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Пътят продължава
            </h2>
            <p className="text-muted-foreground text-lg">
              Бивши ученици на RoboPioneers, които избраха STEM пътя \u2013 в образованието, технологиите и преподаването.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {alumniDetailed.map((s, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.name} – бивш ученик на RoboPioneers`}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{s.tag}</span>
                  <h3 className="font-display font-bold text-lg mb-3">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Вдъхновение днес */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mx-auto mb-5">
              <Sparkles size={28} className="text-accent-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Вдъхновение днес
            </h2>
            <p className="text-muted-foreground text-lg">
              Настоящи ученици в нашите групи \u2013 какво учат, как се чувстват и как се развиват.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {currentStudents.map((s, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.name} – ученик в курс по роботика в Русе`}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.text}</p>
                  <p className="text-sm italic text-foreground/75 border-l-2 border-accent pl-3">
                    {s.quote}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Доверителен блок */}
      <section className="py-16 bg-muted">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-l-4 border-accent bg-accent/5 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-accent" size={24} />
              <h2 className="font-display text-2xl md:text-3xl font-bold">Десетилетие в Русе</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              От 2015 година през нашите курсове са преминали много деца от Русе. За част от тях роботиката се превръща в интерес към технологиите, а за други \u2013 в първа стъпка към бъдеща професия.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 hero-gradient">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Дайте възможност на детето си да открие своя интерес
            </h2>
            <p className="text-primary-foreground/85 text-lg mb-8 max-w-2xl mx-auto">
              Запишете се за безплатен пробен урок или заявете интерес \u2013 ще ви свържем със следващата подходяща група в нашето училище по роботика в Русе.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/запиши-се">
                <Button variant="hero" size="lg" className="animate-pulse-glow">
                  Запишете се за пробен урок
                </Button>
              </Link>
              <Link to="/запиши-се">
                <Button variant="heroOutline" size="lg">
                  Заявете интерес
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Stories;
