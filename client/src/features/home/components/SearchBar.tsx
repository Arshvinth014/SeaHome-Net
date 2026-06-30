import { Button } from '../../../components/ui/Button';

export function SearchBar() {
  return (
    <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 space-y-4">
        
        {/* Tab Selection Row */}
        <div className="flex gap-4 border-b border-slate-100 pb-3 text-sm font-semibold text-slate-400">
          <button className="text-[#0066FF] border-b-2 border-[#0066FF] pb-3 px-1">Buy</button>
          <button className="hover:text-slate-800 pb-3 px-1">Rent</button>
          <button className="hover:text-slate-800 pb-3 px-1">Invest</button>
        </div>

        {/* Input Parameters Flex Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end">
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Search Area</label>
            <input type="text" placeholder="e.g. Apartment, House..." className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Select Country</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-600 focus:outline-none">
              <option>Any Country</option>
              <option>Sri Lanka</option>
              <option>Japan</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Select City</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-600 focus:outline-none">
              <option>Any City</option>
              <option>Colombo</option>
              <option>Tokyo</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Property Type</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-600 focus:outline-none">
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Budget Range</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-600 focus:outline-none">
              <option>Any Budget</option>
              <option>$500k - $1M</option>
              <option>$1M - $5M</option>
            </select>
          </div>
          <Button variant="primary" className="w-full h-[38px] font-bold text-xs gap-2">
            🔍 Search
          </Button>
        </div>

      </div>
    </div>
  );
}