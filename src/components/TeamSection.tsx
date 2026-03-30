import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const team = [
  { name: "dr n. med. Anna Kowalska", role: "Implantologia", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face", ring: "border-accent" },
  { name: "dr Marek Wiśniewski", role: "Ortodoncja", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face", ring: "border-primary" },
  { name: "dr Katarzyna Nowak", role: "Stomatologia Estetyczna", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face", ring: "border-accent-light" },
  { name: "dr Piotr Jabłoński", role: "Chirurgia", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face", ring: "border-success" },
  { name: "lek. stom. Marta Zając", role: "Stomatologia Dziecięca", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face", ring: "border-accent" },
  { name: "dr Anna Lis", role: "Endodoncja", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face", ring: "border-primary" },
];

const TeamSection = () => (
  <section className="py-20 bg-card" id="zespol">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <SectionLabel>NASZ ZESPÓŁ</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mt-3">
          Poznaj osoby, które zadbają o Twój uśmiech
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center group cursor-pointer"
          >
            <div className={`w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full border-4 ${member.ring} overflow-hidden mb-4 group-hover:scale-105 transition-transform`}>
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-body font-bold text-primary text-sm md:text-base group-hover:underline">{member.name}</h3>
            <p className="text-accent text-xs md:text-sm font-body mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/zespol"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-label font-semibold text-accent-foreground transition-all hover:scale-105"
          style={{ background: "var(--gradient-cta)" }}
        >
          Poznaj cały zespół →
        </a>
      </div>
    </div>
  </section>
);

export default TeamSection;
