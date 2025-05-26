
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: "e-commerce",
      title: "E-commerce Platform",
      description: "Modern online store with advanced filtering and payment integration",
      image: "🛍️",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: "saas-dashboard",
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      image: "📊",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      id: "mobile-banking",
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "🏦",
      tech: ["React Native", "Firebase", "Stripe"],
      link: "#"
    },
    {
      id: "ai-chat",
      title: "AI Chat Platform",
      description: "Intelligent chatbot platform with natural language processing",
      image: "🤖",
      tech: ["Next.js", "OpenAI", "Redis"],
      link: "#"
    },
    {
      id: "real-estate",
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours and maps",
      image: "🏠",
      tech: ["Angular", "Express", "MySQL"],
      link: "#"
    },
    {
      id: "food-delivery",
      title: "Food Delivery App",
      description: "On-demand food delivery with real-time tracking",
      image: "🍔",
      tech: ["Flutter", "Django", "Redis"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-deep-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 animate-neon-pulse">
              Our <span className="text-neon-green">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our latest projects and the innovative solutions we've delivered for our clients
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={project.title} to={`/project/${project.id}`}>
                <Card 
                  className="bg-dark-gray/50 border-neon-blue/20 hover:border-neon-green/60 transition-all duration-500 group hover:transform hover:scale-105 backdrop-blur-sm animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4 group-hover:animate-float">
                      {project.image}
                    </div>
                    <CardTitle className="text-white font-orbitron text-xl group-hover:text-neon-green transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-center mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-center">
                      <span className="text-neon-green group-hover:text-white transition-colors duration-300">
                        View Project →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
