import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Lightbulb, 
  Code2, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation automatique des étapes
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: "Cadrage : Aligner Vision et Objectifs",
      subtitle: "Comprendre en profondeur",
      description: "Nous débutons par un atelier pour cerner vos objectifs et contraintes. Ensemble, nous définissons des indicateurs de succès clairs (KPIs) pour votre projet.",
      details: [
        "Analyse des processus existants",
        "Identification des pain points",
        "Définition des objectifs SMART",
        "Établissement des métriques de succès"
      ],
      duration: "1-2 semaines",
      deliverable: "Document de cadrage détaillé"
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Prototypage : Valider Avant d'Investir",
      subtitle: "Valider la faisabilité",
      description: "Nous concevons l'architecture de la solution et la validons rapidement avec un prototype fonctionnel (PoC). Cela permet de tester la faisabilité et de visualiser le résultat.",
      details: [
        "Architecture technique détaillée",
        "Prototype fonctionnel (MVP)",
        "Tests de faisabilité",
        "Validation des hypothèses"
      ],
      duration: "2-3 semaines",
      deliverable: "PoC fonctionnel + Architecture"
    },
    {
      number: "03",
      icon: Code2,
      title: "Développement : Construire la Solution",
      subtitle: "Construire la solution",
      description: "Nous construisons la solution finale de manière agile. Vous suivez l'avancement grâce à des démonstrations régulières.",
      details: [
        "Développement itératif",
        "Tests automatisés",
        "Déploiement sécurisé",
        "Formation des équipes"
      ],
      duration: "4-8 semaines",
      deliverable: "Solution complète en production"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimisation : Maximiser l'Impact",
      subtitle: "Maximiser l'impact",
      description: "Nous surveillons les performances en continu pour les améliorer sans cesse. Notre objectif : maximiser l'impact de la solution sur le long terme.",
      details: [
        "Monitoring des performances",
        "Analyse des métriques",
        "Optimisations continues",
        "Support et maintenance"
      ],
      duration: "Ongoing",
      deliverable: "Tableau de bord & rapports"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-6 relative overflow-hidden bg-surface/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            De l'Idée au Résultat :
            <br />
            Notre <span className="text-gradient">Processus</span> en 4 Étapes <span className="text-primary">Claires</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre méthode garantit une collaboration transparente et des résultats concrets. Nous éliminons les risques pour assurer le succès de votre projet.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-12 text-center">Les 4 Piliers de Notre Méthodologie</h2>

        {/* Timeline interactive */}
        <div className="relative">
          {/* Ligne de progression */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/30 hidden lg:block">
            <div 
              className="h-full bg-gradient-primary transition-all duration-1000"
              style={{ width: isVisible ? `${((activeStep + 1) / 4) * 100}%` : '0%' }}
            ></div>
          </div>

          {/* Étapes */}
          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isPassed = activeStep > index;
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isVisible ? `${200 + index * 200}ms` : '0ms' }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Card principale */}
                  <div className={`card-glass p-6 text-center transition-all duration-500 ${
                    isActive ? 'scale-105 shadow-elegant' : ''
                  }`}>
                    {/* Numéro et icône */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive || isPassed 
                          ? 'bg-gradient-primary' 
                          : 'bg-surface border border-border/50'
                      }`}>
                        <Icon className={`w-8 h-8 transition-colors duration-300 ${
                          isActive || isPassed ? 'text-white' : 'text-muted-foreground'
                        }`} />
                      </div>
                      
                      {/* Numéro d'étape */}
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        isActive || isPassed
                          ? 'bg-primary text-white'
                          : 'bg-surface border border-border/50 text-foreground'
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="space-y-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground">
                          {step.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Métadonnées */}
                      <div className="pt-4 border-t border-border/30 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Durée:</span>
                          <span className="text-primary font-medium">{step.duration}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">Livrable:</strong> {step.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Détails extensibles */}
                  <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="card-glass p-4">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Détails de l'étape:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Flèche de progression (desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 z-10">
                      <ArrowRight className={`w-6 h-6 transition-colors duration-300 ${
                        isPassed ? 'text-primary' : 'text-border/50'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
          style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre transformation ?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tout projet débute par un échange. Parlons de vos défis et découvrons ensemble comment l'automatisation peut vous aider.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="btn-hero inline-block mt-12"
              style={{ animationDelay: `${(processSteps.length + 1) * 150}ms` }}
            >
              <span>Planifier un premier échange</span>
            </button>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProcessSection;