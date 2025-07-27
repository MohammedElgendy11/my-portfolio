
import { useState } from "react";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, Instagram, FacebookIcon, Facebook } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: 'https://github.com/MohammedElgendy11', color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: 'https://www.linkedin.com/in/mohammedgendy/', color: "hover:text-blue-400" },
    { icon: Instagram, label: "Instagra", href: 'https://www.instagram.com/iamgendyjr/', color: "hover:text-cyan-400" },
    { icon: Facebook, label: "Facebook", href: 'https://www.facebook.com/medo.mody.144', color: "hover:text-cyan-400" },
    //{ icon: Mail, label: "Email", href: "muhammedelgendy511@gmail.com", color: "hover:text-green-400" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next gaming project? Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="floating-panel rounded-xl p-8 animate-slide-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center mr-4">
                <MessageSquare size={24} className="text-cyber-dark" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-tech text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-light border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-tech text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-light border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-tech text-sm text-gray-300 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-light border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all"
                  placeholder="Project collaboration, job opportunity, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-tech text-sm text-gray-300 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-light border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all resize-none"
                  placeholder="Tell me about your project or what you have in mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-cyber-dark font-tech font-semibold rounded-lg hover:scale-105 transition-all duration-300 neon-glow flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="floating-panel rounded-xl p-8 animate-fade-in">
              <h3 className="font-display text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-tech text-gray-300 text-sm uppercase tracking-wider">Email</p>
                    <p className="text-white">muhammedelgendy511@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center">
                    <MessageSquare size={20} className="text-cyber-dark" />
                  </div>
                  <div>
                    <p className="font-tech text-gray-300 text-sm uppercase tracking-wider">Response Time</p>
                    <p className="text-white">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neon-blue/20 pt-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply chat about the latest in game development technology.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="floating-panel rounded-xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display text-xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center space-x-3 p-3 bg-cyber-light/50 rounded-lg border border-neon-blue/30 hover:border-neon-blue hover:scale-105 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-inherit transition-colors" />
                    <span className="font-tech text-sm text-gray-300 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-neon-blue/20">
        <div className="text-center">
          <p className="font-tech text-gray-400">
            {/* © 2024 Alex - Game Developer. Crafted with passion for the future of gaming. */}
          </p>
        </div>
      </div>
    </section>
  );
};
