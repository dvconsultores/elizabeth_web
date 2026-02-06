
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Philosophy</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-8 leading-tight">
              The Scientific <br /> Method of Peace.
            </h1>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Dr. Maria Montessori discovered that children possess an "absorbent mind" and a natural hunger for knowledge. At Elizabeth, we respect this hunger by providing the right challenge at the right time.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-soft-cream shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" alt="Focus and concentration in the Montessori environment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { 
              title: "The Prepared Environment", 
              desc: "A space designed so that the child can act without constant adult help, fostering independence and order.",
              icon: "🪑"
            },
            { 
              title: "The Montessori Guide", 
              desc: "The adult does not teach but observes and guides the child toward materials that satisfy their current developmental needs.",
              icon: "👁️"
            },
            { 
              title: "Didactic Materials", 
              desc: "Materials with a specific purpose that allow for 'self-control of error,' allowing the child to learn from their own attempts.",
              icon: "🧩"
            },
            { 
              title: "Freedom and Limits", 
              desc: "The child has the freedom to choose their work within clear limits that protect the harmony of the school community.",
              icon: "⚖️"
            },
            { 
              title: "Mixed Age Groups", 
              desc: "Living together among different ages allows the older ones to teach and the younger ones to learn, simulating a real society.",
              icon: "👥"
            },
            { 
              title: "Cosmic Education", 
              desc: "Teaching the child that everything in the universe is interconnected, inspiring gratitude and ecological responsibility.",
              icon: "🌍"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <span className="text-4xl mb-6 block">{item.icon}</span>
              <h3 className="text-2xl font-serif mb-4 text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
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
