import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FaqSection from '@/components/FaqSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Agence IA & Automatisation sur Mesure"
        description="Lucide est une agence experte en IA qui conçoit des solutions d'automatisation sur mesure pour accélérer votre croissance. Parlons de votre projet."
        keywords="agence IA, automatisation, intelligence artificielle, développement sur mesure, solutions IA"
        canonicalUrl="https://lucidetest.netlify.app/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
