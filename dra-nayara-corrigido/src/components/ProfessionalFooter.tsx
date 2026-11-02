import { Instagram, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

const clinicAddress = 'Travessa Barão do Triunfo, 3540, sala 303, Edifício Infinity Corporate Center, Bairro Marco, Belém - PA';

export default function ProfessionalFooter() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a equipe da Clínica Oral Center e agendar uma avaliação com a Dra. Nayana Cunha.'
  )}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicAddress)}`;

  return (
    <footer id="contato" className="border-t border-[#312B27] bg-[#1C1816] py-14 text-[#D8CFCA] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-[#2F2925] pb-10 md:grid-cols-3">
          <div>
            <p className="font-serif-luxury text-3xl font-semibold tracking-tight text-white">{CLINIC_INFO.doctor}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A48C]">Clínica Oral Center</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A89E97]">
              Odontologia e estética facial com atendimento individualizado em Belém, Pará.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={CLINIC_INFO.instagramDoctorUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Dra. Nayana" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A2421] text-[#E0D5CE] transition-colors hover:bg-[#8C6D58] hover:text-white">
                <Instagram aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com a clínica pelo WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A2421] text-[#E0D5CE] transition-colors hover:bg-[#8C6D58] hover:text-white">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">Navegação</h2>
            <ul className="mt-4 space-y-3 text-sm text-[#A89E97]">
              <li><a href="#clinica" className="transition-colors hover:text-white">A clínica</a></li>
              <li><a href="#procedimentos" className="transition-colors hover:text-white">Procedimentos</a></li>
              <li><a href="#tratamentos-complementares" className="transition-colors hover:text-white">Tratamentos faciais</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-white">Sobre a Dra. Nayana</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">Endereço e contato</h2>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-[#D8CFCA] transition-colors hover:text-white">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#C4A48C]" />
              <span>{clinicAddress}<span className="mt-1 block text-xs text-[#A89E97]">Ver localização no mapa</span></span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#C4A48C]">
              <Phone aria-hidden="true" className="h-4 w-4 text-[#C4A48C]" />
              {CLINIC_INFO.phoneFormatted}
            </a>
            <p className="mt-2 pl-7 text-xs text-[#8A7F78]">Atendimento e agendamentos pelo WhatsApp</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-7 text-xs text-[#8A7F78] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-[#C4A48C]" />
            <span>Responsável técnica: {CLINIC_INFO.doctorFull} · CRO-PA 4901</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
