import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Chatbot />
      <ContactForm />
      <Footer />
    </main>
  );
}
