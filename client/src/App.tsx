import { Navbar } from './layouts/Navbar';
import { HeroSection } from './features/home/components/HeroSection';
import { PropertySections } from './features/home/components/PropertySections';
import { InsightsAndTrust } from './features/home/components/InsightsAndTrust';
import { Footer } from './layouts/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-blue-500 selection:text-white">
      {/* Platform Fixed Header Layout */}
      <Navbar />

      {/* Sequential Feature Assembly Pipeline */}
      <main>
        <HeroSection />
        <PropertySections />
        <InsightsAndTrust />
      </main>

      {/* Structured Platform Bottom Close Banner */}
      <Footer />
    </div>
  );
}