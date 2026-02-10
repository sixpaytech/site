import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, CheckCircle2, Eye } from "lucide-react";

const Seguranca = () => {
  return (
    <section id="seguranca" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Segurança e <span className="text-primary">Compliance</span> em
              Primeiro Lugar
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A 6Pay é uma Instituição de Pagamento devidamente autorizada e
              regulada pelo Banco Central do Brasil, garantindo total
              conformidade com as normas financeiras nacionais.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Autorização do Banco Central
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Instituição regulada e supervisionada pelo BACEN
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Certificação PCI DSS</h3>
                  <p className="text-sm text-muted-foreground">
                    Padrão internacional de segurança para dados de cartão
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Proteção de Dados</h3>
                  <p className="text-sm text-muted-foreground">
                    Conformidade total com a LGPD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Monitoramento 24/7</h3>
                  <p className="text-sm text-muted-foreground">
                    Sistema avançado de prevenção e detecção de fraudes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99.99%</div>
                    <div className="text-sm text-muted-foreground">
                      Uptime Garantido
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Infraestrutura redundante em múltiplos data centers
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">256-bit</div>
                    <div className="text-sm text-muted-foreground">
                      Criptografia SSL
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Todas as transações protegidas com tecnologia banking-grade
                </p>
              </CardContent>
            </Card>
            {/* 
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">R$ 2Bi</div>
                    <div className="text-sm text-muted-foreground">
                      Seguro Garantido
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Seus recursos protegidos pelo FGC
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seguranca;
