import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, TrendingUp, Target, Bot, BarChart3, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
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

  const projects = [
    {
      id: 1,
      title: "Intelligence de Veille Concurrentielle",
      subtitle: "Automatisation IA pour SaaS B2B",
      category: "Automatisation Intelligente",
      challenge: "'Nous passions 15h par semaine en analyse manuelle.' Cette entreprise était noyée sous les informations. Le défi était clair : gagner du temps.",
      approach: "Nous avons créé une IA qui scanne le web et les réseaux sociaux. Elle trouve les informations clés et les nouvelles tendances. L'équipe peut alors se concentrer sur la stratégie.",
      solution: "Notre pipeline intelligent automatise la recherche d'informations. Il utilise le web scraping et l'analyse de sentiment. L'entreprise a maintenant un dashboard en temps réel. Le temps de veille a été divisé par cinq.",
      technologies: ["Python", "Scrapy", "spaCy", "OpenAI API", "Streamlit", "PostgreSQL"],
      results: [
        { metric: "Temps de veille", improvement: "80%", detail: "De 15h à 3h par semaine" },
        { metric: "Détection d'opportunités", improvement: "300%", detail: "30% d'opportunités commerciales supplémentaires" },
        { metric: "Time-to-market", improvement: "40%", detail: "Réaction plus rapide aux tendances" }
      ],
      icon: TrendingUp,
      gradient: "from-primary to-primary-glow"
    },
    {
      id: 2,
      title: "Assistant IA de Support Technique",
      subtitle: "Chatbot intelligent pour documentation",
      category: "LLM & NLP",
      challenge: "'Nos experts passaient trop de temps sur les mêmes questions.' Ce problème freinait l'innovation de cette entreprise. Ils perdaient un temps précieux.",
      approach: "Nous avons créé un assistant IA. Il a été entraîné sur leur documentation technique. Il donne des réponses rapides et justes, directement dans leur messagerie.",
      solution: "Nous avons intégré un chatbot à Slack. Il utilise la technologie RAG. L'accès à l'information est transformé. Le savoir des experts est maintenant disponible pour tous, à tout moment.",
      technologies: ["LangChain", "OpenAI GPT-4", "Pinecone", "Slack API", "FastAPI", "Docker"],
      results: [
        { metric: "Temps des experts", improvement: "70%", detail: "Libération de 42h/semaine d'expertise" },
        { metric: "Résolution instantanée", improvement: "95%", detail: "Questions techniques résolues en <30s" },
        { metric: "Satisfaction équipe", improvement: "90%", detail: "NPS interne de 85/100" }
      ],
      icon: Bot,
      gradient: "from-accent-blue to-accent-teal"
    },
    {
      id: 3,
      title: "Prédiction de Churn Clients",
      subtitle: "Machine Learning pour rétention",
      category: "Analyse Prédictive",
      challenge: "'Nous perdions 25% de nos clients chaque année, sans savoir pourquoi.' Cet éditeur de logiciel devait anticiper les départs pour continuer à grandir.",
      approach: "Nous avons créé un modèle prédictif. Il analyse le comportement des utilisateurs. Il détecte les clients à risque avant même qu'ils ne pensent à partir.",
      solution: "Notre modèle a été intégré au CRM de l'entreprise. Il donne un score de risque pour chaque client. Il propose aussi des actions pour garder ces clients. Le taux de départ a baissé de 35% en six mois.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Airflow", "HubSpot API"],
      results: [
        { metric: "Prédiction accuracy", improvement: "89%", detail: "Identification précise des clients à risque" },
        { metric: "Rétention clients", improvement: "35%", detail: "Réduction du churn de 25% à 16%" },
        { metric: "Revenue saved", improvement: "€750K", detail: "Chiffre d'affaires préservé annuellement" }
      ],
      icon: BarChart3,
      gradient: "from-accent-teal to-primary"
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <section id="projets" ref={sectionRef} className="relative overflow-hidden py-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-depth opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-gradient">Success Stories</span> :
            <br />
            Des <span className="text-primary">Résultats</span>, Pas des Promesses.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chaque projet est une collaboration. Découvrez comment nous avons transformé les défis de nos clients en avantages concurrentiels mesurables.
          </p>
        </div>

        {/* Sélecteur de projets */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-primary text-white shadow-elegant'
                    : 'bg-surface/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{project.category}</span>
              </button>
            );
          })}
        </div>

        {/* Projet sélectionné */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Détails du projet */}
            <div className="space-y-8">
              {/* Header du projet */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentProject.gradient} p-3`}>
                    <currentProject.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{currentProject.title}</h2>
                    <p className="text-primary font-medium">{currentProject.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Sections du cas d'étude */}
              <div className="space-y-6">
                {/* Le Défi */}
                <div className="card-glass p-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    Le Défi
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{currentProject.challenge}</p>
                </div>

                {/* L'Approche Lucide */}
                <div className="card-glass p-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <Zap className="w-5 h-5 text-accent-blue" />
                    Notre Approche Lucide
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{currentProject.approach}</p>
                </div>

                {/* La Solution */}
                <div className="card-glass p-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <BarChart3 className="w-5 h-5 text-accent-teal" />
                    La Solution en Action
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{currentProject.solution}</p>
                  
                  {/* Technologies */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-sm font-medium text-foreground mb-2">Technologies utilisées:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Résultats & Métriques */}
            <div className="space-y-6">
              <div className="card-glass p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Résultats Mesurables
                </h3>
                
                <div className="space-y-6">
                  {currentProject.results.map((result, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">{result.metric}</span>
                        <span className="text-2xl font-bold text-primary">
                          {result.improvement.includes('%') ? '+' : ''}{result.improvement}
                          {result.improvement.includes('%') ? '' : ' '}
                          {result.improvement.includes('%') ? ' de réduction' : ''}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{result.detail}</p>
                      {index < currentProject.results.length - 1 && (
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent mt-4"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button onClick={() => navigate('/contact')} className="w-full btn-hero">
                  <span className="flex items-center justify-center gap-2">
                    Discuter d'un projet similaire
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-teal/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProjectsSection;