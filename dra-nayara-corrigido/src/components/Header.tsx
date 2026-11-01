import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de informações para agendar uma avaliação com a Dra. Nayana Cunha na Clínica Oral Center.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EADFD5]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="group flex flex-col text-left shrink-0 focus:outline-none"
        >
          <span className="font-serif-luxury text-2xl sm:text-3xl tracking-tight text-[#1E1B18] font-semibold leading-tight group-hover:text-[#8C6D58] transition-colors">
            {CLINIC_INFO.doctor}
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D58] font-medium font-sans-clean">
            Oral Center · Odontologia & Estética
          </span>
        </a>

        {/* Zone 2: Navigation Links (single-line, clean) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#5C534D]">
          <a 
            href="#clinica" 
            className="hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8C6D58]"
          >
            A Clínica
          </a>
          <a 
            href="#naturalidade" 
            className="hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8C6D58]"
          >
            Naturalidade Labial
          </a>
          <a 
            href="#procedimentos" 
            className="hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8C6D58]"
          >
            Procedimentos
          </a>
          <a 
            href="#sobre" 
            className="hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8C6D58]"
          >
            Dra. Nayana
          </a>
          <a 
            href="#contato" 
            className="hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8C6D58]"
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#8C6D58] hover:bg-[#745743] rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#F7EFE9]" />
            <span>Agendar Avaliação</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#5C534D] hover:text-[#1E1B18] hover:bg-[#F2ECE4] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EADFD5] bg-[#FAF8F5] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#4D4540]">
            <a
              href="#clinica"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8C6D58] transition-colors"
            >
              A Clínica
            </a>
            <a
              href="#naturalidade"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8C6D58] transition-colors"
            >
              Naturalidade Labial
            </a>
            <a
              href="#procedimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8C6D58] transition-colors"
            >
              Procedimentos
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8C6D58] transition-colors"
            >
              Dra. Nayana
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8C6D58] transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="pt-3 border-t border-[#EADFD5]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-[#8C6D58] rounded-full shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp (91) 98505-0440</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
