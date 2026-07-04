import React from 'react';
import { ExternalLink, Download, Leaf } from 'lucide-react';

const FamilyResources: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Community</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Family Resources</h1>
          <p className="text-sage font-serif italic text-xl">Supporting Families Every Step of the Way</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <p className="text-slate-700 leading-relaxed text-lg">
              At Montessori School of Castle Rock and Montessori School of Elizabeth, we believe raising confident, capable children is a partnership. Whether you&rsquo;re looking for developmental resources, financial assistance programs, therapy providers, or parenting support, we&rsquo;ve gathered trusted resources to help your family navigate every stage of early childhood.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              If you have questions or need additional guidance, our administrative team is always happy to help connect you with the appropriate services.
            </p>
          </div>

          {/* Colorado Family Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-slate-800 mb-8 text-center">Colorado Family Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* UPK */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Colorado Universal Preschool (UPK)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Colorado Universal Preschool provides tuition support for eligible children during the year before kindergarten.
                </p>
                <a href="https://upk.colorado.gov/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sage font-medium hover:underline">
                  <ExternalLink size={18} />
                  Learn More
                </a>
              </div>

              {/* CCCAP */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Colorado Child Care Assistance Program (CCCAP)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  CCCAP helps eligible families pay for quality childcare while parents work, attend school, participate in training programs, or search for employment.
                </p>
                <a href="https://www.coloradoofficeofearlychildhood.com/OEC_Families?lang=en&p=Family&s=Colorado-Child-Care-Assistance-Program" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sage font-medium hover:underline">
                  <ExternalLink size={18} />
                  Learn More
                </a>
              </div>

              {/* Child Find */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Colorado Child Find</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Child Find provides free developmental screenings and evaluations for children who may need additional educational support or early intervention services.
                </p>
                <p className="text-slate-500 text-sm mb-4">
                  If you have concerns about your child&rsquo;s development, speech, hearing, motor skills, learning, or behavior, Child Find can help determine whether additional services may be beneficial.
                </p>
                <a href="https://www.cde.state.co.us/cdesped/childfind" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sage font-medium hover:underline">
                  <ExternalLink size={18} />
                  Learn More
                </a>
              </div>

              {/* Early Intervention */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-serif text-sage mb-3">Early Intervention Colorado (Birth&ndash;3)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Early Intervention Colorado supports infants and toddlers who have developmental delays or disabilities by providing services designed to strengthen each child&rsquo;s growth and development.
                </p>
                <p className="text-slate-500 text-sm mb-4">
                  Services may include speech therapy, occupational therapy, physical therapy, developmental intervention, and family support.
                </p>
                <a href="https://dcfs.my.salesforce-sites.com/eicolorado" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sage font-medium hover:underline">
                  <ExternalLink size={18} />
                  Learn More
                </a>
              </div>

              {/* Colorado Shines */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 md:col-span-2">
                <h3 className="text-xl font-serif text-sage mb-3">Colorado Shines</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Colorado Shines is Colorado&rsquo;s statewide quality rating and improvement system for early childhood programs and provides valuable resources for families.
                </p>
                <a href="https://www.coloradoshines.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sage font-medium hover:underline">
                  <ExternalLink size={18} />
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Therapy Providers */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-6">Therapy Providers We Partner With</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Every child develops at their own pace and follows his/her own curriculum. However, if concerns arise, early support can make a meaningful difference. Our schools regularly collaborate with outside professionals to help children receive services within the classroom whenever appropriate.
            </p>
            <a
              href="/Therapist Directory.png"
              download
              className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-sage/30 hover:scale-105 active:scale-100 transition-transform mb-6"
            >
              <Download size={18} />
              Download Our Recommended Therapy Provider Directory
            </a>
            <p className="text-slate-600 text-sm mb-4">Our directory includes trusted providers for:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              {[
                'Speech-Language Pathology',
                'Occupational Therapy',
                'Physical Therapy',
                'Feeding Therapy',
                'Behavioral Therapy',
                'Developmental Specialists',
                'Early Intervention Providers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Leaf size={16} className="text-sage flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Parenting Resources */}
          <div className="bg-soft-cream rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-serif text-slate-800 mb-6">Parenting Resources</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Helpful information for every stage of early childhood. Available for actively enrolled students through our childcare platform:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              {[
                'Potty Training Guide',
                'Kindergarten Readiness Checklist',
                'Montessori at Home Activities',
                'Positive Discipline Resources',
                'Healthy Sleep Habits',
                'Nutrition for Young Children',
                'Screen Time Recommendations',
                'Preparing for Preschool',
                'Transitioning to Kindergarten',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Leaf size={16} className="text-sage flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Partners */}
          <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20">
            <h2 className="text-2xl font-serif text-slate-800 mb-4">Community Partners</h2>
            <p className="text-slate-700 leading-relaxed">
              We are proud to collaborate with organizations that support children and families throughout our communities. If your family needs additional resources beyond those listed here, please don&rsquo;t hesitate to contact our office. We&rsquo;re committed to helping every child thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyResources;
