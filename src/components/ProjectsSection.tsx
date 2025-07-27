
import { ExternalLink, Github, Play } from "lucide-react";
import vrDrivingImg from '../assets/Vr_Driving.jpg';


export const ProjectsSection = () => {
  const projects = [
    {
      title: "VR Driving Simulation",
      category: "Virtual Reality",
      description: "An immersive cyberpunk racing game that takes players through neon-lit cityscapes with cutting-edge VR mechanics.",
      image: vrDrivingImg,
      tech: ["Unity", "C#", "Oculus SDK", "Blender"],
      status: "Released"
    },
    {
      title: "Neural Network RPG",
      category: "AI-Powered Game",
      description: "Revolutionary RPG featuring dynamic NPC behavior powered by machine learning and procedural storytelling.",
      image: "photo-1518770660439-4636190af475",
      tech: ["Unreal", "Python", "TensorFlow", "Blueprint"],
      status: "In Development"
    },
    {
      title: "Quantum Puzzle",
      category: "Mobile Game",
      description: "Mind-bending puzzle game exploring quantum mechanics principles through engaging gameplay mechanics.",
      image: "photo-1487058792275-0ad4aaf24ca7",
      tech: ["React Native", "TypeScript", "WebGL", "Three.js"],
      status: "Released"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group floating-panel rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent" />
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-tech font-semibold ${
                    project.status === "Released" 
                      ? "bg-green-500/20 text-green-400 border border-green-400/30" 
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center hover:bg-neon-cyan transition-colors">
                      <Play size={20} className="text-cyber-dark" />
                    </button>
                    <button className="w-12 h-12 bg-neon-purple rounded-full flex items-center justify-center hover:bg-neon-pink transition-colors">
                      <Github size={20} className="text-white" />
                    </button>
                    <button className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center hover:bg-neon-blue transition-colors">
                      <ExternalLink size={20} className="text-cyber-dark" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-neon-cyan text-sm font-tech font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyber-light/50 text-neon-blue text-xs font-tech rounded border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-tech font-semibold rounded-lg hover:scale-105 transition-all duration-300 neon-glow">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};
