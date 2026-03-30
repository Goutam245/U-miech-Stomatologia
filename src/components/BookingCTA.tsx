import { ArrowRight, Phone } from "lucide-react";

const BookingCTA = () => (
  <section className="py-20" style={{ background: "var(--gradient-cta)" }}>
    <div className="container text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-accent-foreground mb-4">
        Umów wizytę już dziś
      </h2>
      <p className="text-accent-foreground/80 font-body text-lg mb-8 max-w-lg mx-auto">
        Zadzwoń, napisz lub skorzystaj z systemu online ZnanyLekarz.pl
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.znanylekarz.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-primary font-label font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          📅 Umów online — ZnanyLekarz.pl <ArrowRight size={16} />
        </a>
        <a
          href="tel:+48000000000"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-accent-foreground text-accent-foreground font-label font-semibold hover:bg-accent-foreground/10 transition-colors"
        >
          <Phone size={16} /> Zadzwoń do nas
        </a>
      </div>
    </div>
  </section>
);

export default BookingCTA;
