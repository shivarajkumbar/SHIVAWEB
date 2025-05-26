
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Premium = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "5 Page Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "3 Months Support",
        "Free Domain (1 Year)"
      ],
      popular: false,
      gradient: "from-neon-blue to-neon-green"
    },
    {
      name: "Professional",
      price: "₹1,999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "10 Page Website",
        "Advanced Design & Animations",
        "E-commerce Integration",
        "Payment Gateway Setup",
        "Advanced SEO",
        "6 Months Support",
        "Free Hosting (1 Year)",
        "Social Media Integration"
      ],
      popular: true,
      gradient: "from-neon-green to-neon-pink"
    },
    {
      name: "Enterprise",
      price: "₹4,999",
      period: "/month",
      description: "Complete digital solution for enterprises",
      features: [
        "Unlimited Pages",
        "Custom Development",
        "Mobile App Development",
        "Advanced Analytics",
        "Multi-language Support",
        "12 Months Support",
        "Free Hosting & Domain",
        "Priority Support 24/7",
        "Custom Integrations",
        "Performance Optimization"
      ],
      popular: false,
      gradient: "from-neon-pink to-neon-blue"
    }
  ];

  const oneTimeServices = [
    {
      name: "Website Redesign",
      price: "₹15,000",
      description: "Complete website makeover with modern design"
    },
    {
      name: "Mobile App",
      price: "₹25,000",
      description: "Cross-platform mobile application"
    },
    {
      name: "E-commerce Store",
      price: "₹20,000",
      description: "Full-featured online store with payment integration"
    },
    {
      name: "Logo & Branding",
      price: "₹5,000",
      description: "Complete brand identity package"
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
              Premium <span className="text-neon-green">Plans</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Affordable pricing designed for Indian businesses. Transform your digital presence without breaking the bank.
            </p>
          </div>

          {/* Monthly Plans */}
          <div className="mb-20">
            <h2 className="font-orbitron text-3xl font-bold text-center mb-12 text-neon-blue">Monthly Subscription Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`relative bg-dark-gray/50 border transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm animate-slide-up ${
                    plan.popular 
                      ? 'border-neon-green/60 shadow-lg shadow-neon-green/20' 
                      : 'border-neon-blue/20 hover:border-neon-blue/60'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-neon-green to-neon-pink text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-orbitron text-white mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-neon-blue">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="text-neon-green mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-black font-bold py-3 text-lg transition-all duration-300`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* One-time Services */}
          <div className="mb-20">
            <h2 className="font-orbitron text-3xl font-bold text-center mb-12 text-neon-pink">One-Time Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {oneTimeServices.map((service, index) => (
                <Card 
                  key={service.name}
                  className="bg-dark-gray/30 border-neon-pink/20 hover:border-neon-pink/60 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-neon-pink mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-white mb-3">{service.price}</div>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <Button variant="outline" className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink hover:text-black">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold mb-8 text-neon-green">Why Choose SHIVAWEB?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-neon-blue mb-3">Affordable Pricing</h3>
                <p className="text-gray-400">Designed specifically for Indian market with competitive rates</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-neon-green mb-3">Fast Delivery</h3>
                <p className="text-gray-400">Quick turnaround times without compromising on quality</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-neon-pink mb-3">Ongoing Support</h3>
                <p className="text-gray-400">Dedicated support team to help you succeed</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">Ready to transform your business?</p>
            <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-pink text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-neon-blue/50">
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;
