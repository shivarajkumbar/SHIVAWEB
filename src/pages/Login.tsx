
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-deep-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-md">
          <Card className="bg-dark-gray/50 border-neon-blue/20 backdrop-blur-sm animate-slide-up">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl animate-glow"></div>
              </div>
              <CardTitle className="text-3xl font-orbitron text-neon-blue">Welcome Back</CardTitle>
              <CardDescription className="text-gray-400">
                Sign in to your SHIVAWEB account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  className="bg-deep-black border-neon-blue/30 text-white focus:border-neon-blue"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-gray-400">
                  <input type="checkbox" className="rounded border-neon-blue/30" />
                  <span>Remember me</span>
                </label>
                <Link to="#" className="text-sm text-neon-green hover:text-neon-blue transition-colors">
                  Forgot password?
                </Link>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-pink text-black font-bold py-3 text-lg">
                Sign In
              </Button>
              
              <div className="text-center">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <Link to="#" className="text-neon-green hover:text-neon-blue transition-colors font-semibold">
                    Sign up
                  </Link>
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neon-blue/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-dark-gray text-gray-400">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-neon-blue/30 text-white hover:bg-neon-blue/10">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="border-neon-blue/30 text-white hover:bg-neon-blue/10">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Login;
