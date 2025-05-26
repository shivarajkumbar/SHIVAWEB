
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      icon: "🚀",
      gradient: "from-neon-blue to-neon-green"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      gradient: "from-neon-green to-neon-pink"
    },
    {
      title: "UI/UX Design",
      description: "Stunning user interfaces that convert visitors into customers",
      icon: "🎨",
      gradient: "from-neon-pink to-neon-blue"
    },
    {
      title: "E-commerce",
      description: "Powerful online stores that drive sales and grow your business",
      icon: "🛒",
      gradient: "from-neon-blue to-neon-pink"
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that amplify your brand's digital presence",
      icon: "📊",
      gradient: "from-neon-green to-neon-blue"
    },
    {
      title: "Consulting",
      description: "Expert guidance to transform your digital strategy and operations",
      icon: "💡",
      gradient: "from-neon-pink to-neon-green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-dark-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6 animate-neon-pulse">
            Our <span className="text-neon-blue">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that push the boundaries of innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-dark-gray/50 border-neon-blue/20 hover:border-neon-blue/60 transition-all duration-500 group hover:transform hover:scale-105 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-float">
                  {service.icon}
                </div>
                <CardTitle className="text-white font-orbitron text-xl group-hover:text-neon-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                <div className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to elevate your digital presence?</p>
          <button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-pink text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-neon-blue/50">
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
