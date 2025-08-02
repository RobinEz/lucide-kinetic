import Navigation from '@/components/Navigation';
import PhilosophySection from '@/components/PhilosophySection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Philosophie = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Notre Philosophie - Clarté et Collaboration en IA"
        description="Découvrez notre approche basée sur la clarté, la collaboration et des résultats mesurables. Nous transformons la complexité de l'IA en avantage concurrentiel."
        canonicalUrl="https://lucidetest.netlify.app/philosophie"
      />
      <Navigation />
      <main>
        <PhilosophySection />
      </main>
      <Footer />
    </div>
  );
};

export default Philosophie; 