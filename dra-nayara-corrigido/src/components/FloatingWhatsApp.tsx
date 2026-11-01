import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma consulta na Clínica Oral Center com a Dra. Nayana Cunha.'
  )}`;

  return (
    <aside 
      aria-label="Atendimento Rápido"
      className="fixed bottom-6 right-6 z-50 flex items-center group focus:outline-none"
    >
      {/* Tooltip bubble on desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-1 sm:pr-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95"
        aria-label="Abrir WhatsApp para agendamento"
      >
        <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
        </div>
        <div className="hidden sm:block text-left pr-2">
          <p className="text-[11px] font-medium leading-none text-white/90">Agende sua avaliação</p>
          <p className="text-xs font-bold leading-tight text-white mt-0.5">(91) 98505-0440</p>
        </div>
      </a>
    </aside>
  );
}
