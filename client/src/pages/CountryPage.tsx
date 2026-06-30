import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

const COUNTRY_DETAILS: Record<string, { name: string; description: string }> = {
  'sri-lanka': {
    name: 'Sri Lanka',
    description:
      'Explore investment and property opportunities in Sri Lanka. Discover coastal developments, luxury villas, and trusted local agencies for seamless global transactions.',
  },
  japan: {
    name: 'Japan',
    description:
      'Discover curated Japan property opportunities, from Tokyo apartments to resort developments. Connect with trusted partners and explore a stable investment market.',
  },
  usa: {
    name: 'USA',
    description:
      'Explore US real estate investment options, including commercial and residential opportunities in major cities and growth markets across the country.',
  },
};

export function CountryPage() {
  const { countryId } = useParams<{ countryId: string }>();

  const country = useMemo(() => {
    if (!countryId) return null;
    return COUNTRY_DETAILS[countryId.toLowerCase()];
  }, [countryId]);

  if (!country) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-lg border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">Country not found</h1>
          <p className="mt-4 text-sm text-slate-600">The page you requested does not exist.</p>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbff] text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-10 shadow-xl border border-slate-200">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Country Page
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">{country.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{country.description}</p>
          </div>
          <Link
            to="/invest"
            className="inline-flex items-center justify-center rounded-3xl bg-[#0066FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all"
          >
            Explore Invest Page
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Market Overview</h2>
            <p className="mt-3 text-sm text-slate-600 leading-7">Find the latest property trends, top locations, and expected returns for {country.name} investments.</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Featured Assets</h2>
            <p className="mt-3 text-sm text-slate-600 leading-7">See featured projects curated for your investment goals in the {country.name} market.</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Local Partners</h2>
            <p className="mt-3 text-sm text-slate-600 leading-7">Connect with trusted agencies and advisors who specialize in {country.name} real estate.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
