import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

const treatments = [
  {
    title: 'Preenchimento Facial',
    description: 'Planejamento individualizado para reposição de volume e equilíbrio dos contornos, sempre respeitando a avaliação clínica e as características de cada pessoa.',
    note: 'Indicação e plano definidos em consulta',
  },
  {
    title: 'Microagulhamento Facial',
    description: 'Procedimento estético com microagulhas, indicado após avaliação profissional para cuidar da textura e da aparência da pele.',
    note: 'Protocolo personalizado para cada pele',
  },
  {
    title: 'Peeling',
    description: 'Tratamento de renovação da pele selecionado de acordo com as necessidades individuais, o tipo de pele e a avaliação profissional.',
    note: 'Tipo e concentração definidos em consulta',
  },
  {
    title: 'Ultraformer MPT',
    description: 'Tecnologia de ultrassom micro e macrofocado. A indicação, as áreas tratadas e o plano são definidos após avaliação individual.',
    note: 'Indicação sujeita à avaliação clínica',
  },
];

export default function ComplementaryProcedures() {
  const whatsappUrl = (title: string) =>
    `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
      `Olá! Gostaria de saber mais sobre ${title} e agendar uma avaliação com a Dra. Nayana Cunha.`
    )}`;

  return (
    <section aria-labelledby="tratamentos-complementares" className="bg-[#F3EEE8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D58]">
            Mais opções de cuidado
          </p>
          <h2 id="tratamentos-complementares" className="font-serif-luxury text-3xl font-semibold tracking-tight text-[#1E1B18] sm:text-5xl">
            Tratamentos faciais
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#615750]">
            Conheça outras opções disponíveis na clínica. A indicação, os benefícios esperados e os cuidados são conversados em avaliação, de acordo com cada caso.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => (
            <article key={treatment.title} className="flex h-full flex-col rounded-2xl border border-[#E5D9CD] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3EEE8] text-[#8C6D58]">
                <Sparkles aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#2C2724]">{treatment.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#615750]">{treatment.description}</p>
              <p className="mt-5 border-t border-[#F0EAE1] pt-4 text-xs font-medium text-[#80634F]">{treatment.note}</p>
              <a
                href={whatsappUrl(treatment.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#745743] transition-colors hover:text-[#4F3A2D]"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Consultar pelo WhatsApp
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-[#776B63]">
          Os tratamentos dependem de avaliação individual e da indicação profissional. Resultados e recomendações variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}
