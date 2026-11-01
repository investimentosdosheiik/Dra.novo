import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Layers, CheckCircle2, MessageCircle, Info } from 'lucide-react';
import { ANATOMY_POINTS, CLINIC_INFO } from '../data/clinicData';

export default function NaturalLipsFeature() {
  const [activePointId, setActivePointId] = useState<string>(ANATOMY_POINTS[0].id);
  const [viewMode, setViewMode] = useState<'interactive' | 'clean'>('interactive');

  const activePoint = ANATOMY_POINTS.find(p => p.id === activePointId) || ANATOMY_POINTS[0];

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá, Dra. Nayana! Vi a explicação sobre Lábios Naturais no site e gostaria de saber mais sobre o preenchimento labial.'
  )}`;

  return (
    <section id="naturalidade" className="py-16 sm:py-24 bg-white border-y border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D58] mb-3">
            Filosofia de Harmonização Labial
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1E1B18] font-semibold tracking-tight text-balance">
            "Lábios bonitos <span className="italic font-normal text-[#8C6D58]">não precisam</span> parecer exagerados."
          </h2>
          <p className="mt-4 text-base text-[#615750] leading-relaxed">
            Eliminamos os padrões artificiais. Através do estudo minucioso da anatomia facial e proporção áurea, entregamos contorno, hidratação e volume sutil que valorizam sua beleza natural.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#F5EFE8] rounded-full border border-[#E5DACF]">
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                viewMode === 'interactive'
                  ? 'bg-white text-[#1E1B18] shadow-sm font-semibold'
                  : 'text-[#6D625B] hover:text-[#1E1B18]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#8C6D58]" />
              <span>Mapa Anatômico Interativo</span>
            </button>
            <button
              onClick={() => setViewMode('clean')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                viewMode === 'clean'
                  ? 'bg-white text-[#1E1B18] shadow-sm font-semibold'
                  : 'text-[#6D625B] hover:text-[#1E1B18]'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#8C6D58]" />
              <span>Modo Editorial (Puro / Sem Legendas)</span>
            </button>
          </div>
        </div>

        {/* Feature Grid: Image with interactive anatomy markers + detail card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Visual Showcase (Clean or Interactive Hotspots) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8DED3] shadow-lg group">
              <img
                src="/assets/images/labios_estetica_natural_1793496643336.jpg"
                alt="Fotografia macro profissional de lábios naturais hidratados"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center select-none"
                referrerPolicy="no-referrer"
              />

              {/* Status Indicator */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/70 text-xs font-medium text-[#4D443E] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#8C6D58]" />
                <span>{viewMode === 'interactive' ? 'Pontos de Análise Áurea' : 'Fotografia Editorial Sem Marcas'}</span>
              </div>

              {/* Interactive Hotspots Overlaid on Image */}
              {viewMode === 'interactive' && (
                <div className="absolute inset-0 pointer-events-auto">
                  {ANATOMY_POINTS.map((point) => {
                    const isSelected = activePointId === point.id;
                    return (
                      <button
                        key={point.id}
                        onClick={() => setActivePointId(point.id)}
                        style={{ left: `${point.x}%`, top: `${point.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                        title={point.title}
                      >
                        {/* Ripple animation ring */}
                        <span
                          className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                            isSelected
                              ? 'bg-[#8C6D58]/40 animate-ping'
                              : 'bg-white/30 group-hover:bg-[#8C6D58]/20'
                          }`}
                        />
                        {/* Core button marker */}
                        <div
                          className={`relative w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform shadow-md ${
                            isSelected
                              ? 'bg-[#8C6D58] text-white scale-110 ring-2 ring-white'
                              : 'bg-white/90 text-[#3C342F] hover:bg-white hover:scale-105'
                          }`}
                        >
                          +
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Bottom Subtle Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md text-white/95 p-3 rounded-xl border border-white/20 text-xs flex items-center justify-between">
                <span>Fotografia de Alta Definição · Padrão Clínica Oral Center</span>
                <span className="hidden sm:inline text-white/70">Toque nos pontos para explorar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Content for the active point */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8DED3] shadow-sm space-y-5">
              
              <div className="flex items-center justify-between border-b border-[#E8DDD1] pb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8C6D58]">
                  {activePoint.tag}
                </span>
                <span className="text-xs text-[#8C7E75] font-sans-clean">
                  Critério de Excelência
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePoint.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#1E1B18]">
                    {activePoint.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#574E47] leading-relaxed">
                    {activePoint.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Quick Selectors for all points */}
              <div className="pt-2">
                <p className="text-xs font-medium text-[#7D7068] mb-2">Explorar parâmetros anatômicos:</p>
                <div className="flex flex-wrap gap-2">
                  {ANATOMY_POINTS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActivePointId(p.id);
                        setViewMode('interactive');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap ${
                        activePointId === p.id && viewMode === 'interactive'
                          ? 'bg-[#8C6D58] text-white font-medium'
                          : 'bg-white border border-[#E0D5C9] text-[#554C46] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Core Pillars */}
              <div className="pt-4 border-t border-[#E8DDD1] space-y-2 text-xs sm:text-sm text-[#4E4640]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D58] shrink-0 mt-0.5" />
                  <span>Ácido hialurônico biocompatível com efeito hidratante duradouro</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D58] shrink-0 mt-0.5" />
                  <span>Anestesia de alta eficácia para conforto durante todo o procedimento</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D58] shrink-0 mt-0.5" />
                  <span>Resultado imediato com estabilização refinada em 15 dias</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-[#8C6D58] hover:bg-[#745743] rounded-xl transition-all shadow-sm hover:shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero Avaliar Meus Lábios</span>
                </a>
              </div>

            </div>

            {/* Reassurance note */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F6F1EA] border border-[#E8DDD1] text-xs text-[#6A6059]">
              <Info className="w-4 h-4 text-[#8C6D58] shrink-0" />
              <span>
                Cada formato labial é único. Na consulta, a Dra. Nayana avalia sua estrutura óssea e dentária antes de qualquer aplicação.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
