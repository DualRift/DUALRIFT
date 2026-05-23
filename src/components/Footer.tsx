import { useState } from "react";
import dualriftLogo from "@assets/IMG_2776_1779423085437.jpeg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-black pt-24 pb-8 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <img 
              src={dualriftLogo} 
              alt="DualRift" 
              className="w-40 mb-6 opacity-80 mix-blend-screen"
            />
            <p className="text-gray-500 font-sans max-w-sm">
              Luxury streetwear forged for the apex predator. Built Different.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-4">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/dual.rift' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors font-sans"
                    data-testid={`link-social-${label.toLowerCase().replace(/[^a-z]/g, '')}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Contact</h4>
            <a
              href="mailto:dualrift2398@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors font-sans text-sm"
              data-testid="link-contact-email"
            >
              dualrift2398@gmail.com
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Join the Pack</h4>
            <p className="text-gray-500 font-sans mb-4 text-sm">
              Early access to drops. No spam.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-b border-gray-700 py-2 text-white font-sans focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                data-testid="input-newsletter-email"
              />
              <button 
                type="submit" 
                className="text-left font-display font-bold uppercase tracking-widest text-sm mt-2 hover:text-primary transition-colors"
                data-testid="button-newsletter-submit"
              >
                {subscribed ? (
                  <span className="text-green-500">Welcome.</span>
                ) : (
                  "Subscribe →"
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 text-xs font-sans">
          <p>© {new Date().getFullYear()} DUALRIFT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
