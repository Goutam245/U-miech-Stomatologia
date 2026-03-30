import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import BookingCTA from "@/components/BookingCTA";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";

const ContactPage = () => (
  <>
    <Navbar />
    <section className="pt-32 pb-10 bg-primary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <SectionLabel dark>KONTAKT</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3 mb-4">
            Skontaktuj się z nami
          </h1>
          <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
            Zapraszamy do kontaktu — odpowiemy na wszystkie pytania.
          </p>
        </motion.div>
      </div>
    </section>
    <ContactSection />
    <BookingCTA />
    <Footer />
  </>
);

export default ContactPage;
