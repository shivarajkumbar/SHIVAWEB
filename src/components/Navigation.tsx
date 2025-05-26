
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-deep-black/90 backdrop-blur-md border-b border-neon-blue/20" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg animate-glow"></div>
            <span className="font-orbitron text-2xl font-bold text-white animate-neon-pulse">
              SHIVAWEB
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
              <button
                key={item}
                className="text-white hover:text-neon-blue transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-pink text-black font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon-blue/50">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
