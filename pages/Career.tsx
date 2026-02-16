
import React from 'react';
import { Sparkles, Heart, Users, TrendingUp, CheckCircle } from 'lucide-react';

const Career: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Join Our Team</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Career Opportunities</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            At Montessori School of Elizabeth, we believe early childhood is sacred.
          </p>
        </div>

        {/* Job Posting */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-sage" size={32} />
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800">Assistant Lead Teacher</h2>
            </div>
            
            <div className="mb-8">
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                We are building intentional foundations for little hearts and confident futures for big dreams — and we're looking for someone who feels called to be part of that mission.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                This is more than a classroom position. It's an opportunity to shape developing minds during the most important years of life.
              </p>
            </div>

            {/* What You'll Do */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-sage" size={24} />
                <h3 className="text-2xl font-serif text-slate-800">What You'll Do</h3>
              </div>
              <p className="text-slate-700 mb-4">As our Assistant Lead Teacher, you will:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Support children ages 1–5 in a calm, Montessori-inspired environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Help prepare thoughtful classroom spaces based on child-led interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Guide children through their day with patience, warmth, and consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Confidently manage the classroom within ratio when the Lead Teacher is absent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Foster independence, social-emotional development, language growth, and fine/gross motor skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Maintain a clean, organized, and beautiful environment (including diapering, snack prep, and daily sanitizing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Build respectful, professional relationships with families</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Collaborate closely with your teaching team to create a supportive, unified classroom culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Continue professional growth through annual development and licensing requirements</span>
                </li>
              </ul>
              <p className="text-slate-700 italic mt-6">
                You will be mentored and supported by experienced educators who are invested in your growth.
              </p>
            </div>

            {/* The Ideal Candidate */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-sage" size={24} />
                <h3 className="text-2xl font-serif text-slate-800">The Ideal Candidate</h3>
              </div>
              <p className="text-slate-700 mb-4">You may be the right fit if you:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Are patient, dependable, and deeply nurturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>See early childhood as meaningful, important work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Take initiative and are curious about child development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Adapt with grace when days shift (because preschool life does!)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Thrive in a team-centered, positive work culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Communicate professionally with families and staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Are qualified — or willing to become qualified — through Colorado Shines Level 2</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Have experience in a preschool or elementary setting (preferred)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Are eager to continue refining your craft through professional development</span>
                </li>
              </ul>
              <p className="text-slate-700 italic mt-6">
                We value educators who are both grounded and growth-oriented.
              </p>
            </div>

            {/* Why Join Us */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-sage" size={24} />
                <h3 className="text-2xl font-serif text-slate-800">Why Join Us?</h3>
              </div>
              <p className="text-slate-700 mb-4">
                We are a small, woman-owned school that believes teachers deserve respect, balance, and support.
              </p>
              <p className="text-slate-700 mb-4">
                We care deeply about mental well-being, professional growth, and sustainable work-life balance.
              </p>
              <p className="text-slate-700 font-semibold mb-4">We proudly offer:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>20+ paid predetermined PTO days after 90 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Sick pay accrued at 1 hour per 30 hours worked</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>10 additional PTO days after one year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Paid snow days aligned with the District Public Schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Paid developmental pathways and professional development certifications after 1 year of employment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Paid CDA, EQIT, Pyramid Plus, and additional professional development after 6 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>A collaborative, uplifting team culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Leadership that values your voice</span>
                </li>
              </ul>
              <p className="text-slate-700 font-semibold mt-6">
                We invest in our staff and promote from within.
              </p>
            </div>

            {/* Compensation */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-sage" size={24} />
                <h3 className="text-2xl font-serif text-slate-800">Compensation & Schedule</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-soft-cream p-6 rounded-2xl">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Pay Range</p>
                  <p className="text-2xl font-serif text-slate-800">$17.75–$20.00/hour</p>
                  <p className="text-sm text-slate-500 mt-1">Based on experience & qualifications</p>
                </div>
                <div className="bg-soft-cream p-6 rounded-2xl">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Schedule</p>
                  <p className="text-2xl font-serif text-slate-800">Monday–Friday</p>
                </div>
                <div className="bg-soft-cream p-6 rounded-2xl">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Shift</p>
                  <p className="text-2xl font-serif text-slate-800">8:00 AM – 4:15 PM</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20">
              <p className="text-slate-800 text-lg leading-relaxed mb-6">
                If you feel called to guide young children with intention, warmth, and purpose —<br />
                <span className="font-semibold">we would love to meet you.</span>
              </p>
              <a
                href="mailto:astrid@montessorielizabeth.com?subject=Assistant Lead Teacher Application"
                className="inline-block bg-sage text-white px-10 py-5 rounded-full font-medium shadow-xl shadow-sage/30 hover:scale-105 transition-transform"
              >
                ✨ Apply Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
