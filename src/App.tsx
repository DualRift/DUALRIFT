import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  // Force dark mode on document body
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {/* We keep main content in DOM even while loading so scroll triggers can initialize, 
          but perhaps keep it visually hidden or just under the fixed loading screen */}
      <main className="w-full">
        <Hero />
        <Features />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
