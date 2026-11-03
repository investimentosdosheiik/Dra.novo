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
  cro: "CRO-PA 4901",
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
