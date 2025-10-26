import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-primary/10">
            <p className="text-lg text-foreground/80 leading-relaxed space-y-4">
              <span className="block">
                Hi! I'm <span className="font-semibold text-primary">Sowmika Arruri</span>, a
                Computer Science Engineering student specializing in{" "}
                <span className="font-semibold">Artificial Intelligence and Machine Learning</span> at
                Vasavi College of Engineering.
              </span>
              
              <span className="block">
                I'm passionate about creating intelligent and user-friendly digital experiences that
                blend innovation with functionality. My work spans{" "}
                <span className="font-semibold">frontend development</span>,{" "}
                <span className="font-semibold">machine learning</span>, and{" "}
                <span className="font-semibold">AI-integrated web applications</span> — projects like
                Smart Resume Parser and Credit Card Fraud Detection have helped me refine both my
                technical and creative skills.
              </span>
              
              <span className="block">
                I'm always eager to explore new technologies, collaborate on impactful projects, and
                grow as a developer committed to building solutions that make a difference.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
