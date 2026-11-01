import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Star, MessageSquareQuote } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      name: "Camila Vasconcelos",
      treatment: "Preenchimento Labial Natural",
      text: "Eu tinha muito medo de ficar com a boca artificial. A Dra. Nayana teve uma paciência infinita na consulta, me explicou cada proporção e o resultado ficou surreal de lindo e natural. Todo mundo elogia meu viço!",
      rating: 5,
      city: "Belém, PA"
    },
    {
      name: "Mariana Alencar",
      treatment: "Harmonização Facial & Botox",
      text: "Ambiente impecável na Oral Center! Fiquei impressionada com o carinho e o cuidado em não mudar minhas feições. Meu rosto ficou descansado, jovem e sem nenhuma dor durante o procedimento.",
      rating: 5,
      city: "Ananindeua, PA"
    },
    {
      name: "Juliana Ribeiro",
      treatment: "Bioestimulador & Contorno Mandibular",
      text: "A clínica é linda demais, o painel de madeira na recepção é super elegante e o atendimento da Dra. Nayana é fora de série. Ela é pontual, técnica e muito humana. Recomendo de olhos fechados.",
      rating: 5,
      city: "Belém, PA"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D58] mb-2">
              Experiência de Nossas Pacientes
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1E1B18] font-semibold text-balance">
              Confiança construída com resultados reais.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8DED3] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#8C6D58]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#554C46] leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EAE1]">
                  <p className="font-semibold text-sm text-[#1E1B18]">{t.name}</p>
                  <p className="text-xs text-[#8C6D58]">{t.treatment}</p>
                  <span className="text-[11px] text-[#8A7D75]">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D58] mb-2">
              Dúvidas Frequentes
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1E1B18] font-semibold">
              Perguntas sobre nossos procedimentos
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-[#E8DED3] bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-medium text-sm sm:text-base text-[#1E1B18]">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#8C6D58] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-[#5C534D] leading-relaxed border-t border-[#F4EDE5]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
