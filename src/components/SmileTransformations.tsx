import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const transformations = [
  {
    title: "Invisalign® – Historia pacjenta",
    story: "Od lat wstydziłam się swojego uśmiechu. Invisalign zmienił wszystko — teraz uśmiecham się bez skrępowania.",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80",
  },
  {
    title: "Invisalign i Wybielanie – Historia pacjenta",
    story: "Ból szczęki towarzyszył mi latami. Po leczeniu ortodontycznym i wybielaniu czuję się jak nowa osoba.",
    before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&q=80",
    after: "https://images.unsplash.com/photo-1570158268183-d296b2892211?w=500&q=80",
  },
  {
    title: "Most tymczasowy – Historia pacjenta",
    story: "Po wypadku straciłam ząb. Dzięki szybkiej reakcji kliniki mam piękny most i pewność siebie.",
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&q=80",
    after: "https://images.unsplash.com/photo-1579591919791-0e6b7ada2c76?w=500&q=80",
  },
];

const fallbackImg = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80";

const SmileTransformations = () => (
  <section className="py-20 bg-muted overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <SectionLabel>METAMORFOZY</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mt-3">
          Prawdziwe rezultaty naszych pacjentów
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative bg-primary rounded-2xl overflow-hidden shadow-lg">
              {/* Before */}
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 bg-primary/90 text-primary-foreground text-center py-2 font-label font-bold text-sm tracking-widest z-10">
                  BEFORE
                </div>
                <img
                  src={t.before}
                  alt="Przed zabiegiem"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
                />
              </div>

              {/* Ampersand */}
              <div className="flex items-center justify-center py-2 bg-primary">
                <span className="text-4xl font-display text-accent italic">&</span>
              </div>

              {/* After */}
              <div className="relative">
                <img
                  src={t.after}
                  alt="Po zabiegu"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-primary-foreground text-center py-2 font-label font-bold text-sm tracking-widest z-10">
                  AFTER
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-display font-bold text-primary text-lg">{t.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-2 line-clamp-2">{t.story}</p>
              <span className="text-accent text-sm font-semibold mt-2 inline-block cursor-pointer hover:underline">
                Czytaj więcej →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SmileTransformations;
