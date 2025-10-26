import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-secondary-foreground font-medium">
                Available for new opportunities
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-[hsl(190,77%,50%)] bg-clip-text text-transparent">
                  Sowmika Arruri
                </span>
              </h1>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-primary/20">
                <span className="text-sm text-foreground/70">⚡ Specializing in</span>
                <span className="text-sm font-semibold text-primary">AI & ML</span>
              </div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              AI & Frontend Developer passionate about building{" "}
              <span className="text-foreground font-semibold">intelligent</span> and{" "}
              <span className="text-foreground font-semibold">user-friendly</span> digital
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2"
                onClick={() => document.getElementById("projects")?.scrollIntoView()}
              >
                <Code2 className="w-4 h-4" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-[hsl(190,77%,50%)]/20 rounded-full blur-2xl" />
              
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Sowmika Arruri"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
                />
                
                {/* Badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-full shadow-lg border border-primary/20">
                  <span className="text-sm font-semibold text-primary">10+ Certs</span>
                </div>
                
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg">
                  <span className="text-sm font-semibold">AI/ML Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
