
import { useEffect, useState } from "react";
import { ChevronDown, Code, Gamepad2, Zap } from "lucide-react";

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Game & XR Developer";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 1000);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Digital Avatar Container */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-80 h-80">
          {/* Avatar placeholder with tech effects */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border-2 border-neon-blue/50 animate-glow-pulse flex items-center justify-center">
            <div className="w-60 h-60 rounded-full bg-gradient-to-br from-cyber-light to-cyber-dark border border-neon-cyan/30 flex items-center justify-center">
              <Gamepad2 size={80} className="text-neon-blue animate-float" />
            </div>
          </div>
          
          {/* Floating UI elements */}
          <div className="absolute -top-4 -left-4 floating-panel rounded-lg p-3 animate-float">
            <Code size={20} className="text-neon-cyan" />
          </div>
          <div className="absolute -bottom-4 -right-4 floating-panel rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
            <Zap size={20} className="text-neon-purple" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 text-center lg:text-left lg:max-w-2xl">
        <div className="animate-slide-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hello,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              I'm Gendy
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="font-tech text-xl md:text-2xl text-neon-cyan">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
            Create engaging digital experiences using innovative technology, game development, and storytelling that bring interactive entertainment to life.".
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-cyber-dark font-tech font-semibold rounded-lg hover:scale-105 transition-all duration-300 neon-glow"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border-2 border-neon-blue text-neon-blue font-tech font-semibold rounded-lg hover:bg-neon-blue hover:text-cyber-dark transition-all duration-300"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-blue animate-bounce hover:text-neon-cyan transition-colors"
      >
        <ChevronDown size={32} />
      </button>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};
