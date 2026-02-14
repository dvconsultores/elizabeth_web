
import React from 'react';
import { Check } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Philosophy</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-8 leading-tight">
              The Montessori-Inspired Experience
            </h1>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              At Montessori School of Elizabeth, Montessori-Inspired education is both philosophy and practice — thoughtfully implemented within a culture of excellence, structure, and intentional partnership.
            </p>
            <p className="text-slate-800 font-serif text-xl mb-6">
              We are not simply a preschool.<br />
              We are a foundational learning community.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Rooted in the principles of Dr. Maria Montessori, our approach recognizes each child as capable, curious, and deserving of an environment designed to cultivate independence, character, and intellectual depth from the earliest years.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-soft-cream shadow-2xl">
              <img src="/1425868325.jpeg" alt="Focus and concentration in the Montessori environment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* A Distinctive Approach */}
        <div className="mb-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-slate-800">A Distinctive Approach to Early Education</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Unlike traditional childcare models centered primarily on supervision and routine, our classrooms are environments of purposeful engagement.
              </p>
              <p className="text-slate-800 font-serif text-xl">
                Children are guided — not managed.
              </p>
              <p>
                Within carefully prepared spaces, students engage with hands-on materials that promote concentration, mastery, and intrinsic motivation. Educators serve as skilled observers and intentional guides, meeting each child at their developmental level and thoughtfully advancing their growth.
              </p>
              <p className="text-slate-800 font-medium">
                Here, children learn how to think, not simply what to learn.
              </p>
            </div>
            
            <div className="mt-10 bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-serif mb-6 text-slate-800">They develop:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <Check size={20} className="text-sage mt-1 flex-shrink-0" />
                  <span>Academic readiness grounded in mastery</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check size={20} className="text-sage mt-1 flex-shrink-0" />
                  <span>Emotional intelligence and self-regulation</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check size={20} className="text-sage mt-1 flex-shrink-0" />
                  <span>Leadership and personal responsibility</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check size={20} className="text-sage mt-1 flex-shrink-0" />
                  <span>Confidence built through independence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Freedom with Intention */}
        <div className="mb-32 bg-soft-cream rounded-[3rem] p-12 md:p-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-slate-800 text-center">Freedom with Intention. Structure with Purpose.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p className="text-center text-slate-800 font-serif text-xl">
                True independence flourishes within thoughtful boundaries.
              </p>
              <p>
                Our Montessori-Inspired model balances choice with clarity. Children experience meaningful autonomy within highly organized, safety-focused systems that provide consistency, predictability, and peace of mind.
              </p>
              <p>
                Outdoor learning is seamlessly integrated into the academic day. It is not separate from instruction — it is an extension of it. Through nature, children strengthen resilience, observation, and a deeper understanding of their environment.
              </p>
              <p className="text-center font-medium text-slate-800 text-xl">
                Every element of the day is intentional.
              </p>
            </div>
          </div>
        </div>

        {/* Whole-Child Development */}
        <div className="mb-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-slate-800">Whole-Child Development, Elevated</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                We believe early education should nurture more than academic readiness. It should shape character.
              </p>
              <p>
                Our commitment extends to the academic, emotional, social, and spiritual development of every child. Through respectful guidance, structured independence, and collaborative partnership with families, we lay intentional foundations that prepare students not only for kindergarten — but for leadership, confidence, and lifelong learning.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-32 p-12 md:p-20 bg-sage rounded-[3rem] text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed">
              This is education rooted in heritage.
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed">
              Guided by intention.
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed">
              Delivered with excellence.
            </p>
            <div className="pt-8 mt-8 border-t border-white/20">
              <p className="text-xl font-serif italic">
                Intentional foundations for little hearts.
              </p>
              <p className="text-xl font-serif italic">
                Confident futures for big dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
