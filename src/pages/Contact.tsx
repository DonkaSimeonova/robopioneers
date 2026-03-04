import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Свържете се с нас в Русе
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Имате въпроси? Свържете се с нас по телефон, имейл или ни посетете на място.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold mb-8">Контактна информация</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес в Русе</h3>
                  <p className="text-muted-foreground text-sm">ул. Примерна 10, 7000 Русе, България</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground text-sm">+359 888 123 456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Имейл</h3>
                  <p className="text-muted-foreground text-sm">info@robopioneers.bg</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Работно време</h3>
                  <p className="text-muted-foreground text-sm">Понеделник – Събота: 09:00 – 19:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-center">Намерете ни в Русе</h2>
            <div className="rounded-xl overflow-hidden card-shadow">
              <iframe
                title="RoboPioneers Русе на картата"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45924.55652879998!2d25.927!3d43.8356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae60f1c619e1e3%3A0xa00a9a8105700f0!2z0KDRg9GB0LUsINCR0YrQu9Cz0LDRgNC40Y8!5e0!3m2!1sbg!2sbg!4v1700000000000!5m2!1sbg!2sbg"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
