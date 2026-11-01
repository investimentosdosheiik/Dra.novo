/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import NaturalLipsFeature from './components/NaturalLipsFeature';
import Procedures from './components/Procedures';
import ClinicGallery from './components/ClinicGallery';
import AboutDoctor from './components/AboutDoctor';
import InteractiveAssessment from './components/InteractiveAssessment';
import TestimonialsAndFaq from './components/TestimonialsAndFaq';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2724] font-sans selection:bg-[#E5D5C5] selection:text-[#1F1C1A]">
      {/* 3-Zone Top Navigation Header */}
      <Header />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* Hero Showcase with Dra. Nayana Cunha */}
        <Hero />

        {/* Natural Lips & Facial Philosophy (Addressing User's Request: Cleaned, Elevated, No baked captions, interactive anatomy) */}
        <NaturalLipsFeature />

        {/* Complete Clinical Procedures with Categorized Bento Grid */}
        <Procedures />

        {/* The Clinic Spaces (Reception, Modern Suite, Lounge) */}
        <ClinicGallery />

        {/* About Dra. Nayana Cunha */}
        <AboutDoctor />

        {/* Interactive Consultation & Goal Planner */}
        <InteractiveAssessment />

        {/* Testimonials & Patient FAQs */}
        <TestimonialsAndFaq />
      </main>

      {/* Refined Quiet Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Access */}
      <FloatingWhatsApp />
    </div>
  );
}
