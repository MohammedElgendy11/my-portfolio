
import { User, Target, Lightbulb, Trophy } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mission",
      description: "Creating immersive gaming experiences that captivate and inspire players worldwide"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing creative boundaries with cutting-edge technology and unique gameplay mechanics"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Delivering polished, high-quality games that exceed player expectations"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile section */}
          <div className="space-y-6 animate-slide-in">
            <div className="floating-panel rounded-xl p-8 neon-glow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center mr-4">
                  <User size={24} className="text-cyber-dark" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Professional Profile</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                With over 2 years of experience in game development, I specialize in creating 
                compelling interactive experiences that blend innovative gameplay with stunning visuals. 
                My expertise spans from indie projects to AAA productions.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about emerging technologies like VR, AR, and AI integration in gaming, 
                constantly exploring new ways to enhance player engagement and create memorable experiences.
              </p>
            </div>

            {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="floating-panel rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-neon-blue mb-1">15+</div>
                  <div className="font-tech text-sm text-gray-400 uppercase">Projects</div>
                </div>
              <div className="floating-panel rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-neon-purple mb-1">2</div>
                <div className="font-tech text-sm text-gray-400 uppercase">Years Exp</div>
              </div>
              {/* <div className="floating-panel rounded-lg p-4 text-center">
                <div className="font-display text-2xl font-bold text-neon-cyan mb-1">50K+</div>
                <div className="font-tech text-sm text-gray-400 uppercase">Downloads</div>
              </div> */}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="floating-panel rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
