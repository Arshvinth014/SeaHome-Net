import { COUNTRY_DATA, GLOBAL_METRICS } from '../../../config/mockData';

export function CountrySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-12" id="countries">
      
      {/* Country Banners System */}
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Explore Properties by Country</h2>
            <p className="text-xs text-slate-500 mt-1">Target geographical hot-spots showing accelerated portfolio yields</p>
          </div>
          <button className="text-xs font-bold text-[#0066FF] hover:underline">View All Countries →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COUNTRY_DATA.map((country) => (
            <div key={country.id} className="h-40 rounded-2xl overflow-hidden relative group border border-slate-100 shadow-xs cursor-pointer">
              <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  {country.flag && <span>{country.flag}</span>}
                  {country.name}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">{country.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Real-Time Counters Grid */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {GLOBAL_METRICS.map((metric, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-2xl font-black text-[#0066FF] tracking-tight">{metric.value}</p>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}