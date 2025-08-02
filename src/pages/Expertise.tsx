import Navigation from '@/components/Navigation';
import ExpertiseSection from '@/components/ExpertiseSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Notre Expertise en IA et Automatisation"
        description="Découvrez comment notre expertise en IA et automatisation transforme vos défis en avantage concurrentiel, de la stratégie à l'intégration de LLM."
        canonicalUrl="https://lucidetest.netlify.app/expertise"
        keywords="stratégie IA, audit IA, développement sur mesure, intégration LLM, automatisation de processus, chatbot intelligent"
      />
      <Navigation />
      <main>
        <ExpertiseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Expertise; 