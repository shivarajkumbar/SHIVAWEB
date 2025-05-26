
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Shiva Kumar",
      role: "Founder & CEO",
      image: "👨‍💻",
      description: "Full-stack developer with 8+ years of experience in creating digital solutions"
    },
    {
      name: "Priya Sharma",
      role: "Lead Designer",
      image: "👩‍🎨",
      description: "Creative designer specializing in user experience and brand identity"
    },
    {
      name: "Raj Patel",
      role: "Tech Lead",
      image: "👨‍💼",
      description: "Expert in modern web technologies and cloud architecture"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-deep-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 animate-neon-pulse">
              About <span className="text-neon-pink">SHIVAWEB</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              We are a passionate team of developers and designers dedicated to transforming your ideas into stunning digital realities. 
              Based in India, we understand the local market while delivering world-class solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-6xl font-bold text-neon-blue mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-8 text-neon-green">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To democratize digital transformation by providing affordable, high-quality web solutions to businesses across India. 
              We believe every business deserves a powerful online presence, regardless of size or budget.
            </p>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-12 text-neon-blue">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={member.name}
                  className="bg-dark-gray/50 border-neon-blue/20 hover:border-neon-green/60 transition-all duration-500 group hover:transform hover:scale-105 backdrop-blur-sm animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4 group-hover:animate-float">
                      {member.image}
                    </div>
                    <CardTitle className="text-white font-orbitron text-xl group-hover:text-neon-green transition-colors duration-300">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-neon-blue font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-12 text-neon-pink">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-neon-blue mb-3">Innovation</h3>
                <p className="text-gray-400">We stay ahead of technology trends to deliver cutting-edge solutions</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-neon-green mb-3">Partnership</h3>
                <p className="text-gray-400">We work closely with our clients as true partners in their success</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-neon-pink mb-3">Excellence</h3>
                <p className="text-gray-400">We deliver exceptional quality in every project, no matter the size</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
