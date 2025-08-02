import { BrainCircuit, Mail, Linkedin, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@lucide-agency.com',
      ariaLabel: 'Envoyer un email à Lucide Agency',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/your-profile',
      ariaLabel: 'Visiter le profil LinkedIn de Lucide Agency',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/your-repo',
      ariaLabel: 'Visiter le GitHub de Lucide Agency',
    },
  ];

  const footerLinks = {
    entreprise: [
      { name: 'Philosophie', path: '/philosophie' },
      { name: 'Expertise', path: '/expertise' },
      { name: 'Processus', path: '/processus' },
    ],
    projets: [
      { name: 'Nos Réalisations', path: '/projets' },
      { name: 'Blog', path: '/blog' },
      { name: 'Veille Technologique', path: '/veille' },
    ],
    legal: [
      { name: 'Mentions Légales', path: '/mentions-legales' },
      { name: 'Confidentialité', path: '/confidentialite' },
      { name: 'CGV', path: '/cgv' },
    ],
  };

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BrainCircuit className="w-9 h-9 text-primary" />
              <span className="text-2xl font-monument font-bold text-foreground">
                Lucide
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformons ensemble la complexité en clarté, 
              les données en insights, et les processus en avantages concurrentiels.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Entreprise</h3>
              <ul className="space-y-2">
                {footerLinks.entreprise.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => navigate(link.path)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Projets</h3>
              <ul className="space-y-2">
                {footerLinks.projets.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => navigate(link.path)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Légal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => navigate(link.path)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            &copy; {currentYear} Lucide. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;