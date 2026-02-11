
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Contact & Admissions</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-8">Let's talk about your child's future.</h1>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              We are delighted to welcome families looking for a conscious education. Complete the form and we will get in touch to schedule a guided tour.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sage shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-xl">Location</h4>
                  <p className="text-slate-500">Main Ave. Las Mercedes, Qta. Elizabeth. Caracas, Venezuela.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sage shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-xl">Phone</h4>
                  <p className="text-slate-500">+58 212 555-0123 / +58 414 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sage shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-xl">Email</h4>
                  <p className="text-slate-500">admissions@montessorielizabeth.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 border border-sage/20 rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 border border-sage/20 rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-3xl font-serif mb-8 text-slate-800">Request Information</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Parent/Guardian Name</label>
                  <input type="text" className="w-full bg-soft-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sage outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Email Address</label>
                  <input type="email" className="w-full bg-soft-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sage outline-none" placeholder="john@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Phone Number</label>
                  <input type="text" className="w-full bg-soft-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sage outline-none" placeholder="+58..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Program of Interest</label>
                  <select className="w-full bg-soft-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sage outline-none appearance-none">
                    <option>Infant Community</option>
                    <option>Children's House</option>
                    <option>Elementary</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Message</label>
                <textarea rows={4} className="w-full bg-soft-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sage outline-none" placeholder="Tell us about your child..."></textarea>
              </div>
              <button className="w-full bg-sage text-white font-bold py-4 rounded-xl shadow-lg shadow-sage/30 hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm">
                Send Request
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 aspect-[21/9] bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner">
          <img src="https://gme9j4qsc4fggej5.public.blob.vercel-storage.com/16.png" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2">
              <MapPin className="text-red-500" />
              <span className="font-serif font-bold">Montessori Elizabeth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
