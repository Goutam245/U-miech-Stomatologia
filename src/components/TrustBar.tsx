import { motion } from "framer-motion";

const stats = [
  { value: "2,400+", label: "Zadowolonych Pacjentów" },
  { value: "15 lat", label: "Doświadczenia" },
  { value: "11", label: "Specjalności" },
  { value: "⭐ 4.9/5", label: "Ocena Google" },
];

const TrustBar = () => (
  <section className="bg-accent py-10">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-3xl md:text-4xl font-display font-bold text-accent-foreground">{stat.value}</div>
            <div className="text-sm text-accent-foreground/80 font-body mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
