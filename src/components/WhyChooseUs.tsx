import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "./SectionLabel";

const features = [
  "Bezbolesne leczenie z sedacją wziewną",
  "Nowoczesny sprzęt — RTG 3D, mikroskopy",
  "Przyjazna atmosfera dla dorosłych i dzieci",
  "Integracja z ZnanyLekarz.pl — łatwa rezerwacja",
  "Dwie lokalizacje: Kalisz i Turek",
];

const WhyChooseUs = () => (
  <section className="py-20 bg-primary overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop&q=80"
          alt="Nowoczesne wnętrze gabinetu stomatologicznego"
          className="rounded-2xl w-full h-[280px] lg:h-auto object-cover shadow-2xl"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80';
          }}
        />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-lg shadow-lg">
          15+<br /><span className="text-xs font-body">lat</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <SectionLabel dark>DLACZEGO MY?</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-8 leading-tight">
          Pokonaj strach przed dentystą razem z nami
        </h2>

        <div className="space-y-4 mb-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 group cursor-default"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-accent-foreground" />
              </div>
              <span className="text-primary-foreground/90 font-body">{f}</span>
            </motion.div>
          ))}
        </div>

        <a
          href="/zespol"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-label font-semibold text-primary-foreground border-2 border-primary-foreground/40 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all"
        >
          Poznaj nasz zespół →
        </a>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
