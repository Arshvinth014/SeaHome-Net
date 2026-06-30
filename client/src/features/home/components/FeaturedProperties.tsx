import { FEATURED_PROPERTIES } from '../../../config/mockData';

export function FeaturedProperties() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-6" id="buy">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Featured Properties</h2>
          <p className="text-xs text-slate-500 mt-1">Handpicked international properties optimized for capital generation</p>
        </div>
        <button className="text-xs font-bold text-[#0066FF] hover:underline">View All Properties →</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_PROPERTIES.map((property) => (
          <div key={property.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
            
            {/* Visual Header Wrapper */}
            <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              {property.tag && (
                <span className="absolute top-3 left-3 bg-[#0066FF] text-white text-[9px] font-extrabold px-2 py-0.5 rounded tracking-wide">
                  {property.tag}
                </span>
              )}
              <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs text-slate-700 w-7 h-7 rounded-full flex items-center justify-center shadow-xs hover:bg-white text-xs">
                ♡
              </button>
            </div>

            {/* Text Information Payload */}
            <div className="p-5 space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{property.type}</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{property.title}</h3>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">📍 {property.location}</p>
              </div>
              <p className="text-lg font-black text-[#0066FF]">{property.price}</p>
              
              {/* Feature Parameters Strip */}
              <div className="pt-3 border-t border-slate-50 flex items-center gap-4 text-xs font-medium text-slate-500">
                {property.specs.map((spec, index) => (
                  <span key={index}>{spec}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

