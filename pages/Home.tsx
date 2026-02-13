
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, User, Sun } from 'lucide-react';
import { RoutePath } from '../types';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/1.png" 
            alt="Montessori Elizabeth Learning Environment" 
            className="w-full h-full object-cover brightness-[0.6]" 
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="text-white/80 uppercase tracking-[0.4em] text-sm mb-6 block font-medium">Welcome to our Montessori-Inspired, Outdoor Play Based School!</span>
          <h1 className="text-4xl md:text-7xl text-white font-serif mb-8 leading-tight">
            Nurturing Character. Cultivating Confidence. Inspiring Lifelong Learning.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Where Little Hearts Grow Strong and Big Dreams Begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={RoutePath.CONTACT} 
              className="bg-white text-slate-800 px-8 py-4 rounded-full font-medium hover:bg-sage hover:text-white transition-all transform hover:scale-105 shadow-xl"
            >
              Schedule a Visit
            </Link>
            <Link 
              to={RoutePath.PROGRAMS} 
              className="bg-transparent border border-white/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Our Essence</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-slate-800 leading-snug">
              At our preschool, children aren't rushed through childhood — they are guided through it with whole-child nurturing and intention.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Inspired by Montessori philosophy and grounded in outdoor exploration, we cultivate confidence, independence, resilience, adaptability and joy through purposeful work and immersive play! Families choose us because we don't just prepare our students for kindergarten. We prepare your child for life!
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-sage/10 rounded-lg text-sage"><User size={24} /></div>
                <div>
                  <h4 className="font-serif font-semibold text-slate-800">Autonomy</h4>
                  <p className="text-xs text-slate-500">We encourage conscious decision-making.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-sage/10 rounded-lg text-sage"><Heart size={24} /></div>
                <div>
                  <h4 className="font-serif font-semibold text-slate-800">Respect</h4>
                  <p className="text-xs text-slate-500">We value each being's individual pace.</p>
                </div>
              </div>
            </div>
            <Link to={RoutePath.PHILOSOPHY} className="text-sage font-medium inline-flex items-center group">
              Learn about our methodology <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img src="/2.png" alt="Authentic Montessori Materials" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Quick Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-slate-800">Stages of Growth</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Accompanying your child's journey from their first steps to confident independence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Infant Community', age: '1.5 to 3 years', img: '/3.png', desc: 'Motor development, language, and initial socialization.' },
              { title: "Children's House", age: '3 to 6 years', img: '/4.png', desc: 'Sensorial exploration, mathematics, practical life, and culture.' },
              { title: 'Elementary', age: '6 to 12 years', img: '/5.png', desc: 'Cosmic education, abstract reasoning, and collaboration.' }
            ].map((program, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 relative">
                  <img src={program.img} alt={program.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-sage shadow-sm">
                    {program.age}
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2 text-slate-800">{program.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{program.desc}</p>
                <Link to={RoutePath.PROGRAMS} className="text-sm font-semibold text-sage hover:underline">View details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Values */}
      <section className="py-24 bg-sage text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Sun size={600} strokeWidth={0.5} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-12">Our Institutional Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Heart, label: 'Empathy', val: 'Deep human connection.' },
              { icon: Star, label: 'Excellence', val: 'Quality in every detail.' },
              { icon: User, label: 'Individuality', val: 'Respect for the unique path.' },
              { icon: Sun, label: 'Peace', val: 'Harmony with the environment.' }
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-6 p-4 border border-white/20 rounded-full">
                  <v.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif mb-2">{v.label}</h4>
                <p className="text-white/70 text-sm">{v.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-soft-cream">
        <div className="max-w-4xl mx-auto px-6 bg-white rounded-3xl p-12 md:p-20 text-center shadow-sm border border-slate-100">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-slate-800">Ready to join our family?</h2>
          <p className="text-slate-500 mb-10 text-lg">Our admission process is designed to ensure a perfect harmony between our school's vision and your family's educational goals.</p>
          <Link to={RoutePath.CONTACT} className="inline-block bg-sage text-white px-10 py-5 rounded-full font-medium shadow-xl shadow-sage/30 hover:scale-105 transition-transform">
            Inquire About Admissions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
