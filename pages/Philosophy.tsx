
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Philosophy</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-8 leading-tight">
              The Scientific Path to Peaceful Human Development
            </h1>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Inspired by the scientific work and humanist vision of Maria Montessori, Elizabeth Montessori is grounded in the understanding that children possess an absorbent mind and an innate drive to learn. Our philosophy honors this natural intelligence by offering the right conditions, challenges, and guidance at each stage of development, aligned with our mission to nurture independent, confident, and responsible individuals.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-soft-cream shadow-2xl">
              <img src="https://gme9j4qsc4fggej5.public.blob.vercel-storage.com/10.png" alt="Focus and concentration in the Montessori environment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-serif mb-4 text-slate-800">The Prepared Environment</h3>
            <p className="text-slate-600 text-sm leading-relaxed">A carefully structured space that allows the child to act independently, make purposeful choices, and develop order, concentration, and self-discipline without constant adult intervention.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-serif mb-4 text-slate-800">The Montessori Guide</h3>
            <p className="text-slate-600 text-sm leading-relaxed">The adult serves as an observer and guide rather than a traditional instructor, responding to the child’s developmental readiness and connecting them with materials that meet their current cognitive, emotional, and social needs.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-serif mb-4 text-slate-800">Didactic Materials</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Scientifically designed materials with a clear educational purpose and built-in control of error, enabling the child to learn through exploration, repetition, and self-correction.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-serif mb-4 text-slate-800">Freedom Within Limits</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Children are free to choose their work and progress at their own pace within clear, consistent boundaries that protect respect, responsibility, and community harmony.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-serif mb-4 text-slate-800">Mixed-Age Communities</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Classrooms are composed of multiple age groups, encouraging collaboration, peer learning, leadership, empathy, and a social structure that reflects real life.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-serif mb-4 text-slate-800">Cosmic Education</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Children are guided to understand the interconnectedness of life, humanity, and the universe, fostering curiosity, gratitude, ethical awareness, and responsibility toward others and the environment.</p>
          </div>
        </div>

        <div className="mt-4 p-8 bg-slate-50 rounded-2xl">
          <p className="text-slate-700 leading-relaxed">This philosophy supports Elizabeth Montessori’s vision of educating the whole child and preparing individuals not only for academic success, but for meaningful participation in society and lifelong learning.</p>
        </div>

        <div className="mt-32 p-12 md:p-20 bg-sage rounded-[3rem] text-white text-center">
          <p className="text-2xl md:text-4xl font-serif italic max-w-4xl mx-auto leading-relaxed">
            "It is not that I am inventing a method of education, I have simply studied the child; I have taken what the child has given me and expressed it."
          </p>
          <p className="mt-8 uppercase tracking-[0.3em] text-sm opacity-80">— Maria Montessori</p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
