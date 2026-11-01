import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Sparkles, MapPin, Coffee, Shield } from 'lucide-react';
import { CLINIC_GALLERY, ClinicImage, CLINIC_INFO } from '../data/clinicData';

export default function ClinicGallery() {
  const [activeImage, setActiveImage] = useState<ClinicImage | null>(null);

  return (
    <section id="clinica" className="py-16 sm:py-24 bg-white border-b border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D58] mb-3">
              Estrutura & Conforto
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#1E1B18] font-semibold tracking-tight text-balance">
              Conheça a Clínica Oral Center.
            </h2>
            <p className="mt-4 text-base text-[#615750] leading-relaxed">
              Um espaço pensado nos mínimos detalhes para que sua visita seja tranquila, relaxante e memorável. Conforto térmico, iluminação acolhedora e tecnologia clínica de excelência.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#706660] border-t md:border-t-0 md:border-l border-[#E5DACF] pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#8C6D58]" />
              <span>Biossegurança Rígida</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#8C6D58]" />
              <span>Café Gourmet & Conforto</span>
            </div>
          </div>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Item 1: Reception with Slatted Wall Logo (Big 7 cols) */}
          <div 
            onClick={() => setActiveImage(CLINIC_GALLERY[0])}
            className="md:col-span-7 group relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#F0EAE1] border border-[#E8DED3] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={CLINIC_GALLERY[0].src}
              alt={CLINIC_GALLERY[0].title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E5D5C5]">
                {CLINIC_GALLERY[0].category}
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold">
                {CLINIC_GALLERY[0].title}
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-1">
                {CLINIC_GALLERY[0].caption}
              </p>
            </div>
          </div>

          {/* Item 2: Modern Consultation Suite (5 cols) */}
          <div 
            onClick={() => setActiveImage(CLINIC_GALLERY[1])}
            className="md:col-span-5 group relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#F0EAE1] border border-[#E8DED3] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={CLINIC_GALLERY[1].src}
              alt={CLINIC_GALLERY[1].title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E5D5C5]">
                {CLINIC_GALLERY[1].category}
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold">
                {CLINIC_GALLERY[1].title}
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-1">
                {CLINIC_GALLERY[1].caption}
              </p>
            </div>
          </div>

          {/* Item 3: Luxury Lounge (6 cols) */}
          <div 
            onClick={() => setActiveImage(CLINIC_GALLERY[2])}
            className="md:col-span-6 group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#F0EAE1] border border-[#E8DED3] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={CLINIC_GALLERY[2].src}
              alt={CLINIC_GALLERY[2].title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E5D5C5]">
                {CLINIC_GALLERY[2].category}
              </span>
              <h3 className="font-serif-luxury text-xl font-semibold">
                {CLINIC_GALLERY[2].title}
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-1">
                {CLINIC_GALLERY[2].caption}
              </p>
            </div>
          </div>

          {/* Item 4: Doctor Nayana Cunha in office (6 cols) */}
          <div 
            onClick={() => setActiveImage(CLINIC_GALLERY[3])}
            className="md:col-span-6 group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#F0EAE1] border border-[#E8DED3] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={CLINIC_GALLERY[3].src}
              alt={CLINIC_GALLERY[3].title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E5D5C5]">
                {CLINIC_GALLERY[3].category}
              </span>
              <h3 className="font-serif-luxury text-xl font-semibold">
                {CLINIC_GALLERY[3].title}
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-1">
                {CLINIC_GALLERY[3].caption}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#1F1B18] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 text-left bg-[#1F1B18] text-white border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-[#D4BBA5] font-semibold">
                  {activeImage.category}
                </span>
                <h3 className="font-serif-luxury text-2xl font-semibold mt-1">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-2">
                  {activeImage.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
