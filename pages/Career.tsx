
import React from 'react';
import { CheckCircle, Leaf } from 'lucide-react';

const Career: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Join Our Team</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Join a Team That's Making a Difference</h1>
          <p className="text-sage font-serif italic text-xl">More Than a Job—A Place to Grow, Lead, and Inspire</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              At Montessori School of Castle Rock and Montessori School of Elizabeth, we believe the quality of a school begins with the people who walk through its doors each morning. That's why we're committed to building a workplace where educators feel valued, supported, and inspired to do their very best.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Families choose our schools because of the exceptional care, meaningful relationships, and high-quality education our team provides every day. Our strong reputation in the communities we serve has made us a trusted choice for families seeking an outstanding early childhood experience and a nurturing place for their children to learn and grow.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              We are equally committed to creating an exceptional place to work. From supportive leadership and professional development to opportunities for advancement, we invest in our team because we know that when educators thrive, children thrive.
            </p>
            <p className="text-slate-700 leading-relaxed font-medium">
              If you're looking for a career where your work has purpose, your ideas are valued, and your growth matters, we'd love to meet you.
            </p>
          </div>

          {/* Why Educators Choose Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-slate-800 mb-8 text-center">Why Educators Choose Us</h2>
            <div className="bg-soft-cream rounded-3xl p-8 md:p-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Trusted by families throughout our communities',
                  'Lower teacher-to-child ratios than state requirements',
                  'Supportive leadership that values your voice',
                  'Meaningful opportunities for professional growth',
                  'Beautiful Montessori-inspired learning environments',
                  'Internal promotion and leadership development whenever possible',
                  'A collaborative team that believes every child—and every educator—deserves to thrive',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-sage flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Employee Benefits */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-6">Employee Benefits</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              We believe that exceptional educators deserve exceptional support. That's why we've designed a benefits package that rewards dedication, encourages professional growth, and promotes a healthy work-life balance.
            </p>

            <h3 className="text-xl font-serif text-sage mb-6">Benefits Include</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>20+ Paid Predetermined Days Off</strong> after your first 90 days of employment, allowing you to enjoy school holidays alongside your family.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <div>
                  <strong>Comprehensive Paid Time Off (PTO) Program</strong>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 pl-5 list-disc">
                    <li>During your first 12 months of employment, PTO is accrued at a rate of 1 hour for every 30 hours worked.</li>
                    <li>After one year of employment, PTO is front-loaded quarterly, providing greater flexibility and predictability throughout the year.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>Paid Snow Days</strong> aligned with local school district and county closures.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>Paid Professional Development</strong> opportunities, including certifications and career advancement pathways after one year of employment.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>401(k) Retirement Plan</strong> to help you invest in your future.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>Lower Teacher-to-Child Ratios</strong> than state requirements, allowing you to focus on meaningful interactions and individualized learning.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>Career Advancement Opportunities</strong>, with a strong commitment to promoting from within whenever possible.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>A Collaborative, Uplifting Team Environment</strong> where teamwork, encouragement, and mutual respect are part of our everyday culture.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>Supportive Leadership</strong> that listens, values your ideas, and is genuinely invested in your professional success.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-sage flex-shrink-0 mt-1" size={18} />
                <span><strong>Beautiful Montessori-Inspired Learning Environments</strong> designed to support both children and educators.</span>
              </li>
            </ul>
          </div>

          {/* Growing Together */}
          <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-4">Growing Together</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              At Montessori School of Castle Rock and Montessori School of Elizabeth, we believe our people are our greatest strength. We are committed to investing in our team through mentorship, ongoing education, leadership development, and opportunities for internal advancement.
            </p>
            <p className="text-slate-700 leading-relaxed">
              When you join our schools, you're not simply accepting a position—you're becoming part of a community that believes in helping one another grow, professionally and personally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
