
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (floatingElementsRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        
        floatingElementsRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-deep-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-green/10"></div>
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-neon-blue/10 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-neon-blue to-transparent rounded-full animate-float blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-r from-neon-green to-transparent rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-r from-neon-pink to-transparent rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 animate-slide-up">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink rounded-xl animate-glow transform rotate-12"></div>
            <h1 className="font-orbitron text-6xl md:text-8xl font-black text-white animate-neon-pulse">
              SHIVA<span className="text-neon-blue">WEB</span>
            </h1>
          </div>
        </div>

        {/* Slogan */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Transforming ideas into <span className="text-neon-green font-semibold">digital reality</span>
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We craft cutting-edge digital experiences that captivate young professionals and drive business growth through innovative design and technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-pink text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-neon-blue/50">
            Start Your Project
          </Button>
          <Button variant="outline" className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            View Our Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
