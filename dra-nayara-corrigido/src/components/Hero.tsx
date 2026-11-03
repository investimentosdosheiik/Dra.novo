import { motion } from 'motion/react';
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá, Dra. Nayana! Gostaria de agendar uma consulta de avaliação na Clínica Oral Center.'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5] pb-16 pt-8 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#EEDFD2]/40 via-[#F3E7DC]/30 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-6 lg:col-span-7"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6D58]">
              <Sparkles className="h-3.5 w-3.5 text-[#B88E71]" />
              <span>Clínica Oral Center · Belém / PA</span>
            </div>

            <h1 className="font-serif-luxury text-4xl font-semibold leading-[1.08] tracking-tight text-[#1E1B18] sm:text-5xl lg:text-6xl">
              A arte de realçar seus traços com <span className="font-normal italic text-[#8C6D58]">naturalidade e segurança</span>.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-[#5A514B] sm:text-lg">
              Há mais de <span className="font-semibold text-[#1E1B18]">9 anos no mercado</span>, a Dra. Nayana Cunha combina precisão clínica, odontologia avançada e harmonização facial para resultados elegantes e verdadeiramente naturais.
            </p>

            <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8C6D58] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-200 hover:bg-[#745743]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Agendar avaliação</span>
              </a>

              <a
                href="#naturalidade"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E2D5C8] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#4A413A] transition-all duration-200 hover:bg-white hover:text-[#1E1B18]"
              >
                <span>Conhecer a filosofia</span>
                <ArrowRight className="h-4 w-4 text-[#8C6D58]" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-[#E8DDD1]/80 pt-6 text-left sm:gap-6">
              <div>
                <p className="font-serif-luxury text-2xl font-semibold tabular-nums text-[#1E1B18] sm:text-3xl">9+ Anos</p>
                <p className="mt-0.5 text-xs font-medium text-[#706660]">De excelência clínica</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-semibold text-[#1E1B18] sm:text-3xl">100%</p>
                <p className="mt-0.5 text-xs font-medium text-[#706660]">Foco em naturalidade</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-semibold text-[#1E1B18] sm:text-3xl">CRO-PA</p>
                <p className="mt-0.5 text-xs font-medium text-[#706660]">4901</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rotate-1 rounded-3xl bg-gradient-to-tr from-[#8C6D58]/20 to-[#E8DDD1]/50 blur-[2px]" />

              <div className="relative overflow-hidden rounded-2xl border border-[#EADECE] bg-white shadow-xl">
                <img
                  src="/assets/aistudio/dra-nayana-retrato_00a06c79.jpg"
                  alt="Dra. Nayana Cunha - Odontologia Estética e Harmonização"
                  className="h-[460px] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02] sm:h-[520px]"
                  referrerPolicy="no-referrer"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/60 bg-white/90 p-4 text-left shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-serif-luxury text-xl font-semibold leading-tight text-[#1E1B18]">{CLINIC_INFO.doctorFull}</p>
                      <p className="text-xs font-medium tracking-wide text-[#8C6D58]">Odontologia & Harmonização Facial</p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2D5C8] bg-[#FAF6F2] text-[#8C6D58]">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 -top-4 rounded-xl border border-[#E5DACD] bg-white/95 px-4 py-2.5 shadow-md sm:-left-6"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3ECE4] text-[#8C6D58]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1E1B18]">Procedimentos seguros</p>
                    <p className="text-[10px] text-[#706660]">Produtos de padrão ouro</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -right-4 hidden items-center gap-3 rounded-xl border border-[#E5DACD] bg-white/95 px-4 py-2.5 shadow-md sm:flex"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3ECE4] text-[#8C6D58]">
                  <HeartHandshake className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-[#1E1B18]">Sem exageros</p>
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
