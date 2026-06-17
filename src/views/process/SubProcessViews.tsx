import React from 'react';
import { ArrowLeft, Monitor, Zap, CheckCircle2, RefreshCw, Layout, Smartphone, Globe, Code, PenTool, Database, Lock, Server, Key, FileText, Mail, Calendar, MessageSquare, Briefcase, Video, DollarSign, ArrowRight, ShieldCheck, PieChart, Phone } from 'lucide-react';

const SubProcessLayout = ({ navigate, title, subtitle, icon: Icon, children }: any) => (
  <div className="fade-in py-16 bg-white min-h-[80vh]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button 
        onClick={() => navigate('process')}
        className="flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors mb-10 group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Process Overview
      </button>
      
      <div className="flex items-center mb-8 pb-8 border-b border-slate-100">
        <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 mr-6">
          <Icon className="h-10 w-10" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">{title}</h1>
          <p className="text-lg text-slate-500 mt-2 font-medium">{subtitle}</p>
        </div>
      </div>
      
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-indigo-600 prose-img:rounded-xl">
        {children}
      </div>
    </div>
  </div>
);

export function CustomWebsiteView({ navigate }: any) {
  return (
    <SubProcessLayout navigate={navigate} title="Custom Website Design" subtitle="Built specifically for your business, no templates." icon={Monitor}>
      <p className="lead text-xl text-slate-700 font-medium">
        Many agencies charge premium prices to simply buy a $50 WordPress template and paste your logo into it. We think that’s dishonest. We handcraft your website from the ground up to perfectly align with your brand, ensuring you stand out.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-10 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4 opacity-5"><Layout className="w-48 h-48" /></div>
         <h3 className="text-xl font-bold flex items-center mb-4 text-slate-900 border-b border-slate-200 pb-3 relative z-10"><PenTool className="w-5 h-5 mr-3 text-indigo-600" /> Professional Design Phase</h3>
         <p className="text-slate-600 relative z-10">We start with a blank canvas and strategically design the layout to guide visitors toward contacting you. We ensure the color psychology, typography, and spacing feel premium and instill trust.</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-10 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4 opacity-5"><Smartphone className="w-48 h-48" /></div>
         <h3 className="text-xl font-bold flex items-center mb-4 text-slate-900 border-b border-slate-200 pb-3 relative z-10"><Code className="w-5 h-5 mr-3 text-indigo-600" /> Clean Code Architecture</h3>
         <p className="text-slate-600 relative z-10">Your site is built using professional, scalable tools like React. It isn't weighed down by bloated plugins or legacy code. It loads in milliseconds and looks perfect on a mobile phone, tablet, or desktop computer.</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-10 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4 opacity-5"><Globe className="w-48 h-48" /></div>
         <h3 className="text-xl font-bold flex items-center mb-4 text-slate-900 border-b border-slate-200 pb-3 relative z-10"><Zap className="w-5 h-5 mr-3 text-indigo-600" /> The Result</h3>
         <p className="text-slate-600 relative z-10">A custom asset that you own entirely. A lightning-fast, highly converting digital storefront that elevates your business above local competitors using generic web builders.</p>
      </div>
    </SubProcessLayout>
  );
}

export function EasyUpdatesView({ navigate }: any) {
  return (
    <SubProcessLayout navigate={navigate} title="Easy Site Updates" subtitle="A visual designer that anyone can use." icon={RefreshCw}>
      <p className="lead text-xl text-slate-700 font-medium">
        We believe you shouldn't have to pay a developer every time you need to change a sentence, update your hours, or post a new photo. We provide a powerful, yet simple, visual editor that empowers you to control your content.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">How It Works</h3>
      <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-lg">1</div>
          <h4 className="font-bold text-slate-900 mb-2">Login securely</h4>
          <p className="text-sm text-slate-600">Access your private visual editor directly from your browser, no software needed.</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-lg">2</div>
          <h4 className="font-bold text-slate-900 mb-2">Click to edit</h4>
          <p className="text-sm text-slate-600">See your website exactly as it appears. Click any text to type, or click any image to replace it.</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-lg">3</div>
          <h4 className="font-bold text-slate-900 mb-2">Add new content</h4>
          <p className="text-sm text-slate-600">Easily add new blog posts, team members, or gallery items by filling out a simple form.</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-lg">4</div>
          <h4 className="font-bold text-slate-900 mb-2">Hit publish</h4>
          <p className="text-sm text-slate-600">Your changes instantly compile and push to the live ultra-fast edge network.</p>
        </div>
      </div>

      <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 flex items-start mt-12 mb-8">
        <CheckCircle2 className="w-8 h-8 text-emerald-500 mr-4 shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-bold text-emerald-900 mb-2">You Can't Break It</h4>
          <p className="text-emerald-800 leading-relaxed">
            The best part of our visual designer is the separation of content and code. You are simply changing the "data" (text, images). You are entirely prevented from accidentally moving a div, deleting a critical code block, or breaking the mobile layout. It is virtually impossible to crash your website.
          </p>
        </div>
      </div>
    </SubProcessLayout>
  );
}

export function SecureSetupView({ navigate }: any) {
  return (
    <SubProcessLayout navigate={navigate} title="Secure Serverless Setup" subtitle="Military-grade security, zero maintenance." icon={Lock}>
      <p className="lead text-xl text-slate-700 font-medium">
        Legacy platforms like WordPress require a constantly running server and a vulnerable database. This is why small business websites get hacked. We use modern architecture where your site is compiled into static, secure files and distributed globally.
      </p>

      <div className="my-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">The Serverless Difference</h3>
        
        <div className="space-y-8">
          <div className="flex">
            <div className="bg-slate-100 p-4 rounded-xl mr-6 h-fit shrink-0"><Database className="text-slate-600 w-6 h-6" /></div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">No Vulnerable Databases</h4>
              <p className="text-slate-600 leading-relaxed text-lg">Hackers run automated scripts to inject malicious code into databases. Because our architecture compiles to static files, there is literally no database connected to your live site to be hacked.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-slate-100 p-4 rounded-xl mr-6 h-fit shrink-0"><Server className="text-slate-600 w-6 h-6" /></div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">No Servers to Maintain</h4>
              <p className="text-slate-600 leading-relaxed text-lg">You don’t need to worry about server updates, PHP versions, or plugin conflicts. The infrastructure is entirely managed by global tech giants (like Netlify or Vercel).</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-slate-100 p-4 rounded-xl mr-6 h-fit shrink-0"><ShieldCheck className="text-slate-600 w-6 h-6" /></div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Automatic SSL Certificates</h4>
              <p className="text-slate-600 leading-relaxed text-lg">We automatically provision and endlessly renew SSL (HTTPS) certificates for your domain, ensuring customer data is encrypted and Google ranks your site favorably.</p>
            </div>
          </div>
        </div>
      </div>
    </SubProcessLayout>
  );
}

export function ProEmailView({ navigate }: any) {
  return (
    <SubProcessLayout navigate={navigate} title="Google Workspace Integration" subtitle="Professionalize your communications." icon={Mail}>
       <p className="lead text-xl text-slate-700 font-medium">
        Running a business from a generic @gmail.com or @yahoo.com address harms your credibility and looks unprofessional. We configure Google Workspace so you get the familiar Gmail interface, but with your custom domain.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6"><Mail className="w-6 h-6 text-blue-600" /></div>
          <h4 className="text-lg font-bold text-slate-900 mb-3">Custom Business Email</h4>
          <p className="text-slate-600">Send and receive email as <strong className="text-slate-900">owner@yourbusiness.com</strong> while utilizing the powerful spam protection and search capabilities of the Gmail interface you already know.</p>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6"><Video className="w-6 h-6 text-green-600" /></div>
          <h4 className="text-lg font-bold text-slate-900 mb-3">Video & Collaboration</h4>
          <p className="text-slate-600">Instantly generate Google Meet video links for client consultations, and collaborate in real-time using Google Docs and Sheets without needing expensive Microsoft licenses.</p>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6"><Key className="w-6 h-6 text-amber-600" /></div>
          <h4 className="text-lg font-bold text-slate-900 mb-3">You Own The Admin Rights</h4>
          <p className="text-slate-600">Many agencies setup your email under their master account, holding your communications hostage. We set up an independent Google Workspace account where <strong className="text-slate-900">you possess the master admin keys</strong>.</p>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6"><Phone className="w-6 h-6 text-purple-600" /></div>
          <h4 className="text-lg font-bold text-slate-900 mb-3">Professional Phone Line</h4>
          <p className="text-slate-600">For an additional $10/mo to Google, we can configure Google Voice. You receive a professional business number with call screening, voicemail transcription, and an auto-attendant routing to your personal cell.</p>
        </div>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl mt-8 mb-12">
        <h4 className="font-bold text-indigo-900 mb-2 flex items-center"><PieChart className="w-5 h-5 mr-2" /> Transparent Pricing</h4>
        <p className="text-indigo-800">
          Google Workspace typically costs around <strong>$7 per user, per month</strong>. We do not markup this cost. You pay Google directly with your credit card, ensuring you maintain 100% control over your billing and accounts.
        </p>
      </div>
    </SubProcessLayout>
  );
}

export function LowCostsView({ navigate }: any) {
  return (
    <SubProcessLayout navigate={navigate} title="Ultra Low Ongoing Costs" subtitle="We eliminated the agency monthly retainer." icon={DollarSign}>
      <p className="lead text-xl text-slate-700 font-medium">
        It is an industry standard for web design agencies to charge $100 to $500 per month for "hosting and maintenance." For a standard local business website, this is completely unnecessary. We build sites that cost nothing to maintain.
      </p>

      <div className="my-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">A Year in Review: The Traditional Agency vs. Us</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Traditional Agency */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h4 className="text-xl font-bold text-red-600 flex items-center mb-6 pb-4 border-b border-slate-200">
              <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3"><MessageSquare className="w-5 h-5" /></span>
              A Traditional Agency
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between items-center text-slate-600"><span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-slate-400 mr-2" /> Initial Build</span> <span className="font-medium">$2,500+</span></li>
              <li className="flex justify-between items-center text-slate-600"><span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-slate-400 mr-2" /> Monthly "Hosting" ($150 x 12)</span> <span className="font-medium">$1,800</span></li>
              <li className="flex justify-between items-center text-slate-600"><span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-slate-400 mr-2" /> SSL Certificate Renewal</span> <span className="font-medium">$100</span></li>
            </ul>
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center font-bold text-lg">
              <span className="text-slate-900">Total First Year Cost:</span>
              <span className="text-red-600">$4,400+</span>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-indigo-900 rounded-2xl p-8 border border-indigo-800 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><Briefcase className="w-48 h-48 text-indigo-400" /></div>
            <h4 className="text-xl font-bold text-white flex items-center mb-6 pb-4 border-b border-indigo-800 relative z-10">
              <span className="bg-indigo-800 text-indigo-300 p-2 rounded-lg mr-3 shadow-inner"><Globe className="w-5 h-5" /></span>
              Modern Web Setup
            </h4>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex justify-between items-center text-indigo-200"><span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2" /> Initial Build</span> <span className="font-medium">$500</span></li>
              <li className="flex justify-between items-center text-indigo-200"><span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2" /> Enterprise Edge Hosting</span> <span className="font-medium text-emerald-400">$0</span></li>
              <li className="flex justify-between items-center text-indigo-200"><span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2" /> SSL Certificates</span> <span className="font-medium text-emerald-400">$0</span></li>
              <li className="flex justify-between items-center text-indigo-200"><span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2" /> Domain Name Renewal</span> <span className="font-medium">~$15</span></li>
            </ul>
            <div className="pt-4 border-t border-indigo-800 flex justify-between items-center font-bold text-lg relative z-10">
              <span className="text-white">Total First Year Cost:</span>
              <span className="text-emerald-400">$515</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-6">How is hosting $0?</h3>
        <p className="text-xl text-slate-600 leading-relaxed mb-6">
          We leverage Netlify or Vercel—platforms designed to host the code frameworks we use (React/Vite). Their starter tiers are incredibly generous, providing lightning-fast edge hosting completely free for most standard business websites.
        </p>
        <p className="text-xl text-slate-600 leading-relaxed">
          Unless your website is receiving massive amounts of traffic (tens of thousands of visitors) or you have highly complex backend configurations, your hosting via these platforms costs exactly nothing. We set up the account in your name, so you get the free tier natively without an agency middle-man charging you for it.
        </p>
      </div>
    </SubProcessLayout>
  );
}
