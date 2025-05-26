
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    "e-commerce": {
      title: "E-commerce Platform",
      description: "Modern online store with advanced filtering and payment integration",
      image: "🛍️",
      tech: ["React", "Node.js", "MongoDB"],
      fullDescription: "A comprehensive e-commerce solution featuring product catalog, shopping cart, secure payment processing, order management, and admin dashboard. Built with modern technologies for scalability and performance.",
      features: [
        "Product catalog with advanced search and filtering",
        "Shopping cart with persistent storage",
        "Secure payment integration with Stripe",
        "User authentication and profile management",
        "Order tracking and history",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
        "Real-time notifications"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
      ]
    },
    "saas-dashboard": {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      image: "📊",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      fullDescription: "A powerful SaaS dashboard providing comprehensive analytics, real-time data visualization, and business intelligence tools. Perfect for businesses looking to make data-driven decisions.",
      features: [
        "Real-time data visualization with charts",
        "Customizable dashboard widgets",
        "Multi-tenant architecture",
        "Advanced filtering and reporting",
        "Export functionality (PDF, CSV, Excel)",
        "Role-based access control",
        "API integrations",
        "Mobile-responsive design"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
      ]
    },
    "mobile-banking": {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "🏦",
      tech: ["React Native", "Firebase", "Stripe"],
      fullDescription: "A secure and user-friendly mobile banking application featuring biometric authentication, real-time transactions, and comprehensive financial management tools.",
      features: [
        "Biometric authentication (fingerprint, face ID)",
        "Real-time balance and transaction updates",
        "Money transfer and bill payments",
        "Transaction history and categorization",
        "Budget tracking and financial insights",
        "Card management and controls",
        "ATM and branch locator",
        "Push notifications for transactions"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
      ]
    },
    "ai-chat": {
      title: "AI Chat Platform",
      description: "Intelligent chatbot platform with natural language processing",
      image: "🤖",
      tech: ["Next.js", "OpenAI", "Redis"],
      fullDescription: "An advanced AI-powered chat platform featuring natural language processing, contextual conversations, and intelligent automation capabilities.",
      features: [
        "Natural language understanding",
        "Contextual conversation memory",
        "Multi-language support",
        "Custom AI model training",
        "Integration with business systems",
        "Analytics and conversation insights",
        "Customizable chat widgets",
        "Real-time responses"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
      ]
    },
    "real-estate": {
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours and maps",
      image: "🏠",
      tech: ["Angular", "Express", "MySQL"],
      fullDescription: "A comprehensive real estate platform featuring property listings, virtual tours, interactive maps, and advanced search capabilities for buyers and sellers.",
      features: [
        "Advanced property search and filters",
        "Interactive maps with property locations",
        "Virtual property tours",
        "High-quality photo galleries",
        "Mortgage calculator",
        "Agent profiles and contact system",
        "Saved searches and favorites",
        "Market analytics and trends"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop"
      ]
    },
    "food-delivery": {
      title: "Food Delivery App",
      description: "On-demand food delivery with real-time tracking",
      image: "🍔",
      tech: ["Flutter", "Django", "Redis"],
      fullDescription: "A modern food delivery application providing seamless ordering experience, real-time tracking, and efficient delivery management for restaurants and customers.",
      features: [
        "Restaurant discovery and menus",
        "Real-time order tracking",
        "Multiple payment options",
        "Rating and review system",
        "Delivery time estimation",
        "Push notifications",
        "Loyalty programs and discounts",
        "Driver management system"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
      ]
    }
  };

  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-deep-black text-white">
        <Navigation />
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold text-neon-pink mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-neon-blue hover:text-neon-green transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-neon-blue hover:text-neon-green transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="text-center mb-16">
            <div className="text-8xl mb-6 animate-float">{project.image}</div>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-green">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {project.tech.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-neon-blue/20 text-neon-blue text-lg rounded-full border border-neon-blue/40">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-neon-green/20 text-neon-green border border-neon-green/40 rounded-lg hover:bg-neon-green/30 transition-colors">
                <ExternalLink size={20} />
                Live Demo
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-neon-blue/20 text-neon-blue border border-neon-blue/40 rounded-lg hover:bg-neon-blue/30 transition-colors">
                <Github size={20} />
                View Code
              </button>
            </div>
          </div>

          {/* Screenshots Gallery */}
          <div className="mb-16">
            <h2 className="font-orbitron text-3xl font-bold text-center mb-12 text-neon-blue">
              Project Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border border-neon-green/20 hover:border-neon-green/60 transition-all duration-500">
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="font-orbitron text-3xl font-bold text-center mb-12 text-neon-pink">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {project.features.map((feature, index) => (
                <Card 
                  key={index}
                  className="bg-dark-gray/50 border-neon-blue/20 hover:border-neon-green/60 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-green mt-2 group-hover:animate-pulse" />
                      <p className="text-gray-300 group-hover:text-white transition-colors">
                        {feature}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <Card className="bg-dark-gray/50 border-neon-green/40 backdrop-blur-sm max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-white font-orbitron text-2xl text-neon-green">
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-deep-black/30 rounded-lg border border-neon-blue/20">
                  <h3 className="text-lg font-bold text-neon-blue mb-2">Development Time</h3>
                  <p className="text-gray-400">3-4 Months</p>
                </div>
                <div className="p-4 bg-deep-black/30 rounded-lg border border-neon-green/20">
                  <h3 className="text-lg font-bold text-neon-green mb-2">Team Size</h3>
                  <p className="text-gray-400">2-3 Developers</p>
                </div>
                <div className="p-4 bg-deep-black/30 rounded-lg border border-neon-pink/20">
                  <h3 className="text-lg font-bold text-neon-pink mb-2">Platform</h3>
                  <p className="text-gray-400">Web & Mobile</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-lg leading-relaxed">
                  This project demonstrates our expertise in modern web development, 
                  showcasing clean code architecture, responsive design, and user-centric features. 
                  Every aspect was carefully crafted to deliver an exceptional user experience.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
