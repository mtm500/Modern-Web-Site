import React from 'react';
import { Code, Server, Globe, Mail, FileText, Video, Cloud, Phone, Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProcessView({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="fade-in py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Simple & Modern Architecture</h1>
          <p className="text-xl text-slate-600">
            The same modern web tools that tech giants use, simplified for your small business.
          </p>
        </div>

        {/* Process 1: The Stack */}
        <div className="mb-24 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center pb-4">The Foundation</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              onClick={() => navigate('custom-website')}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="h-24 w-24 text-indigo-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center group-hover:text-indigo-600 transition-colors">
                  <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                  Site Design
                </h3>
                <p className="text-slate-600 mb-2">
                  Far from a generic drag-and-drop template, this is a bespoke asset you own 100%.
                </p>
                <p className="text-slate-600 mb-4">
                  We deliver a custom-designed, custom-coded website that is modern, professional, and secure by default.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-indigo-500" /> Zero Maintenance Required</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-indigo-500" /> Perfectly Responsive</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-indigo-500" /> Ultimate Portability</li>
                </ul>
              </div>
            </div>

            <div 
              onClick={() => navigate('secure-setup')}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server className="h-24 w-24 text-teal-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center group-hover:text-teal-600 transition-colors">
                  <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Web Hosting
                </h3>
                <p className="text-slate-600 mb-2">
                  Experience a true "set it and forget it" website with zero ongoing maintenance.
                </p>
                <p className="text-slate-600 mb-2">
                  Add an update, new page, or alter your design effortlessly using our visual editor. Stunning content created without writing code.
                </p>
                <p className="text-slate-600 mb-4">
                  Trusted global distribution to the web on a fast, modern framework.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li className="flex items-start"><CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-teal-500 shrink-0" /> <span>$0/mo for most local business sites with low traffic & minimal updates</span></li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-teal-500" /> Military-grade Security</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-teal-500" /> Free Security Certificates</li>
                </ul>
              </div>
            </div>

            <div 
              onClick={() => navigate('low-costs')}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="h-24 w-24 text-pink-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center group-hover:text-pink-600 transition-colors">
                  <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                  Domain Purchase
                </h3>
                <p className="text-slate-600 mb-2">
                  You own the domain name. 
                </p>
                <p className="text-slate-600 mb-4">
                  We highly recommend Porkbun as your registrar, though we can seamlessly work with any provider. They are known for low transparent pricing and no hidden fees. You hold the keys.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-pink-500" /> Total registrar flexibility</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-pink-500" /> Lowest renewal rates</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-pink-500" /> Registered directly to you</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process 2: Workspace */}
        <div 
          onClick={() => navigate('pro-email')}
          className="bg-indigo-50 rounded-3xl p-8 md:p-12 border border-indigo-100 flex flex-col md:flex-row items-center gap-10 cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
        >
          <div className="md:w-1/2">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-200 text-indigo-800 text-sm font-semibold">
                Complete Business Suite
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-200 text-amber-800 text-sm font-semibold">
                Optional (Included in Professional Package)
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-indigo-700 transition-colors">Google Workspace: Email, Docs, Video, Cloud, Phone & AI</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Stop running your business on personal accounts. We integrate your domain with Google Workspace to give you a complete, professional operations suite for an average base cost of just <strong>$7 per user/month</strong>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 shrink-0"><Mail className="h-5 w-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-slate-900 text-sm">Professional Email</strong>
                  <span className="text-slate-600 text-xs">you@yourbusiness.com</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 shrink-0"><FileText className="h-5 w-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-slate-900 text-sm">Smart Docs</strong>
                  <span className="text-slate-600 text-xs">Ditch Microsoft Office</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 shrink-0"><Video className="h-5 w-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-slate-900 text-sm">Video Meetings</strong>
                  <span className="text-slate-600 text-xs">HD Google Meet calls</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 shrink-0"><Cloud className="h-5 w-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-slate-900 text-sm">Cloud Storage</strong>
                  <span className="text-slate-600 text-xs">Secure Google Drive</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 shrink-0"><Phone className="h-5 w-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-slate-900 text-sm">Business Phone</strong>
                  <span className="text-slate-600 text-xs">Dedicated line $10/m</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 shrink-0"><Sparkles className="h-5 w-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-slate-900 text-sm">Gemini AI Tools</strong>
                  <span className="text-slate-600 text-xs">Built-in AI assistance</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 shrink-0"><Calendar className="h-5 w-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-slate-900 text-sm">Calendar & Bookings</strong>
                  <span className="text-slate-600 text-xs">Automated scheduling pages</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('pro-email');
                }}
                className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md group-hover:bg-indigo-700"
              >
                Learn More About Pro Email <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 group-hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-slate-100 px-4 py-3 border-b flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <div className="ml-4 text-xs font-medium text-slate-500 flex-grow text-center">Compose Message</div>
              </div>
              <div className="p-6">
                <div className="border-b pb-2 mb-3"><span className="text-slate-500 text-sm w-16 inline-block">To:</span> <span className="text-slate-800 text-sm">client@example.com</span></div>
                <div className="border-b pb-2 mb-4"><span className="text-slate-500 text-sm w-16 inline-block">From:</span> <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-sm font-medium">owner@mycompanywebsite.com</span></div>
                <div className="h-32 bg-slate-50 rounded border border-slate-100 p-3">
                  <div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-slate-200 rounded mb-2"></div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <div className="h-8 w-20 bg-indigo-600 rounded text-white text-xs flex items-center justify-center font-medium">Send</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
