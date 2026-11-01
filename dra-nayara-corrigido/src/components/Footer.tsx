import { MessageCircle, Instagram, MapPin, Phone, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a equipe da Clínica Oral Center e Dra. Nayana Cunha.'
  )}`;

  return (
    <footer id="contato" className="bg-[#1C1816] text-[#D8CFCA] pt-16 pb-12 border-t border-[#312B27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2F2925]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif-luxury text-3xl font-semibold text-white tracking-tight">
              {CLINIC_INFO.doctor}
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4A48C] font-semibold">
              Clínica Oral Center
            </p>
            <p className="text-sm text-[#A89E97] leading-relaxed max-w-sm">
              Mais de 9 anos entregando excelência e naturalidade em estética orofacial e odontologia em Belém/PA.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagramClinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2421] hover:bg-[#8C6D58] text-[#E0D5CE] hover:text-white flex items-center justify-center transition-colors"
                title="Instagram da Clínica"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2421] hover:bg-[#8C6D58] text-[#E0D5CE] hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-white">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-[#A89E97]">
              <li>
                <a href="#clinica" className="hover:text-white transition-colors">A Clínica Oral Center</a>
              </li>
              <li>
                <a href="#naturalidade" className="hover:text-white transition-colors">Filosofia de Naturalidade</a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">Procedimentos & Tratamentos</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Dra. Nayana Cunha</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Hours */}
          <div className="md:col-span-4 space-y-3 text-sm text-[#A89E97]">
            <p className="text-xs uppercase tracking-wider font-semibold text-white">
              Atendimento & Contato
            </p>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#C4A48C] shrink-0 mt-0.5" />
              <div>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-[#C4A48C] transition-colors"
                >
                  {CLINIC_INFO.phoneFormatted}
                </a>
                <p className="text-xs text-[#8A7F78]">Atendimento e Agendamentos</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#C4A48C] shrink-0 mt-0.5" />
              <span>Belém, Pará · Brasil</span>
            </div>

            <div className="pt-2">
              <p className="text-xs text-[#7F746D]">
                Horário: Segunda a Sexta, das 08h às 18h (atendimento sob agendamento prévio)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom notices */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#786E67]">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#8C6D58]" />
            <span>Responsável Técnica: {CLINIC_INFO.doctorFull} · {CLINIC_INFO.cro}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
