import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
       <SEO
        title="Contactez Notre Agence Experte en IA"
        description="Prêt à discuter de votre projet ? Contactez notre équipe pour une consultation découverte gratuite et explorons ensemble les possibilités de l'IA."
        canonicalUrl="https://lucidetest.netlify.app/contact"
      />
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 