
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight, Code, Database, Key } from 'lucide-react';
import TransitionContainer from './TransitionContainer';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = innerWidth * dpr;
      canvas.height = Math.min(600, innerHeight * 0.7) * dpr;
      
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${Math.min(600, innerHeight * 0.7)}px`;
      
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: `rgba(85, 169, 218, ${Math.random() * 0.5 + 0.1})`,
        });
      }
    };

    createParticles();

    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width / window.devicePixelRatio) {
          particle.vx = -particle.vx;
        }
        
        if (particle.y < 0 || particle.y > canvas.height / window.devicePixelRatio) {
          particle.vy = -particle.vy;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Connect nearby particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(85, 169, 218, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen pt-20 flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      ></canvas>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <TransitionContainer 
            className="flex flex-col items-start text-left" 
            animation="fade-in-left"
          >
            <div className="inline-block bg-wex-blue/10 text-wex-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              WEX Developer Portal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build powerful <span className="text-gradient">payment solutions</span> with our APIs
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              Access the tools and documentation you need to integrate WEX's industry-leading payment processing technologies into your applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
              >
                Explore APIs
              </Button>
            </div>
          </TransitionContainer>

          <TransitionContainer 
            className="flex justify-center" 
            animation="fade-in-right" 
            delay={300}
          >
            <div className="relative glass-card rounded-2xl p-6 w-full max-w-lg">
              <div className="absolute -top-2 -right-2 bg-wex-orange text-white text-xs px-3 py-1 rounded-full font-medium">
                REST APIs
              </div>
              <pre className="bg-foreground/5 rounded-lg p-4 font-mono text-sm overflow-auto max-h-80">
                <code className="text-foreground/90">
{`// Example API request
const response = await fetch(
  'https://api.wex.com/v1/payments',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${'{token}'}',
    },
    body: JSON.stringify({
      amount: 99.95,
      currency: 'USD',
      description: 'Fleet payment',
      metadata: {
        order_id: '6735',
        customer_id: '1001'
      }
    })
  }
);

const data = await response.json();
console.log(data);`}
                </code>
              </pre>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg text-center">
                  <Code className="w-6 h-6 text-wex-blue mb-2" />
                  <span className="text-sm font-medium">Simple Integration</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg text-center">
                  <Database className="w-6 h-6 text-wex-blue mb-2" />
                  <span className="text-sm font-medium">Robust Data</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg text-center">
                  <Key className="w-6 h-6 text-wex-blue mb-2" />
                  <span className="text-sm font-medium">Secure Access</span>
                </div>
              </div>
            </div>
          </TransitionContainer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
