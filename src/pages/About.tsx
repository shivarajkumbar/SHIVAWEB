
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const team = [
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

          {/* Founder Section */}
          <div className="mb-20">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-12 text-neon-blue">Meet Our Founder</h2>
            <Card className="bg-dark-gray/50 border-neon-green/40 backdrop-blur-sm max-w-4xl mx-auto hover:border-neon-pink/60 transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center text-6xl animate-glow">
                  👨‍💻
                </div>
                <CardTitle className="text-white font-orbitron text-3xl text-neon-green">
                  Shivaraja
                </CardTitle>
                <CardDescription className="text-neon-blue font-semibold text-lg">
                  Founder & CEO
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-deep-black/30 p-6 rounded-lg border border-neon-blue/20">
                  <h3 className="text-xl font-bold text-neon-pink mb-3">Educational Background</h3>
                  <p className="text-gray-300">
                    Currently pursuing BCA (Bachelor of Computer Applications) at 
                    <span className="text-neon-blue font-semibold"> KLE Society's, Gangavathi College</span>
                  </p>
                </div>
                
                <div className="bg-deep-black/30 p-6 rounded-lg border border-neon-green/20">
                  <h3 className="text-xl font-bold text-neon-green mb-4">Vision & Goals</h3>
                  <div className="space-y-3 text-gray-300 text-left">
                    <p className="flex items-start">
                      <span className="text-neon-pink mr-2">🎯</span>
                      To democratize web development by making professional websites accessible to every Indian business, regardless of their budget.
                    </p>
                    <p className="flex items-start">
                      <span className="text-neon-blue mr-2">💡</span>
                      To inspire young developers across India that age is just a number when it comes to building impactful digital solutions.
                    </p>
                    <p className="flex items-start">
                      <span className="text-neon-green mr-2">🚀</span>
                      To bridge the gap between traditional businesses and the digital world through innovative, affordable technology.
                    </p>
                    <p className="flex items-start">
                      <span className="text-neon-pink mr-2">🌟</span>
                      To prove that with passion, dedication, and continuous learning, anyone can turn their dreams into reality.
                    </p>
                  </div>
                </div>

                <div className="text-lg text-gray-400 italic">
                  "Every line of code I write is a step towards making technology more accessible and empowering businesses to thrive in the digital age."
                </div>
              </CardContent>
            </Card>
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
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-12 text-neon-blue">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
