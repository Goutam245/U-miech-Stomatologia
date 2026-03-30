import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionLabel from "./SectionLabel";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", subject: "Umów wizytę", message: ""
  });
  const [activeTab, setActiveTab] = useState<"kalisz" | "turek">("kalisz");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
  };

  return (
    <section className="py-20 bg-card" id="kontakt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info + Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>KONTAKT</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-3 mb-8">Znajdź nas</h2>

            <div className="space-y-4 mb-8 font-body text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-primary">Kalisz:</strong> ul. Przykładowa 10, 62-800 Kalisz
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-primary">Turek:</strong> ul. Przykładowa 5, 62-700 Turek
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+48000000000" className="text-primary hover:text-accent transition-colors">+48 000 000 000</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:kontakt@usmiech.pl" className="text-primary hover:text-accent transition-colors">kontakt@usmiech.pl</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Pon–Pt: 8:00–19:00, Sob: 9:00–14:00</span>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Numer telefonu"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <option>Umów wizytę</option>
                <option>Zapytanie</option>
                <option>Inne</option>
              </select>
              <textarea
                placeholder="Wiadomość"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full font-label font-semibold text-accent-foreground transition-all hover:scale-105"
                style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-button)" }}
              >
                WYŚLIJ WIADOMOŚĆ
              </button>
            </form>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab("kalisz")}
                className={`px-5 py-2 rounded-full text-sm font-label font-semibold transition-all ${
                  activeTab === "kalisz" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                📍 Kalisz
              </button>
              <button
                onClick={() => setActiveTab("turek")}
                className={`px-5 py-2 rounded-full text-sm font-label font-semibold transition-all ${
                  activeTab === "turek" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                📍 Turek
              </button>
            </div>
            <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border border-border">
              <iframe
                title={`Mapa ${activeTab}`}
                src={
                  activeTab === "kalisz"
                    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39300.0!2d18.08!3d51.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac3f5c4b1f1c1%3A0x2e0dce3b6e4e0f0!2sKalisz!5e0!3m2!1spl!2spl!4v1"
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39000.0!2d18.5!3d52.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b5f3d1b3db1!2sTurek!5e0!3m2!1spl!2spl!4v1"
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
