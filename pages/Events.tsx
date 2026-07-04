import React from 'react';
import { Calendar, Heart, Star } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage font-medium uppercase tracking-widest text-xs mb-4 block">Community</span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6">Events</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            More Than School Events—Moments That Become Memories
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              At Montessori School of Elizabeth, we believe a strong school community is built through shared experiences. Throughout the year, our families are invited to participate in meaningful events that celebrate childhood, strengthen relationships, and create lasting memories.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              From seasonal celebrations to educational family nights, every event is thoughtfully planned to encourage connection between children, parents, teachers, and our community.
            </p>
          </div>

          {/* Annual Events */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={28} className="text-sage" />
              <h2 className="text-2xl font-serif text-slate-800">Annual Events May Include:</h2>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Back-to-School Meet & Greet</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Fall Festival & Pumpkin Activities</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Holiday Celebrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Winter Family Events</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Valentine's Friendship Celebrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Spring Egg Hunt</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Mother's Day & Father's Day Celebrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Preschool Graduation</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={18} className="text-sage flex-shrink-0 mt-1" />
                <span>Family Picnic & Outdoor Events</span>
              </li>
            </ul>
          </div>

          {/* Community Enrichment */}
          <div className="bg-soft-cream rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={28} className="text-sage" />
              <h2 className="text-2xl font-serif text-slate-800">Community Enrichment</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              We're proud to partner with local organizations, businesses, and enrichment providers to bring additional opportunities to our families throughout the year. From guest speakers and special visitors to community events and family resources, we believe learning extends far beyond the classroom.
            </p>
          </div>

          {/* Closing */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-slate-800 font-serif text-xl mb-4">Because Childhood Happens Only Once</p>
            <p className="text-slate-600 leading-relaxed mb-8">
              The lessons children learn are important—but so are the memories they make along the way. We are honored to create traditions that families look forward to year after year, building a community where every child feels known, celebrated, and loved.
            </p>
            <p className="text-sage font-serif text-2xl italic">
              Some of Life's Biggest Dreams Begin With the Smallest Backpacks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
