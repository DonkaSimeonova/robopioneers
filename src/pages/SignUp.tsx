import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const SignUp = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Запиши се
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Заявете интерес за пробен урок по роботика в Русе.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          {/* График на занятията */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-2xl border-l-4 border-accent bg-accent/5 px-8 py-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Занятията се провеждат по време на учебната година по предварително изготвен график. Групите стартират заниманията си от <strong className="text-foreground">м. октомври</strong> за първия учебен срок и от <strong className="text-foreground">м. февруари</strong> за втория учебен срок.
            </p>
          </motion.div>

          {/* Пробни уроци */}
          <motion.div
            id="пробни-уроци"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 scroll-mt-20"
          >
            <div className="bg-card rounded-xl p-8 card-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <CalendarDays size={20} className="text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold">Пробни уроци</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Провеждаме безплатни пробни уроци два пъти годишно:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-foreground">Януари</strong> – за попълване на свободни места през втория срок</li>
                  <li><strong className="text-foreground">Септември</strong> – за сформиране на нови групи за новата учебна година</li>
                </ul>
                <p>През останалото време не организираме индивидуални пробни занятия, тъй като работим в стабилни и последователни учебни групи.</p>
                <p>Ако желаете да бъдете информирани за следващите пробни уроци, можете да заявите интерес чрез формата по-долу и ние ще се свържем с Вас при предстоящо стартиране на нови групи.</p>
              </div>
            </div>
          </motion.div>

          {/* Акцент – препоръка */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-2xl border-l-4 border-accent bg-accent/5 px-8 py-6"
          >
            <p className="text-muted-foreground leading-relaxed italic">
              <strong className="text-foreground not-italic">Повечето родители идват при нас по препоръка.</strong>
            </p>
          </motion.div>

          {/* Форма за заявка */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h2 className="font-display text-2xl font-bold mb-6">Заявка за интерес</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Име на родител</label>
                  <input type="text" placeholder="Вашето име" className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Име и възраст на детето</label>
                  <input type="text" placeholder="Напр. Иван, 9 години" className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Телефон</label>
                  <input type="tel" placeholder="+359 ..." className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Съобщение (по избор)</label>
                  <textarea rows={3} placeholder="Вашето съобщение..." className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <Button variant="hero" className="w-full" size="lg">
                  Изпратете заявка
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
