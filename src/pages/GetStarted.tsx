
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, EyeOff, CreditCard, Truck, Wallet } from 'lucide-react';

const GetStarted: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  return (
    <>
      <Helmet>
        <title>Get Started | WEX Developer Portal</title>
      </Helmet>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <div className="container-custom max-w-3xl py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-3">Create Developer Account</h1>
            <p className="text-foreground/70">Get access to WEX APIs and start building innovative payment solutions</p>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${step >= 1 ? 'bg-wex-orange text-white' : 'bg-muted text-foreground/50'}`}>
                1
              </div>
              <span className={step >= 1 ? 'font-medium' : 'text-foreground/50'}>Account</span>
            </div>
            <div className="flex-1 border-t border-dashed border-border mx-4"></div>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${step >= 2 ? 'bg-wex-orange text-white' : 'bg-muted text-foreground/50'}`}>
                2
              </div>
              <span className={step >= 2 ? 'font-medium' : 'text-foreground/50'}>API Selection</span>
            </div>
            <div className="flex-1 border-t border-dashed border-border mx-4"></div>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${step >= 3 ? 'bg-wex-orange text-white' : 'bg-muted text-foreground/50'}`}>
                3
              </div>
              <span className={step >= 3 ? 'font-medium' : 'text-foreground/50'}>Confirmation</span>
            </div>
          </div>
          
          <Card className="p-8 shadow-lg">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-6">Your Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" type="text" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" type="text" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Create a secure password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-foreground/60 hover:text-foreground/80"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <p className="text-xs text-foreground/70 mt-1">Password must be at least 8 characters with uppercase, lowercase, and special characters</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" type="text" placeholder="Your Company, Inc." />
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-foreground/70">
                      I agree to the <a href="#" className="text-wex-lightBlue hover:underline">Terms of Service</a> and <a href="#" className="text-wex-lightBlue hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button variant="primary" fullWidth onClick={handleNextStep}>Continue</Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-border text-center text-sm">
                  <span className="text-foreground/70">Already have an account?</span>{" "}
                  <Link to="/sign-in" className="text-wex-orange hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-6">Select API Products</h2>
                <p className="text-foreground/70 mb-6">Choose the API products you're interested in accessing.</p>
                
                <RadioGroup defaultValue="all" className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors cursor-pointer">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all" className="cursor-pointer flex-1">
                      <div className="font-medium">All API Access</div>
                      <div className="text-sm text-foreground/70">Full access to all WEX API products</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors cursor-pointer">
                    <RadioGroupItem value="fleet" id="fleet" />
                    <Truck className="h-6 w-6 text-wex-orange mx-2" />
                    <Label htmlFor="fleet" className="cursor-pointer flex-1">
                      <div className="font-medium">Fleet APIs</div>
                      <div className="text-sm text-foreground/70">Vehicle tracking, fuel management, and card controls</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors cursor-pointer">
                    <RadioGroupItem value="payment" id="payment" />
                    <CreditCard className="h-6 w-6 text-wex-lightBlue mx-2" />
                    <Label htmlFor="payment" className="cursor-pointer flex-1">
                      <div className="font-medium">Payment APIs</div>
                      <div className="text-sm text-foreground/70">Card payments, ACH transfers, and tokenization</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors cursor-pointer">
                    <RadioGroupItem value="corporate" id="corporate" />
                    <Wallet className="h-6 w-6 text-wex-red mx-2" />
                    <Label htmlFor="corporate" className="cursor-pointer flex-1">
                      <div className="font-medium">Corporate Payment APIs</div>
                      <div className="text-sm text-foreground/70">Expense management, virtual cards, and approval workflows</div>
                    </Label>
                  </div>
                </RadioGroup>
                
                <div className="space-y-4 mb-8">
                  <h3 className="font-medium">Use Case</h3>
                  <textarea 
                    className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm" 
                    placeholder="Briefly describe how you plan to use our APIs..."
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="secondary" onClick={handlePrevStep}>Back</Button>
                  <Button variant="primary" onClick={handleNextStep}>Continue</Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-wex-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-wex-orange" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Application Submitted</h2>
                <p className="text-foreground/70 mb-6">
                  Thank you for your interest in WEX Developer APIs. We've received your application and will review it shortly.
                </p>
                <div className="bg-muted/30 rounded-lg p-6 text-left mb-8">
                  <h3 className="font-medium mb-2">Next Steps:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-foreground/70">
                    <li>Check your email for a confirmation message</li>
                    <li>Complete email verification to activate your account</li>
                    <li>Our team will review your application (typically within 1-2 business days)</li>
                    <li>Once approved, you'll receive your API credentials</li>
                  </ol>
                </div>
                <div className="flex flex-col gap-4">
                  <Button variant="primary" as={Link} to="/">Return to Homepage</Button>
                  <Button variant="link" as={Link} to="/documentation">Explore Documentation</Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetStarted;
