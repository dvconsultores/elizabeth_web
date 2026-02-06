
import React from 'react';
import { Check } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Infant Community",
      age: "18 months to 3 years",
      objective: "Foster emotional security and the development of motor and language skills in a welcoming environment.",
      benefits: ["Development of gait and coordination", "Acquisition of vocabulary", "First independence habits (eating, hygiene)"],
      img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Children's House",
      age: "3 to 6 years",
      objective: "Develop concentration, order, and will through free work with sensorial and academic materials.",
      benefits: ["Initiation to reading, writing, and math", "Sensorial education", "Practical Life exercises", "Cultural immersion"],
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Workshop (Elementary)",
      age: "6 to 12 years",
      objective: "Stimulate imagination and intellectual curiosity through Cosmic Education and collaborative work.",
      benefits: ["Development of abstract reasoning", "Research projects", "Social and community responsibility", "Understanding of the universe"],
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Our Programs</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Stages of Development</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Every classroom is a unique "prepared environment" tailored to the specific needs of each development plane.</p>
        </div>

        <div className="space-y-32">
          {programs.map((p, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1">
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                    <span className="text-xs uppercase tracking-widest font-bold text-sage">Ages</span>
                    <p className="text-xl font-serif text-slate-800">{p.age}</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-serif text-slate-800">{p.title}</h2>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sage uppercase tracking-wider text-xs">Pedagogical Objective</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{p.objective}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-800 uppercase tracking-wider text-xs">Key Benefits</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {p.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-500">
                        <Check size={18} className="text-sage mt-1 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
