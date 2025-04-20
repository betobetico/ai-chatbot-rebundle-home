
import React from 'react';
import TypewriterText from '../components/TypewriterText';
import RotatingMessages from '../components/RotatingMessages';
import { Button } from '../components/ui/button';

const mainMessages = [
  "Still training people like it's 2012? Your AI already left",
  "If your team is still learning once a year, your AI is learning once a second",
  "Your AI strategy isn't a strategy if no one's evolving with it",
  "Training decks don't scale. Intelligence does",
  "Who will manage your AI agents—HR, IT, or nobody?",
  "What if learning was infrastructure, not a department?"
];

const subMessages = [
  "Forget courses. Build infrastructure that adapts as fast as AI tools do",
  "You don't need another training platform. You need systems that learn with your team",
  "Stop teaching tools. Start wiring intelligence into the system itself",
  "You don't need to upskill. You need an architecture that evolves",
  "Training platforms teach. Infrastructure adapts. Which one are you building?",
  "Still measuring hours of training? We measure cycles of transformation",
  "If your KPI is 'teach,' don't call us. We're here to make your team learn nonstop"
];

const Index = () => {
  const handleLearnMore = () => {
    window.location.href = 'mailto:hello@rebundle.ai';
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F97316] to-[#33C3F0]">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/110054fa-cbb6-46c5-b50b-f4d551d7e7b3.png" 
          alt="Background texture" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <header className="pt-8 pb-12">
          <img 
            src="/lovable-uploads/b87636ec-a44d-474e-8a0e-886ee68d15da.png" 
            alt="Rebundle Logo" 
            className="h-12 md:h-16"
          />
        </header>

        {/* Main Content */}
        <main className="py-12 md:py-24 flex flex-col items-center justify-center gap-12">
          <TypewriterText messages={mainMessages} />
          <RotatingMessages messages={subMessages} />
          
          <div className="flex flex-col items-center gap-6 mt-12">
            <Button 
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 py-6 text-center text-white/70 text-sm">
          Copyright © 2025 Conversed SL. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
