import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Star, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background: dot grid pattern */}
      <div
        className="absolute top-0 left-0 w-[50%] h-[60%] opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Background: orange radial glow */}
      <div
        className="absolute top-1/2 right-[20%] w-[700px] h-[700px] -translate-y-1/2 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.4), transparent 70%)",
        }}
      />

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.08) 35px, rgba(255,255,255,0.08) 36px)",
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-28 pb-20 lg:pt-0 lg:pb-0">
        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >

          {/* Heading with clamp */}
          <h1
            className="font-display font-bold text-primary-foreground leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
          >
            Zadbamy o Twój{" "}
            <span className="italic text-accent">prawdziwy</span>{" "}
            uśmiech
          </h1>

          {/* Body */}
          <p className="text-primary-foreground/70 font-body text-lg max-w-[440px] mx-auto lg:mx-0 mb-10 leading-relaxed">
            Kompleksowe leczenie stomatologiczne dla całej rodziny.
            Pokonaj strach przed dentystą&nbsp;— jesteśmy tu, żeby pomóc.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a
              href="https://www.znanylekarz.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-label font-bold text-accent-foreground tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{
                background: "var(--gradient-cta)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              UMÓW WIZYTĘ <ArrowRight size={18} />
            </a>
            <a
              href="/uslugi"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-label font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground/70 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Poznaj naszą ofertę
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 justify-center lg:justify-start">
            {/* Star rating */}
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                <Star size={16} className="text-accent fill-accent" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-body font-bold text-primary-foreground leading-tight">4.9/5</span>
                <span className="text-xs font-body text-primary-foreground/50 leading-tight">Google ocena</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-primary-foreground/15" />

            {/* Patients */}
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                <Users size={16} className="text-accent" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-body font-bold text-primary-foreground leading-tight">2,400+</span>
                <span className="text-xs font-body text-primary-foreground/50 leading-tight">Pacjentów</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-primary-foreground/15" />

            {/* Experience */}
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                <Trophy size={16} className="text-accent" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-body font-bold text-primary-foreground leading-tight">15 lat</span>
                <span className="text-xs font-body text-primary-foreground/50 leading-tight">Doświadczenia</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Image with rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px]">
            {/* Ring 3 — outermost, slowly rotating */}
            <div
              className="absolute inset-0 rounded-full animate-[spin_60s_linear_infinite]"
              style={{
                width: "130%",
                height: "130%",
                top: "-15%",
                left: "-15%",
                border: "1px dashed hsla(var(--primary-foreground) / 0.12)",
              }}
            />

            {/* Ring 2 — medium */}
            <div
              className="absolute rounded-full"
              style={{
                width: "118%",
                height: "118%",
                top: "-9%",
                left: "-9%",
                border: "2px solid hsla(var(--accent) / 0.3)",
              }}
            />

            {/* Ring 1 — tight */}
            <div
              className="absolute rounded-full"
              style={{
                width: "108%",
                height: "108%",
                top: "-4%",
                left: "-4%",
                border: "2px solid hsla(var(--accent) / 0.6)",
              }}
            />

            {/* Orange glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: "0 0 100px 20px hsla(var(--accent) / 0.2)",
              }}
            />

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffbb29c5c23?w=600&q=80"
              alt="Uśmiechnięta pacjentka kliniki stomatologicznej"
              className="w-full h-full object-cover rounded-full"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80";
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="M0 60L48 54C96 48 192 36 288 36C384 36 480 48 576 54C672 60 768 60 864 54C960 48 1056 36 1152 30C1248 24 1344 24 1392 24L1440 24V120H0V60Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
