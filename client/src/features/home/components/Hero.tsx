import { Button } from '../../../components/ui/Button';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/40 via-white to-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Copy Structure */}
        <div className="lg:col-span-5 space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            The World of <span className="text-[#0066FF]">Real Estate</span> at Your Fingertips
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Buy, Invest, and Connect with Verified Real Estate Agencies Worldwide. Explore premium properties across major global destinations seamlessly.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button variant="primary" size="lg" className="font-semibold shadow-md">
              Explore Properties
            </Button>
            <Button variant="outline" size="lg" className="font-semibold gap-2 border-slate-300 bg-white shadow-xs">
              📊 Invest Now
            </Button>
          </div>
          
          {/* Trust Value Propositions */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">✓ Verified Listings</div>
            <div className="flex items-center gap-2">✓ Trusted Agencies</div>
            <div className="flex items-center gap-2">✓ Secure Transactions</div>
            <div className="flex items-center gap-2">✓ Global Network</div>
          </div>
        </div>

        {/* Right Side Map Presentation Shell */}
        <div className="lg:col-span-7 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-radial from-blue-400/10 to-transparent blur-3xl rounded-full"></div>
          
          {/* Faux Interactive Dotted Vector Map Overlay */}
          <div className="w-full aspect-[4/3] bg-slate-50 rounded-3xl border border-slate-100 shadow-xl overflow-hidden relative p-4 flex items-center justify-center bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:16px_16px]">
            
            {/* Mascot Interactive Chat Drawer Anchor */}
            <div className="absolute bottom-4 right-4 bg-white border border-slate-100 p-3 rounded-2xl shadow-xl max-w-[240px] flex items-start gap-3 animate-bounce-slow">
              <img src="/logo.png" alt="Mascot Avatar" className="h-10 w-10 object-contain shrink-0" />
              <div className="text-[11px] leading-tight text-slate-600">
                <p className="font-bold text-slate-900">Hi! I'm Seahome 🦜</p>
                <p className="text-slate-400 mt-0.5">Let me guide your global investment roadmap today!</p>
              </div>
            </div>

            {/* Simulated Live Property Markers */}
            <div className="absolute top-1/4 left-1/3 bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 transform -rotate-1">
              <div className="w-10 h-10 bg-slate-200 rounded-md overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=80&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] leading-none">
                <p className="font-bold text-slate-900">Luxury Apartment</p>
                <p className="text-slate-400 mt-1">Tokyo, Japan</p>
                <p className="text-[#0066FF] font-bold mt-1">$800,000 USD</p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 transform rotate-2">
              <div className="w-10 h-10 bg-slate-200 rounded-md overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] leading-none">
                <p className="font-bold text-slate-900">Beachfront Villa</p>
                <p className="text-slate-400 mt-1">Galle, Sri Lanka</p>
                <p className="text-teal-500 font-bold mt-1">$1,150,000 USD</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}