
import { Code, Palette, Zap, Database, Gamepad2, Cpu } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "C#", level: 95 },
        { name: "C++", level: 85 },
      ]
    },
    {
      icon: Gamepad2,
      title: "Game Engines",
      skills: [
        { name: "Unity", level: 98 },
        { name: "Unreal Engine", level: 75 },
        { name: "Godot", level: 65 },
      ]
    },

    {
      icon: Zap,
      title: "Specialized Tech",
      skills: [
        { name: "VR/AR Development", level: 98 },
        { name: "AI/ML Integration", level: 90 },
        { name: "Multiplayer Systems", level: 88 },
      ]
    }
  ];

  const tools = [
    "Unity", "Unreal Engine", "Blender", "Maya", "Photoshop",,
    "Visual Studio", "Git",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="floating-panel rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-cyber-dark" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-tech text-gray-300">{skill.name}</span>
                      <span className="font-tech text-neon-blue text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cyber-light rounded-full h-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-light via-neon-blue/20 to-neon-purple/20 animate-pulse" />
                      <div
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="floating-panel rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center mr-4">
              <Cpu size={24} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Tools & Technologies</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gradient-to-r from-cyber-light to-cyber-border text-neon-cyan font-tech font-semibold rounded-lg border border-neon-blue/30 hover:scale-105 hover:bg-gradient-to-r hover:from-neon-blue/20 hover:to-neon-purple/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Code Commits", value: "12K+" },
            { label: "Projects Completed", value: "25+" },
            { label: "Technologies Mastered", value: "30+" },
            { label: "Years of Experience", value: "7+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="floating-panel rounded-lg p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-2">
                {stat.value}
              </div>
              <div className="font-tech text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
