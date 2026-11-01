import { Award, GraduationCap, Sparkles, Heart, Instagram, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function AboutDoctor() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá, Dra. Nayana! Gostaria de conversar sobre uma avaliação presencial na clínica.'
  )}`;

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-[#E5DACF]">
              <img
                src="/assets/aistudio/dra-nayana-sentada_973e67ec.jpg"
                alt="Dra. Nayana Cunha em seu consultório"
                className="w-full h-[500px] sm:h-[580px] object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-xs uppercase tracking-widest text-[#E5D5C5] font-semibold">
                  Fundadora & Responsável Técnica
                </span>
                <h3 className="font-serif-luxury text-3xl font-semibold mt-1">
                  {CLINIC_INFO.doctorFull}
                </h3>
                <p className="text-xs text-white/80 mt-0.5">
                  Odontologia & Harmonização Orofacial · Belém - PA
                </p>
              </div>
            </div>

            {/* Subtle floating accolade */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md border border-[#E5DACF] p-4 rounded-2xl shadow-lg items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF3EC] text-[#8C6D58] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B18]">Formação Continuada</p>
                <p className="text-[11px] text-[#6E645D]">Padrão ouro em técnicas de injetáveis estéticos</p>
              </div>
            </div>
          </div>

          {/* Editorial Bio and Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D58] mb-2">
                Conheça a Especialista
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1E1B18] font-semibold leading-tight text-balance">
                "Cuidar do seu rosto é honrar a história e a singularidade que existem em você."
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#554C46] leading-relaxed">
              Com mais de <strong className="font-semibold text-[#1E1B18]">9 anos de trajetória</strong>, a Dra. Nayana Cunha construiu sua reputação com base em um princípio inegociável: a beleza autêntica. Para ela, a harmonização facial e a estética odontológica não devem transformar quem você é, mas sim despertar a sua versão mais iluminada e confiante.
            </p>

            <p className="text-sm sm:text-base text-[#665D57] leading-relaxed">
              Na Clínica Oral Center, cada paciente é acolhido em um ambiente intimista e seguro. Não trabalhamos com receitas prontas: cada proporção, miligrama de produto e linha de contorno é planejado cirurgicamente para harmonizar com seu sorriso e mímica natural.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DED3]">
              <div className="p-4 rounded-xl bg-white border border-[#E8DED3]">
                <div className="flex items-center gap-2.5 text-[#8C6D58] font-semibold text-sm mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Precisão Anatômica</span>
                </div>
                <p className="text-xs text-[#635A54] leading-relaxed">
                  Uso exclusivo de produtos de renome global com registro na ANVISA e técnicas de mínima invasão.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8DED3]">
                <div className="flex items-center gap-2.5 text-[#8C6D58] font-semibold text-sm mb-1">
                  <Heart className="w-4 h-4" />
                  <span>Escuta Acolhedora</span>
                </div>
                <p className="text-xs text-[#635A54] leading-relaxed">
                  Tempo dedicado para compreender seus desejos reais, alinhando expectativas com total clareza.
                </p>
              </div>
            </div>

            {/* Social and WhatsApp Connect */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#8C6D58] hover:bg-[#745743] rounded-full shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com a Dra. Nayana</span>
              </a>

              <a
                href={CLINIC_INFO.instagramDoctorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#4A413B] bg-white hover:bg-[#F2ECE4] border border-[#E2D5C8] rounded-full transition-all"
              >
                <Instagram className="w-4 h-4 text-[#8C6D58]" />
                <span>{CLINIC_INFO.instagramDoctor}</span>
              </a>

              <a
                href={CLINIC_INFO.instagramClinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#4A413B] bg-white hover:bg-[#F2ECE4] border border-[#E2D5C8] rounded-full transition-all"
              >
                <Instagram className="w-4 h-4 text-[#8C6D58]" />
                <span>{CLINIC_INFO.instagramClinic}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
