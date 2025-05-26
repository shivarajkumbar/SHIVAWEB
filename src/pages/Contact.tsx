
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "hello@shivaweb.com",
      description: "Send us an email anytime"
    },
    {
      icon: "📱",
      title: "Phone",
      details: "+91 98765 43210",
      description: "Call us during business hours"
    },
    {
      icon: "📍",
      title: "Location",
      details: "Mumbai, India",
      description: "Visit our office"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+91 98765 43210",
      description: "Quick chat on WhatsApp"
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
              Get In <span className="text-neon-green">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your ideas into digital reality? Let's discuss your project and bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-dark-gray/50 border-neon-blue/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-neon-blue">Send us a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="bg-deep-black border-neon-blue/30 text-white focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="bg-deep-black border-neon-blue/30 text-white focus:border-neon-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-deep-black border-neon-blue/30 text-white focus:border-neon-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input 
                    id="phone" 
                    placeholder="+91 98765 43210"
                    className="bg-deep-black border-neon-blue/30 text-white focus:border-neon-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="project" className="text-white">Project Type</Label>
                  <select 
                    id="project"
                    className="w-full p-3 bg-deep-black border border-neon-blue/30 rounded-md text-white focus:border-neon-blue focus:outline-none"
                  >
                    <option value="">Select project type</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="budget" className="text-white">Budget Range (INR)</Label>
                  <select 
                    id="budget"
                    className="w-full p-3 bg-deep-black border border-neon-blue/30 rounded-md text-white focus:border-neon-blue focus:outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l+">₹1,00,000+</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full p-3 bg-deep-black border border-neon-blue/30 rounded-md text-white focus:border-neon-blue focus:outline-none resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-pink text-black font-bold py-3 text-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-orbitron text-3xl font-bold mb-6 text-neon-pink">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  We're here to help you bring your digital vision to life. Reach out to us through any of the following channels.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="bg-dark-gray/30 border-neon-green/20 hover:border-neon-green/60 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{info.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-neon-green">{info.title}</h3>
                          <p className="text-white font-medium">{info.details}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-neon-blue/10 to-neon-green/10 rounded-lg border border-neon-blue/20">
                <h3 className="text-xl font-bold text-neon-blue mb-3">Quick Response Guarantee</h3>
                <p className="text-gray-300">
                  We respond to all inquiries within 24 hours. For urgent projects, 
                  call us directly or send a WhatsApp message for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
