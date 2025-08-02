import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Politique de Confidentialité"
        description="Découvrez comment nous protégeons vos données. Notre politique de confidentialité explique la collecte et l'utilisation de vos informations personnelles."
        canonicalUrl="https://lucidetest.netlify.app/confidentialite"
      />
      <Navigation />
      <main className="container mx-auto py-12 px-6 prose dark:prose-invert">
        <h1>Politique de Confidentialité</h1>
        <div className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground">
          <p>
            Cette politique de confidentialité décrit comment vos informations personnelles sont collectées, utilisées et partagées lorsque vous visitez ou effectuez un achat sur ce site.
          </p>
          <h2 className="text-foreground">Collecte des données personnelles</h2>
          <p>
            Les données personnelles collectées via le formulaire de contact (nom, adresse e-mail, contenu du message) le sont dans l'unique but de répondre à votre demande.
          </p>
          <h2 className="text-foreground">Durée de conservation</h2>
          <p>
            Les données sont conservées pour une durée maximale de 3 ans après le dernier contact.
          </p>
          <h2 className="text-foreground">Vos droits</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Vous pouvez exercer ce droit en nous contactant à l'adresse e-mail [votre.email@pro.com].
          </p>
          <h2 className="text-foreground">Cookies</h2>
          <p>
            <strong>À compléter :</strong> Ce site [peut utiliser/utilise] des cookies pour améliorer l'expérience utilisateur. [Décrire les types de cookies et leur finalité].
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Confidentialite; 