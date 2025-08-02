import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Veille = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Veille Technologique - Tendances IA"
        description="Notre sélection d'actualités et de ressources sur les dernières tendances en intelligence artificielle et automatisation pour rester à la pointe."
        canonicalUrl="https://lucidetest.netlify.app/veille"
      />
      <Navigation />
      <main className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8">Veille Technologique</h1>
        <p>Contenu à venir...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Veille; 