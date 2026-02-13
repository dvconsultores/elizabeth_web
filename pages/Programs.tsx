
import React from 'react';
import { Check } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Toddler Program",
      subtitle: "Where Independence Begins",
      age: "Ages: 12 months - 3 years old",
      description: "The toddler years are tender, powerful, and formative. They are the years when children begin to discover their voice, their will, and their growing sense of self.",
      content: [
        "At Montessori School of Elizabeth, our Toddler Program is thoughtfully designed to provide what young children need most: security, consistency, and gentle guidance.",
        "We understand how significant this first school experience is — for both child and parent. That is why our classrooms are intentionally calm, orderly, and predictable. A peaceful environment allows toddlers to feel safe enough to explore, confident enough to try, and secure enough to grow.",
        "Here, your child is not rushed. They are guided."
      ],
      areas: [
        "Language and early communication",
        "Physical coordination and fine motor skills",
        "Emotional regulation and self-awareness",
        "Emerging independence and responsibility"
      ],
      footer: "We encourage children to take pride in small accomplishments — putting on their shoes, completing a task, caring for their environment. These moments build confidence that lasts far beyond the classroom.",
      transitions: [
        "Toilet learning is not incorporated into the Toddler curriculum.",
        "Children may transition to a Primary classroom as early as 2½ years old based on readiness.",
        "Students transition to our Primary Program at 30 months to support community needs.",
        "In accordance with licensing requirements, students must move from the Toddler Program by age three."
      ],
      closing: "Each transition is handled thoughtfully and in partnership with families, ensuring your child moves forward with confidence and continuity. These are the years where independence begins — and we honor them with intention.",
      img: "/7.png"
    },
    {
      title: "Primary Program",
      subtitle: "Where Confidence Takes Root",
      age: "Ages: 2½ - 6 years old",
      description: "The Primary years are a season of remarkable growth. Curiosity deepens. Concentration strengthens. Independence transforms into confidence.",
      content: [
        "Our Primary Program serves children ages 2½ to 6 and builds upon the intentional foundations established in the toddler years.",
        "In these classrooms, children are given the space and structure to grow intellectually, socially, emotionally, and spiritually. The environment is calm, purposeful, and beautifully prepared — inviting meaningful engagement and sustained focus."
      ],
      areas: [
        "Early literacy and language development",
        "Foundational mathematics",
        "Practical life skills",
        "Cultural studies and global awareness",
        "Grace, courtesy, and leadership development"
      ],
      footer: "Freedom exists within clear boundaries. Students choose purposeful work while guided by highly structured, safety-focused systems that create consistency and security. Outdoor learning remains a vital part of the educational experience — not as a break from learning, but as an extension of it.",
      closing: "Most importantly, children develop self-discipline, resilience, and an authentic love of learning. They learn how to concentrate. How to persist. How to lead. How to care for others. By the time they leave our Primary Program, they are not only academically prepared for kindergarten — they are confident, capable, and grounded in character. In the Primary years, little hearts grow strong. Big dreams begin to feel possible.",
      img: "/8.png"
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
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
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
                <div>
                  <h2 className="text-4xl font-serif text-slate-800 mb-2">{p.title}</h2>
                  <p className="text-xl font-serif text-sage italic">{p.subtitle}</p>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-lg font-medium">{p.description}</p>
                
                {p.content.map((paragraph, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{paragraph}</p>
                ))}

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-semibold text-slate-800 uppercase tracking-wider text-xs mb-4">Our prepared environments invite purposeful movement and hands-on discovery. Through developmentally appropriate works and activities, children strengthen:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {p.areas.map((area, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-sage mt-1 flex-shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-slate-600 leading-relaxed italic">{p.footer}</p>

                {p.transitions && (
                  <div className="bg-sage/10 p-6 rounded-2xl border border-sage/20">
                    <h4 className="font-semibold text-sage uppercase tracking-wider text-xs mb-4">To ensure consistency and alignment with developmental readiness:</h4>
                    <ul className="space-y-2">
                      {p.transitions.map((transition, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                          <span className="text-sage mt-1">•</span>
                          <span>{transition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-slate-700 leading-relaxed font-medium">{p.closing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
