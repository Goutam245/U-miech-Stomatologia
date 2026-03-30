import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import {
  Stethoscope, Sparkles, AlignCenterVertical, Bone, Sun,
  Search, Baby, Microscope, Shield, Brush, Pill
} from "lucide-react";

const services = [
  { icon: Bone, title: "Implantologia", desc: "Trwałe i estetyczne uzupełnienie braków zębowych." },
  { icon: Sparkles, title: "Stomatologia Estetyczna", desc: "Licówki, bonding i pełna metamorfoza uśmiechu." },
  { icon: AlignCenterVertical, title: "Ortodoncja (Invisalign®)", desc: "Niewidoczne nakładki prostujące zęby." },
  { icon: Stethoscope, title: "Protetyka", desc: "Korony, mosty i protezy najwyższej jakości." },
  { icon: Sun, title: "Wybielanie Zębów", desc: "Profesjonalne wybielanie w gabinecie i domowe." },
  { icon: Search, title: "Stomatologia Zachowawcza", desc: "Leczenie próchnicy i odbudowa zębów." },
  { icon: Baby, title: "Stomatologia Dziecięca", desc: "Przyjazne wizyty dla najmłodszych pacjentów." },
  { icon: Microscope, title: "Endodoncja", desc: "Leczenie kanałowe pod mikroskopem." },
  { icon: Shield, title: "Chirurgia Stomatologiczna", desc: "Ekstrakcje, zabiegi chirurgiczne i augmentacje." },
  { icon: Brush, title: "Higiena i Profilaktyka", desc: "Scaling, piaskowanie i fluoryzacja." },
  { icon: Pill, title: "Leczenie Bólu Szczęki", desc: "Diagnostyka i leczenie bruksizmu." },
];

const ServicesGrid = () => (
  <section className="py-20 bg-muted" id="uslugi">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <SectionLabel>NASZE USŁUGI</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mt-3">
          Kompleksowa opieka stomatologiczna
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-accent cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-3">{svc.desc}</p>
              <span className="text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Dowiedz się więcej <ArrowRight size={14} />
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
