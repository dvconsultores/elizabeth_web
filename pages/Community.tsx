
import React from 'react';
import { Heart, Home, Leaf, Users, Shield, Sparkles } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Community</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Why Families Choose Us</h1>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>You want a place where your child feels safe.</p>
            <p>A place where they are known by name, understood for who they are, and gently guided as they grow.</p>
            <p>You want consistency. Warmth. Trust.</p>
            <p>You want to drop your child off each morning feeling confident they are cared for — not just supervised.</p>
            <p className="text-slate-800 font-serif text-xl pt-4">That is why families choose us!</p>
          </div>
        </div>

        {/* Gallery / Life at school */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          <img src="/2655920151.jpeg" className="w-full h-80 object-cover rounded-2xl" alt="Classroom work" loading="lazy" />
          <img src="/2257172535.jpeg" className="w-full h-80 object-cover rounded-2xl md:translate-y-12" alt="Children working" loading="lazy" />
          <img src="/1618644940.jpeg" className="w-full h-80 object-cover rounded-2xl" alt="Outdoor play" loading="lazy" />
          <img src="/1654071166.jpeg" className="w-full h-80 object-cover rounded-2xl md:translate-y-12" alt="Community events" loading="lazy" />
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-sage/10 rounded-full">
                <Home className="text-sage" size={28} />
              </div>
              <h2 className="text-2xl font-serif text-slate-800">An Extension of Your Family</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We intentionally create a school culture that feels like home. We take time to truly know each child — their personality, their pace, their passions. We partner closely with parents because we believe you are your child's first and most important teacher. Together, we create a consistent, supportive foundation for growth.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-sage/10 rounded-full">
                <Shield className="text-sage" size={28} />
              </div>
              <h2 className="text-2xl font-serif text-slate-800">A Calm and Thoughtfully Prepared Environment</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Inspired by Montessori principles, our classrooms are peaceful, structured, and designed with purpose. Children are encouraged to explore, make meaningful choices, and build independence in an environment that feels secure and nurturing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-sage/10 rounded-full">
                <Leaf className="text-sage" size={28} />
              </div>
              <h2 className="text-2xl font-serif text-slate-800">Learning Rooted in Nature</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We believe childhood should include fresh air, movement, and wonder. Our outdoor experiences are part of the learning journey — helping children develop resilience, confidence, and a deep connection to the world around them.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-sage/10 rounded-full">
                <Sparkles className="text-sage" size={28} />
              </div>
              <h2 className="text-2xl font-serif text-slate-800">Growing the Whole Child</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We gently guide social-emotional development alongside early academics. Respect, empathy, self-regulation, and confidence are practiced daily. Our goal is not to rush childhood — but to protect it, nurture it, and build strong foundations that last.
            </p>
          </div>
        </div>

        {/* Community Where You Belong */}
        <div className="mb-32 bg-soft-cream rounded-[3rem] p-12 md:p-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-sage/10 rounded-full">
                <Users className="text-sage" size={40} />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-slate-800">A Community Where You Belong</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Every family brings a unique story, culture, and perspective. We honor and celebrate those differences. At Montessori School of Elizabeth, children and parents alike are welcomed into a community built on trust, kindness, and shared values.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img src="/1654071166.jpeg" alt="Active community life" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed">
              At Montessori School of Elizabeth, children are not hurried.
            </p>
            <div className="space-y-4 text-lg text-slate-600">
              <p>They are guided.</p>
              <p>They are encouraged.</p>
              <p>They are deeply cared for.</p>
            </div>
            <p className="text-xl font-serif text-sage italic pt-6">
              And families don't just enroll — they belong.
            </p>
          </div>
        </div>

        {/* Final Statement */}
        <div className="bg-sage rounded-[3rem] p-12 md:p-20 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="mx-auto mb-6" size={48} strokeWidth={1.5} />
            <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-6">
              We believe that when families feel supported, children thrive.
            </p>
            <p className="text-lg opacity-90">
              Join a community where trust, warmth, and shared purpose come together to create something truly special.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
