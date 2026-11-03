import { Instagram, MapPin, ShieldCheck } from 'lucide-react';

const address = 'Travessa Barão do Triunfo, 3540, sala 303, Edifício Infinity Corporate Center, Bairro Marco, Belém - PA';
const instagramUrl = 'https://instagram.com/dra.nayananunescunha';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function BusinessDetails() {
  return (
    <section aria-labelledby="informacoes-clinica" className="bg-[#FAF8F5] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#E8DED3] bg-white p-6 shadow-[0_12px_40px_rgba(80,57,46,0.06)] sm:p-9">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C6D58]">Visite e acompanhe</p>
            <h2 id="informacoes-clinica" className="font-serif-luxury text-3xl font-semibold text-[#1E1B18] sm:text-4xl">
              Informações da clínica
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-2xl border border-[#EFE2D8] bg-[#FAF8F5] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D9C3AE] hover:bg-[#F5EFEA]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5EEE7] text-[#8C6D58]">
                <MapPin aria-hidden="true" className="h-5 w-5" />
              </div>
              <span>
                <span className="block text-sm font-semibold text-[#2C2724]">Endereço</span>
                <span className="mt-1 block text-sm leading-relaxed text-[#615750]">{address}</span>
                <span className="mt-2 block text-xs font-semibold text-[#80634F] group-hover:text-[#604A3D]">Ver no mapa ↗</span>
              </span>
            </a>

            <div className="flex items-start gap-3 rounded-2xl border border-[#EFE2D8] bg-[#FAF8F5] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5EEE7] text-[#8C6D58]">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </div>
              <span>
                <span className="block text-sm font-semibold text-[#2C2724]">Registro profissional</span>
                <span className="mt-1 block text-sm text-[#615750]">CRO-PA 4901</span>
              </span>
            </div>

            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-2xl border border-[#EFE2D8] bg-[#FAF8F5] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D9C3AE] hover:bg-[#F5EFEA]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5EEE7] text-[#8C6D58]">
                <Instagram aria-hidden="true" className="h-5 w-5" />
              </div>
              <span>
                <span className="block text-sm font-semibold text-[#2C2724]">Instagram</span>
                <span className="mt-1 block text-sm text-[#615750]">@dra.nayananunescunha</span>
                <span className="mt-2 block text-xs font-semibold text-[#80634F] group-hover:text-[#604A3D]">Acessar perfil ↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
