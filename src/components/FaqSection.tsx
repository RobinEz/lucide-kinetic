import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Qu'est-ce qu'une solution d'IA sur mesure ?",
    answer: "C'est une solution conçue spécifiquement pour vos défis. Contrairement à un logiciel standard, elle s'adapte parfaitement à vos processus pour une efficacité maximale. Nous codons votre avantage concurrentiel."
  },
  {
    question: "Combien de temps faut-il pour voir les premiers résultats ?",
    answer: "Grâce à notre approche agile, vous pouvez voir les premiers résultats rapidement. Notre phase de prototypage, qui dure entre 2 et 3 semaines, permet déjà de valider la valeur de la solution avant un développement complet."
  },
  {
    question: "Quel est le budget à prévoir pour un projet d'automatisation ?",
    answer: "Chaque projet est unique. Nous commençons toujours par un audit gratuit pour définir vos besoins et vous fournir un devis transparent et détaillé, aligné sur le retour sur investissement attendu."
  },
  {
    question: "Mon entreprise est-elle prête pour l'IA ?",
    answer: "Si vous avez des tâches répétitives, des processus complexes ou des données inexploitées, vous êtes probablement prêt. Notre audit initial permet de confirmer le potentiel et de définir une feuille de route claire, même si vous partez de zéro."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-muted-foreground">
            Trouvez ici les réponses à vos interrogations les plus courantes.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index} className="card-glass mb-4">
              <AccordionTrigger className="p-6 text-lg font-semibold text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection; 