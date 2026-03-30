import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import BookingCTA from "@/components/BookingCTA";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";

const TeamPage = () => (
  <>
    <Navbar />
    <section className="pt-32 pb-10 bg-primary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <SectionLabel dark>ZESPÓŁ</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3 mb-4">
            Nasz zespół
          </h1>
          <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
            Poznaj doświadczonych specjalistów, którzy zadbają o Twój uśmiech.
          </p>
        </motion.div>
      </div>
    </section>
    <TeamSection />
    <BookingCTA />
    <Footer />
  </>
);

export default TeamPage;
