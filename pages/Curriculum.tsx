import React from 'react';

const Curriculum: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Our Curriculum</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Intentional Foundations&trade;</h1>
          <p className="text-sage font-serif italic text-xl">Building Little Hearts. Growing Big Dreams.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-6">Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              At Montessori School of Elizabeth, learning doesn&rsquo;t happen by chance&mdash;it happens with intention.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our Intentional Foundations&trade; Curriculum is a comprehensive, research-informed educational framework thoughtfully designed by our leadership team to nurture the whole child. Inspired by Montessori principles, developmental science, Colorado Early Learning &amp; Development Guidelines, and best practices in early childhood education, our curriculum provides children with meaningful experiences that foster confidence, curiosity, independence, and a lifelong love of learning.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Rather than relying on worksheets or rigid academic programs, children learn through purposeful exploration, hands-on discovery, and authentic experiences that honor each child&rsquo;s unique developmental journey.
            </p>
            <p className="text-slate-700 leading-relaxed font-medium italic">
              Every Invitation is carefully designed to encourage children to think, question, create, solve problems, and build meaningful connections with the world around them.
            </p>
          </div>

          {/* The Foundation Edition */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-slate-800 mb-8 text-center">The Foundation Edition&trade;</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Our curriculum is organized into seven integrated learning albums that grow alongside your child throughout their early years.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Daily Living */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Daily Living</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Children build independence, responsibility, executive functioning, and confidence through meaningful everyday experiences that develop practical life skills and self-care.
                </p>
                <p className="text-sage italic text-sm">&ldquo;Helping children learn to do it for themselves.&rdquo;</p>
              </div>

              {/* Language & Literacy */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Language &amp; Literacy</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Rich conversations, beautiful literature, storytelling, vocabulary development, and authentic writing experiences nurture confident communicators and joyful readers.
                </p>
                <p className="text-sage italic text-sm">&ldquo;Every child has a story worth telling.&rdquo;</p>
              </div>

              {/* Mathematical Thinking */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Mathematical Thinking</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Children discover numbers, patterns, measurement, reasoning, and problem-solving through hands-on exploration that builds lasting mathematical understanding.
                </p>
                <p className="text-sage italic text-sm">&ldquo;Mathematics begins with curiosity.&rdquo;</p>
              </div>

              {/* Discovery Studio */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Discovery Studio</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Young scientists investigate plants, animals, weather, light, water, nature, and the physical world through observation, inquiry, and experimentation.
                </p>
                <p className="text-sage italic text-sm">&ldquo;Curiosity becomes discovery.&rdquo;</p>
              </div>

              {/* Creative Studio */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Creative Studio</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Art, music, movement, dramatic play, and creative expression encourage imagination, innovation, and confidence while supporting every area of development.
                </p>
                <p className="text-sage italic text-sm">&ldquo;Creativity is another language children use to understand the world.&rdquo;</p>
              </div>

              {/* Outdoor Exploration */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Outdoor Exploration</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Nature becomes the classroom as children investigate seasons, ecosystems, movement, risk-taking, environmental stewardship, and outdoor discovery.
                </p>
                <p className="text-sage italic text-sm">&ldquo;Some of life&rsquo;s greatest lessons happen outside.&rdquo;</p>
              </div>

              {/* Community & Care */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Community &amp; Care</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Children develop empathy, kindness, leadership, emotional intelligence, citizenship, and respect while learning what it means to contribute to a caring community.
                </p>
                <p className="text-sage italic text-sm">&ldquo;Growing compassionate hearts alongside capable minds.&rdquo;</p>
              </div>
            </div>
          </div>

          {/* A Curriculum That Grows */}
          <div className="bg-soft-cream rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-6">A Curriculum That Grows With Your Child</h2>
            <p className="text-slate-700 leading-relaxed">
              Rather than teaching isolated lessons, our curriculum is intentionally connected. A nature walk may become a science investigation, a literacy experience, a math exploration, an art inspiration, a practical life lesson, and a conversation about kindness and stewardship. Children experience learning as it naturally occurs&mdash;in connected, meaningful ways.
            </p>
          </div>

          {/* Individualized Learning */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-6">Individualized Learning</h2>
            <p className="text-slate-700 leading-relaxed">
              Every child develops at their own pace. Our teachers carefully observe each child&rsquo;s interests, readiness, and developmental milestones to provide individualized Invitations that appropriately challenge and inspire. This allows children to experience success while developing confidence, resilience, and a genuine love of learning.
            </p>
          </div>

          {/* More Than Kindergarten Readiness */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-6">More Than Kindergarten Readiness</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We believe true school readiness is about more than knowing letters and numbers. Our curriculum develops the skills children need to thrive in school and in life:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'Independence', 'Executive Function', 'Communication',
                'Problem Solving', 'Creativity', 'Critical Thinking',
                'Collaboration', 'Emotional Intelligence', 'Self-Regulation',
                'Confidence', 'Resilience', 'Curiosity'
              ].map((skill) => (
                <div key={skill} className="bg-soft-cream rounded-xl px-4 py-3 text-sm text-slate-700 text-center font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* The MSCR Difference */}
          <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-4">The MSCR Difference</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our Intentional Foundations&trade; Curriculum reflects our commitment to educating the whole child. Every classroom experience is thoughtfully designed to inspire curiosity, nurture confidence, and support meaningful growth across every area of development.
            </p>
            <p className="text-slate-700 leading-relaxed">
              At Montessori School of Castle Rock, we believe children learn best when they are encouraged to explore, discover, create, and contribute in an environment built on respect, purpose, and joy.
            </p>
          </div>

          {/* Closing */}
          <div className="text-center">
            <p className="text-sage font-serif italic text-lg">
              Intentional Foundations for Little Hearts. Confident Futures for Big Dreams.&trade;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
