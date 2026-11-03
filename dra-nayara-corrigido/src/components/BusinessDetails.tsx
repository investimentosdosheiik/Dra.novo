import { Instagram, MapPin, ShieldCheck } from 'lucide-react';

const address = 'Travessa Barão do Triunfo, 3540, sala 303, Edifício Infinity Corporate Center, Bairro Marco, Belém - PA';
const instagramUrl = 'https://instagram.com/dra.nayananunescunha';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function BusinessDetails() {
  return (
    <section aria-labelledby="informacoes-clinica" className="bg-[#FAF8F5] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E8DED3] bg-white p-6 shadow-sm sm:p-9">
          <div className="mb-7 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C6D58]">Visite e acompanhe</p>
            <h2 id="informacoes-clinica" className="font-serif-luxury text-3xl font-semibold text-[#1E1B18] sm:text-4xl">Informações da clínica</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-2xl bg-[#FAF8F5] p-5 transition-colors hover:bg-[#F3EEE8]">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8C6D58]" />
              <span>
                <span className="block text-sm font-semibold text-[#2C2724]">Endereço</span>
                <span className="mt-1 block text-sm leading-relaxed text-[#615750]">{address}</span>
                <span className="mt-2 block text-xs font-semibold text-[#80634F]">Ver no mapa ↗</span>
              </span>
            </a>
            <div className="flex items-start gap-3 rounded-2xl bg-[#FAF8F5] p-5">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8C6D58]" />
              <span>
                <span className="block text-sm font-semibold text-[#2C2724]">Registro profissional</span>
                <span className="mt-1 block text-sm text-[#615750]">CRO-PA 4901</span>
              </span>
            </div>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-2xl bg-[#FAF8F5] p-5 transition-colors hover:bg-[#F3EEE8]">
              <Instagram aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8C6D58]" />
              <span>
                <span className="block text-sm font-semibold text-[#2C2724]">Instagram</span>
                <span className="mt-1 block text-sm text-[#615750]">@dra.nayananunescunha</span>
                <span className="mt-2 block text-xs font-semibold text-[#80634F]">Acessar perfil ↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
