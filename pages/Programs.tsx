
import React from 'react';
import { Check } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Infant Community",
      age: "Ages: 18 months to 3 years",
      objective: "To foster emotional security and support the natural development of motor coordination and language within a warm, nurturing environment.",
      benefits: [
        "Development of balance, gait, and fine motor coordination",
        "Expansion of expressive and receptive vocabulary",
        "Formation of early independence habits (feeding, hygiene, self-care)",
        "Growth of confidence through purposeful, guided activity"
      ],
      img: "https://gme9j4qsc4fggej5.public.blob.vercel-storage.com/7.png"
    },
    {
      title: "Children’s House",
      age: "Ages: 3 to 6 years",
      objective: "To cultivate concentration, order, independence, and inner discipline through self-directed work with sensorial and academic materials.",
      benefits: [
        "Foundations of reading, writing, and mathematics",
        "Advanced sensorial development",
        "Practical Life activities that build autonomy and responsibility",
        "Cultural awareness and early global understanding"
      ],
      img: "https://gme9j4qsc4fggej5.public.blob.vercel-storage.com/8.png"
    },
    {
      title: "Workshop (Elementary)",
      age: "Ages: 6 to 12 years",
      objective: "To stimulate imagination, critical thinking, and intellectual curiosity through Cosmic Education, inquiry-based learning, and collaborative work.",
      benefits: [
        "Development of abstract and logical reasoning",
        "Research-based projects and problem-solving skills",
        "Social awareness and community responsibility",
        "A deeper understanding of the interconnectedness of the universe"
      ],
      img: "https://gme9j4qsc4fggej5.public.blob.vercel-storage.com/9.png"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Our Programs</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Stages of Development</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Each classroom is a thoughtfully designed prepared environment, aligned with the specific needs of each developmental plane and guided by Montessori principles.</p>
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
