import { ExternalLink, Brain, Shield, Music, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import resumeParserImg from "@/assets/resume-parser.jpg";
import creditCardImg from "@/assets/creditcard-fraud.jpg";
import speechEmotionImg from "@/assets/speech-emotion.png";
import weatherImg from "@/assets/weather-website.jpg";

const projects = [
  {
    title: "Smart Resume Parser",
    description:
      "AI-powered Streamlit app using OpenAI GPT & LangChain. Extracts and summarizes candidate data from resumes with intelligent parsing capabilities.",
    icon: Brain,
    image: resumeParserImg,
    tags: ["OpenAI GPT", "LangChain", "Streamlit", "Python"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Machine learning model detecting fraudulent transactions with precision-based classification using advanced algorithms and data analysis.",
    icon: Shield,
    image: creditCardImg,
    tags: ["Machine Learning", "Scikit-learn", "Python", "Data Analysis"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Speech Emotion Recognition",
    description:
      "Deep learning model using Wav2Vec2 and Hugging Face. Recognizes emotions (happy, sad, angry, neutral) from audio with high accuracy.",
    icon: Music,
    image: speechEmotionImg,
    tags: ["Wav2Vec2", "Hugging Face", "Deep Learning", "Audio Processing"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Weather Website",
    description:
      "Interactive weather application providing real-time weather information and forecasts with an intuitive user interface.",
    icon: Cloud,
    image: weatherImg,
    tags: ["JavaScript", "API Integration", "HTML5", "CSS3"],
    color: "from-orange-500 to-yellow-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real-world applications showcasing AI, ML, and frontend development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary/30">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-secondary rounded-xl group-hover:bg-primary/10 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-xs rounded-md border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
