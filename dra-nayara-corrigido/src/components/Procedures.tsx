import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ShieldCheck, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PROCEDURES, Procedure, CLINIC_INFO } from '../data/clinicData';

export default function Procedures() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProcedure, setActiveProcedure] = useState<Procedure | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Procedimentos' },
    { id: 'labial', label: 'Estética Labial' },
    { id: 'facial', label: 'Harmonização Facial' },
    { id: 'rejuvenescimento', label: 'Rejuvenescimento & Colágeno' },
    { id: 'dental', label: 'Odontologia & Sorriso' },
  ];

  const filteredProcedures = selectedCategory === 'all'
    ? PROCEDURES
    : PROCEDURES.filter(p => p.category === selectedCategory);

  const getWhatsappUrl = (title: string) => {
    return `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
      `Olá! Tenho interesse no procedimento "${title}" com a Dra. Nayana Cunha na Clínica Oral Center. Poderiam me passar mais informações?`
    )}`;
  };

  return (
    <section id="procedimentos" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D58] mb-3">
            Especialidades Médicas e Odontológicas
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1E1B18] font-semibold tracking-tight text-balance">
            Procedimentos planejados para o seu bem-estar e autoestima.
          </h2>
          <p className="mt-4 text-base text-[#615750] leading-relaxed">
            Cada tratamento é precedido por uma consulta minuciosa de diagnóstico orofacial, garantindo resultados refinados, seguros e de longa duração.
          </p>
        </div>

        {/* Category Filters (interactive segmented buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E8DED3]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#8C6D58] text-white shadow-sm'
                  : 'bg-white/80 border border-[#E0D5C9] text-[#554C46] hover:bg-white hover:text-[#1E1B18]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProcedures.map((proc, index) => (
              <motion.div
                key={proc.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8DED3] hover:border-[#8C6D58]/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-56 overflow-hidden bg-[#F0EAE1]">
                  <img
                    src={proc.image}
                    alt={proc.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#E9D9CB]">
                      {proc.subtitle}
                    </p>
                    <h3 className="font-serif-luxury text-xl font-semibold leading-snug drop-shadow-sm">
                      {proc.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-[#5C534D] leading-relaxed">
                    {proc.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#F0EAE1]">
                    {proc.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-[#524943]">
                        <Sparkles className="w-3.5 h-3.5 text-[#8C6D58] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metadata Indicators (unboxed text, no pills) */}
                  <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7B6F68]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8C6D58]" />
                      <span>{proc.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D58]" />
                      <span>{proc.recovery}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={getWhatsappUrl(proc.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#1E1B18] bg-[#FAF6F2] hover:bg-[#8C6D58] hover:text-white border border-[#E0D5C9] rounded-xl transition-all duration-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Consultar Valores & Horários</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-70" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
