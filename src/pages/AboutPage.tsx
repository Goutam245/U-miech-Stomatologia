import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AboutPage = () => (
  <>
    <Navbar />
    <section className="pt-32 pb-20 bg-primary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <SectionLabel dark>O NAS</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3 mb-6">
            Kim jesteśmy
          </h1>
          <p className="text-primary-foreground/70 font-body text-lg leading-relaxed">
            Klinika Uśmiech to nowoczesna praktyka stomatologiczna działająca w Kaliszu i Turku od ponad 15 lat.
            Naszą misją jest zapewnienie kompleksowej opieki stomatologicznej w przyjaznej atmosferze.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop"
          alt="Wnętrze kliniki stomatologicznej"
          className="rounded-2xl w-full object-cover shadow-lg"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Nasza filozofia</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Wierzymy, że każdy zasługuje na piękny i zdrowy uśmiech. Łączymy najnowsze technologie z indywidualnym podejściem do każdego pacjenta. Nasz zespół stale podnosi kwalifikacje, uczestnicząc w międzynarodowych szkoleniach i konferencjach.
          </p>
          <div className="space-y-3">
            {["Ponad 2,400 zadowolonych pacjentów", "11 specjalizacji pod jednym dachem", "Nowoczesny sprzęt diagnostyczny", "Przyjazna atmosfera bez stresu"].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-accent-foreground" />
                </div>
                <span className="font-body text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default AboutPage;
