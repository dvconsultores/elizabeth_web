
import React from 'react';
import { Check, Calendar, Clock } from 'lucide-react';

const Tuition: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Investment</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Tuition & Enrollment</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Investing in your child's early education is one of the most meaningful decisions you will make.
          </p>
        </div>

        {/* Tuition Rates */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-8 text-center">2026-2027 School Year Tuition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Toddler Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-serif text-sage mb-2">Toddler Program</h3>
              <p className="text-slate-500 mb-6">Ages 1-3</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700">Full Day (5 days/week)</span>
                  <span className="font-bold text-slate-800">$1,295/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700">Part Time (3 days/week)</span>
                  <span className="font-bold text-slate-800">$895/month</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Clock size={18} className="text-sage flex-shrink-0 mt-0.5" />
                  <span>Hours: 8:00 AM - 4:15 PM</span>
                </div>
              </div>
            </div>

            {/* Primary Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-serif text-sage mb-2">Primary Program</h3>
              <p className="text-slate-500 mb-6">Ages 2½-5</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700">Full Day (5 days/week)</span>
                  <span className="font-bold text-slate-800">$1,195/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-700">Part Time (3 days/week)</span>
                  <span className="font-bold text-slate-800">$795/month</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Clock size={18} className="text-sage flex-shrink-0 mt-0.5" />
                  <span>Hours: 8:00 AM - 4:15 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-16 bg-soft-cream rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-serif text-slate-800 mb-6 text-center">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Check className="text-sage flex-shrink-0 mt-1" size={20} />
              <span className="text-slate-700">Morning and afternoon snacks</span>
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
              <p>A non-refundable registration fee of $250 is required to secure your child's enrollment.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2">Payment Schedule</h4>
              <p>Tuition is paid monthly via automatic bank draft on the 1st of each month. Payment plans are available upon request.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2">Sibling Discount</h4>
              <p>Families with multiple children enrolled receive a 10% discount on the second child's tuition.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2">School Calendar</h4>
              <p className="flex items-center gap-2">
                <Calendar size={18} className="text-sage" />
                Download our full academic calendar to view holidays, breaks, and important dates.
              </p>
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
