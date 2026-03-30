import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Co robimy", href: "/uslugi" },
  { label: "Kim jesteśmy", href: "/o-nas" },
  { label: "Cennik", href: "/cennik" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-[72px] md:h-[72px]">
          {/* Logo — 2 lines */}
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="text-[10px] font-label font-bold tracking-[0.2em] uppercase text-accent">
              Kalisz & Turek • Stomatologia
            </span>
            <span className="text-2xl font-display font-bold text-primary-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
              uśmiech
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-body font-medium transition-all duration-300 relative pb-1 hover:text-accent ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right — Social + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-accent transition-colors duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-accent transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.znanylekarz.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-7 py-2.5 rounded-full font-label font-bold text-sm text-accent-foreground tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-button)" }}
            >
              UMÓW WIZYTĘ
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2 hover:text-accent transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu — Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-primary-foreground/70 hover:text-accent transition-colors p-2"
              aria-label="Zamknij menu"
            >
              <X size={32} />
            </button>

            {/* Logo in mobile menu */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-[10px] font-label font-bold tracking-[0.2em] uppercase text-accent">
                Kalisz & Turek • Stomatologia
              </span>
              <span className="text-3xl font-display font-bold text-primary-foreground">
                uśmiech
              </span>
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={link.href}
                  className={`text-2xl font-display font-semibold transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://www.znanylekarz.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-10 py-3.5 rounded-full font-label font-bold text-accent-foreground text-lg"
              style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-button)" }}
            >
              UMÓW WIZYTĘ
            </motion.a>

            <div className="flex gap-8 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
