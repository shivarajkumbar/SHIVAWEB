
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      
      {/* Footer */}
      <footer className="bg-dark-gray py-12 border-t border-neon-blue/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg animate-glow"></div>
            <span className="font-orbitron text-2xl font-bold text-white">
              SHIVAWEB
            </span>
          </div>
          <p className="text-gray-400 mb-4">Transforming ideas into digital reality</p>
          <p className="text-sm text-gray-500">
            © 2024 SHIVAWEB. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
