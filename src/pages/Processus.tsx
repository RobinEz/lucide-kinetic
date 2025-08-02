import Navigation from '@/components/Navigation';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Processus = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Notre Processus en 4 Étapes Claires"
        description="De l'idée au résultat, notre processus garantit visibilité, collaboration et résultats mesurables pour le succès de votre projet d'automatisation IA."
        canonicalUrl="https://lucidetest.netlify.app/processus"
        keywords="processus IA, méthode agile, cadrage projet, prototypage, PoC, développement IA, optimisation continue"
      />
      <Navigation />
      <main>
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Processus; 