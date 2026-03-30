import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Czy leczenie u was boli?", a: "Stosujemy nowoczesne metody znieczulenia, w tym sedację wziewną. Większość pacjentów nie odczuwa żadnego dyskomfortu podczas zabiegów." },
  { q: "Jak umówić wizytę online?", a: "Możesz umówić wizytę przez ZnanyLekarz.pl, telefonicznie lub poprzez formularz na naszej stronie. Odpowiadamy w ciągu kilku godzin." },
  { q: "Czy przyjmujecie dzieci?", a: "Tak! Mamy doświadczonych lekarzy specjalizujących się w stomatologii dziecięcej. Zapewniamy przyjazną atmosferę dla najmłodszych." },
  { q: "Jakie są metody płatności?", a: "Akceptujemy gotówkę, karty płatnicze, przelewy oraz oferujemy możliwość płatności ratalnej." },
  { q: "Czy oferujecie leczenie na raty?", a: "Tak, współpracujemy z instytucjami finansowymi oferującymi raty 0% na wybrane zabiegi." },
  { q: "Jak długo trwa zakładanie implantu?", a: "Sam zabieg trwa około 30-60 minut. Cały proces leczenia, z okresem gojenia, zajmuje 3-6 miesięcy." },
  { q: "Czy Invisalign jest dla każdego?", a: "Invisalign sprawdza się w większości przypadków. Na konsultacji ortodontycznej ocenimy, czy ta metoda jest odpowiednia dla Ciebie." },
  { q: "Czy mają Państwo gabinety w dwóch miastach?", a: "Tak, posiadamy gabinety w Kaliszu i Turku. W obu lokalizacjach zapewniamy pełen zakres usług." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
            Najczęściej zadawane pytania
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-body font-semibold text-primary pr-4">{faq.q}</span>
                <span className="text-accent flex-shrink-0">
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
                    <p className="px-6 pb-4 text-muted-foreground font-body text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
