
import React, { useState } from 'react';
import { X, Award, CheckCircle, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Our Institution</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-8 leading-tight">
            Intentional Foundations for Little Hearts. Confident Futures for Big Dreams.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light italic mb-8">
            "Education is the foundation. Life is the goal."
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
                <h3 className="text-xl font-serif text-sage font-bold">Why Choose Our Montessori-Inspired School?</h3>
                
                <p className="text-slate-600 leading-relaxed">
                  <strong>The early years are not just important — they are everything.</strong>
                </p>

                <p className="text-slate-600 leading-relaxed">
                  From birth to age five, a child's mind, heart, and character are forming in ways that will shape the rest of their life. These are the years when confidence takes root, curiosity ignites, and a lifelong love of learning begins.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  We know choosing a school is not just an educational decision — it is a decision about who will help shape your child's story.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  At Montessori School of Elizabeth, we are an intentionally cultured center built on a strong foundation of partnership and intentionality. We believe the most powerful growth happens when families and educators walk together with shared purpose, clear communication, and deep care.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  We nurture the whole child — academically, emotionally, physically, and spiritually. Our Montessori-inspired approach allows children to move with purpose, explore with confidence, and discover their independence in a carefully prepared environment designed just for them.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  We intentionally cultivate leadership, responsibility, self-discipline, confidence, and individuality. We do not rush childhood — we protect it, honor it, and guide it with intention.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Outdoor learning isn't a break from school — it's part of it. Nature becomes a classroom. Exploration becomes discovery. Movement becomes meaningful learning. Children build resilience, creativity, and connection to the world around them.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Inside our classrooms, hands-on experiences spark academic growth while strengthening social and emotional intelligence. We see each child as uniquely gifted, filled with potential waiting to unfold. Our role is to gently guide, encourage, and challenge them to become their very best selves.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  At the same time, we understand that peace of mind matters. Our highly structured, safety-focused systems provide consistency, predictability, and protection — so you can feel confident and secure every single day your child walks through our doors.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  <strong>Because this season of childhood is fleeting.</strong>
                </p>

                <p className="text-slate-600 leading-relaxed">
                  And it deserves to be nurtured with intention, excellence, and heart.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  At Montessori School of Elizabeth, your child is not just enrolled — they are known, guided, and deeply valued.
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

        {/* History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-start">
          <div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src="/2163698537.jpeg" alt="Montessori Elizabeth Legacy" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-serif mb-6 text-slate-800">Our History</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded in 1976, Montessori School of Castle Rock has proudly served families as a private Montessori school since its inception. Rooted in tradition and guided by purpose, the school has remained committed to nurturing children during their most formative years.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                In 2020, Astrid Kohnke became the owner after experiencing firsthand the profound impact the school had on her own children. What began as a parent's gratitude evolved into a visionary commitment to preserve and elevate the school's legacy.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Born in Venezuela and raised in a German-Hindu home, Ms. Astrid brings a uniquely global perspective to her leadership. Fluent in English, Spanish, and German, her multicultural background deeply informs her philosophy and vision. She is a passionate advocate for culture, diversity, inclusivity, language development, and whole-child education in the early childhood years.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Under her leadership, the school has experienced remarkable growth — expanding from two classrooms to two large early childhood centers, Montessori School of Castle Rock and Montessori School of Elizabeth— while maintaining its intentional, child-centered foundation. Her vision continues to shape a school environment where children are academically prepared, emotionally supported, culturally aware, and empowered to grow into confident individuals.
              </p>
            </section>
          </div>
        </div>

        {/* Mission / Vision with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-start">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="border-l-2 border-sage pl-6">
                <h3 className="font-serif text-xl mb-4">Mission</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Our mission is to guide each child as they build the foundations that will help them discover who they are and what they love. During their time with us, we intentionally nurture curiosity, character, and confidence — laying the groundwork for a lifelong journey of growth. We strive to become an extension of your family, honoring the deep trust you place in us.</p>
              </div>
              <div className="border-l-2 border-amber-200 pl-6">
                <h3 className="font-serif text-xl mb-4">Vision</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Through collaboration and open communication, our educators work alongside you to design thoughtful learning roadmaps that support your child's academic and social-emotional development. Together, we cultivate an environment where children feel known, supported, and inspired to reach their fullest potential.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src="/2352495715.jpeg" alt="Montessori Elizabeth Mission Vision" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="mb-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-slate-800 text-center">Our Promise</h2>
            <p className="text-center text-slate-600 mb-12 text-lg">
              At Montessori School of Elizabeth, our vision extends beyond today's classroom. We are building a learning community rooted in intentional foundations and confident futures — with clarity, excellence, and heart.
            </p>
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif mb-8 text-slate-800">We are a school that:</h3>
              <ul className="space-y-6 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Leads with Integrity and Intention</strong> — Where every decision — from curriculum to culture — reflects purpose, consistency, and long-term vision.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Sets the Standard for Early Childhood Excellence</strong> — Where academic readiness, executive function, and character development are cultivated with measurable care and precision.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Champions Whole-Child Development</strong> — Where intellectual growth is balanced with emotional intelligence, social awareness, resilience, and spiritual grounding.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Builds Deep Family Partnerships</strong> — Where communication is transparent, collaboration is valued, and families feel known, supported, and respected.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Cultivates Leadership from the Earliest Years</strong> — Where children learn responsibility, independence, grace, courtesy, and confidence through daily practice.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Honors Culture and Global Awareness</strong> — Where diversity is celebrated, languages are respected, and children grow with a broad understanding of the world around them.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Integrates Outdoor Learning with Purpose</strong> — Where nature is an extension of the classroom and movement supports meaningful cognitive development.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Operates with Structure and Safety at Its Core</strong> — Where highly organized, safety-focused systems provide consistency, security, and peace of mind.</div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="text-sage flex-shrink-0 mt-1" size={20} />
                  <div><strong>Prepares Children Not Just for Kindergarten — But for Life</strong> — Where students leave academically prepared, emotionally grounded, socially capable, and internally confident.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
