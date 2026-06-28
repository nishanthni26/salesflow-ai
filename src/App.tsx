import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import WhyCRMsFail from './components/WhyCRMsFail';
import HowItWorks from './components/HowItWorks';
import Workflow from './components/Workflow';
import DashboardPreview from './components/DashboardPreview';
import WhatsAppAutomation from './components/WhatsAppAutomation';
import AIAutomation from './components/AIAutomation';
import AdsAutomation from './components/AdsAutomation';
import Integrations from './components/Integrations';
import EnterpriseTrust from './components/EnterpriseTrust';
import Testimonials from './components/Testimonials';
import PricingCTA from './components/PricingCTA';
import FutureVision from './components/FutureVision';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <WhyCRMsFail />
        <HowItWorks />
        <Workflow />
        <DashboardPreview />
        <WhatsAppAutomation />
        <AIAutomation />
        <AdsAutomation />
        <Integrations />
        <EnterpriseTrust />
        <Testimonials />
        <PricingCTA />
        <FutureVision />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
