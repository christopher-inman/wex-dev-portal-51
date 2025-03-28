
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, EyeOff, Github, Twitter } from 'lucide-react';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <Helmet>
        <title>Sign In | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card className="p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-foreground/70 mt-2">Sign in to your developer account</p>
            </div>
            
            <Tabs defaultValue="email" className="w-full mb-6">
              <TabsList className="w-full grid grid-cols-2 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="api-key">API Key</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-foreground/60 hover:text-foreground/80"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <label htmlFor="remember" className="text-sm text-foreground/70">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-wex-lightBlue hover:underline">Forgot password?</a>
                  </div>
                  
                  <Button variant="primary" fullWidth>Sign In</Button>
                </form>
              </TabsContent>
              
              <TabsContent value="api-key">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input id="api-key" type="text" placeholder="Enter your API key" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="api-secret">API Secret</Label>
                    <div className="relative">
                      <Input 
                        id="api-secret" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Enter your API secret"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-foreground/60 hover:text-foreground/80"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember-api" />
                    <label htmlFor="remember-api" className="text-sm text-foreground/70">Remember my credentials</label>
                  </div>
                  
                  <Button variant="primary" fullWidth>Sign In with API Key</Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-foreground/70">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-md border border-border py-2 px-4 text-sm hover:bg-accent/10 transition-colors">
                <Github size={16} />
                <span>GitHub</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-md border border-border py-2 px-4 text-sm hover:bg-accent/10 transition-colors">
                <Twitter size={16} />
                <span>Twitter</span>
              </button>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-foreground/70">Don't have an account?</span>{" "}
              <Link to="/get-started" className="text-wex-orange hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
