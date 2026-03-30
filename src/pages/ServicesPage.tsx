import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import BookingCTA from "@/components/BookingCTA";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";

const ServicesPage = () => (
  <>
    <Navbar />
    <section className="pt-32 pb-10 bg-primary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <SectionLabel dark>USŁUGI</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3 mb-4">
            Co robimy
          </h1>
          <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
            Oferujemy pełen zakres usług stomatologicznych — od profilaktyki po zaawansowaną implantologię.
          </p>
        </motion.div>
      </div>
    </section>
    <ServicesGrid />
    <BookingCTA />
    <Footer />
  </>
);

export default ServicesPage;
