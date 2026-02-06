
import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">School Life</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Our Community</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Building a vibrant educational family where parents, guides, and children grow together.</p>
        </div>

        {/* Gallery / Life at school */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=600" className="w-full h-80 object-cover rounded-2xl" alt="Classroom work" />
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400&h=400" className="w-full h-80 object-cover rounded-2xl md:translate-y-12" alt="Children working" />
          <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400&h=600" className="w-full h-80 object-cover rounded-2xl" alt="Outdoor play" />
          <img src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&q=80&w=400&h=400" className="w-full h-80 object-cover rounded-2xl md:translate-y-12" alt="Community events" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-slate-800">School for Parents</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We believe education is a collaborative journey. Our "School for Parents" program offers workshops and resources to help you integrate Montessori principles into your daily life at home.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              When children experience consistency between their home and school environments, their sense of security and confidence flourishes.
            </p>
            <div className="bg-soft-cream p-8 rounded-2xl border border-sage/10">
              <h4 className="font-serif font-bold text-sage mb-2">Upcoming Workshop</h4>
              <p className="text-sm font-medium text-slate-800">"Setting Limits with Love: The Montessori Approach to Discipline"</p>
              <p className="text-xs text-slate-400 mt-1">Saturday, November 12th, 10:30 AM</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" alt="Active community life" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
