import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <img src={logo} alt="RoboPioneers лого" className="h-9 w-auto" /> RoboPioneers
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Модерно училище по роботика в Русе. LEGO Robotics, Science и AI обучение за деца от 5 до 18 години.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Навигация</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <Link to="/" className="hover:text-background transition-colors">Начало</Link>
              <Link to="/програми" className="hover:text-background transition-colors">Програми</Link>
              <Link to="/защо-нас" className="hover:text-background transition-colors">Защо RoboPioneers</Link>
              <Link to="/контакти" className="hover:text-background transition-colors">Контакти</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Контакти в Русе</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <p>📍 ул. Примерна 10, Русе</p>
              <p>📞 +359 888 123 456</p>
              <p>✉️ info@robopioneers.bg</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} RoboPioneers – Училище по роботика в Русе. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
