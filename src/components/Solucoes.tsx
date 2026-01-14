import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  FileText,
  CreditCard,
  ArrowRightLeft,
  Smartphone,
  Globe,
} from "lucide-react";

const solucoes = [
  {
    icon: Zap,
    title: "PIX",
    description:
      "Receba pagamentos instantâneos 24/7 com as melhores taxas do mercado.",
    features: ["Sem intermediários", "Liquidação imediata", "QR Code dinâmico"],
  },
  {
    icon: FileText,
    title: "Boletos",
    description:
      "Emissão e gestão de boletos bancários com registro automático.",
    features: ["Registro instantâneo", "Baixa automática", "Múltiplos bancos"],
  },
  {
    icon: CreditCard,
    title: "Cartões",
    description: "Aceite todas as bandeiras de crédito e débito com segurança.",
    features: ["Taxas competitivas", "Antecipação", "Link de pagamento"],
  },
  {
    icon: ArrowRightLeft,
    title: "Transferências",
    description:
      "TED e DOC para seus fornecedores e parceiros de forma simples.",
    features: [
      "Lote de pagamentos",
      "Agendamento",
      "Confirmação em tempo real",
    ],
  },
  {
    icon: Smartphone,
    title: "Pagamentos Mobile",
    description: "Soluções completas para vendas pelo celular e tablet.",
    features: ["App nativo", "SDK fácil", "Checkout mobile"],
  },
  {
    icon: Globe,
    title: "Internacional",
    description: "Receba e envie pagamentos em diferentes moedas.",
    features: ["Câmbio competitivo", "Swift", "Múltiplas moedas"],
  },
];

const Solucoes = () => {
  return (
    <section id="solucoes" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Soluções Completas de{" "}
            <span className="text-primary">Pagamento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que seu negócio precisa para receber, enviar e gerenciar
            pagamentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((solucao, index) => {
            const Icon = solucao.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{solucao.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {solucao.description}
                  </p>
                  <ul className="space-y-2">
                    {solucao.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
