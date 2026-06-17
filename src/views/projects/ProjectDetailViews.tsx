import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Monitor, ArrowRight, Expand, Leaf, Scissors, Droplets, Layout, Scale, Heart, Dumbbell, Wrench } from 'lucide-react';

export function ProjectDemoWrapper({ navigate, title, previousPage, children, description, colorClass, highlightFeatures }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scale, setScale] = useState(1);
  const backLabel = previousPage === 'home' ? 'Home' : 'Projects Gallery';
  
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('iframe-container');
      if (container) {
         if (container.offsetWidth < 1200) {
            setScale(container.offsetWidth / 1200);
         } else {
            setScale(1);
         }
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  return (
    <div className={`fade-in flex flex-col bg-slate-900 min-h-screen ${isExpanded ? 'h-screen fixed inset-0 z-[100]' : ''}`}>
      {/* Demo Header Bar */}
      <div className="bg-slate-900 border-b border-slate-800 p-4 shrink-0 shadow-lg relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center w-full md:w-auto overflow-hidden">
           <button 
             onClick={() => navigate(previousPage)}
             className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg mr-4 group shrink-0"
           >
             <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to {backLabel}
           </button>
           <div className={`w-2 h-2 rounded-full ${colorClass || 'bg-indigo-500'} mr-2 hidden md:block shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)] shadow-${colorClass?.split('-')[1]}-500/50`}></div>
           <h1 className="text-white font-bold text-lg truncate flex-1 min-w-0">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
           <button 
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700"
           >
             <Expand className="h-4 w-4 mr-2" /> {isExpanded ? 'Collapse' : 'Expand View'}
           </button>
           <button 
             onClick={() => navigate('contact')}
             className="text-sm font-bold text-white transition-colors flex items-center bg-indigo-600 hover:bg-indigo-500 px-4 py-1.5 rounded-lg shadow-md"
           >
             Build a Site Like This
           </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-grow flex flex-col md:flex-row relative">
        {/* Left pane: Details (Hidden if expanded) */}
        {!isExpanded && (
          <div className="w-full md:w-80 bg-slate-800 shrink-0 border-r border-slate-700 overflow-y-auto hidden lg:block custom-scrollbar">
             <div className="p-6">
                <h3 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-4">Project Overview</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">{description}</p>
                
                <h3 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-4">Implementation Features</h3>
                <ul className="space-y-3">
                   {highlightFeatures?.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                         <div className={`mt-0.5 mr-2 w-1.5 h-1.5 rounded-full ${colorClass || 'bg-indigo-500'} shrink-0`}></div>
                         <span>{feature}</span>
                      </li>
                   ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-700">
                   <button onClick={() => navigate('contact')} className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-between group">
                      Get a similar site <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
          </div>
        )}

        {/* Right pane: iFrame Mockup */}
        <div id="iframe-container" className="flex-grow bg-black relative overflow-hidden flex items-center justify-center p-0 md:p-8">
           <div className="absolute inset-0 bg-slate-900 pattern-grid-lg text-slate-800/50"></div>
           
           {/* Desktop Frame Mockup */}
           <div 
              className={`relative bg-slate-50 rounded-lg md:rounded-xl shadow-2xl overflow-hidden border-0 md:border-4 border-slate-800 flex flex-col transition-all duration-300 ${isExpanded ? 'w-full h-full md:rounded-none md:border-0' : 'w-full h-full max-w-[1200px]'}`}
              style={!isExpanded ? {
                 width: '1200px',
                 height: '800px',
                 transform: `scale(${scale})`,
                 transformOrigin: 'center center',
                 maxHeight: '100%'
              } : {}}
           >
              {/* Browser Header (hide on small screens or when fully expanded) */}
              <div className={`h-12 bg-slate-800 flex items-center px-4 shrink-0 transition-all ${isExpanded ? 'hidden' : 'hidden md:flex'}`}>
                <div className="flex space-x-2 mr-4 shrink-0">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex-grow max-w-xl mx-auto bg-slate-700 h-7 rounded flex items-center px-3 justify-center text-xs text-slate-400 font-mono">
                   <span className="opacity-50 mr-1">https://</span>demo.modernwebagency.com/{title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
              
              {/* Actual Content Frame */}
              <div className="flex-grow bg-white overflow-hidden relative">
                 {children}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------ //
//                                 PROJECT DEMO VIEWS                                               //
// ------------------------------------------------------------------------------------------------ //

export function ProjectApexView({ navigate, previousPage }: any) {
  return (
    <ProjectDemoWrapper 
      navigate={navigate} 
      previousPage={previousPage} 
      title="Apex Landscaping"
      colorClass="bg-emerald-500"
      description="A clean, high-contrast, image-forward design optimized for local service contractors. Features bold calls-to-action to request quotes and clear categorical service breakdowns."
      highlightFeatures={["Sticky top navigation with emergency CTA", "Hero image banner with text overlay", "Responsive grid for service cards", "Integrated lead generation form", "Trust badges and testimonials section"]}
    >
      <div className="h-full w-full overflow-y-auto bg-white font-sans">
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 p-4 flex justify-between items-center">
           <div className="text-xl font-bold text-emerald-900 flex items-center"><Leaf className="mr-2 text-emerald-600" /> Apex <span className="font-light ml-1">Landscaping</span></div>
           <div className="hidden md:flex space-x-6 text-sm font-semibold text-slate-600">
             <span>Services</span><span>About</span><span>Testimonials</span>
           </div>
           <button className="bg-emerald-600 text-white px-4 py-2 rounded font-bold text-sm">Request Quote</button>
        </nav>
        <div className="bg-emerald-900 text-white py-24 px-8 text-center relative overflow-hidden flex flex-col items-center justify-center">
           <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
             <h1 className="text-5xl font-extrabold mb-6">Transform Your Outdoor Space</h1>
             <p className="text-xl mb-8 text-emerald-100">Professional landscaping, hardscaping, and lawn care for residential and commercial properties in the Metro Area.</p>
             <button className="bg-emerald-500 text-emerald-950 px-8 py-3 rounded text-lg font-bold">Schedule a Consultation</button>
           </div>
        </div>
        <div className="py-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 border border-slate-200 rounded-lg shadow-sm">
                <Scissors className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Lawn Maintenance</h3>
                <p className="text-slate-600">Regular mowing, edging, and fertilization programs tailored to your specific grass type.</p>
             </div>
             <div className="p-6 border border-slate-200 rounded-lg shadow-sm">
                <Droplets className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Irrigation Systems</h3>
                <p className="text-slate-600">Custom sprinkler system design, installation, and seasonal maintenance.</p>
             </div>
             <div className="p-6 border border-slate-200 rounded-lg shadow-sm">
                 <Layout className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Hardscaping</h3>
                <p className="text-slate-600">Beautiful stone patios, retaining walls, and custom outdoor fire pits.</p>
             </div>
          </div>
        </div>
        <footer className="bg-slate-900 text-slate-400 p-8 text-center">
           &copy; 2024 Apex Landscaping LLC. All rights reserved.
        </footer>
      </div>
    </ProjectDemoWrapper>
  );
}

// ... I will implement the rest of the Project Detail Views identically
export function ProjectLuminaView({ navigate, previousPage }: any) {
  return (
    <ProjectDemoWrapper 
      navigate={navigate} 
      previousPage={previousPage} 
      title="Lumina Legal"
      colorClass="bg-amber-500"
      description="A sophisticated, high-trust design appropriate for law firms, financial advisors, or consulting groups. Prioritizes readability and authority."
      highlightFeatures={["Editorial typography pairing", "Split-screen hero layouts for strong imagery", "Prominent trust indicators (awards, reviews)", "Detailed attorney profile pages"]}
    >
       <div className="h-full w-full overflow-y-auto bg-slate-50 font-serif">
          <header className="bg-slate-900 text-white p-6 flex justify-between items-center">
             <div className="text-2xl font-normal tracking-widest uppercase">Lumina Legal</div>
             <div className="text-sm font-sans tracking-widest text-amber-500 border border-amber-500 px-4 py-2 uppercase">Free Consultation</div>
          </header>
          <div className="flex flex-col md:flex-row h-[600px]">
             <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-slate-800 text-white">
                <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">Relentless advocacy for the injured.</h1>
                <p className="text-lg text-slate-400 font-sans mb-8 leading-relaxed max-w-md">We bring decades of trial experience to ensure you secure the compensation you deserve.</p>
                <button className="bg-amber-600 text-white w-fit px-8 py-4 font-sans uppercase tracking-widest text-sm">Review Your Case</button>
             </div>
             <div className="w-full md:w-1/2 bg-slate-700 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
                <Scale className="h-48 w-48 text-slate-800 opacity-80" />
             </div>
          </div>
          <div className="bg-amber-600 text-amber-50 py-12 px-8 flex justify-center space-x-12 shrink-0">
             <div className="text-center font-sans">
               <div className="text-3xl font-bold mb-1">$50M+</div>
               <div className="text-xs uppercase tracking-widest">Recovered</div>
             </div>
             <div className="text-center font-sans">
               <div className="text-3xl font-bold mb-1">20+</div>
               <div className="text-xs uppercase tracking-widest">Years Exp.</div>
             </div>
             <div className="text-center font-sans">
               <div className="text-3xl font-bold mb-1">98%</div>
               <div className="text-xs uppercase tracking-widest">Success Rate</div>
             </div>
          </div>
       </div>
    </ProjectDemoWrapper>
  );
}

export function ProjectBrightView({ navigate, previousPage }: any) {
  return (
    <ProjectDemoWrapper 
      navigate={navigate} 
      previousPage={previousPage} 
      title="Bright Smiles Dental"
      colorClass="bg-cyan-500"
      description="A warm, approachable, and calming medical template. Excellent for dentists, therapists, and specialty clinics. Features rounded, friendly aesthetics."
      highlightFeatures={["Online appointment booking integration", "Friendly, rounded typography and shapes", "Patient portal login area", "Clear service/insurance information architecture"]}
    >
      <div className="h-full w-full overflow-y-auto bg-white font-sans text-slate-700">
         <header className="py-4 px-8 border-b border-slate-100 flex justify-between items-center">
           <div className="flex flex-col">
             <span className="text-2xl font-extrabold text-cyan-600 flex items-center"><Heart className="h-6 w-6 mr-1" /> Bright Smiles</span>
             <span className="text-xs font-bold text-slate-400 tracking-wider">FAMILY DENTISTRY</span>
           </div>
           <button className="bg-cyan-500 text-white rounded-full px-6 py-2.5 font-bold hover:bg-cyan-600 transition-colors shadow-md">Book Appointment</button>
         </header>
         <div className="bg-cyan-50 py-24 px-8 text-center rounded-b-[4rem] mx-4 mb-12 border border-cyan-100 shadow-sm relative overflow-hidden">
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-950 mb-6 relative z-10">Dentistry that makes you smile.</h1>
            <p className="text-lg text-cyan-800 max-w-2xl mx-auto relative z-10">Compassionate, pain-free dental care for the whole family in a relaxing environment.</p>
         </div>
         <div className="px-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 pb-20">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-cyan-900/5">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">1</div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Preventative Care</h3>
               <p className="text-slate-600">Exams, cleanings, x-rays, and fluoride treatments to keep your natural teeth healthy for a lifetime.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-cyan-900/5">
               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">2</div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Services</h3>
               <p className="text-slate-600">Professional whitening, veneers, and clear aligners to give you the confident smile you deserve.</p>
            </div>
         </div>
      </div>
    </ProjectDemoWrapper>
  );
}

export function ProjectCornerstoneView({ navigate, previousPage }: any) {
  return (
    <ProjectDemoWrapper 
      navigate={navigate} 
      previousPage={previousPage} 
      title="Cornerstone Cafe"
      colorClass="bg-orange-500"
      description="An immersive, brand-focused template for hospitality, restaurants, or artisanal products."
      highlightFeatures={["Full bleed high-res photography", "Elegant menu layouts", "Integrated reservations or ordering links", "Location and hours highlights"]}
    >
      <div className="h-full w-full overflow-y-auto bg-[#faf8f5] font-serif">
         <header className="bg-stone-900 text-stone-100 p-6 flex justify-between items-center sticky top-0 z-50">
            <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center">
               <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <div className="font-sans text-sm tracking-widest uppercase flex space-x-8">
               <span>Menu</span><span>Visit</span><span>Order Ahead</span>
            </div>
         </header>
         <div className="h-[70vh] bg-stone-800 relative flex items-center justify-center text-center">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
             <div className="relative z-10 p-8">
                <h1 className="text-6xl md:text-8xl font-normal text-stone-50 mb-4 tracking-tighter">Cornerstone.</h1>
                <p className="text-orange-400 font-sans tracking-widest uppercase text-sm">Artisanal Coffee & Provisions</p>
             </div>
         </div>
      </div>
    </ProjectDemoWrapper>
  );
}

export function ProjectElevateView({ navigate, previousPage }: any) {
  return (
    <ProjectDemoWrapper 
      navigate={navigate} 
      previousPage={previousPage} 
      title="Elevate Fitness"
      colorClass="bg-fuchsia-500"
      description="A high-energy, dark-themed motivational template perfect for gyms, personal trainers, or sports clubs."
      highlightFeatures={["Dark mode UI aesthetics", "Energetic typography and bold colors", "Class schedule grids", "Membership pricing tables"]}
    >
       <div className="h-full w-full overflow-y-auto bg-black font-sans text-slate-300 pointer-events-auto">
          <header className="p-6 border-b border-slate-800 flex justify-between items-center">
             <div className="text-2xl font-black italic text-white tracking-tighter">ELEVATE.</div>
             <button className="bg-fuchsia-600 text-white font-bold uppercase tracking-wider text-xs px-6 py-3 hover:bg-fuchsia-500">Join Now</button>
          </header>
          <div className="py-32 px-8 flex flex-col items-center justify-center text-center relative border-b border-slate-800">
             <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-900 rounded-full mix-blend-screen blur-3xl opacity-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full mix-blend-screen blur-3xl opacity-20"></div>
             <Dumbbell className="h-16 w-16 text-fuchsia-500 mb-6 relative z-10" />
             <h1 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tight mb-6 relative z-10">Push Past<br/>Your Limits.</h1>
             <p className="text-xl max-w-lg mx-auto text-slate-400 relative z-10">24/7 access. Elite equipment. Group training classes designed to make you sweat.</p>
          </div>
       </div>
    </ProjectDemoWrapper>
  );
}

export function ProjectMainstreetView({ navigate, previousPage }: any) {
  return (
    <ProjectDemoWrapper 
      navigate={navigate} 
      previousPage={previousPage} 
      title="Main Street Plumbers"
      colorClass="bg-blue-600"
      description="A classic, direct-response home services template designed to generate phone calls and emergency service requests quickly."
      highlightFeatures={["Prominent Click-To-Call buttons", "Emergency service banner", "Trust badges (licensed, bonded, insured)", "Service area map integration"]}
    >
       <div className="h-full w-full overflow-y-auto bg-white font-sans">
          <div className="bg-red-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
             24/7 Emergency Service Available
          </div>
          <header className="border-b border-slate-200 p-6 flex justify-between items-center">
             <div className="text-2xl font-black text-blue-900 flex items-center"><Wrench className="mr-2 text-blue-600 h-6 w-6" /> Main St. Plumbers</div>
             <div className="border-2 border-blue-600 text-blue-700 px-4 py-2 font-black rounded-lg text-lg hidden md:block">(555) 123-4567</div>
          </header>
          <div className="bg-blue-50 py-16 px-8 flex items-center justify-between">
             <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-black text-blue-950 mb-6 leading-tight">Fast, Reliable Plumbing Services.</h1>
                <p className="text-lg text-slate-600 mb-8 font-medium">Licensed and insured professionals ready to tackle your toughest leaks and clogs.</p>
                <button className="bg-red-600 text-white text-xl font-bold px-8 py-4 rounded shadow-lg shadow-red-600/30">Request Service Now</button>
             </div>
             <Wrench className="h-48 w-48 text-blue-200 hidden md:block opacity-50" />
          </div>
       </div>
    </ProjectDemoWrapper>
  );
}
