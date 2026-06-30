import { INVESTMENT_OPPORTUNITIES, AGENCIES, MARKET_CHART_DATA } from '../config/investData';

export function InvestPage() {
  return (
    <div className="w-full bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      
      {/* SECTION 1: HERO CONTAINER WITH ASSET VERIFICATION PATTERNS */}
      <section className="relative w-full bg-gradient-to-b from-blue-50/30 via-white to-white pt-12 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Frame */}
          <div className="lg:col-span-6 space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Invest Global. <br />
              <span className="text-[#0066FF]">Grow Confidently.</span>
            </h1>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl">
              SeaHome Net connects you with verified opportunities, trusted agencies, and the insights you need to build wealth through real estate worldwide.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <button className="bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-blue-500/10 transition-all cursor-pointer">
                Explore Investment Opportunities
              </button>
              <button className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all cursor-pointer">
                How It Works
              </button>
            </div>

            {/* Core Features Horizontal Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-100 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">🛡️ Verified Properties</div>
              <div className="flex items-center gap-2">🤝 Trusted Agencies</div>
              <div className="flex items-center gap-2">🔒 Secure Transactions</div>
              <div className="flex items-center gap-2">🌐 Global Support</div>
            </div>
          </div>

          {/* Right Vector Grid Frame (Houses 2 Floating Character Placements) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[580px] aspect-[1.35/1]">
              {/* World Dot Connect Graphic Grid Map Background */}
              <img src="../../public/investmap.png" alt="Global Node Connectivity Map" className="w-full h-full object-contain opacity-90" />
              
              {/* Circular Architectural Hotspots Inset Layers */}
              <div className="absolute top-[10%] left-[25%] w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden bg-slate-100 transform -translate-x-1/2">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-[35%] right-[15%] w-14 h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-[20%] left-[35%] w-11 h-11 rounded-full border-2 border-white shadow-lg overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=100" className="w-full h-full object-cover" />
              </div>

              {/* Character Placement 1: Sora Guide Card Top Right */}
              <div className="absolute top-[5%] right-0 bg-white/95 border border-slate-100 shadow-xl rounded-2xl p-3 flex gap-3 items-center max-w-[210px] backdrop-blur-xs">
                <div className="w-12 h-12 shrink-0 overflow-hidden rounded-xl">
                  <img src="../../public/BlueBird&House.png" alt="Sora Character Placeholder" className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] leading-tight text-slate-600">
                  <p className="font-bold text-slate-900">Let Sora guide you.</p>
                  <p className="text-slate-400 mt-0.5">Connecting you with personal account managers instantly.</p>
                </div>
              </div>

              {/* [Character Placement 2]: Haru Handler Card Bottom Right */}
              <div className="absolute bottom-0 right-[5%] bg-white/95 border border-slate-100 shadow-xl rounded-2xl p-3.5 flex gap-3 items-center max-w-[240px] backdrop-blur-xs">
                <div className="w-14 h-14 shrink-0 overflow-hidden rounded-xl">
                  <img src="../../public/OrangeCat_investpage.png" alt="Haru Character Placeholder" className="w-full h-full object-contain" />
                </div>
                <div className="text-[11px] leading-tight text-slate-700 w-full">
                  <p className="font-extrabold text-slate-900">Haru will handle it for you.</p>
                  <div className="space-y-0.5 mt-1.5 text-slate-500 font-medium text-[9.5px]">
                    <p>✓ Find best options</p>
                    <p>✓ Analyze & verify parameters</p>
                    <p>✓ Secure asset escrow</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHY INVEST WITH SEAHOMENET PLATFORM INTELLIGENCE MATRICES */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Why Invest with <span className="text-[#0066FF]">SeaHomeNet?</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Grid: Platform Parameters Primitives */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-2">
              <span className="text-lg">🌐</span>
              <h3 className="font-extrabold text-slate-900 text-sm">Global Reach</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Direct entry access vectors targeting asset properties over 85+ destination countries.</p>
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-2">
              <span className="text-lg">🛡️</span>
              <h3 className="font-extrabold text-slate-900 text-sm">Vetted Opportunities</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Every portfolio entry item matches rigorous structural title audit frameworks before publication.</p>
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-2">
              <span className="text-lg">📊</span>
              <h3 className="font-extrabold text-slate-900 text-sm">Data-Driven Insights</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Execute secure placements backed by deep macro-economic dashboard trend variables.</p>
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-2">
              <span className="text-lg">🎧</span>
              <h3 className="font-extrabold text-slate-900 text-sm">End-to-End Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Dedicated logistics dispatch desks accompany your asset acquisition sequence throughout.</p>
            </div>
          </div>

          {/* Center Frame: Market Growth Dynamic Bar Chart Column */}
          <div className="lg:col-span-4 bg-white border border-slate-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm">Global Real Estate Market Outlook</h3>
              <p className="text-xs text-slate-400 mt-0.5">Strong growth parameters observed consistently over 5-year intervals.</p>
            </div>
            
            {/* Visual Dynamic Chart Rendering Primitive */}
            <div className="flex items-end justify-between gap-2 pt-6 h-48 border-b border-slate-100 px-2">
              {MARKET_CHART_DATA.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                  <div className={`w-full bg-blue-50 group-hover:bg-blue-100 ${index === 5 ? 'bg-[#0066FF] group-hover:bg-blue-700' : ''} ${item.height} rounded-t-md transition-all relative flex items-end justify-center`}>
                    {index === 5 && (
                      <span className="absolute -top-7 bg-slate-950 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md whitespace-nowrap z-10 shadow-md">
                        +28.6% Projected
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Frame: Region Growth Registry Rankings */}
          <div className="lg:col-span-3 bg-white border border-slate-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">Average ROI (2024)</h3>
                <p className="text-xs text-slate-400 mt-0.5">Geographical registry rankings performance metrics.</p>
              </div>
              <div className="space-y-3 text-xs font-semibold text-slate-700">
                <div className="flex justify-between items-center"><span>🇯🇵 Japan</span> <span className="font-bold text-slate-900">8.7%</span></div>
                <div className="flex justify-between items-center"><span>🇱🇰 Sri Lanka</span> <span className="font-bold text-slate-900">9.2%</span></div>
                <div className="flex justify-between items-center"><span>🇦🇪 UAE</span> <span className="font-bold text-slate-900">7.8%</span></div>
                <div className="flex justify-between items-center"><span>🇺🇸 USA</span> <span className="font-bold text-slate-900">6.9%</span></div>
                <div className="flex justify-between items-center"><span>🇹🇭 Thailand</span> <span className="font-bold text-slate-900">8.1%</span></div>
              </div>
            </div>
            <button className="w-full text-center border border-slate-100 hover:bg-slate-50 text-[#0066FF] font-bold text-xs py-2.5 rounded-xl transition-all mt-4">
              View Market Reports →
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 3: HOW INVESTING WITH HARU WORKS SEQUENCE (Features Haru Character Image 3) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Flow Steps Mapping Framework */}
          <div className="lg:col-span-9 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">How Investing with <span className="text-[#0066FF]">Haru</span> Works</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-xs text-slate-400 font-bold flex items-center justify-center font-mono">01</div>
                <h4 className="text-xs font-bold text-slate-900">Share Your Goals</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Define precise deployment timelines, preferences, and capitalization parameters.</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-xs text-slate-400 font-bold flex items-center justify-center font-mono">02</div>
                <h4 className="text-xs font-bold text-slate-900">Haru Finds Options</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Automated telemetry combs regional partner listings databases for ideal matches.</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-xs text-slate-400 font-bold flex items-center justify-center font-mono">03</div>
                <h4 className="text-xs font-bold text-slate-900">Haru Verifies Assets</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Deep document evaluation maps local growth forecasts against legal safety title logs.</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-xs text-slate-400 font-bold flex items-center justify-center font-mono">04</div>
                <h4 className="text-xs font-bold text-slate-900">Connect with Agency</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Direct encrypted integration bridges operations with tier-1 certified escrow brokers.</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-xs text-slate-400 font-bold flex items-center justify-center font-mono">05</div>
                <h4 className="text-xs font-bold text-slate-900">Invest with Confidence</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Complete real estate asset settlement actions smoothly under constant supervision.</p>
              </div>
            </div>
          </div>

          {/* [Character Placement 3]: Haru Side Character Alignment Frame */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-36 h-36 overflow-hidden rounded-2xl p-1 bg-white border border-slate-100 shadow-md">
              <img src="../../public/OrangeCat_Compass.png" alt="Haru Workflow Companion Avatar" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: GLOBAL INVESTMENT OPPORTUNITIES CARDS GRID FLUIDITY */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Global Investment Opportunities</h2>
          </div>
          <button className="text-xs font-bold text-[#0066FF] hover:underline">View All Opportunities →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {INVESTMENT_OPPORTUNITIES.map((opp) => (
            <div key={opp.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="h-36 bg-slate-100 relative overflow-hidden">
                <img src={opp.image} alt={opp.country} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 font-bold text-sm">
                  <span>{opp.flag}</span>
                  <span>{opp.country}</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-[10.5px] font-bold text-slate-400">{opp.propertiesCount}</p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-50 text-[11px] font-medium text-slate-500">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Avg ROI</span>
                    <span className="text-emerald-500 font-extrabold text-xs">{opp.avgRoi}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Starting from</span>
                    <span className="text-slate-800 font-bold">{opp.startingPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CERTIFIED NETWORK AGENCY STRIP MODULE */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Connect with Trusted Agencies Worldwide</h2>
          </div>
          <button className="text-xs font-bold text-[#0066FF] hover:underline">View All Agencies →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {AGENCIES.map((agency) => (
            <div key={agency.id} className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col justify-between text-center space-y-4 shadow-2xs hover:border-slate-200 transition-all">
              <div className="h-10 w-full flex items-center justify-center text-slate-700 font-black text-xs font-mono uppercase bg-slate-50 border border-slate-100 rounded-lg px-2">
                {agency.logoText}
              </div>
              <div className="space-y-0.5 text-[11px]">
                <p className="font-bold text-slate-800 flex items-center justify-center gap-1">
                  <span>{agency.flag}</span> {agency.name}
                </p>
                <p className="text-slate-400 text-[10px] mt-0.5">★ {agency.rating} • {agency.propertiesCount}</p>
              </div>
              <button className="w-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-[10.5px] py-1.5 rounded-lg transition-colors cursor-pointer">
                Connect
              </button>
            </div>
          ))}
        </div>

        {/* Agency Value Assurances Sub-Bar */}
        <div className="bg-slate-50 border border-slate-100/70 rounded-xl p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">
          <span>✓ Verified & Licensed Agencies</span>
          <span>✓ Transparent Communication</span>
          <span>✓ Local Market Expertise</span>
          <span>✓ Multi-language Support</span>
        </div>
      </section>

      {/* SECTION 6: INVENTOR RESOURCES LEARNING PORTAL NODES */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Investor Resources Center</h2>
          </div>
          <button className="text-xs font-bold text-[#0066FF] hover:underline">Explore All Resources →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {['Investment Guide', 'ROI Calculator', 'Market Reports', 'Legal & Tax Guide', 'Webinars'].map((title, i) => (
            <div key={i} className="bg-white border border-slate-100 p-4 rounded-xl flex flex-col justify-between hover:border-slate-200 shadow-2xs transition-all cursor-pointer group">
              <div className="space-y-1.5">
                <span className="text-base">📄</span>
                <h4 className="font-bold text-slate-900 text-xs tracking-tight group-hover:text-[#0066FF] transition-colors">{title}</h4>
                <p className="text-[10.5px] text-slate-400 leading-snug">Essential reference parameters tracking portfolio asset variables cleanly.</p>
              </div>
              <span className="text-[#0066FF] font-bold text-[10px] mt-4 block">Read Layer →</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: CALL-TO-ACTION RECRUITMENT BANNER FRAME (Features Haru Character Image 4) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-50/40 via-white to-blue-50/20 border border-slate-100 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm relative overflow-hidden">
          
          {/* Text Parameters Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-slate-900">Ready to Start Your Investment Journey?</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Let Haru handle the hard work while you monitor robust portfolio asset generation dividends cleanly in real-time.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button className="bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md cursor-pointer">
                Start Investing Now
              </button>
              <button className="text-slate-600 font-bold text-xs flex items-center gap-1.5 hover:text-slate-900">
                ▶ Watch How It Works
              </button>
            </div>
          </div>

          {/* [Character Placement 4]: Center Haru Character Frame */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="w-28 h-28 overflow-hidden rounded-full p-0.5 border border-slate-100 shadow-sm bg-white">
              <img src="../../public/OrangeCatWithCity.png" alt="Haru Assistant Close Frame Placement" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Right Statistics Metrics Aggregation Row */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 border-l border-slate-100 pl-6 text-center sm:text-left">
            <div>
              <span className="text-xl font-black text-[#0066FF] block">12,540+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Happy Investors</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#0066FF] block">85+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Countries Covered</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#0066FF] block">2,350+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verified Agencies</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#0066FF] block">$2.5B+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invested Capital</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: FINAL TRUST PRIORITY STRIP FOOTER BANNER (Features Sora Character Image 5) */}
      <section className="w-full bg-[#030914] border-t border-slate-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-black tracking-tight">Your Trust is Our Top Priority</h4>
            <p className="text-[11px] text-slate-500 font-medium">Enterprise security matrices deployed constantly to anchor security compliance logs safely.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10.5px] font-semibold text-slate-400">
            <div className="flex items-center gap-1.5">🔒 Secure & Encrypted</div>
            <div className="flex items-center gap-1.5">🛡️ Escrow Protection</div>
            <div className="flex items-center gap-1.5">✓ Verified Listings</div>
            <div className="flex items-center gap-1.5">🎧 24/7 Support Desk</div>
          </div>

          {/* [Character Placement 5]: Sora Floating Close Up Frame Placement Right Edge */}
          <div className="w-14 h-14 shrink-0 overflow-hidden rounded-xl bg-slate-950 border border-slate-800 p-0.5">
            <img src="../../public/SmallBluBird.png" alt="Sora Bottom Alignment Edge Anchor" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

    </div>
  );
}