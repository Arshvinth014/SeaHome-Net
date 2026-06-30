import { INVESTMENT_OPPS } from '../config/mockData';
import { Briefcase, Globe, ShieldCheck, Sparkles } from 'lucide-react';

export function InvestPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.08),_transparent_32%)] text-slate-900">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-2 text-sm font-semibold text-blue-700">
              <Briefcase className="w-4 h-4" /> Investment page
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Invest in premium global opportunities
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Explore hand-picked real estate investments with strong yield potential, diversified locations, and trusted local partners.
              Move beyond browsing into a dedicated investment journey.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0066FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all"
              >
                View Opportunities
              </a>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600">
                <div className="font-bold text-slate-900">Why choose SeaHomeNet</div>
                <div className="mt-2 grid gap-2 text-[13px] text-slate-600 sm:grid-cols-2">
                  <span className="inline-flex items-center gap-2">Global market access</span>
                  <span className="inline-flex items-center gap-2">Verified investment partners</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/50">
              <div className="flex items-center gap-3 text-slate-900">
                <Globe className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Coverage</p>
                  <p className="mt-1 font-bold text-lg">85+ countries</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/50">
              <div className="flex items-center gap-3 text-slate-900">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Security</p>
                  <p className="mt-1 font-bold text-lg">Verified listings only</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/50">
              <div className="flex items-center gap-3 text-slate-900">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Benefits</p>
                  <p className="mt-1 font-bold text-lg">Curated opportunity insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="opportunities" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured investments</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Top investment opportunities</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Evaluate the latest opportunities from high-growth markets and secure assets that align with your capital goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {INVESTMENT_OPPS.map((opp) => (
            <article key={opp.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-56 overflow-hidden">
                <img src={opp.image} alt={opp.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{opp.location}</span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{opp.title}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-6">Estimated ROI {opp.roi} with a minimum investment of {opp.minInvestment}.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase text-blue-700">ROI {opp.roi}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase text-slate-700">{opp.minInvestment}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
