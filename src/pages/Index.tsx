import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solucoes from "@/components/Solucoes";
import Diferenciais from "@/components/Diferenciais";
import Seguranca from "@/components/Seguranca";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solucoes />
      <Diferenciais />
      <Seguranca />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
