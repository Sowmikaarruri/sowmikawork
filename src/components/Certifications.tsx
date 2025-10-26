import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    organization: "Infosys",
    achievements: [
      "Cloud Computing",
      "Prompt Engineering",
      "Natural Language Processing (NLP)",
      "OpenAI GPT",
    ],
  },
  {
    organization: "NPTEL",
    achievements: ["Joy of Computing Using Python (83%)"],
  },
  {
    organization: "CISCO NetAcad",
    achievements: ["Cybersecurity", "Switching & Routing"],
  },
  {
    organization: "IBM SkillsBuild",
    achievements: ["AI Fundamentals", "Emerging Technologies", "Mindfulness"],
  },
  {
    organization: "FFE Program",
    achievements: ["Recognized as Outstanding Mentee"],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Certifications & Achievements</h2>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.organization}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-secondary rounded-xl group-hover:bg-primary/10 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {cert.organization}
                  </h3>
                  
                  <ul className="space-y-2">
                    {cert.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
