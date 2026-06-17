import React, { useState } from 'react';
import { Send, MapPin, Phone, Clock, Monitor, Briefcase, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactView({ navigate }: { navigate: (page: string) => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => console.error('Form submission error:', error));
  };

  if (isSubmitted) {
    return (
      <div className="fade-in py-24 bg-slate-50 min-h-[60vh] flex items-center justify-center">
         <div className="max-w-md mx-auto text-center bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
            <p className="text-slate-600 mb-8">
              Thanks for reaching out. We've received your details and will be in touch within 24 hours to discuss your project.
            </p>
            <button onClick={() => navigate('home')} className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors">
              Return Home
            </button>
         </div>
      </div>
    );
  }

  return (
    <div className="fade-in py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's Build Something Great</h1>
          <p className="text-xl text-slate-600">
            Ready to upgrade your web presence? Secure your project with a payment below, or reach out to us with any questions.
          </p>
        </div>

        {/* Secure Checkout Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 md:p-12 relative overflow-hidden">
            {/* Accent gradients */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/30">
                  <ShieldCheck className="h-4 w-4 mr-2" /> Secure Checkout
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">Start Your Project</h2>
                <p className="text-slate-400 leading-relaxed">
                  Select your payment option below. Start with our low-risk test drive, or complete your full payment to take ownership of your new site.
                </p>
              </div>

              {/* Payment Links Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Option 1 */}
                <a href="https://buy.stripe.com/00wdR99L29Y7cq40yz8AE01" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-indigo-500/20">
                  <div className="flex-grow">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Monitor className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-1 group-hover:text-indigo-400 transition-colors">Preview Website</h3>
                    <p className="text-sm text-slate-400 mb-6">Custom design built in 24hrs</p>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-4">$20</div>
                    <div className="w-full py-3 px-4 bg-indigo-600 group-hover:bg-indigo-500 text-white font-bold rounded-xl text-center transition-colors flex items-center justify-center">
                      Pay Now <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>

                {/* Option 2 */}
                <a href="https://buy.stripe.com/9B67sL4qIeen75K6WX8AE02" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-indigo-500/20">
                  <div className="flex-grow">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-1 group-hover:text-indigo-400 transition-colors">Final Ownership</h3>
                    <p className="text-sm text-slate-400 mb-6">Complete the $500 package</p>
                  </div>
                  <div>
                    <div className="flex items-end mb-4">
                      <span className="text-sm font-bold text-slate-500 mr-2 mb-1">Starting at</span>
                      <span className="text-3xl font-black text-white">$480</span>
                    </div>
                    <div className="w-full py-3 px-4 bg-indigo-600 group-hover:bg-indigo-500 text-white font-bold rounded-xl text-center transition-colors flex items-center justify-center">
                      Pay Now <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>

                {/* Option 3 */}
                <a href="https://buy.stripe.com/00wdR97CU1rBbm0bdd8AE03" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-indigo-500/20">
                  <div className="flex-grow">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-1 group-hover:text-indigo-400 transition-colors">Pay in Full</h3>
                    <p className="text-sm text-slate-400 mb-6">Secure your project upfront</p>
                  </div>
                  <div>
                    <div className="flex items-end mb-4">
                      <span className="text-sm font-bold text-slate-500 mr-2 mb-1">Starting at</span>
                      <span className="text-3xl font-black text-white">$500</span>
                    </div>
                    <div className="w-full py-3 px-4 bg-indigo-600 group-hover:bg-indigo-500 text-white font-bold rounded-xl text-center transition-colors flex items-center justify-center">
                      Pay Now <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>

              <p className="text-xs text-slate-400 mt-8 text-center">
                Payments are processed securely via Stripe. By proceeding with payment, you agree to our <button onClick={(e) => { e.preventDefault(); navigate('terms-of-use'); }} className="text-indigo-400 hover:text-indigo-300 underline">Terms & Conditions</button>.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have Questions First?</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 mr-4 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600 text-sm">(864) 256-0997</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 mr-4 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Office Location</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Greenville, SC</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 mr-4 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Mon - Fri: 9am - 5pm<br/>Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 relative">
            {/* Ambient background glow for definition */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur-lg opacity-20"></div>
            
            <form name="contact" method="POST" onSubmit={handleSubmit} className="relative bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-2xl h-full flex flex-col justify-center overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                <p className="text-slate-400 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="first-name" className="block mb-2 text-sm font-semibold text-slate-300">First Name *</label>
                  <input type="text" id="first-name" name="first-name" required className="w-full bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 outline-none block p-4 transition-all placeholder-slate-500 shadow-inner" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block mb-2 text-sm font-semibold text-slate-300">Last Name *</label>
                  <input type="text" id="last-name" name="last-name" required className="w-full bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 outline-none block p-4 transition-all placeholder-slate-500 shadow-inner" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-300">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 outline-none block p-4 transition-all placeholder-slate-500 shadow-inner" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-slate-300">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 outline-none block p-4 transition-all placeholder-slate-500 shadow-inner" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block mb-2 text-sm font-semibold text-slate-300">How can we help you? *</label>
                <select id="service" name="service" required defaultValue="" className="w-full bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 outline-none block p-4 transition-all cursor-pointer shadow-inner">
                  <option value="" disabled className="text-slate-500 bg-slate-900">Select a reason for contact...</option>
                  <option value="basic-plan" className="text-slate-900 bg-white">Basically Awesome Site</option>
                  <option value="professional-plan" className="text-slate-900 bg-white">Professional Plan</option>
                  <option value="advanced-plan" className="text-slate-900 bg-white">Advanced Plan</option>
                  <option value="revision" className="text-slate-900 bg-white">Site Revision or Structural Update</option>
                  <option value="general" className="text-slate-900 bg-white">General Inquiry / Question</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-slate-300">Project Details or Message *</label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 outline-none block p-4 transition-all resize-none placeholder-slate-500 shadow-inner" placeholder="Tell us a little about your business and what you're looking to achieve..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 border border-indigo-400/20 flex items-center justify-center group mt-auto">
                Send Message <Send className="h-5 w-5 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
