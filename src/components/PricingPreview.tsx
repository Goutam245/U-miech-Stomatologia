import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Download } from "lucide-react";
import SectionLabel from "./SectionLabel";

const categories = [
  {
    name: "KONSULTACJE SPECJALISTYCZNE",
    items: [
      { name: "Konsultacja stomatologiczna", area: "Ogólna", count: "1", price: "100–150 zł" },
      { name: "Konsultacja implantologiczna", area: "Implantologia", count: "1", price: "150–200 zł" },
      { name: "Plan leczenia ortodontycznego", area: "Ortodoncja", count: "1", price: "200 zł" },
    ],
  },
  {
    name: "STOMATOLOGIA ESTETYCZNA",
    items: [
      { name: "Licówki porcelanowe", area: "Estetyka", count: "1 ząb", price: "2,000–3,500 zł" },
      { name: "Bonding kompozytowy", area: "Estetyka", count: "1 ząb", price: "400–800 zł" },
    ],
  },
  {
    name: "ORTODONCJA",
    items: [
      { name: "Invisalign® – pełne leczenie", area: "Ortodoncja", count: "1", price: "12,000–18,000 zł" },
      { name: "Aparat stały metalowy", area: "Ortodoncja", count: "1 łuk", price: "3,000–4,500 zł" },
    ],
  },
  {
    name: "IMPLANTOLOGIA",
    items: [
      { name: "Implant z koroną", area: "Chirurgia", count: "1", price: "4,500–7,000 zł" },
      { name: "Podniesienie dna zatoki", area: "Chirurgia", count: "1", price: "2,500–4,000 zł" },
    ],
  },
  {
    name: "PROTETYKA",
    items: [
      { name: "Korona porcelanowa na cyrkonie", area: "Protetyka", count: "1", price: "1,500–2,500 zł" },
      { name: "Most porcelanowy (3-punktowy)", area: "Protetyka", count: "1", price: "4,000–6,000 zł" },
    ],
  },
  {
    name: "ENDODONCJA",
    items: [
      { name: "Leczenie kanałowe (1 kanał)", area: "Endodoncja", count: "1", price: "500–800 zł" },
      { name: "Leczenie kanałowe pod mikroskopem", area: "Endodoncja", count: "1", price: "800–1,500 zł" },
    ],
  },
  {
    name: "CHIRURGIA",
    items: [
      { name: "Ekstrakcja zęba", area: "Chirurgia", count: "1", price: "200–400 zł" },
      { name: "Ekstrakcja zęba mądrości", area: "Chirurgia", count: "1", price: "400–800 zł" },
    ],
  },
  {
    name: "HIGIENA I PROFILAKTYKA",
    items: [
      { name: "Scaling + piaskowanie", area: "Higiena", count: "1", price: "250–350 zł" },
      { name: "Fluoryzacja", area: "Profilaktyka", count: "1", price: "100 zł" },
    ],
  },
  {
    name: "STOMATOLOGIA DZIECIĘCA",
    items: [
      { name: "Wizyta adaptacyjna", area: "Dziecięca", count: "1", price: "100 zł" },
      { name: "Lakowanie zębów", area: "Profilaktyka", count: "1 ząb", price: "80–120 zł" },
    ],
  },
];

const PricingPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted" id="cennik">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">CENNIK</h2>
          <p className="text-muted-foreground font-body mt-3">Przejrzyste ceny bez ukrytych kosztów</p>
          <button className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-primary text-primary font-label font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all">
            <Download size={16} /> POBIERZ CENNIK
          </button>
        </motion.div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_150px_150px_120px] gap-4 px-6 py-3 text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">
          <span>Nazwa zabiegu</span>
          <span className="text-center">Obszar działania</span>
          <span className="text-center">Liczba zabiegów</span>
          <span className="text-right">Cena</span>
        </div>

        {/* Categories */}
        <div className="divide-y divide-border">
          {categories.map((cat, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-accent/5 transition-colors group"
              >
                <span className="font-body font-semibold text-primary">{cat.name}</span>
                <span className="text-accent transition-transform">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {cat.items.map((item, j) => (
                      <div
                        key={j}
                        className="grid grid-cols-1 md:grid-cols-[1fr_150px_150px_120px] gap-2 md:gap-4 px-6 md:pl-12 py-3 bg-card/50 text-sm font-body border-t border-border/50"
                      >
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-muted-foreground md:text-center">{item.area}</span>
                        <span className="text-muted-foreground md:text-center">{item.count}</span>
                        <span className="font-semibold text-primary md:text-right">{item.price}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
