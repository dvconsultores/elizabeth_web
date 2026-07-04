
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Calendar, Clock, Download, ExternalLink } from 'lucide-react';

const Tuition: React.FC = () => {
  const location = useLocation();
  const [activeProgramTab, setActiveProgramTab] = useState<'CCCAP' | 'UPK'>('CCCAP');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash.toLowerCase() === 'upk') setActiveProgramTab('UPK');
    else if (hash.toLowerCase() === 'cccapp') setActiveProgramTab('CCCAP');
    // Scroll to programs section
    if (hash === 'cccapp' || hash === 'upk') {
      setTimeout(() => {
        document.getElementById('program-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Investment</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Tuition & School Calendar</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Investing in your child's early education is one of the most meaningful decisions you will make.
          </p>
        </div>

        {/* Tuition Rates */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-8 text-center">2026-2027 School Year Tuition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Infant Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-serif text-sage mb-2">Infant Program</h3>
              <p className="text-slate-500 mb-6">Ages 6 Months - 18 Months</p>
              
              <div className="mt-6">
                <div className="flex items-start gap-3 text-sm text-slate-600 mb-6">
                  <Clock size={18} className="text-sage flex-shrink-0 mt-0.5" />
                  <span>Hours: 8:15 AM - 5:15 PM</span>
                </div>
                
                <a
                  href="/2026_MSE_Tuition_Updated_July_2026.png"
                  download
                  className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-sage/30 hover:scale-105 active:scale-100 transition-transform w-full justify-center"
                >
                  <Download size={18} />
                  Download Rates
                </a>
              </div>
            </div>

            {/* Toddler Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-serif text-sage mb-2">Toddler Program</h3>
              <p className="text-slate-500 mb-6">Ages 1-3</p>
              
              <div className="mt-6">
                <div className="flex items-start gap-3 text-sm text-slate-600 mb-6">
                  <Clock size={18} className="text-sage flex-shrink-0 mt-0.5" />
                  <span>Hours: 8:15 AM - 5:15 PM</span>
                </div>
                
                <a
                  href="/2026_MSE_Tuition_Updated_July_2026.png"
                  download
                  className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-sage/30 hover:scale-105 active:scale-100 transition-transform w-full justify-center"
                >
                  <Download size={18} />
                  Download Rates
                </a>
              </div>
            </div>

            {/* Primary Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-serif text-sage mb-2">Primary Program</h3>
              <p className="text-slate-500 mb-6">Ages 2½-5</p>
              
              <div className="mt-6">
                <div className="flex items-start gap-3 text-sm text-slate-600 mb-6">
                  <Clock size={18} className="text-sage flex-shrink-0 mt-0.5" />
                  <span>Hours: 8:15 AM - 5:15 PM</span>
                </div>
                
                <a
                  href="/2026_MSE_Tuition_Updated_July_2026.png"
                  download
                  className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-sage/30 hover:scale-105 active:scale-100 transition-transform w-full justify-center"
                >
                  <Download size={18} />
                  Download Rates
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* School Calendar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 text-center">
            <h3 className="text-2xl font-serif text-slate-800 mb-4">School Calendar</h3>
            <p className="text-slate-600 mb-6">Download our full academic calendar to view holidays, breaks, and important dates.</p>
            <a
              href="/MSE-2026-2027-School-Year-Calendar.pdf"
              download
              className="inline-flex items-center gap-2 bg-sage text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-sage/30 hover:scale-105 active:scale-100 transition-transform"
            >
              <Download size={18} />
              Download Calendar
            </a>
          </div>
        </div>

        {/* Programs */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-serif text-slate-800 mb-6 text-center">Programs</h3>
          
          {/* Tab Buttons */}
          <div id="program-tabs" className="flex justify-center gap-4 mb-8 scroll-mt-32">
            <button
              onClick={() => setActiveProgramTab('CCCAP')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeProgramTab === 'CCCAP'
                  ? 'bg-sage text-white shadow-lg shadow-sage/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-sage'
              }`}
            >
              CCCAP
            </button>
            <button
              onClick={() => setActiveProgramTab('UPK')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeProgramTab === 'UPK'
                  ? 'bg-sage text-white shadow-lg shadow-sage/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-sage'
              }`}
            >
              UPK
            </button>
          </div>

          {/* CCCAP Content */}
          {activeProgramTab === 'CCCAP' && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
              <h4 className="text-2xl font-serif text-sage mb-4">CCCAP</h4>
              <p className="text-slate-700 mb-4 leading-relaxed">
                The Colorado Child Care Assistance Program (CCCAP) helps eligible families afford
                quality childcare while parents work, attend school, participate in
                training programs, or search for employment. Through CCCAP, families
                may receive financial assistance to help cover a portion of their
                childcare tuition costs.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                As a participating CCCAP provider, we proudly partner with families to
                ensure children have access to a safe, nurturing, and enriching early
                learning environment. Eligibility and benefits are determined through
                your local county human services department.
              </p>
              <a
                href="https://www.coloradoofficeofearlychildhood.com/OEC_Families?lang=en&p=Family&s=Colorado-Child-Care-Assistance-Program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage font-medium hover:underline"
              >
                <ExternalLink size={18} />
                Learn more about CCCAP and eligibility requirements
              </a>
            </div>
          )}

          {/* UPK Content */}
          {activeProgramTab === 'UPK' && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
              <h4 className="text-2xl font-serif text-sage mb-4">UPK</h4>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Colorado Universal Preschool (UPK) provides tuition support for preschool-aged
                children in the year before kindergarten. Eligible children may
                receive 15 hours per week of state-funded preschool, with some
                families qualifying for additional support based on specific factors.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                As a participating UPK Colorado provider, we are committed to delivering
                high-quality early childhood education that supports kindergarten
                readiness through engaging, developmentally appropriate learning
                experiences.
              </p>
              <a
                href="https://upk.colorado.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage font-medium hover:underline"
              >
                <ExternalLink size={18} />
                Learn more about Colorado Universal Preschool and enrollment
              </a>
            </div>
          )}
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-16 bg-soft-cream rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-serif text-slate-800 mb-6 text-center">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Check className="text-sage flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700">Daily updates</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-sage flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700">All classroom materials</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-sage flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700">Outdoor nature-based learning</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-sage flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700">Parent-teacher conferences</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-sage flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700">Progress assessments</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-sage flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700">Family events and community gatherings</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif text-slate-800 mb-6">Additional Information</h3>
          <div className="space-y-4 text-slate-700">
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2">Registration Fee</h4>
              <p>$250 due annually on August 1st and prorated by month of enrollment after August</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2">Payment Schedule</h4>
              <p>Tuition is paid monthly via ACH or Credit Card on the 1st of each month. Tuition guarantees your child's spot, so it is not based on attendance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2 text-2xl">Discounts</h4>
              <p>Families with multiple children enrolled receive a 5% discount on the lesser tuition for the second child. We honor 10% United States Active Military/Veteran discount. Only one discount applicable per family.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20">
            <h3 className="text-2xl font-serif text-slate-800 mb-4">Ready to Begin?</h3>
            <p className="text-slate-700 mb-6">
              We would be honored to welcome your family into our community.
            </p>
            <a
              href="mailto:admissions@montessorielizabeth.com?subject=Enrollment Inquiry"
              className="inline-block bg-sage text-white px-10 py-4 rounded-full font-medium shadow-xl shadow-sage/30 hover:scale-105 transition-transform"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuition;
