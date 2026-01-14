import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    // Handle form submission
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para transformar seus{" "}
            <span className="text-primary">pagamentos</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Abra sua conta gratuitamente e comece a receber pagamentos hoje
            mesmo. Sem mensalidades, sem burocracias.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11 h-12"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="group">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            Tem dúvidas? Fale com nossos especialistas:{" "}
            <a
              href="tel:08007773344"
              className="text-primary hover:underline font-semibold"
            >
              0800 777 3344
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
