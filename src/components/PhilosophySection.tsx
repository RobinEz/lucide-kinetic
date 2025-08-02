import { useEffect, useRef, useState } from 'react';
import { Brain, Target, Zap } from 'lucide-react';

const PhilosophySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 bg-gradient-depth opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            L'IA au service de <span className="text-gradient">vos équipes</span>,
            <br />
            pas l'<span className="text-primary">inverse</span>.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Notre conviction est simple : l'IA n'est pas là pour remplacer vos équipes, mais pour décupler leur potentiel.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Nos Principes Fondamentaux</h2>

          {/* Grille de convictions */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Conviction 1 */}
            <div 
              className={`card-glass p-8 text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">La Stratégie d'abord</h3>
              <p className="text-muted-foreground leading-relaxed">
                La technologie n'est qu'un moyen. Notre vrai objectif est de transformer vos processus en un avantage concurrentiel concret et mesurable. Nous ne livrons pas du code, mais de la performance.
              </p>
            </div>

            {/* Conviction 2 */}
            <div 
              className={`card-glass p-8 text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">L'Humain Augmenté</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous croyons que l'IA doit servir vos experts, pas les remplacer. Nous automatisons le répétitif pour que vos équipes se concentrent sur l'innovation.
              </p>
            </div>

            {/* Conviction 3 */}
            <div 
              className={`card-glass p-8 text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-accent-teal/10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-accent-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">La Clarté comme Levier</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dans un monde saturé d'informations, la clarté est une force. Nous transformons vos données brutes en décisions éclairées pour piloter votre croissance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-teal/3 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
};

export default PhilosophySection;