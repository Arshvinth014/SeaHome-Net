import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [countriesOpen, setCountriesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "transition-colors";
    return isActive(path)
      ? "text-[#0066FF] border-b-2 border-[#0066FF] pb-1 font-semibold"
      : "text-slate-700 hover:text-slate-900";
  };

  return (
    <nav className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="SeaHome Net" className="h-10 w-25 " />
        </div>

        {/* Desktop Links Matrix */}
        <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold text-slate-700">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/buy" className={getLinkClass("/buy")}>Buy</Link>
          <Link to="/invest" className={getLinkClass("/invest")}>Invest</Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setCountriesOpen((open) => !open)}
              className="flex items-center gap-1 hover:text-slate-900 transition-colors focus:outline-none"
              aria-expanded={countriesOpen}
              aria-controls="countries-dropdown"
            >
              <span>Countries</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>
            <div
              id="countries-dropdown"
              className={`absolute left-0 top-full mt-2 min-w-[160px] rounded-2xl border border-slate-200 bg-white py-2 shadow-lg ${countriesOpen ? 'block' : 'hidden'}`}
            >
              <Link
                to="/country/sri-lanka"
                onClick={() => setCountriesOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Sri Lanka
              </Link>
              <Link
                to="/country/japan"
                onClick={() => setCountriesOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Japan
              </Link>
              <Link
                to="/country/usa"
                onClick={() => setCountriesOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                USA
              </Link>
            </div>
          </div>
          <Link to="/#agencies" className="hover:text-slate-900 transition-colors">Agencies</Link>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900">
            <span>Resources</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900">
            <span>About Us</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
        </div>

        {/* Localized Interaction Elements Wrapper */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg px-2.5 py-1.5 hover:bg-slate-50">
            🌐 EN <span className="text-[9px] text-slate-400">▼</span>
          </button>
          
          <button className="text-slate-400 hover:text-rose-500 p-2 border border-slate-100 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          
          <button className="text-xs font-bold text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors">
            Log In
          </button>
          
          <button className="text-xs font-bold bg-[#0066FF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}