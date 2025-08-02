import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mentions Légales"
        description="Consultez les mentions légales du site Lucide, agence de développement de solutions IA sur mesure."
        canonicalUrl="https://lucidetest.netlify.app/mentions-legales"
      />
      <Navigation />
      <main className="container mx-auto py-12 px-6 prose dark:prose-invert">
        <h1>Mentions Légales</h1>
        <div className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground">
          <h2 className="text-foreground">Éditeur du site</h2>
            <p>
              <strong>À compléter :</strong><br />
              Nom Prénom / Raison sociale<br />
              Adresse de votre entreprise<br />
              Email : [votre.email@pro.com]<br />
              Téléphone : [Votre numéro de téléphone]
            </p>
            <h2 className="text-foreground">Informations sur l'entreprise</h2>
            <p>
              <strong>À compléter :</strong><br />
              Statut juridique : Entreprise Individuelle<br />
              Numéro SIRET : [Votre numéro de SIRET]<br />
              TVA non applicable, article 293 B du CGI.
            </p>
            <h2 className="text-foreground">Responsable de la publication</h2>
            <p>
              <strong>À compléter :</strong><br />
              Nom Prénom<br />
              Le responsable de la publication est une personne physique ou une personne morale.
            </p>
            <h2 className="text-foreground">Hébergement</h2>
            <p>
              <strong>À compléter :</strong><br />
              Ce site est hébergé par [Nom de l'hébergeur, par exemple Vercel Inc.]<br />
              Adresse de l'hébergeur<br />
              Numéro de téléphone de l'hébergeur ou contact
            </p>
            <h2 className="text-foreground">Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales; 