import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

const reviews = [
  { text: "Najlepsza klinika w Kaliszu! Dr Kowalska jest niesamowita — po raz pierwszy nie bałam się dentysty.", name: "Agnieszka W., Kalisz" },
  { text: "Implant założony bezboleśnie, efekt niesamowity. Polecam całej rodzinie bez zastrzeżeń!", name: "Tomasz K., Turek" },
  { text: "Ortodoncja Invisalign zmieniła moje życie. Profesjonalizm na najwyższym poziomie.", name: "Monika S." },
  { text: "Wybielanie zębów — efekt WOW. Ceny uczciwe, podejście super. Wrócimy na pewno.", name: "Rafał M." },
  { text: "Dzieci przestały się bać dentysty! Atmosfera niesamowita, personel bardzo cierpliwy.", name: "Karolina B." },
];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const children = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - scrollLeft - 20);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionLabel dark>OPINIE PACJENTÓW</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mt-3">
            Co mówią nasi pacjenci?
          </h2>
          <p className="text-accent mt-3 font-body">
            ⭐⭐⭐⭐⭐ Średnia ocena 4.9/5 • Google Maps
          </p>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Arrow buttons - hidden on mobile */}
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card text-primary items-center justify-center shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(reviews.length - 1, activeIndex + 1))}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card text-primary items-center justify-center shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Następna opinia"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[340px] bg-card rounded-2xl p-6 snap-center flex-shrink-0 shadow-md"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground font-body text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-primary text-sm">{r.name}</span>
                  <span className="text-muted-foreground text-lg font-bold">G</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === activeIndex ? "bg-accent w-6" : "bg-primary-foreground/30"
              }`}
              aria-label={`Opinia ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
