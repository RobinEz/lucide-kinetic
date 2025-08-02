import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Projets = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Nos Projets et Success Stories en IA"
        description="Explorez nos études de cas et découvrez comment nous avons transformé les défis de nos clients en succès mesurables grâce à l'automatisation et l'IA."
        canonicalUrl="https://lucidetest.netlify.app/projets"
        keywords="études de cas IA, success stories automatisation, veille concurrentielle, chatbot support, prédiction de churn, machine learning"
      />
      <Navigation />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projets; 