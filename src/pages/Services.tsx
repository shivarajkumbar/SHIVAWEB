
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      <Navigation />
      <div className="pt-20">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;
