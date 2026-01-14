import {
  TrendingDown,
  Zap,
  Shield,
  BarChart3,
  Headphones,
  Code2,
} from "lucide-react";

const diferenciais = [
  {
    icon: TrendingDown,
    title: "Taxas Competitivas",
    description:
      "As melhores taxas do mercado sem mensalidade ou taxas escondidas.",
  },
  {
    icon: Zap,
    title: "Integração Rápida",
    description: "API moderna e documentação completa para começar em minutos.",
  },
  {
    icon: Shield,
    title: "Segurança Máxima",
    description: "Certificação PCI DSS e criptografia de ponta a ponta.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Dashboard intuitivo com análises em tempo real.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Time de especialistas disponível 24/7 para te ajudar.",
  },
  {
    icon: Code2,
    title: "Tecnologia de Ponta",
    description: "Infraestrutura robusta com 99.9% de disponibilidade.",
  },
];

const Diferenciais = () => {
  return (
    <section
      id="diferenciais"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que escolher a <span className="text-primary">6Pay</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia, segurança e suporte que seu negócio merece
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {diferenciais.map((diferencial, index) => {
            const Icon = diferencial.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{diferencial.title}</h3>
                <p className="text-muted-foreground">
                  {diferencial.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
