import React, { useState } from 'react';
import { HOTEL_INFO, ATTRACTIONS } from '../data/tourData';
import { MapleLeaf, StarSparkle } from './MapleLeafStars';
import {
  BellRing,
  Hotel,
  Compass,
} from 'lucide-react';

export const TravelInfo: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'reminders' | 'hotel' | 'attractions'>('reminders');

  return (
    <section id="info" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header: Clean title "旅遊資訊" */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#EADEF2]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold text-[#3A2052] flex items-center gap-2">
            <span>旅遊資訊</span>
            <MapleLeaf size={22} color="amber" />
          </h2>
        </div>

        {/* 3 Dedicated Section Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F4ECF8] rounded-xl overflow-x-auto max-w-full border border-[#E5D7EE]">
          <button
            onClick={() => setActiveSubTab('reminders')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
              activeSubTab === 'reminders'
                ? 'bg-white text-[#4A2D62] shadow-2xs border border-[#DECFEC]'
                : 'text-[#6F5786] hover:text-[#3A2052] hover:bg-white/50'
            }`}
          >
            <BellRing className="w-4 h-4 text-[#7E579B]" />
            <span>溫馨提醒</span>
          </button>

          <button
            onClick={() => setActiveSubTab('hotel')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
              activeSubTab === 'hotel'
                ? 'bg-white text-[#4A2D62] shadow-2xs border border-[#DECFEC]'
                : 'text-[#6F5786] hover:text-[#3A2052] hover:bg-white/50'
            }`}
          >
            <Hotel className="w-4 h-4 text-[#7E579B]" />
            <span>飯店資訊 (阿里山賓館)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('attractions')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
              activeSubTab === 'attractions'
                ? 'bg-white text-[#4A2D62] shadow-2xs border border-[#DECFEC]'
                : 'text-[#6F5786] hover:text-[#3A2052] hover:bg-white/50'
            }`}
          >
            <Compass className="w-4 h-4 text-[#7E579B]" />
            <span>景點介紹 (小火車/日出/故宮)</span>
          </button>
        </div>
      </div>

      {/* SUB-SECTION 1: 溫馨提醒 (條列式，無「建議」字眼) */}
      {activeSubTab === 'reminders' && (
        <div className="animate-in fade-in duration-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FAF4FC] via-white to-[#F8F0FA] border border-[#E2D2ED] shadow-[0_4px_20px_rgba(90,61,115,0.04)]">
            <h3 className="text-lg font-serif-tc font-bold text-[#3A2052] mb-6 flex items-center gap-2">
              <BellRing className="w-5 h-5 text-[#7E579B]" />
              <span>行前溫馨提醒</span>
            </h3>

            {/* 條列式提醒 (完全移除「建議」文字) */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#3E2954] leading-relaxed p-4 rounded-2xl bg-white border border-[#EADEF2] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8A5DA8] mt-2 shrink-0" />
                <span>請穿著舒適的休閒鞋或登山鞋，並攜帶雨具及個人常備藥品。</span>
              </li>
              <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#3E2954] leading-relaxed p-4 rounded-2xl bg-white border border-[#EADEF2] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8A5DA8] mt-2 shrink-0" />
                <span>阿里山海拔約 2,200 公尺，日夜溫差較大(氣溫在 13~20 度左右)，請務必準備保暖防風外套，採洋蔥式穿搭。</span>
              </li>
              <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#3E2954] leading-relaxed p-4 rounded-2xl bg-white border border-[#EADEF2] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8A5DA8] mt-2 shrink-0" />
                <span>阿里山彎道較多，容易暈車者務必服用暈車藥。</span>
              </li>
              <li className="flex items-start gap-3.5 text-sm sm:text-base text-[#3E2954] leading-relaxed p-4 rounded-2xl bg-white border border-[#EADEF2] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8A5DA8] mt-2 shrink-0" />
                <span>飯店響應環保，不提供一次性備品(牙刷、牙膏、刮鬍刀)等，請自行攜帶。</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* SUB-SECTION 2: 飯店資訊 (阿里山賓館) */}
      {activeSubTab === 'hotel' && (
        <div className="animate-in fade-in duration-200">
          <div className="rounded-3xl overflow-hidden border border-[#E2D2ED] shadow-[0_4px_24px_rgba(90,61,115,0.05)] bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Hotel Image Card */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 overflow-hidden bg-[#FAF4FC]">
                <img
                  src={HOTEL_INFO.image}
                  alt={HOTEL_INFO.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#553870] text-xs px-3.5 py-1.5 rounded-full border border-[#DECFEC] font-semibold shadow-xs">
                  全台最高百年名宿 · 海拔 2,274M
                </div>
              </div>

              {/* Hotel Information & History */}
              <div className="lg:col-span-6 p-6 sm:p-10 bg-gradient-to-b from-white to-[#FCF9FD]">
                <h3 className="text-2xl font-serif-tc font-bold text-[#351D4A] mb-2">
                  {HOTEL_INFO.name}
                </h3>
                <span className="text-xs text-[#7A648F] font-medium block mb-6">
                  {HOTEL_INFO.tagline}
                </span>

                {/* Hotel Historical Text from PDF */}
                <div className="pt-4 border-t border-[#EADEF2]">
                  <span className="text-xs font-semibold text-[#6E4B8B] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                    <StarSparkle size={12} color="#D97706" />
                    <span>百年歷史傳承介紹：</span>
                  </span>
                  <p className="text-sm sm:text-base text-[#4E3963] leading-relaxed font-serif-tc bg-[#FAF4FC] p-5 rounded-2xl border border-[#E5D7EE]">
                    {HOTEL_INFO.history}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-SECTION 3: 景點介紹 (阿里山小火車/奮起湖、玉山觀日、故宮南院等) */}
      {activeSubTab === 'attractions' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ATTRACTIONS.map((attraction) => (
              <div
                key={attraction.id}
                className="rounded-3xl bg-white border border-[#E2D2ED] shadow-2xs overflow-hidden flex flex-col justify-between hover:border-[#C9B2DB] transition-all group hover:shadow-xs"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-[#FAF4FC]">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {attraction.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/90 text-[#4A2D62] border border-[#DECFEC] backdrop-blur-xs font-semibold shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#351D4A] mb-1">
                      {attraction.title}
                    </h3>
                    <p className="text-xs text-[#7A648F] font-serif-tc mb-4">
                      {attraction.subtitle}
                    </p>

                    {/* Description from PDF */}
                    <p className="text-xs sm:text-sm text-[#55406B] leading-relaxed font-serif-tc mb-4 bg-[#FAF4FC] p-4 rounded-2xl border border-[#EADEF2]">
                      {attraction.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-[#F1E6F7]">
                      <span className="text-[11px] font-semibold text-[#6E4B8B] tracking-wider uppercase block">
                        行程特點：
                      </span>
                      {attraction.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#4E3963]">
                          <StarSparkle size={10} color="#D97706" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
