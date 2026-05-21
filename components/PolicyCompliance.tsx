import React, { useState, useEffect } from 'react';
import { Shield, X, Check, Cookie, HelpCircle, FileText, Briefcase, Compass, ListTodo, Layers, Sparkles } from 'lucide-react';

interface PolicyComplianceProps {
  activeModal: 'privacy' | 'terms' | 'cookies-settings' | 'careers' | 'roadmap' | 'releases' | null;
  onClose: () => void;
}

export const PolicyCompliance: React.FC<PolicyComplianceProps> = ({ activeModal, onClose }) => {
  // Cookie states
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always true
    analytical: true,
    marketing: true,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('fenix_cookie_settings');
    if (saved) {
      try {
        setCookieSettings(JSON.parse(saved));
      } catch (e) {
        // use default
      }
    }
  }, []);

  const saveCookieSettings = (settings: typeof cookieSettings) => {
    localStorage.setItem('fenix_cookie_settings', JSON.stringify(settings));
    setCookieSettings(settings);
    showToast('Cookie preferences updated successfully!');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-hidden animate-in fade-in duration-300">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 z-[110] animate-bounce">
          <Check size={18} className="text-emerald-500" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="bg-white w-full max-w-4xl max-h-[85vh] rounded-[2.5rem] border border-slate-100 shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            {activeModal === 'privacy' && <Shield size={32} className="text-indigo-200" />}
            {activeModal === 'terms' && <FileText size={32} className="text-indigo-200" />}
            {activeModal === 'cookies-settings' && <Cookie size={32} className="text-indigo-200" />}
            {activeModal === 'careers' && <Briefcase size={32} className="text-indigo-200" />}
            {activeModal === 'roadmap' && <Compass size={32} className="text-indigo-200" />}
            {activeModal === 'releases' && <Layers size={32} className="text-indigo-200" />}

            <h2 className="text-2xl md:text-3xl font-black tracking-tight capitalize">
              {activeModal === 'cookies-settings' ? 'Cookie Consent & Ad Preferences' : `${activeModal}`}
            </h2>
          </div>
          <p className="text-indigo-100 text-xs md:text-sm max-w-2xl font-light">
            {activeModal === 'privacy' && 'Official privacy framework, third-party ad compliance standards, GDPR, and CCPA guidelines.'}
            {activeModal === 'terms' && 'Detailed legal interface agreement, service bounds, billing, and system usage guidelines.'}
            {activeModal === 'cookies-settings' && 'Manage how cookies and automated advertising networks (like Google AdSense) process your data.'}
            {activeModal === 'careers' && 'Join the FENIX family. Explore our current open developer, designer, and content creator roles.'}
            {activeModal === 'roadmap' && 'A transparent overview of planned features, security modules, and platform expansions.'}
            {activeModal === 'releases' && 'Complete change log documenting FENIX platform enhancements, version 1.0 to 1.5.'}
          </p>
        </div>

        {/* Modal content body */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 text-slate-700 space-y-8 text-sm md:text-base leading-relaxed">
          
          {/* Privacy Policy */}
          {activeModal === 'privacy' && (
            <div className="space-y-6">
              <p className="text-slate-500 text-xs italic">Last updated: May 20, 2026</p>
              
              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">1. Introduction & Core Scope</h3>
                <p>
                  Welcome to FENIX ("we", "our", "us"). We operate as <strong>FENIX LLC</strong>. We are dedicated to respecting and protecting your privacy. This policy documents the types of information we may collect, process, and retain in compliance with world leading standards including the <strong>General Data Protection Regulation (GDPR)</strong>, the <strong>California Consumer Privacy Act (CCPA)</strong>, and global publisher protocols.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">2. Information We Collect Automatically</h3>
                <p>
                  As you browse the FENIX website or use the application, our servers automatically collect details about your device layout, browser agent, operating system, dynamic IP address, landing duration, and clicking habits. This helps us ensure compatibility and defend against malicious crawler traffic.
                </p>
              </section>

              <section className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-2">
                  <Cookie size={18} className="text-indigo-600" />
                  3. Standard Commercial Cookies & Google DoubleClick DART Cookies
                </h3>
                <p className="text-sm">
                  We engage third-party vendor services (such as <strong>Google AdSense</strong> and <strong>AdMob</strong>) to serve ads on our platform. Third-party vendors, including Google, use cookies to serve ads based on our users’ prior visits to this website or other internet sites.
                </p>
                <p className="text-sm mt-2">
                  Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting the official Google <strong><a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-indigo-600 underline">Google Ad Settings portal</a></strong>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <strong><a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-indigo-600 underline">www.aboutads.info</a></strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">4. GDPR Legal Bases for Processing</h3>
                <p>
                  For individuals situated within the European Economic Area (EEA), our processing of personal data relies on: Consent (as adjusted within our Cookie Preferences menu), contract necessity (for managing account data), and legitimate interests (analyzing user peaks to protect server integrity).
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
                  <li><strong>Right of Access:</strong> You can request copy of all digital ledger items regarding your profile.</li>
                  <li><strong>Right to Erasure (Right to be Forgotten):</strong> You can completely purge your record files directly or by sending mail to support.</li>
                  <li><strong>Right to Object:</strong> You can completely disable analytical or marketing trackers at any moment using our dynamic sidebar toggles.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">5. Children’s Privacy Standards</h3>
                <p>
                  FENIX does not knowingly seek or collect personal identifiable indices from children under the age of 13. If you believe your child has disclosed personal indicators to our portal, please contact us immediately to purge the database.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">6. Security Protection Controls</h3>
                <p>
                  We employ highly robust AES-256 secure encryption for all databases synced with user storage, and enforce mandatory HTTPS configurations across both server routing and internal data layers.
                </p>
              </section>

              <section className="space-y-3 p-4 bg-slate-50 rounded-2xl">
                <p className="font-bold text-slate-900">Compliance & Privacy Officer:</p>
                <p className="text-slate-600 text-sm">
                  FENIX Compliance Dept.<br />
                  1044 Market Street, Suite 400<br />
                  San Francisco, CA 94103<br />
                  Email: <a href="mailto:privacy@fenixapp.com" className="text-indigo-600 font-medium">privacy@fenixapp.com</a>
                </p>
              </section>
            </div>
          )}

          {/* Terms Of Service */}
          {activeModal === 'terms' && (
            <div className="space-y-6">
              <p className="text-slate-500 text-xs italic">Last updated: May 20, 2026</p>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">1. Terms Acceptance</h3>
                <p>
                  By accessing FENIX, downloading our companion applications, or logging into our dashboards, you agree to submit unconditionally to these Terms of Service. If you do not accept these criteria, you are strictly prohibited from engaging with our platform.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">2. Single User License Scope</h3>
                <p>
                  We grant you a non-exclusive, non-transferable, revocable individual license to use FENIX exclusively for personal or collaborative organizational workflow organization. You must not attempt to reverse engineer FENIX, script automated query bots, or harvest application assets without explicit consent.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">3. Subscription Billing & Refund Policy</h3>
                <p>
                  The FENIX Pro tier is billed on an automated subscription basis ($4.99 per month). Fees are charged in advance and recur automatically. You can cancel your subscription at any time using your Profile Dashboard. Cancelled accounts retain Pro features until the current period expires. Refund claims are assessed case-by-case within 14 days of purchase.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">4. System Integrity & Abuse</h3>
                <p>
                  You represent and warrant that your content library uploads or collaborative tasks do not contain harmful materials, viral payloads, copyrights belonging to other institutions, or illegal assets. Violators will face immediate account termination without any liability.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">5. Indemnification & Limitation of Liability</h3>
                <p>
                  Under no circumstances shall FENIX LLC, its officers, or employees be liable for incidental, consequential, special, or system network losses resulting from your access or inability to access our services. FENIX provides cloud synchronization as-is without any warranties of uninterrupted operation.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-2">6. Governing Jurisdiction</h3>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of the State of California, United States, without regard to conflicts of law criteria. Any disputes arising directly hereafter must settle within state or federal courts located in San Francisco, California.
                </p>
              </section>
            </div>
          )}

          {/* Cookie Settings & Ad Preferences */}
          {activeModal === 'cookies-settings' && (
            <div className="space-y-6">
              <p className="text-slate-600">
                Google served banner advertising requires active user configuration regarding web trackers. Review how we use cookies below and tailor your digital footprint.
              </p>

              <div className="space-y-4 border-t border-slate-100 pt-6">
                
                {/* Essential Cookies */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-slate-50 rounded-2xl gap-4">
                  <div>
                    <span className="flex items-center gap-2 text-indigo-700 font-extrabold text-sm uppercase tracking-wide">
                      <Shield size={16} /> Absolutely Essential Cookies
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Required for basic application states, securing system sign-ins, and retaining your choices. Cannot be deactivated.
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-slate-200 text-slate-600 font-bold text-xs uppercase rounded-lg">
                    Always On
                  </div>
                </div>

                {/* Analytical Cookies */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-slate-50 rounded-2xl gap-4">
                  <div>
                    <span className="flex items-center gap-2 text-slate-900 font-extrabold text-sm uppercase tracking-wide">
                      <HelpCircle size={16} className="text-slate-500" /> Analytical & Performance Cookies
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Allows us to study time usage and peaks to optimize system server capacity. All analytics remain fully anonymized.
                    </p>
                  </div>
                  <div>
                    <button 
                      onClick={() => setCookieSettings({ ...cookieSettings, analytical: !cookieSettings.analytical })}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide transition-colors ${cookieSettings.analytical ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}
                    >
                      {cookieSettings.analytical ? 'Active' : 'Disabled'}
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-slate-50 rounded-2xl gap-4">
                  <div>
                    <span className="flex items-center gap-2 text-slate-900 font-extrabold text-sm uppercase tracking-wide">
                      <Cookie size={16} className="text-indigo-600" /> Advertising & Marketing Tracking (Google AdSense)
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Enables dynamic, personalized promotional items customized based on cookies that study search patterns.
                    </p>
                  </div>
                  <div>
                    <button 
                      onClick={() => setCookieSettings({ ...cookieSettings, marketing: !cookieSettings.marketing })}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide transition-colors ${cookieSettings.marketing ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}
                    >
                      {cookieSettings.marketing ? 'Active' : 'Disabled'}
                    </button>
                  </div>
                </div>

              </div>

              <div className="flex justify-between items-center bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <p className="text-xs text-indigo-900 leading-normal max-w-xl">
                  By saving, you declare understanding that declining cookies might substitute personalized promotions with less relevant, contextual alternatives.
                </p>
                <button
                  onClick={() => saveCookieSettings({ ...cookieSettings })}
                  className="bg-indigo-600 text-white font-extrabold text-xs uppercase px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shrink-0"
                >
                  Save Choices
                </button>
              </div>
            </div>
          )}

          {/* Careers Board */}
          {activeModal === 'careers' && (
            <div className="space-y-6">
              <p className="text-slate-600 text-center max-w-xl mx-auto">
                We are building a remote-first, high-trust engineering and design group dedicated to elevating human cognitive focus.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                
                <div className="p-6 border border-slate-200 rounded-3xl hover:border-indigo-600 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold font-mono">Engineering</span>
                    <span className="text-xs text-slate-400 font-medium">Remote-Global</span>
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">Senior React Developer & Optimization Expert</h4>
                  <p className="text-slate-500 text-xs mt-2">Scale and micro-tune Vite engines, ensure offline state sync metrics match millisecond targets.</p>
                  <p className="text-indigo-600 font-semibold text-xs mt-4 group-hover:underline cursor-pointer">Apply Position &rarr;</p>
                </div>

                <div className="p-6 border border-slate-200 rounded-3xl hover:border-indigo-600 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold font-mono">Product</span>
                    <span className="text-xs text-slate-400 font-medium">San Francisco, CA</span>
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-amber-500 transition-colors">Creative Flow State UI/UX Lead</h4>
                  <p className="text-slate-500 text-xs mt-2">Design highly aesthetic dark frames, fluid transitions, micro-haptic controls, and responsive user states.</p>
                  <p className="text-indigo-600 font-semibold text-xs mt-4 group-hover:underline cursor-pointer">Apply Position &rarr;</p>
                </div>

                <div className="p-6 border border-slate-200 rounded-3xl hover:border-indigo-600 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold font-mono">AI Systems</span>
                    <span className="text-xs text-slate-400 font-medium">Remote-US</span>
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">Cognitive Insights Data Engineer</h4>
                  <p className="text-slate-500 text-xs mt-2">Leverage Gemini interfaces to deliver robust time analytics, peak cognitive prediction engines, and behavioral charts.</p>
                  <p className="text-indigo-600 font-semibold text-xs mt-4 group-hover:underline cursor-pointer">Apply Position &rarr;</p>
                </div>

                <div className="p-6 border border-slate-200 rounded-3xl hover:border-indigo-600 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-lg text-xs font-bold font-mono">Growth</span>
                    <span className="text-xs text-slate-400 font-medium">London, UK</span>
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-rose-600 transition-colors">Content Publisher & Community Editor</h4>
                  <p className="text-slate-500 text-xs mt-2">Curate premium focus resources, high-density scientific columns, and educational journals on Flow State.</p>
                  <p className="text-indigo-600 font-semibold text-xs mt-4 group-hover:underline cursor-pointer">Apply Position &rarr;</p>
                </div>

              </div>

              <div className="p-4 bg-slate-50 text-center text-xs text-slate-400 rounded-2xl mt-6">
                Feel you could enrich our team alternative ways? Ship detailed credentials to <a href="mailto:careers@fenixapp.com" className="hover:underline font-bold text-slate-700">careers@fenixapp.com</a>.
              </div>
            </div>
          )}

          {/* Roadmap */}
          {activeModal === 'roadmap' && (
            <div className="space-y-6">
              <p className="text-slate-600 text-center max-w-xl mx-auto">
                Discover where FENIX is headed. We design with complete transparency, delivering upgrades in tight weekly increments.
              </p>

              <div className="relative border-l border-slate-200 pl-8 ml-4 mt-8 space-y-8">
                
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow"></div>
                  <span className="text-xs font-bold text-emerald-600 tracking-wider font-mono">Q2 - 2026 (Live Release v1.5)</span>
                  <h4 className="font-bold text-lg text-slate-950 mt-1">GDPR & CCPA Cookies Dashboard</h4>
                  <p className="text-slate-500 text-sm mt-1">Full-spectrum cookies options control panel, ad personal preference manager, privacy officer channels active.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                  <span className="text-xs font-bold text-indigo-600 tracking-wider font-mono">Q3 - 2026 (In Development)</span>
                  <h4 className="font-bold text-lg text-slate-950 mt-1">Interactive Focus Beats Engine</h4>
                  <p className="text-slate-500 text-sm mt-1">Deep ambient soundscapes generated matching flow patterns on-device. Zero background latency synthesizer.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow"></div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider font-mono">Q4 - 2026 (Under Assessment)</span>
                  <h4 className="font-bold text-lg text-slate-950 mt-1">Offline Local Insights</h4>
                  <p className="text-slate-500 text-sm mt-1">Local NLP modeling of schedules completely isolated inside user hardware framework to preserve privacy standards.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow"></div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider font-mono">Q1 - 2027 (Future Vision)</span>
                  <h4 className="font-bold text-lg text-slate-950 mt-1">Collaborative Group Focus Rooms</h4>
                  <p className="text-slate-500 text-sm mt-1">Shared visual flow state canvas boards, remote session synchronized audio, real-time productivity scoreboards.</p>
                </div>

              </div>
            </div>
          )}

          {/* Releases Logs */}
          {activeModal === 'releases' && (
            <div className="space-y-6 animate-in">
              <div className="space-y-6">
                
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs font-extrabold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg">v1.5.0 (Latest Release)</span>
                    <span className="text-xs text-slate-400 font-semibold">May 21, 2026</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900">Compliance & Premium Resource Hub Upgrades</h4>
                  <ul className="list-disc pl-6 text-sm text-slate-600 mt-2 space-y-1">
                    <li>Added fully functional GDPR-compliant Cookie Preference Manager to footer navigation.</li>
                    <li>Introduced FENIX Productivity Hub containing high-density, original scientific publisher resources.</li>
                    <li>Terminated generic dead hashes to replace them with deep, high-value dynamic dialogue modals.</li>
                    <li>Formatted cookie declaration including complete policy references (DoubleClick DART, GDPR compliance, Privacy Officer contact).</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">v1.2.0</span>
                    <span className="text-xs text-slate-400">March 14, 2026</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900">Cognitive Metrics Enhancements</h4>
                  <ul className="list-disc pl-6 text-sm text-slate-500 mt-2 space-y-1">
                    <li>Fitted dynamic graph panels allowing monthly views inside the supercharged Admin Dashboard.</li>
                    <li>Integrated real-time search filtering parameters on table registers.</li>
                    <li>Upgraded mobile loading speed variables by compacting heavy image seed elements.</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">v1.0.0</span>
                    <span className="text-xs text-slate-400">December 25, 2024</span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900">Project Launch</h4>
                  <ul className="list-disc pl-6 text-sm text-slate-500 mt-2 space-y-1">
                    <li>Completed basic architecture of FENIX Landing frame.</li>
                    <li>Initiated features sections, testimonials index, FAQ arrays, and Contact interface.</li>
                    <li>Integrated Gemini API proxy for real-time interactive user sales help files.</li>
                  </ul>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="border-t border-slate-100 p-6 flex justify-end gap-3 shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-3 border border-slate-200 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Distinct cookie consent banner component at the bottom on first load
export const CookieConsentBanner: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('fenix_cookie_consent_accepted');
    if (!consent) {
      // Small timeout for nice visual entrance
      setTimeout(() => setShow(true), 2500);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('fenix_cookie_consent_accepted', 'true');
    localStorage.setItem('fenix_cookie_settings', JSON.stringify({
      essential: true,
      analytical: true,
      marketing: true,
    }));
    setShow(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('fenix_cookie_consent_accepted', 'essential');
    localStorage.setItem('fenix_cookie_settings', JSON.stringify({
      essential: true,
      analytical: false,
      marketing: false,
    }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <>
      <div className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-2xl bg-slate-950 text-white rounded-[2rem] p-6 shadow-2xl z-[90] border border-slate-800 flex flex-col md:flex-row gap-6 items-center justify-between animate-in slide-in-from-bottom-8 duration-500">
        <div className="space-y-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Cookie size={12} /> Cookie Notice & GDPR Compliance
          </span>
          <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
            We use cookies to personalize content and ads, analyze traffic, and support monetization (Google AdSense). Opting in keeps ads relevant to your interests.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:flex-col lg:flex-row shrink-0 w-full sm:w-auto">
          <button 
            onClick={() => handleAcceptAll()}
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 text-center cursor-pointer"
          >
            Accept All
          </button>
          <button 
            onClick={() => handleAcceptEssential()}
            className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-xs font-black uppercase tracking-wider rounded-xl transition-all text-center cursor-pointer"
          >
            Essential Only
          </button>
          <button 
            onClick={() => setShowPreferences(true)}
            className="px-5 py-3 hover:bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center cursor-pointer"
          >
            Settings
          </button>
        </div>
      </div>

      {showPreferences && (
        <PolicyCompliance 
          activeModal="cookies-settings" 
          onClose={() => {
            setShowPreferences(false);
            setShow(false);
            localStorage.setItem('fenix_cookie_consent_accepted', 'custom');
          }} 
        />
      )}
    </>
  );
};
