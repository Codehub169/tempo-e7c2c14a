import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
// import ServicesSection from './components/ServicesSection';
// import WhyHueneuSection from './components/WhyHueneuSection';
// import ContactFormSection from './components/ContactFormSection';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-neutral-offWhite">
      <HeroSection />
      <StorySection />
      {/* 
        Placeholder for upcoming sections:
        <ServicesSection />
        <WhyHueneuSection />
        <ContactFormSection /> 
      */}
      
      {/* Temporary content to demonstrate scrolling and section breaks */}
      {/* <div id="services" className="h-screen bg-slateBlue/10 flex items-center justify-center">
        <h2 className="text-3xl font-display text-slateBlue">Services Section (Coming Soon)</h2>
      </div>
      <div id="why-hueneu" className="h-screen bg-mutedMauve/10 flex items-center justify-center">
        <h2 className="text-3xl font-display text-mutedMauve">Why hueneu? Section (Coming Soon)</h2>
      </div>
      <div id="contact" className="h-screen bg-softCoral/10 flex items-center justify-center">
        <h2 className="text-3xl font-display text-softCoral">Contact Section (Coming Soon)</h2>
      </div> */}
    </main>
  );
}
