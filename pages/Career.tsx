
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
                We are building intentional foundations for little hearts and confident futures for big dreams—and we're looking for someone who feels called to be part of that work.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                This is more than a classroom position. It is an opportunity to guide and shape children during the most formative years of their development.
              </p>
            </div>

            {/* What You'll Do */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-sage" size={24} />
                <h3 className="text-2xl font-serif text-slate-800">What You'll Do</h3>
              </div>
              <p className="text-slate-700 mb-4">As an Assistant Lead Teacher, you will:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Support children ages 6 weeks through 5 years within a calm, Montessori-inspired environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Help prepare intentional, thoughtfully designed classroom spaces guided by children's interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Lead children through their day with patience, warmth, and consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Confidently support classroom leadership and manage within ratio when the Lead Teacher is absent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Foster independence, social-emotional growth, language development, and fine and gross motor skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Maintain a clean, organized, and beautiful environment, including diapering, snack preparation, and daily sanitizing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Build respectful, professional partnerships with families</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Collaborate closely with your team to create a supportive, aligned classroom culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Continue your professional growth through ongoing development and licensing requirements</span>
                </li>
              </ul>
              <p className="text-slate-700 italic mt-6">
                You will be supported by experienced educators who are deeply invested in your growth and success.
              </p>
            </div>

            {/* The Ideal Candidate */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-sage" size={24} />
                <h3 className="text-2xl font-serif text-slate-800">The Ideal Candidate</h3>
              </div>
              <p className="text-slate-700 mb-4">You may be a great fit if you:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Are patient, dependable, and genuinely nurturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>View early childhood education as meaningful, purposeful work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Take initiative and demonstrate curiosity about child development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Adapt with grace and flexibility as each day unfolds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Thrive in a collaborative, team-centered environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Communicate professionally and thoughtfully with both families and colleagues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Are qualified—or willing to become qualified—through Colorado Shines Level 2</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Have experience in a preschool or elementary setting (preferred)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Are committed to continual growth and refining your craft</span>
                </li>
              </ul>
              <p className="text-slate-700 italic mt-6">
                We value educators who are grounded in their presence and committed to growth.
              </p>
            </div>

            {/* Why Join Us */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-sage" size={24} />
                <h3 className="text-2xl font-serif text-slate-800">Why Join Us?</h3>
              </div>
              <p className="text-slate-700 mb-4">
                We are a small, woman-owned school rooted in the belief that teachers deserve to feel respected, supported, and valued in their work.
              </p>
              <p className="text-slate-700 mb-4">
                We prioritize mental well-being, professional growth, and a sustainable work-life balance—because when our team feels supported, our children thrive.
              </p>
              <p className="text-slate-700 font-semibold mb-4">What we offer:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>20+ paid, predetermined PTO days after 90 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Comprehensive PTO Structure: During your first 12 months of employment, PTO is accrued at a rate of 1 hour for every 30 hours worked. After one year of employment, 10 PTO days are granted annually at the start of the year (frontloaded rather than accrued)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Paid snow days aligned with local district and county closures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Paid professional development pathways and certifications after one year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>401k Plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>A collaborative, uplifting team environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-sage flex-shrink-0 mt-1" size={20} />
                  <span>Leadership that listens, values your voice, and supports your growth</span>
                </li>
              </ul>
              <p className="text-slate-700 font-semibold mt-6">
                We are committed to investing in our team and prioritize internal growth and promotion whenever possible.
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
                  <p className="text-2xl font-serif text-slate-800">8:00 AM – 5:30 PM</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20">
              <p className="text-slate-800 text-lg leading-relaxed mb-6">
                We are committed to investing in our team and prioritize internal growth and promotion whenever possible.<br />
                <span className="font-semibold">We welcome educators who are grounded in their presence and committed to growth.</span>
              </p>
              <p className="text-slate-700 text-sm mb-6 italic">
                If you are interested in opportunities beyond this role, we welcome you to inquire about other available positions within our school community.
              </p>
              <a
                href="mailto:astrid@montessorielizabeth.com?subject=Assistant Lead Teacher Application"
                className="inline-block bg-sage text-white px-10 py-5 rounded-full font-medium shadow-xl shadow-sage/30 hover:scale-105 transition-transform"
              >
                Apply Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
