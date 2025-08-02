import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Blog - Analyses et Nouvelles sur l'IA"
        description="Retrouvez nos derniers articles, analyses et tutoriels sur l'intelligence artificielle, l'automatisation et le développement de solutions sur mesure."
        canonicalUrl="https://lucidetest.netlify.app/blog"
      />
      <Navigation />
      <main className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p>Contenu à venir...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Blog; 