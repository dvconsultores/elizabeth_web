
import React, { useState } from 'react';
import { X, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Our Institution</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-8 leading-tight">
            History, Legacy, and Vocation.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light italic mb-8">
            "We sow in the child the seed of all knowledge, not for them to memorize it, but for them to love it."
          </p>
          
          {/* Modal Trigger Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-sage/20 uppercase tracking-widest text-xs"
          >
            Learn More About Our Commitment
          </button>
        </div>

        {/* Modal Implementation */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
              onClick={() => setIsModalOpen(false)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300">
              <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-6 flex justify-between items-center border-b border-slate-100 z-10">
                <h2 className="text-2xl font-serif font-bold text-slate-800">About Us</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 sm:p-12 space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                  <Award size={16} />
                  MSCR Quality Rated
                </div>
                
                <p className="text-lg font-serif text-slate-700 font-semibold leading-relaxed">
                  MSCR is a Colorado Shines Quality Rated State Licensed Childcare Facility.
                </p>

                <h3 className="text-xl font-serif text-sage font-bold pt-4">Why choose our Montessori-Inspired School?</h3>
                
                <p className="text-slate-600 leading-relaxed">
                  From birth to age 5 are the most important years in a child's life. These years are often called the formative years because children develop and learn more during this time than during any other period of their lives. We understand that choosing the right early childhood education experience for your child is one of the most important decisions parents ever make.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  At <strong>Montessori School of Elizabeth</strong>, we are dedicated to the development of the whole child; academically, emotionally, physically, and spiritually. We provide children with a Montessori-Inspired education. Our focus is on instilling leadership, responsibility, self-discipline, confidence, individuality, and a love of learning. 
                </p>

                <div className="bg-soft-cream p-6 rounded-2xl border border-sage/10 italic text-slate-600">
                  "Our activities provide strong academics, social skills, and emotional/intellectual growth. We believe each student at Montessori School of Elizabeth is unique and has the potential to unveil their inner strength. Students also develop an understanding of themselves, their surroundings, and their world."
                </div>

                <p className="text-slate-600 leading-relaxed">
                  An education at Montessori School of Elizabeth will allow a student to develop socially and intellectually in all areas of life. We believe that the child's needs and development come first. We strive every day to find new and exciting ways to encourage learning. We create a stimulating environment with meaningful experiences so that your child can achieve his or her true potential.
                </p>
                
                <div className="pt-6">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-slate-700 transition-colors"
                  >
                    Close Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History / Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-center">
          <div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000" alt="Montessori Elizabeth Legacy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-serif mb-6 text-slate-800">Our History</h2>
              <p className="text-slate-600 leading-relaxed">
                Founded over 15 years ago, Montessori Elizabeth was born with the firm purpose of offering a cutting-edge educational alternative in Caracas. What began as a dedicated "nido" has evolved into a comprehensive Montessori center, known for its warm atmosphere and pedagogical rigor.
              </p>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              <div className="border-l-2 border-sage pl-6">
                <h3 className="font-serif text-xl mb-4">Mission</h3>
                <p className="text-sm text-slate-500 leading-relaxed">To guide the child's natural self-formation through a prepared environment that nurtures independence and lifelong curiosity.</p>
              </div>
              <div className="border-l-2 border-amber-200 pl-6">
                <h3 className="font-serif text-xl mb-4">Vision</h3>
                <p className="text-sm text-slate-500 leading-relaxed">To lead as a model Montessori community where every child graduates with critical thinking skills and inner peace.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team / Differentiators */}
        <div className="bg-white rounded-[3rem] p-12 md:p-24 shadow-sm border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Why Montessori Elizabeth?</h2>
            <p className="text-slate-500">Excellence in every interaction, material, and space.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <span className="text-4xl font-serif text-sage/30 mb-6 block">01.</span>
              <h4 className="text-xl font-serif mb-4">AMI Certified Guides</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Our lead guides hold Association Montessori Internationale (AMI) certifications, ensuring an authentic practice of the method.</p>
            </div>
            <div>
              <span className="text-4xl font-serif text-sage/30 mb-6 block">02.</span>
              <h4 className="text-xl font-serif mb-4">Thoughtful Spaces</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Classrooms are naturally lit and equipped with premium wooden materials imported specifically for their developmental value.</p>
            </div>
            <div>
              <span className="text-4xl font-serif text-sage/30 mb-6 block">03.</span>
              <h4 className="text-xl font-serif mb-4">Parent Partnership</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We provide continuous education for parents, creating a bridge between the classroom and the home environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
