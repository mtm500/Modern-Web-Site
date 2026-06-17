import React from 'react';
import { Star, ArrowRight, CheckCircle2, Wrench } from 'lucide-react';

export default function HomeView({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-slate-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              <Star className="h-4 w-4 mr-2" />
              The Next Generation of Web Design
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
              Modern Professional Website<br />
              <span className="text-indigo-600">For just $500</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              <span className="block mb-3">Turn-key website with professionally written content, in just 24hrs.</span>
              <span className="block">No monthly retainers, zero technical maintenance, and a custom design you own 100%.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => navigate('process')} className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center">
                View Our Process <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={() => navigate('projects')} className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-full font-semibold text-lg transition-colors shadow-sm flex items-center justify-center">
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Proactive Model Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Unique Approach: Test Drive for $20</h2>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                Most agencies charge you thousands before writing a single line of code. We do things differently. 
              </p>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                For just $20, we will design and build a fully functional, customized preview site for your business. If you love it, simply pay the remaining $480 to own it forever—or upgrade to a premium tier. If it's not a perfect fit, you pass with no further obligation.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mr-3 shrink-0" />
                  <span className="text-indigo-50"><strong>Incredibly low risk:</strong> See your actual custom design for only $20.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mr-3 shrink-0" />
                  <span className="text-indigo-50"><strong>Lightning fast:</strong> Get your secure preview link in 24 hours.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mr-3 shrink-0" />
                  <span className="text-indigo-50"><strong>No obligation:</strong> Love it and launch, or walk away completely.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div 
                onClick={() => navigate('project-mainstreet')}
                className="bg-indigo-800 rounded-2xl p-4 sm:p-6 shadow-2xl border border-indigo-700 group cursor-pointer relative overflow-hidden transition-all hover:shadow-indigo-500/20 hover:border-indigo-400"
              >
                <div className="flex items-center justify-between mb-4 border-b border-indigo-700 pb-4 relative z-20">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="text-xs text-indigo-300 font-mono">live-preview.yourbusiness.com</div>
                </div>
                
                {/* Miniature Plumbing Site Preview */}
                <div className="w-full h-64 bg-slate-200 rounded-lg overflow-hidden relative shadow-inner">
                  <div className="h-full w-full bg-white flex flex-col pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]">
                    {/* Top Bar */}
                    <div className="h-4 bg-red-600 flex items-center px-3 justify-center">
                      <div className="w-32 h-1 bg-white/90 rounded-full"></div>
                    </div>
                    {/* Header */}
                    <div className="h-8 flex items-center px-4 justify-between border-b border-slate-100">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded mr-2 flex items-center justify-center"><Wrench className="w-2.5 h-2.5 text-white" /></div>
                        <div className="flex flex-col gap-0.5">
                          <div className="w-16 h-1.5 bg-blue-900 rounded-full"></div>
                          <div className="w-10 h-1 bg-slate-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-12 h-3 bg-blue-600 rounded-sm"></div>
                    </div>
                    {/* Hero */}
                    <div className="h-28 bg-blue-50 flex items-center px-4 relative overflow-hidden">
                      <div className="absolute right-[-10px] top-[-10px] opacity-10">
                          <Wrench className="w-24 h-24 text-blue-900" />
                      </div>
                      <div className="flex-grow relative z-10">
                        <div className="w-16 h-2 bg-blue-200 border border-blue-300 rounded mb-3"></div>
                        <div className="w-32 h-3 bg-slate-900 rounded-full mb-1.5"></div>
                        <div className="w-24 h-3 bg-slate-900 rounded-full mb-3"></div>
                        <div className="w-3/4 h-1 bg-slate-500 rounded-full mb-1"></div>
                        <div className="w-1/2 h-1 bg-slate-500 rounded-full mb-3"></div>
                        <div className="w-20 h-4 bg-red-600 rounded-sm shadow-sm"></div>
                      </div>
                    </div>
                    {/* Content Grid */}
                    <div className="flex-grow p-3 grid grid-cols-2 gap-3 bg-white">
                        <div className="border border-slate-100 bg-slate-50 rounded shadow-sm p-2 flex flex-col justify-center">
                          <div className="flex items-center mb-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1" />
                            <div className="w-12 h-1.5 bg-slate-800 rounded-full"></div>
                          </div>
                          <div className="w-full h-1 bg-slate-300 rounded-full mb-1"></div>
                          <div className="w-4/5 h-1 bg-slate-300 rounded-full"></div>
                        </div>
                        <div className="border border-slate-100 bg-slate-50 rounded shadow-sm p-2 flex flex-col justify-center">
                          <div className="flex items-center mb-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1" />
                            <div className="w-12 h-1.5 bg-slate-800 rounded-full"></div>
                          </div>
                          <div className="w-full h-1 bg-slate-300 rounded-full mb-1"></div>
                          <div className="w-4/5 h-1 bg-slate-300 rounded-full"></div>
                        </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/40 backdrop-blur-[0px] group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center z-30">
                    <div className="bg-white text-indigo-600 px-5 py-2.5 rounded-full font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                      Preview Full Site <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We've eliminated the bloat, the retainers, and the vulnerabilities of legacy website builders.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Effortless Visual Editing</h3>
              <p className="text-slate-600 leading-relaxed">
                Need to change text or add a post? We provide a beautifully simple visual site designer that anyone can use without fear of breaking the site. Updating your content is as easy as typing a document.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Maintenance & Secure</h3>
              <p className="text-slate-600 leading-relaxed">
                Unlike WordPress sites that require constant plugin updates, our modern code architecture means there are no databases to hack. It's secure by default and requires absolutely zero ongoing technical maintenance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">100% Ownership</h3>
              <p className="text-slate-600 leading-relaxed">
                It's your site. Built with standard HTML/React, any developer can update it in the future. You are never locked into our service or proprietary platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ultra-Low Ongoing Costs</h3>
              <p className="text-slate-600 leading-relaxed">
                Enjoy <strong className="font-semibold text-slate-900">zero ongoing cost</strong> for basic low-traffic sites, and a very low ongoing cost for high-traffic or more complex configurations. Plus, our premium tier offers a professional email solution via Google Workspace for just $7 per month, and a professional phone line starting at $10 per month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GEO-Optimized FAQ / Dropdown Content */}
      <section className="py-24 bg-white border-t border-slate-200" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Information & Resources
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about our value, process, and pricing.</p>
          </div>

          <div className="space-y-4">
            {/* Value Proposition */}
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-900 cursor-pointer list-none hover:bg-slate-100 transition-colors" itemProp="name">
                What is your value proposition and how are you different?
                <span className="transition duration-300 group-open:rotate-180">
                  <ChevronDown className="h-6 w-6 text-indigo-600" />
                </span>
              </summary>
              <div className="p-6 pt-0 bg-white border-t border-slate-100" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="pt-6 text-slate-600 leading-relaxed space-y-4" itemProp="text">
                  <p>
                    We deliver <strong>Fortune 500 quality custom websites</strong> for small businesses without the industry-standard bloated monthly retainers. Our value proposition is simple: you get a highly effective, beautifully designed, and virtually hack-proof website that you own 100%. 
                  </p>
                  <p>
                    By utilizing modern code architecture and edge hosting, we eliminate the need for constant security updates, vulnerable databases, and costly technical maintenance. This ensures your site is blazing fast, intrinsically secure, and perfectly optimized to convert visitors into clients—all for a transparent, one-time investment.
                  </p>
                </div>
              </div>
            </details>

            {/* Our Process */}
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-900 cursor-pointer list-none hover:bg-slate-100 transition-colors" itemProp="name">
                How does your website design and setup process work?
                <span className="transition duration-300 group-open:rotate-180">
                  <ChevronDown className="h-6 w-6 text-indigo-600" />
                </span>
              </summary>
              <div className="p-6 pt-0 bg-white border-t border-slate-100" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="pt-6 text-slate-600 leading-relaxed space-y-4" itemProp="text">
                  <p>
                    Our streamlined process is built around three core phases designed to scale with your business effortlessly:
                  </p>
                  <ul className="space-y-4 mt-4 mb-6">
                    <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 shrink-0" /><span><strong>Phase 1: The Foundation.</strong> We custom-design and code your site, set up secure ultra-fast hosting (usually $0/mo), and configure your domain for true 100% ownership.</span></li>
                    <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 shrink-0" /><span><strong>Phase 2: Complete Business Suite.</strong> We upgrade your operations by migrating you from personal email to a professional Google Workspace setup (custom email, docs, calendar, video).</span></li>
                    <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 shrink-0" /><span><strong>Phase 3: Automated Marketing.</strong> We implement powerful outreach systems, automated SMS/email follow-ups, and a unified CRM to put your client acquisition on autopilot.</span></li>
                  </ul>
                  <div className="pt-2">
                    <button onClick={() => navigate('process')} className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                      Explore Our Full Process <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </details>

            {/* Pricing Packages */}
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-900 cursor-pointer list-none hover:bg-slate-100 transition-colors" itemProp="name">
                What are your pricing packages and setup costs?
                <span className="transition duration-300 group-open:rotate-180">
                  <ChevronDown className="h-6 w-6 text-indigo-600" />
                </span>
              </summary>
              <div className="p-6 pt-0 bg-white border-t border-slate-100" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="pt-6 text-slate-600 leading-relaxed space-y-4" itemProp="text">
                  <p>
                    We believe in simple, transparent pricing with a one-time investment. You own your digital assets completely, meaning no hidden fees or ongoing monthly agency ransoms. Our packages are specifically designed for service-based and informational businesses <strong>(please note: we do not support e-commerce functionality)</strong>. Our current packages are:
                  </p>
                  <ul className="space-y-4 mt-4 mb-6">
                    <li className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <strong className="text-slate-900 block text-lg mb-1">Basically Awesome Site — $500</strong>
                      Includes up to 6 professionally written custom pages, full SEO optimization, a visual site designer for easy edits, and a zero-maintenance architecture.
                    </li>
                    <li className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <strong className="text-slate-900 block text-lg mb-1">Professional Package — $1,000</strong>
                      Includes up to 12 custom pages, blog/news integration, basic analytics tracking, and professional Google Workspace email setup.
                    </li>
                    <li className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <strong className="text-slate-900 block text-lg mb-1">Advanced Package — Get a Quote</strong>
                      Includes up to 30 custom pages, local SEO & Google Business integration, an Automated Sales CRM & Lead Nurturing system, interactive AI features, 1-on-1 Workspace training, and advanced analytics.
                    </li>
                  </ul>
                  <div className="pt-2">
                    <button onClick={() => navigate('pricing')} className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                      View Detailed Pricing <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Layout, ShieldCheck, Briefcase, Zap, Sparkles, ChevronDown } from 'lucide-react';
