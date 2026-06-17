import React from 'react';
import { CheckCircle2, Briefcase, Zap, ArrowRight, Code } from 'lucide-react';

export default function PricingView({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="fade-in py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Simple, Honest Pricing</h1>
          <p className="text-xl text-slate-600">
            No hidden fees. No ongoing monthly ransoms. Zero technical maintenance. Just a one-time investment for a professional asset you own completely and can update effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1 */}
          <div className="bg-gradient-to-b from-indigo-50 to-white rounded-3xl p-8 border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="mb-8 relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Basically Awesome Site</h3>
              <p className="text-slate-500 text-sm min-h-[4rem]">Professional & clean online presence.</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">$500</span>
                <span className="ml-2 text-slate-500">one-time</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow relative z-10">
              <li className="font-bold text-sm uppercase tracking-wider text-indigo-500 pb-1">
                Premium Features
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Multi-Page Layout</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">6 Professionally Written Custom Pages</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Full SEO (Local & AI Optimized)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Mobile Responsive Design</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Contact Form Integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Visual Site Designer (Easy Edits)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Zero Maintenance Architecture</span>
              </li>
            </ul>
            <button onClick={() => navigate('contact')} className="w-full py-4 px-6 rounded-xl font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors relative z-10">
              Choose Basically Awesome Site
            </button>
          </div>

          {/* Tier 2 */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col h-full relative transform md:-translate-y-4">
            <div className="mb-8 mt-2">
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-slate-400 text-sm min-h-[4rem]">Professional Business Setup</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">$1,000</span>
                <span className="ml-2 text-slate-400">one-time</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="font-bold text-sm uppercase tracking-wider text-emerald-400 pb-1">
                Added Features
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-slate-300">12 Professionally Written Custom Pages</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-slate-300">Blog / News Integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-slate-300">Basic Analytics Tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-slate-300">Google Workspace Setup with Local Business Phone</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-slate-300">Social Media Feed & Auto-Imports</span>
              </li>
            </ul>
            <button onClick={() => navigate('contact')} className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg">
              Choose Professional
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-gradient-to-b from-indigo-50 to-white rounded-3xl p-8 border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="mb-8 relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced</h3>
              <p className="text-slate-600 text-sm min-h-[4rem]">Enhanced platform for full outreach</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-indigo-800">Get a Quote</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow relative z-10">
              <li className="font-bold text-sm uppercase tracking-wider text-indigo-500 pb-1">
                Added Features
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Up to 30 Professionally Written Custom Pages</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Local SEO & Google Business</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Automated Sales CRM & Lead Nurturing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Interactive AI Features</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">1-on-1 Workspace Training</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                <span className="text-slate-700">Advanced Analytics Tracking</span>
              </li>
            </ul>
            <button onClick={() => navigate('contact')} className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-md relative z-10">
              Choose Advanced
            </button>
          </div>
        </div>

        {/* E-Commerce Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start sm:items-center shadow-sm">
          <div className="bg-white p-3 rounded-full text-slate-400 mr-4 shrink-0 shadow-sm border border-slate-100">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-1">Important Note Regarding E-Commerce</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              To maintain our high standard of ultra-fast, zero-maintenance web architecture, we exclusively build informational and lead-generation websites. <strong className="text-slate-800">We do not build or support e-commerce stores or shopping cart functionality.</strong>
            </p>
          </div>
        </div>

        {/* Ongoing Costs Section */}
        <div className="mt-16 max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 shrink-0 hidden md:block">
            <Zap className="h-8 w-8" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Transparent Ongoing Costs</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most agencies trap you in expensive monthly retainers just to keep your site online. We believe in true ownership. Once your site is built, hosting is completely free for standard traffic local business sites.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Premium operations like professional email and dedicated business phone lines are available as optional upgrades, paid directly to the providers at industry-low rates.
            </p>
          </div>
          <div className="shrink-0 text-left border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 w-full md:w-auto min-w-[220px]">
            <div className="space-y-4">
              <div>
                <div className="flex items-end mb-1">
                  <span className="text-3xl font-extrabold text-slate-900">$0</span>
                  <span className="text-sm font-medium text-slate-500 ml-1 pb-1">/mo</span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hosting & Security</p>
              </div>
              <div className="h-px w-full bg-slate-100"></div>
              <div>
                <div className="flex items-end mb-1">
                  <span className="text-xl font-bold text-slate-900">~$15</span>
                  <span className="text-sm font-medium text-slate-500 ml-1 pb-0.5">/yr</span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Domain Renewal</p>
              </div>
              <div className="h-px w-full bg-slate-100"></div>
              <div>
                <div className="flex items-end mb-1">
                  <span className="text-xl font-bold text-slate-900">$7</span>
                  <span className="text-sm font-medium text-slate-500 ml-1 pb-0.5">/mo</span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Workspace (Optional)</p>
              </div>
              <div className="h-px w-full bg-slate-100"></div>
              <div>
                <div className="flex items-end mb-1">
                  <span className="text-xl font-bold text-slate-900">$10</span>
                  <span className="text-sm font-medium text-slate-500 ml-1 pb-0.5">/mo</span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Line (Optional)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Site Revisions Section */}
        <div className="mt-8 md:mt-12 max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 shrink-0 hidden md:block">
            <Code className="h-8 w-8" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Site Revisions & Structural Updates</h3>
            <p className="text-slate-600 leading-relaxed">
              The visual designer makes adding new pages, posts, text, and images effortless. But for the heavy lifting—like structural layout changes, complex new features, or design revisions—we provide professional development updates quoted to your specific needs.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Starting At</p>
            <div className="text-4xl font-extrabold text-slate-900 mb-2">$300</div>
            <p className="text-sm text-slate-500 mb-4">Quoted on an individual basis</p>
            <button onClick={() => navigate('contact')} className="w-full md:w-auto py-3 px-6 rounded-xl font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
              Request a Quote
            </button>
          </div>
        </div>

        {/* Note on fees */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-slate-200">
          <h4 className="text-lg font-bold text-slate-900 mb-4">The Fine Print (It's actually good news)</h4>
          <p className="text-base font-medium text-slate-700 mb-3 leading-relaxed">
            Hosting via Netlify is <strong className="text-slate-900 font-bold">100% free</strong> for standard low-traffic local business sites.
          </p>
          <p className="text-base font-medium text-slate-700 mb-3 leading-relaxed">
            Our zero-maintenance architecture is tailored for service-based and informational businesses. <strong className="text-slate-900 font-bold">We do not build or support e-commerce functionality.</strong>
          </p>
          <p className="text-base font-medium text-slate-700 mb-3 leading-relaxed">
            Netlify's premium pricing tiers are $10 or $20 per month, depending on traffic and the frequency or volume of site revisions using the visual editor.
          </p>
          <p className="text-base font-medium text-slate-700 mb-3 leading-relaxed">
            Your only required recurring cost is the domain renewal (typically $15/year with Porkbun). 
          </p>
          <p className="text-base font-medium text-slate-700 mb-3 leading-relaxed">
            If you opt for Google Workspace, standard plans average $7 per user/month, with optional dedicated business phone available for an additional $10/month.
          </p>
          <p className="text-base font-medium text-slate-700 mb-6 leading-relaxed">
            You maintain total ownership of all accounts.
          </p>
          
          <div className="pt-6 border-t border-slate-200 mt-2">
            <p className="text-sm text-slate-500 mb-5">
              Please review our <button onClick={() => navigate('terms-of-use')} className="text-indigo-600 font-bold hover:underline">Terms & Conditions</button> for our full policies, including our refund policy and acceptable use guidelines.
            </p>
            <button onClick={() => navigate('low-costs')} className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors flex items-center justify-center mx-auto group">
              Curious how we eliminated the industry-standard monthly retainer? View our transparent cost breakdown. <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
