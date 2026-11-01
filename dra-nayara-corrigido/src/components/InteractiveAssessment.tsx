import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageCircle, ArrowRight, RotateCcw, Check, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface Option {
  id: string;
  label: string;
  detail: string;
}

export default function InteractiveAssessment() {
  const [step, setStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [experienceLevel, setExperienceLevel] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('');

  const goals: Option[] = [
    {
      id: 'labios',
      label: 'Lábios Naturais & Hidratados',
      detail: 'Definição do arco do cupido, proporção áurea e volume sutil sem exageros.'
    },
    {
      id: 'rejuvenescimento',
      label: 'Prevenção & Rejuvenescimento Facial',
      detail: 'Suavização de linhas de expressão com botox e estímulo de colágeno.'
    },
    {
      id: 'contorno',
      label: 'Harmonização do Contorno Facial',
      detail: 'Estruturação sutil da mandíbula, queixo e sustentação malar.'
    },
    {
      id: 'sorriso',
      label: 'Estética & Saúde do Sorriso',
      detail: 'Lentes de contato dental, clareamento ou checkup odontológico completo.'
    }
  ];

  const experiences: Option[] = [
    {
      id: 'primeira-vez',
      label: 'É minha primeira vez',
      detail: 'Busco orientação segura e tenho receio de resultados artificiais.'
    },
    {
      id: 'ja-fiz',
      label: 'Já realizei procedimentos',
      detail: 'Desejo manutenção de qualidade ou refinamento estético.'
    },
    {
      id: 'duvidas',
      label: 'Quero tirar dúvidas com a Dra. Nayana',
      detail: 'Preciso de um diagnóstico profissional antes de decidir.'
    }
  ];

  const times = [
    'Manhã (08h às 12h)',
    'Tarde (14h às 18h)',
    'Qualquer horário disponível'
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedGoal('');
    setExperienceLevel('');
    setPreferredTime('');
  };

  const getSummaryText = () => {
    const goalObj = goals.find(g => g.id === selectedGoal)?.label || 'Avaliação geral';
    const expObj = experiences.find(e => e.id === experienceLevel)?.label || 'Primeira consulta';
    const timeText = preferredTime || 'A combinar';

    return `Olá, Dra. Nayana! Preenchi o simulador de avaliação na Clínica Oral Center com os seguintes dados:
• Objetivo Principal: ${goalObj}
• Experiência prévia: ${expObj}
• Preferência de horário: ${timeText}

Gostaria de verificar datas disponíveis para minha consulta presencial.`;
  };

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(getSummaryText())}`;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#ECE2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D58] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E71]" />
            <span>Guia Personalizado de Avaliação</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1E1B18] font-semibold">
            Descubra o cuidado ideal para sua essência
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6E645D]">
            Responda 3 perguntas rápidas para direcionarmos seu atendimento com exclusividade.
          </p>
        </div>

        {/* Step Progress Tracker (clean unboxed text) */}
        <div className="flex items-center justify-center gap-4 text-xs text-[#82756E] mb-8 font-medium">
          <span className={step >= 1 ? 'text-[#8C6D58] font-semibold' : ''}>1. Objetivo</span>
          <span>·</span>
          <span className={step >= 2 ? 'text-[#8C6D58] font-semibold' : ''}>2. Experiência</span>
          <span>·</span>
          <span className={step >= 3 ? 'text-[#8C6D58] font-semibold' : ''}>3. Horário</span>
          <span>·</span>
          <span className={step === 4 ? 'text-[#8C6D58] font-semibold' : ''}>Resultado</span>
        </div>

        {/* Card Container */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#E8DED3] shadow-sm text-left">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Goals */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-serif-luxury text-2xl text-[#1E1B18] font-semibold">
                    Qual transformação mais chama sua atenção no momento?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706660] mt-1">
                    Selecione a área prioritária que você gostaria de harmonizar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        selectedGoal === goal.id
                          ? 'bg-white border-[#8C6D58] ring-2 ring-[#8C6D58]/20 shadow-sm'
                          : 'bg-white/70 border-[#E5DACF] hover:bg-white hover:border-[#8C6D58]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-[#1E1B18]">{goal.label}</span>
                        {selectedGoal === goal.id && (
                          <Check className="w-4 h-4 text-[#8C6D58]" />
                        )}
                      </div>
                      <p className="text-xs text-[#6B615B] leading-relaxed">{goal.detail}</p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-4 border-t border-[#E8DED3]">
                  <button
                    disabled={!selectedGoal}
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#8C6D58] disabled:bg-[#D5C9BE] rounded-full transition-all"
                  >
                    <span>Próximo Passo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Experience */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-serif-luxury text-2xl text-[#1E1B18] font-semibold">
                    Você já fez procedimentos orofaciais antes?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706660] mt-1">
                    Isso ajuda a calibrar a intensidade do acolhimento e dos esclarecimentos.
                  </p>
                </div>

                <div className="space-y-3">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setExperienceLevel(exp.id)}
                      className={`w-full p-4 rounded-xl text-left border transition-all ${
                        experienceLevel === exp.id
                          ? 'bg-white border-[#8C6D58] ring-2 ring-[#8C6D58]/20 shadow-sm'
                          : 'bg-white/70 border-[#E5DACF] hover:bg-white hover:border-[#8C6D58]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-[#1E1B18]">{exp.label}</span>
                        {experienceLevel === exp.id && (
                          <Check className="w-4 h-4 text-[#8C6D58]" />
                        )}
                      </div>
                      <p className="text-xs text-[#6B615B] mt-1">{exp.detail}</p>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E8DED3]">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-medium text-[#706660] hover:text-[#1E1B18]"
                  >
                    Voltar
                  </button>
                  <button
                    disabled={!experienceLevel}
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#8C6D58] disabled:bg-[#D5C9BE] rounded-full transition-all"
                  >
                    <span>Próximo Passo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Preferred Time */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-serif-luxury text-2xl text-[#1E1B18] font-semibold">
                    Qual período do dia é mais conveniente para você?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706660] mt-1">
                    Nosso consultório atende com hora marcada e pontualidade rigorosa.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {times.map((timeOption) => (
                    <button
                      key={timeOption}
                      onClick={() => setPreferredTime(timeOption)}
                      className={`p-4 rounded-xl text-center border text-xs sm:text-sm font-medium transition-all ${
                        preferredTime === timeOption
                          ? 'bg-white border-[#8C6D58] text-[#1E1B18] ring-2 ring-[#8C6D58]/20 font-semibold shadow-sm'
                          : 'bg-white/70 border-[#E5DACF] text-[#554C46] hover:bg-white'
                      }`}
                    >
                      {timeOption}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E8DED3]">
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs font-medium text-[#706660] hover:text-[#1E1B18]"
                  >
                    Voltar
                  </button>
                  <button
                    disabled={!preferredTime}
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#8C6D58] disabled:bg-[#D5C9BE] rounded-full transition-all"
                  >
                    <span>Ver Recomendação</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Final Recommendation & WhatsApp Action */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#E8DED3] pb-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C6D58]">
                    <Heart className="w-4 h-4 text-[#8C6D58]" />
                    <span>Plano Pré-Configurado</span>
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-[#706660] hover:text-[#1E1B18]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Recomeçar</span>
                  </button>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E5DACF] space-y-3">
                  <h4 className="font-serif-luxury text-xl font-semibold text-[#1E1B18]">
                    Resumo do Seu Perfil de Atendimento
                  </h4>
                  <ul className="text-xs sm:text-sm text-[#554C46] space-y-1.5">
                    <li>• <strong>Foco:</strong> {goals.find(g => g.id === selectedGoal)?.label}</li>
                    <li>• <strong>Histórico:</strong> {experiences.find(e => e.id === experienceLevel)?.label}</li>
                    <li>• <strong>Disponibilidade:</strong> {preferredTime}</li>
                  </ul>
                  <p className="text-xs text-[#786C65] pt-2 border-t border-[#F0EAE1]">
                    A Dra. Nayana Cunha receberá este resumo pronto para agilizar a verificação de agenda na Clínica Oral Center.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#8C6D58] hover:bg-[#745743] rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar Resumo e Consultar Horários no WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
