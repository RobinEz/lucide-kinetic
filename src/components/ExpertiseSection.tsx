import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Wrench, Zap, ArrowRight, BarChart3 } from 'lucide-react';

const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const expertiseAreas = [
    {
      icon: Search,
      title: "Stratégie & Audit IA : Votre Feuille de Route vers le ROI",
      subtitle: "De l'incertitude au plan d'action",
      description: "L'IA vous intéresse, mais vous ne savez pas par où commencer ? Nous créons un plan d'action clair. Nous analysons vos processus et identifions les meilleures opportunités. Vous obtenez une feuille de route chiffrée pour vous lancer sans risque.",
      gradient: "from-primary to-primary-glow",
      details: [
        "Audit complet des processus",
        "Cartographie des opportunités IA",
        "Business case chiffré",
        "Roadmap technologique"
      ]
    },
    {
      icon: Wrench,
      title: "Développement sur Mesure : L'Efficacité Conçue pour Vous",
      subtitle: "Des outils qui s'adaptent à vous",
      description: "Les logiciels standards vous freinent ? Nous développons des outils sur mesure qui vous donnent un avantage concurrentiel. Qu'il s'agisse d'automatiser des tâches, de créer un chatbot ou d'analyser des données, nous codons la solution parfaite pour vous.",
      gradient: "from-accent-blue to-accent-teal",
      details: [
        "Automatisation de workflows",
        "Chatbots intelligents",
        "Analyse prédictive",
        "Outils sur mesure"
      ]
    },
    {
      icon: Zap,
      title: "Intégration LLM : Votre IA, Votre Savoir-Faire",
      subtitle: "La puissance de l'IA, votre expertise",
      description: "Intégrez la puissance de l'IA générative (comme GPT-4) à vos outils, en toute sécurité. Nous connectons l'IA à vos données pour créer des assistants uniques qui comprennent parfaitement votre métier.",
      gradient: "from-accent-teal to-primary",
      details: [
        "Intégration GPT/Claude",
        "Prompt engineering",
        "Fine-tuning personnalisé",
        "Optimisation continue"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent-teal) / 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Notre expertise en <span className="text-gradient">Développement IA</span>
            <br />et <span className="text-primary">Automatisation</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous transformons vos défis opérationnels en avantage concurrentiel grâce à des solutions IA sur mesure.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-12 text-center">Nos Domaines d'Intervention</h2>

        {/* Grille d'expertise */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`card-glass p-8 cursor-pointer group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 200}ms` : '0ms' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icône avec gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} p-4 mb-6 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Contenu principal */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {area.title}
                    </h3>
                    <h4 className="text-primary font-medium mb-4">{area.subtitle}</h4>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>

                  {/* Détails extensibles */}
                  <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 border-t border-border/30 mt-4">
                      <ul className="space-y-2">
                        {area.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="pt-4">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
                    >
                      Explorer cette expertise
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section détails techniques */}
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
          style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
        >
          <div className="card-glass p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Offre détaillée & Technologies maîtrisées</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="pb-4 text-foreground font-semibold">Service Spécifique</th>
                    <th className="pb-4 text-foreground font-semibold">Problématique Adressée</th>
                    <th className="pb-4 text-foreground font-semibold">Livrables Clés</th>
                    <th className="pb-4 text-foreground font-semibold">Technologies</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border/20 hover:bg-surface/30 transition-colors duration-200">
                    <td className="py-4 font-medium text-primary">Audit d'Opportunités IA</td>
                    <td className="py-4 text-muted-foreground">"L'IA nous intéresse, mais par où débuter ?"</td>
                    <td className="py-4 text-muted-foreground">Rapport d'audit, cartographie des processus, business case chiffré</td>
                    <td className="py-4 text-accent-teal">Analyse processus métier, Design thinking</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-surface/30 transition-colors duration-200">
                    <td className="py-4 font-medium text-primary">Automatisation Reporting</td>
                    <td className="py-4 text-muted-foreground">"Nos équipes perdent trop de temps à créer des rapports."</td>
                    <td className="py-4 text-muted-foreground">Pipeline automatisé, dashboard temps réel</td>
                    <td className="py-4 text-accent-teal">Python, SQL, Power BI, Tableau</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-surface/30 transition-colors duration-200">
                    <td className="py-4 font-medium text-primary">Chatbot Intelligent</td>
                    <td className="py-4 text-muted-foreground">"Nos experts répondent sans cesse aux mêmes questions."</td>
                    <td className="py-4 text-muted-foreground">Chatbot entraîné sur documentation interne</td>
                    <td className="py-4 text-accent-teal">OpenAI API, LangChain, Vector DB</td>
                  </tr>
                  <tr className="hover:bg-surface/30 transition-colors duration-200">
                    <td className="py-4 font-medium text-primary">Intégration LLM</td>
                    <td className="py-4 text-muted-foreground">"Comment intégrer l'IA générative dans notre produit ?"</td>
                    <td className="py-4 text-muted-foreground">API sécurisée, prompt engineering optimisé</td>
                    <td className="py-4 text-accent-teal">REST APIs, Node.js, Python</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ExpertiseSection;