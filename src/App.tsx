import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Menu, X, Mail, Smartphone } from 'lucide-react';
import HomeView from './views/HomeView';
import ProcessView from './views/ProcessView';
import ProjectsView from './views/ProjectsView';
import PricingView from './views/PricingView';
import ContactView from './views/ContactView';
import { CustomWebsiteView, EasyUpdatesView, SecureSetupView, ProEmailView, LowCostsView } from './views/process/SubProcessViews';
import { PrivacyPolicyView, TermsOfUseView } from './views/LegalViews';
import { ProjectApexView, ProjectLuminaView, ProjectBrightView, ProjectCornerstoneView, ProjectElevateView, ProjectMainstreetView } from './views/projects/ProjectDetailViews';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProcessMenuOpen, setIsProcessMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navigate = (page: string) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
  };

  const processSubPages = [
    { id: 'custom-website', label: 'Custom Website' },
    { id: 'easy-updates', label: 'Easy Site Updates' },
    { id: 'secure-setup', label: 'Secure Setup' },
    { id: 'pro-email', label: 'Professional Email' },
    { id: 'low-costs', label: 'Ultra Low Ongoing Costs' }
  ];

  const isProcessActive = ['process', ...processSubPages.map(p => p.id)].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo area */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <div className="bg-indigo-600 p-2 rounded-lg mr-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-slate-900 block leading-tight">Modern</span>
                <span className="text-base text-indigo-600 font-semibold tracking-wide uppercase block leading-tight">Web</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('home')} 
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${currentPage === 'home' ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                Home
              </button>
              
              {/* Process Dropdown (Desktop) */}
              <div className="relative group cursor-pointer py-6">
                <div 
                  className={`flex items-center text-sm font-medium transition-colors hover:text-indigo-600 ${isProcessActive ? 'text-indigo-600' : 'text-slate-600'}`}
                  onClick={() => navigate('process')}
                >
                  Our Process <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </div>
                
                {/* Desktop Dropdown Panel */}
                <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pt-4">
                  <div className="bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden py-2">
                    <button onClick={() => navigate('process')} className="block w-full text-left px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-indigo-600 border-b border-slate-100">
                      Process Overview
                    </button>
                    {processSubPages.map((page) => (
                      <button 
                        key={page.id}
                        onClick={() => navigate(page.id)} 
                        className={`block w-full text-left px-5 py-2.5 text-sm transition-colors hover:bg-slate-50 hover:text-indigo-600 ${currentPage === page.id ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600'}`}
                      >
                        {page.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('projects')} 
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${currentPage === 'projects' ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('pricing')} 
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${currentPage === 'pricing' ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                Pricing
              </button>
              <button 
                onClick={() => navigate('contact')} 
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-indigo-600 p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => navigate('home')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Home</button>
              
              <div className="w-full">
                <button onClick={() => setIsProcessMenuOpen(!isProcessMenuOpen)} className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">
                  <span>Our Process</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isProcessMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProcessMenuOpen && (
                  <div className="bg-slate-50 rounded-lg mx-2 mb-2 p-2 border border-slate-100 space-y-1">
                    <button onClick={() => navigate('process')} className="block w-full text-left px-4 py-2 rounded-md text-sm font-bold text-slate-800 hover:text-indigo-600 hover:bg-white">Process Overview</button>
                    {processSubPages.map((page) => (
                      <button 
                        key={page.id}
                        onClick={() => navigate(page.id)} 
                        className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium hover:text-indigo-600 hover:bg-white ${currentPage === page.id ? 'text-indigo-600 bg-white shadow-sm' : 'text-slate-600'}`}
                      >
                        {page.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => navigate('projects')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Projects</button>
              <button onClick={() => navigate('pricing')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Pricing</button>
              <button onClick={() => navigate('contact')} className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 mt-2">Get Started / Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomeView navigate={navigate} />}
        {currentPage === 'process' && <ProcessView navigate={navigate} />}
        {currentPage === 'projects' && <ProjectsView navigate={navigate} />}
        {currentPage === 'pricing' && <PricingView navigate={navigate} />}
        {currentPage === 'contact' && <ContactView navigate={navigate} />}
        
        {/* Sub-pages */}
        {currentPage === 'custom-website' && <CustomWebsiteView navigate={navigate} />}
        {currentPage === 'easy-updates' && <EasyUpdatesView navigate={navigate} />}
        {currentPage === 'secure-setup' && <SecureSetupView navigate={navigate} />}
        {currentPage === 'pro-email' && <ProEmailView navigate={navigate} />}
        {currentPage === 'low-costs' && <LowCostsView navigate={navigate} />}

        {/* Legal Pages */}
        {currentPage === 'privacy-policy' && <PrivacyPolicyView navigate={navigate} />}
        {currentPage === 'terms-of-use' && <TermsOfUseView navigate={navigate} />}

        {/* Project Demo Pages */}
        {currentPage === 'project-apex' && <ProjectApexView navigate={navigate} previousPage={previousPage} />}
        {currentPage === 'project-lumina' && <ProjectLuminaView navigate={navigate} previousPage={previousPage} />}
        {currentPage === 'project-bright' && <ProjectBrightView navigate={navigate} previousPage={previousPage} />}
        {currentPage === 'project-cornerstone' && <ProjectCornerstoneView navigate={navigate} previousPage={previousPage} />}
        {currentPage === 'project-elevate' && <ProjectElevateView navigate={navigate} previousPage={previousPage} />}
        {currentPage === 'project-mainstreet' && <ProjectMainstreetView navigate={navigate} previousPage={previousPage} />}
      </main>

      {/* Footer */}
      {!currentPage.startsWith('project-') && (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate('home')}>
                  <div className="bg-indigo-600 p-2 rounded-lg mr-3">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-xl tracking-tight text-white block leading-tight">Modern</span>
                    <span className="text-base text-white font-semibold tracking-wide uppercase block leading-tight">Web</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  Providing simple, effective, and affordable Fortune 500 quality websites for small business owners.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => navigate('home')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Home</button></li>
                  <li><button onClick={() => navigate('process')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Our Process</button></li>
                  <li><button onClick={() => navigate('projects')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Projects</button></li>
                  <li><button onClick={() => navigate('pricing')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Pricing</button></li>
                  <li><button onClick={() => navigate('contact')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Contact Us</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => navigate('custom-website')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Custom Website</button></li>
                  <li><button onClick={() => navigate('easy-updates')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Easy Site Updates</button></li>
                  <li><button onClick={() => navigate('secure-setup')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Secure Setup</button></li>
                  <li><button onClick={() => navigate('pro-email')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Professional Email & Communications</button></li>
                  <li><button onClick={() => navigate('low-costs')} className="hover:text-indigo-400 transition-colors text-left block w-full text-slate-400">Ultra Low Ongoing Costs</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" /> 
                    <button onClick={() => navigate('contact')} className="hover:text-indigo-400 transition-colors text-left">Contact Form</button>
                  </li>
                  <li className="flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" /> 
                    <a href="tel:+18642560997" className="hover:text-indigo-400 transition-colors">(864) 256-0997</a>
                  </li>
                  <li className="flex items-center"><Globe className="h-4 w-4 mr-2" /> Greenville, SC</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; {new Date().getFullYear()} Modern Web. All rights reserved.</p>
              <div className="flex space-x-6">
                <button onClick={() => navigate('privacy-policy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button>
                <button onClick={() => navigate('terms-of-use')} className="hover:text-indigo-400 transition-colors">Terms & Conditions</button>
              </div>
              <p>100% Owned By You.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
