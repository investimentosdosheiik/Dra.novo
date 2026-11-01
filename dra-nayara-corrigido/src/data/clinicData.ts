export interface Procedure {
  id: string;
  title: string;
  subtitle: string;
  category: 'labial' | 'facial' | 'dental' | 'rejuvenescimento';
  description: string;
  benefits: string[];
  duration: string;
  recovery: string;
  image: string;
  recommendedFor: string;
}

export interface ClinicImage {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  src: string;
  caption: string;
}

export const CLINIC_INFO = {
  name: "Clínica Oral Center",
  doctor: "Dra. Nayana Cunha",
  doctorFull: "Dra. Nayana Nunes Cunha",
  cro: "CRO-PA 4982",
  experienceYears: 9,
  phoneFormatted: "(91) 98505-0440",
  phoneRaw: "5591985050440",
  instagramClinic: "@clinicaoralcenter",
  instagramDoctor: "@dra.nayananunescunha",
  instagramClinicUrl: "https://instagram.com/clinicaoralcenter",
  instagramDoctorUrl: "https://instagram.com/dra.nayananunescunha",
  location: "Belém - PA",
  tagline: "Referência em Naturalidade e Odontologia Estética há mais de 9 anos",
  heroSubtitle: "Entregando excelência e uma experiência premium para que você viva um momento único de cuidado, conforto e respeito à sua essência.",
};

export const ANATOMY_POINTS = [
  {
    id: "arco-cupido",
    title: "Arco do Cupido Definido",
    x: 48,
    y: 43,
    description: "Definição delicada das curvas superiores sem projeção anterior excessiva ('bico de pato'), garantindo elegância e jovialidade natural.",
    tag: "Contorno Anatômico"
  },
  {
    id: "proporcao",
    title: "Proporção Áurea 1 : 1.618",
    x: 28,
    y: 52,
    description: "Equilíbrio milimétrico entre o lábio superior e inferior, respeitando a harmonia geométrica facial individual de cada paciente.",
    tag: "Harmonia Facial"
  },
  {
    id: "labio-inferior",
    title: "Lábio Inferior Mais Cheio",
    x: 52,
    y: 65,
    description: "Volume concentrado nos tubérculos centrais inferiores para proporcionar sensação aveludada e hidratação profunda sem perder os vincos naturais.",
    tag: "Volume Estrutural"
  },
  {
    id: "comissuras",
    title: "Canto da Boca Voltado para Cima",
    x: 75,
    y: 54,
    description: "Sustentação dos cantos labiais (comissuras orais) que reverte a expressão de cansaço ou tristeza para um semblante leve e descansado.",
    tag: "Sustentação e Leveza"
  },
  {
    id: "simetria",
    title: "Simetria Dinâmica",
    x: 66,
    y: 62,
    description: "Avaliação do movimento natural dos lábios ao sorrir e falar, assegurando que o preenchimento permaneça imperceptível ao olhar clínico.",
    tag: "Naturalidade em Movimento"
  }
];

export const PROCEDURES: Procedure[] = [
  {
    id: "preenchimento-labial",
    title: "Preenchimento Labial com Naturalidade",
    subtitle: "Contorno, hidratação profunda e volumização harmônica",
    category: "labial",
    description: "Técnica exclusiva da Dra. Nayana que prioriza o respeito aos traços anatômicos originais. Lábios bonitos, hidratados e desenhados sem jamais parecer exagerados.",
    benefits: [
      "Definição elegante do arco do cupido",
      "Hidratação com ácido hialurônico premium",
      "Volume gradual e personalizado",
      "Recuperação rápida e sem dor intensa"
    ],
    duration: "45 a 60 min",
    recovery: "Sem afastamento das atividades",
    image: "/assets/images/labios_estetica_natural_1793496643336.jpg",
    recommendedFor: "Quem deseja realçar lábios finos, corrigir assimetrias ou devolver viço perdido com o tempo."
  },
  {
    id: "harmonizacao-orofacial",
    title: "Harmonização Orofacial Estruturada",
    subtitle: "Equilíbrio sutil entre mandíbula, queixo e maçãs do rosto",
    category: "facial",
    description: "Planejamento 3D individualizado para harmonizar os terços faciais com sutileza, promovendo sustentação dos tecidos e definição sem traços pesados.",
    benefits: [
      "Definição do contorno mandibular e mento",
      "Efeito lifting facial não cirúrgico",
      "Produtos de altíssima biocompatibilidade",
      "Resultado que realça sua beleza única"
    ],
    duration: "60 a 90 min",
    recovery: "Imediata, retorno no mesmo dia",
    image: "/assets/images/harmonizacao_facial_perfil_1793496644970.jpg",
    recommendedFor: "Pacientes que buscam contorno facial mais marcante e firmeza sem perder a autenticidade."
  },
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica de Precisão (Botox)",
    subtitle: "Prevenção e suavização de linhas com mímica facial preservada",
    category: "rejuvenescimento",
    description: "Aplicação estratégica e micro-dosada para relaxar a musculatura facial. Suaviza rugas na testa, glabela e pés de galinha mantendo a expressividade viva e natural.",
    benefits: [
      "Olhar descansado e rejuvenescido",
      "Prevenção ativa de linhas estáticas profundas",
      "Tratamento de sorriso gengival e bruxismo",
      "Zero efeito 'congelado' ou artificial"
    ],
    duration: "30 min",
    recovery: "Sem downtime, efeito em 7 a 14 dias",
    image: "/assets/aistudio/dra-nayana-retrato_00a06c79.jpg",
    recommendedFor: "Homens e mulheres que buscam prevenção inteligente e olhar luminoso."
  },
  {
    id: "bioestimuladores",
    title: "Bioestimuladores de Colágeno",
    subtitle: "Restauração da firmeza e densidade celular da derme",
    category: "rejuvenescimento",
    description: "Estímulo potente da produção natural de colágeno pelo próprio organismo. Trata a flacidez tecidual conferindo espessamento dérmico e glow duradouro.",
    benefits: [
      "Aumento comprovado do colágeno tipo I",
      "Melhora global da textura e firmeza da pele",
      "Efeito progressivo e duradouro (até 24 meses)",
      "Adequado para face, pescoço e colo"
    ],
    duration: "45 min",
    recovery: "Sem afastamento",
    image: "/assets/aistudio/dra-nayana-sentada_973e67ec.jpg",
    recommendedFor: "Combate à perda de sustentação e prevenção do envelhecimento precoce."
  },
  {
    id: "lentes-contato",
    title: "Lentes de Contato Dental & Estética",
    subtitle: "Planejamento biomimético para um sorriso iluminado e harmônico",
    category: "dental",
    description: "Facetas ultrafinas em cerâmica de alta resistência que corrigem cor, textura, diastemas e formato dos dentes com desgaste mínimo da estrutura sadia.",
    benefits: [
      "Cor translúcida idêntica ao esmalte dental",
      "Alta durabilidade e estabilidade de cor",
      "Simulação prévia com mock-up estético",
      "Integração perfeita aos lábios e face"
    ],
    duration: "Planejado em 2 a 3 sessões",
    recovery: "Imediata",
    image: "/assets/aistudio/clinica-consultorio_fa704534.jpg",
    recommendedFor: "Quem deseja transformar o sorriso com perfeição milimétrica e sofisticação."
  },
  {
    id: "checkup-oral-center",
    title: "Checkup Preventivo & Profilaxia Premium",
    subtitle: "Cuidado clínico meticuloso para a saúde e longevidade do sorriso",
    category: "dental",
    description: "Atendimento odontológico acolhedor com equipamentos de última geração, remoção de manchas e biofilme em ambiente aromatizado e relaxante.",
    benefits: [
      "Ambiente de consultório calmo e livre de ansiedade",
      "Tecnologia ultrassônica confortável",
      "Diagnóstico precoce minucioso",
      "Acompanhamento personalizado contínuo"
    ],
    duration: "45 min",
    recovery: "Imediata",
    image: "/assets/images/clinica_espaco_premium_1793496645495.jpg",
    recommendedFor: "Manutenção periódica da saúde bucal e brilho natural dos dentes."
  }
];

export const CLINIC_GALLERY: ClinicImage[] = [
  {
    id: "recepcao-oral-center",
    title: "Recepção Exclusiva Oral Center",
    subtitle: "Arquitetura com ripado de madeira e identidade visual marcante",
    category: "Ambiente",
    src: "/assets/aistudio/clinica-recepcao_20658a27.jpg",
    caption: "Acolhimento desde o primeiro instante com materiais nobres e luz suave."
  },
  {
    id: "consultorio-clinico",
    title: "Suíte Clínica de Procedimentos",
    subtitle: "Cadeira ergonômica de alto conforto e tecnologia moderna",
    category: "Tecnologia",
    src: "/assets/aistudio/clinica-consultorio_fa704534.jpg",
    caption: "Consultório planejado com ergonomia, iluminação cirúrgica difusa e esterilização rigorosa."
  },
  {
    id: "lounge-premium",
    title: "Lounge de Espera Premium",
    subtitle: "Espaço intimista pensado para sua tranquilidade e privacidade",
    category: "Conforto",
    src: "/assets/images/clinica_espaco_premium_1793496645495.jpg",
    caption: "Ambiente calmo onde você desfruta de um café especial antes do seu atendimento."
  },
  {
    id: "dra-nayana-atendimento",
    title: "Dra. Nayana Cunha",
    subtitle: "Atendimento humanizado e avaliação personalizada",
    category: "Especialista",
    src: "/assets/aistudio/dra-nayana-sentada_973e67ec.jpg",
    caption: "Cada paciente é único: planejamento detalhado que respeita sua individualidade anatômica."
  }
];

export const FAQS = [
  {
    q: "O preenchimento labial fica com aspecto artificial?",
    a: "Não. A filosofia de trabalho da Dra. Nayana Cunha é justamente a 'Naturalidade com Elegância'. Usamos micro-cânulas e ácido hialurônico de alta tecnologia em volumes dosados estritamente para o seu desenho facial, garantindo lábios hidratados, com contorno jovial e sem excessos."
  },
  {
    q: "O procedimento é doloroso?",
    a: "O conforto do paciente é prioridade absoluta. Utilizamos anestesia odontológica tópica e infiltrativa de alta eficácia, tornando o procedimento praticamente indolor e muito tranquilo do início ao fim."
  },
  {
    q: "Quanto tempo dura o resultado do preenchimento labial e da harmonização?",
    a: "O ácido hialurônico é reabsorvido naturalmente pelo organismo. O preenchimento labial dura em média de 8 a 12 meses, enquanto a sustentação mandibular e malar pode durar de 12 a 18 meses, dependendo do metabolismo do paciente."
  },
  {
    q: "Como funciona a primeira consulta de avaliação?",
    a: "Realizamos uma análise orofacial completa, ouvindo suas queixas, examinando proporções estéticas e traçando um plano de tratamento personalizado e transparente, sem pressão para realizar procedimentos desnecessários."
  },
  {
    q: "Como faço para agendar meu horário na Clínica Oral Center?",
    a: "Basta clicar em qualquer um dos botões de agendamento aqui no site ou enviar uma mensagem direta para nosso WhatsApp (91) 98505-0440. Nossa equipe terá o maior prazer em encontrar o melhor horário para você."
  }
];
