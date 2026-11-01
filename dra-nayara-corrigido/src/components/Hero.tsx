import { motion } from 'motion/react';
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá, Dra. Nayana! Gostaria de agendar uma consulta de avaliação na Clínica Oral Center.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5]">
      {/* Background delicate artistic glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#EEDFD2]/40 via-[#F3E7DC]/30 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6D58]">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E71]" />
              <span>Clínica Oral Center · Belém / PA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#1E1B18] font-semibold leading-[1.08] tracking-tight text-balance">
              A arte de realçar seus traços com <span className="italic font-normal text-[#8C6D58]">absoluta naturalidade</span>.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5A514B] font-sans-clean leading-relaxed max-w-2xl">
              Há mais de <span className="font-semibold text-[#1E1B18]">9 anos no mercado</span>, a Dra. Nayana Cunha une a precisão da odontologia avançada à sutileza da harmonização orofacial para entregar uma experiência premium onde sua essência é sempre respeitada.
            </p>

            {/* Direct CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#8C6D58] hover:bg-[#745743] rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Avaliação via WhatsApp</span>
              </a>

              <a
                href="#naturalidade"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#4A413A] hover:text-[#1E1B18] bg-white/70 hover:bg-white border border-[#E2D5C8] rounded-full transition-all duration-200 whitespace-nowrap"
              >
                <span>Conhecer a Filosofia</span>
                <ArrowRight className="w-4 h-4 text-[#8C6D58]" />
              </a>
            </div>

            {/* Trust Indicators Strip (clean editorial text, no pill wrappers) */}
            <div className="pt-6 border-t border-[#E8DDD1]/80 grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#1E1B18] tabular-nums">9+ Anos</p>
                <p className="text-xs text-[#706660] font-medium mt-0.5">De excelência clínica</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#1E1B18]">100%</p>
                <p className="text-xs text-[#706660] font-medium mt-0.5">Foco em naturalidade</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#1E1B18]">Exclusivo</p>
                <p className="text-xs text-[#706660] font-medium mt-0.5">Planejamento individual</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Elegant frame container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Backing decorative architectural panel */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#8C6D58]/20 to-[#E8DDD1]/50 rounded-3xl transform rotate-1 blur-[2px]" />

              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#EADECE]">
                <img
                  src="/assets/aistudio/dra-nayana-retrato_00a06c79.jpg"
                  alt="Dra. Nayana Cunha - Odontologia Estética e Harmonização"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle soft gradient scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Card Identity Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif-luxury text-xl font-semibold text-[#1E1B18] leading-tight">
                        {CLINIC_INFO.doctorFull}
                      </p>
                      <p className="text-xs text-[#8C6D58] font-medium tracking-wide">
                        Odontologia & Harmonização Facial
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FAF6F2] border border-[#E2D5C8] flex items-center justify-center text-[#8C6D58] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Accent Badge */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm border border-[#E5DACD] px-4 py-2.5 rounded-xl shadow-md flex items-center gap-3 text-left"
              >
                <div className="w-8 h-8 rounded-full bg-[#F3ECE4] flex items-center justify-center text-[#8C6D58]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1E1B18]">Procedimentos Seguros</p>
                  <p className="text-[10px] text-[#706660]">Produtos de padrão ouro</p>
                </div>
              </motion.div>

              {/* Second floating badge bottom right */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:flex absolute -bottom-3 -right-4 bg-white/95 backdrop-blur-sm border border-[#E5DACD] px-4 py-2.5 rounded-xl shadow-md items-center gap-3 text-left"
              >
                <div className="w-8 h-8 rounded-full bg-[#F3ECE4] flex items-center justify-center text-[#8C6D58]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1E1B18]">Sem Exageros</p>
                  <p className="text-[10px] text-[#706660]">Sua essência preservada</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
