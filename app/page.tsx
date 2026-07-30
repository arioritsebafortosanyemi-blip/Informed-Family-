import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowSessionsWork from "@/components/HowSessionsWork";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <HowSessionsWork />
      <Testimonials />
      <CTA />
      <Booking />
      <Footer />
    </main>
  );
}
