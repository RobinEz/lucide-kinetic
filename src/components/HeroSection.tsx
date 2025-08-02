import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import neuralHero from '@/assets/neural-hero.webp';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg"
      style={{
        backgroundImage: `url(${neuralHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay interactif */}
      <div 
        className="absolute inset-0 bg-background/80 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--primary) / 0.1) 0%, 
            hsl(var(--background) / 0.9) 50%)`
        }}
      />

      {/* Particules flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Titre principal avec effet cinétique */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span 
              className="inline-block transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: '0.2s' }}
            >
              Clarifions
            </span>{' '}
            <span 
              className="text-gradient inline-block transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: '0.4s' }}
            >
              la complexité.
            </span>
            <br />
            <span 
              className="inline-block transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: '0.6s' }}
            >
              Accélérons
            </span>{' '}
            <span 
              className="text-primary inline-block transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: '0.8s' }}
            >
              votre futur.
            </span>
          </h1>
 
           {/* Sous-titre élégant */}
           <h2
             className="text-xl md:text-2xl font-normal text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
             style={{ animationDelay: '1s' }}
           >
             Nous sommes une <strong className="font-medium text-foreground">agence experte en IA</strong>. Nous créons des <strong className="font-medium text-foreground">solutions d'automatisation sur mesure</strong> pour <span className="text-primary font-medium">booster votre croissance</span>.
           </h2>
 
           {/* CTA spectaculaire */}
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-hero group"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="flex items-center gap-2">
                Parlons de votre projet
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            
            <button 
              onClick={() => navigate('/processus')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300 underline decoration-primary/50 hover:decoration-primary"
              style={{ animationDelay: '1.4s' }}
            >
              Découvrir notre approche
            </button>
          </div>
        </div>
      </div>

      {/* Orbes d'ambiance */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
