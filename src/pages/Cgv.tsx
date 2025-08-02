import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Cgv = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Conditions Générales de Vente"
        description="Consultez nos conditions générales de vente pour nos services de développement de solutions IA et d'automatisation sur mesure."
        canonicalUrl="https://lucidetest.netlify.app/cgv"
      />
      <Navigation />
      <main className="container mx-auto py-12 px-6 prose dark:prose-invert">
        <h1>Conditions Générales de Vente</h1>
        <div className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground">
          <p>
            Les présentes conditions régissent les ventes par [Votre Nom/Entreprise] de prestations de services de développement et de conseil en intelligence artificielle.
          </p>
          <h2 className="text-foreground">Article 1 : Objet</h2>
          <p>Description des prestations de service (conseil, développement, etc.).</p>
          <h2 className="text-foreground">Article 2 : Devis et Commande</h2>
          <p>Modalités d'acceptation des devis, acomptes...</p>
          <h2 className="text-foreground">Article 3 : Tarifs et Modalités de paiement</h2>
          <p>Description des prix, des conditions de paiement, pénalités de retard.</p>
          <h2 className="text-foreground">Article 4 : Obligations et Responsabilité</h2>
          <p>Obligation de moyens, responsabilité du client...</p>
          <h2 className="text-foreground">Article 5 : Propriété Intellectuelle</h2>
          <p>Conditions de cession des droits sur les livrables.</p>
          <h2 className="text-foreground">Article 6 : Droit applicable et juridiction compétente</h2>
          <p>Indication du droit français et du tribunal compétent en cas de litige.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cgv; 