import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import symbol from "@/assets/symbol.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Geometric Shapes Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 transform rotate-12 rounded-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 transform -rotate-12 rounded-3xl" />
        <img
          src={symbol}
          alt=""
          className="absolute top-1/2 right-20 w-96 h-96 opacity-[0.03] transform -translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Instituição de Pagamento autorizada pelo Banco Central</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Pagamentos Mais <span className="text-primary">Inteligentes</span>,{" "}
            <br className="hidden md:block" />
            Negócios Mais <span className="text-primary">Eficientes</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Soluções completas de pagamento para impulsionar seu negócio. PIX,
            boletos, cartões e muito mais em uma única plataforma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Abrir Conta Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Falar com Especialista
            </Button>
          </div>

          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                R$ 50Bi+
              </div>
              <div className="text-sm text-muted-foreground">Transacionado</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500k+
              </div>
              <div className="text-sm text-muted-foreground">
                Clientes Ativos
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">
                Disponibilidade
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
