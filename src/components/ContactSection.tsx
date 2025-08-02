import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Clock, CheckCircle, AlertCircle, CalendarDays, Calendar, Sparkles, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs.sendForm(
      'service_yqla9p4', 
      'template_pcbc7ca', 
      formRef.current, 
      'MTx8m6L-BzmEP1ox4'
    )
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', project: '' });
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background avec pattern subtil */}
      <div className="absolute inset-0 neural-bg opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Prêt à apporter de la <span className="text-gradient">clarté</span>
            <br />à votre <span className="text-primary">prochain défi</span> ?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Que vous ayez une idée précise ou simplement une problématique à résoudre, 
            notre équipe serait ravie d'en discuter avec vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire de contact */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="card-glass p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Démarrons la conversation</h2>
                  <p className="text-sm text-muted-foreground">Réponse de notre équipe sous 24h garantie</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Projet */}
                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium text-foreground">
                    Votre projet ou idée en quelques mots
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Décrivez brièvement votre défi, vos objectifs ou votre vision..."
                  />
                </div>

                {/* Bouton submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </button>
                
                {/* Statut de l'envoi */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-3 bg-accent-teal/10 border border-accent-teal/20 rounded-lg text-accent-teal">
                    <CheckCircle className="w-5 h-5" />
                    <p className="text-sm font-medium">Votre message a été envoyé avec succès !</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm font-medium">Une erreur est survenue. Veuillez réessayer.</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Option alternative + informations */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
            {/* Option Calendly */}
            <div className="card-glass p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Plus direct ?</h2>
                  <p className="text-muted-foreground">Réservons un créneau ensemble</p>
                </div>
              </div>
              <p className="text-muted-foreground flex-grow mb-6">
                Préférez-vous planifier directement un appel de 30 minutes ? Nous pourrons discuter de vos objectifs et explorer les possibilités.
              </p>
              <a
                href="https://calendly.com/robinson-edba/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-surface/50 border border-border/50 rounded-lg py-3 px-4 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-105 hover:text-foreground hover:border-primary/30"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Planifier un appel de 30 minutes
              </a>
            </div>

            {/* Informations supplémentaires */}
            <div className="space-y-6">
              {/* Temps de réponse */}
              <div className="flex items-start gap-4 p-4 bg-surface/30 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Réponse rapide</h4>
                  <p className="text-sm text-muted-foreground">
                    Notre équipe répond à tous les messages sous 24h, souvent dans l'heure.
                  </p>
                </div>
              </div>

              {/* Première consultation */}
              <div className="flex items-start gap-4 p-4 bg-surface/30 rounded-xl">
                <div className="w-10 h-10 bg-accent-teal/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Consultation découverte</h4>
                  <p className="text-sm text-muted-foreground">
                    Le premier échange avec notre équipe est gratuit pour comprendre vos enjeux et évaluer la faisabilité.
                  </p>
                </div>
              </div>

              {/* Confidentialité */}
              <div className="flex items-start gap-4 p-4 bg-surface/30 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Confidentialité assurée</h4>
                  <p className="text-sm text-muted-foreground">
                    Vos informations restent strictement confidentielles. NDA disponible si nécessaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Citation finale */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          <blockquote className="text-xl md:text-2xl font-light text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
            "Les meilleures solutions naissent toujours d'une <span className="text-primary font-medium not-italic">conversation claire</span> 
            et d'une <span className="text-gradient font-medium not-italic">vision partagée</span>."
          </blockquote>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactSection;