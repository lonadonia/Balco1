import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { Benefits } from './components/Benefits';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      
      <main>
        <Hero />
        <Showcase />
        <Benefits />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
