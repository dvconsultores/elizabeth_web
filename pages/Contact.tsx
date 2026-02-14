
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Contact & Admissions</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-8">Intentional foundations begin with connection.</h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Choosing the right early childhood experience is an important decision — and we would be honored to connect with you.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Montessori School of Elizabeth, we believe meaningful partnership begins with conversation. Whether you are exploring options, ready to schedule a tour, or simply have questions, our team is here to guide you.
            </p>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              We look forward to learning about your child, your family, and how we can walk alongside you during these foundational years.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sage shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-xl">Location</h4>
                  <p className="text-slate-500">635 Beverly Street, Elizabeth, Colorado 80107</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sage shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-xl">Phone</h4>
                  <p className="text-slate-500">+1 (303) 663-6942</p>
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
              <a href="https://www.instagram.com/montessorischoolofelizabeth?igsh=c2N1dHQ2aHhycHF1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-sage/20 rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/share/1LL5JvA4vo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-sage/20 rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-3xl font-serif mb-8 text-slate-800">Request Information</h3>
            <div className="space-y-8 text-center py-12">
              <p className="text-slate-600 text-lg leading-relaxed">
                Ready to take the next step? Visit our admissions portal to schedule a tour, request information, or begin the enrollment process.
              </p>
              <a 
                href="https://app.waitlistplus.com/MontessoriSchoolofEl/Portal/Signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-sage text-white font-bold py-4 rounded-xl shadow-lg shadow-sage/30 hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
              >
                Visit Admissions Portal
              </a>
              <p className="text-sm text-slate-500">
                Or contact us directly at <a href="mailto:admissions@montessorielizabeth.com" className="text-sage hover:underline">admissions@montessorielizabeth.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Photo */}
        <div className="mt-24 aspect-[21/9] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl">
          <img src="/2571604301.jpeg" alt="Montessori School of Elizabeth" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
