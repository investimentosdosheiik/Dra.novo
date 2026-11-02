import Header from './components/Header';
import Hero from './components/Hero';
import NaturalLipsFeature from './components/NaturalLipsFeature';
import Procedures from './components/Procedures';
import ComplementaryProcedures from './components/ComplementaryProcedures';
import ClinicGallery from './components/ClinicGallery';
import AboutDoctor from './components/AboutDoctor';
import InteractiveAssessment from './components/InteractiveAssessment';
import TestimonialsAndFaq from './components/TestimonialsAndFaq';
import ProfessionalFooter from './components/ProfessionalFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2724] font-sans selection:bg-[#E5D5C5] selection:text-[#1F1C1A]">
      <Header />

      <main className="flex-1">
        <Hero />
        <NaturalLipsFeature />
        <Procedures />
        <ComplementaryProcedures />
        <ClinicGallery />
        <AboutDoctor />
        <InteractiveAssessment />
        <TestimonialsAndFaq />
      </main>

      <ProfessionalFooter />
      <FloatingWhatsApp />
    </div>
  );
}
