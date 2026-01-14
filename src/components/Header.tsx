import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={logo} alt="6Pay" className="h-8 md:h-10" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("seguranca")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Segurança
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Entrar</Button>
            <Button variant="hero">Abrir Conta</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection("diferenciais")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("seguranca")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Segurança
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contato
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="w-full">
                  Entrar
                </Button>
                <Button variant="hero" className="w-full">
                  Abrir Conta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
