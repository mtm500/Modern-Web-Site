import React from 'react';

export function PrivacyPolicyView({ navigate }: any) {
  return (
    <div className="fade-in py-16 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <p>We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we look after your personal data when you visit our website.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <p className="mt-12 text-sm text-slate-500">
             This is a placeholder privacy policy for demonstration purposes. It should be replaced with a legally verified document specific to your jurisdiction and business practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export function TermsOfUseView({ navigate }: any) {
  return (
    <div className="fade-in py-16 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <p>Please read these terms and conditions carefully before using Our Service.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part of these Terms, then You may not access the Service.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Intellectual Property</h2>
          <p>The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Custom Website Ownership</h2>
          <p>Upon full payment of the designated invoice for the "Basically Awesome Site" or other packages, the Client assumes full ownership of the HTML, CSS, JavaScript, and visual assets (excluding licensed stock photography or standard libraries) created specifically for their project. The Client is free to host, modify, or transfer these assets without restriction or ongoing licensing fees from our Company.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Hosting & Third-Party Services</h2>
          <p>We configure hosting via third-party providers (e.g., Netlify, Vercel). We are not responsible for the uptime, data loss, or policy changes of these third platforms. Any premium fees incurred by exceeding the free tiers of these platforms are the sole responsibility of the Client.</p>

          <p className="mt-12 text-sm text-slate-500">
             This is a placeholder terms of service for demonstration purposes. It should be replaced with a legally verified document specific to your jurisdiction and business practices.
          </p>
        </div>
      </div>
    </div>
  );
}
