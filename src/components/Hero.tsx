import React from 'react';
import { MapleLeaf, StarSparkle, StarFivePoint, CrescentMoon } from './MapleLeafStars';
import { TOUR_META } from '../data/tourData';

interface HeroProps {
  onScrollToDashboard?: () => void;
  onViewItinerary?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FCF8FC] via-[#F8EFFB] to-[#FAF5FA] pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-[#EADEF2]/80 flex items-center justify-center">
      {/* Background: Warm Watercolor Sunrise & Soft Mountain Mist */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_sunrise.jpg"
          alt="阿里山晨曦雲海與玉山群峰浩瀚日出"
          className="w-full h-full object-cover object-center opacity-20 mix-blend-multiply filter blur-[0.4px] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Warm dawn watercolor tint layers (amber glow + lavender mist) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5FA] via-[#FCF8FC]/60 to-[#F6EEFA]/70" />
        <div className="absolute inset-0 bg-radial-at-t from-[#FEEBC8]/30 via-[#E9D5FF]/20 to-transparent" />
        
        {/* Soft watercolor mountain wave overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF6FC] to-transparent pointer-events-none" />
      </div>

      {/* Decorative Autumn Leaves & Celestial Stars from Reference Poster */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Top-Left cluster of warm autumn maple leaves (russet orange & amber gold) */}
        <div className="absolute top-4 left-[3%] sm:left-[6%] animate-float-slow opacity-95 drop-shadow-xs">
          <MapleLeaf size={48} color="amber" />
        </div>
        <div className="absolute top-14 left-[8%] sm:left-[12%] animate-float-slow opacity-85 [animation-delay:1.5s]">
          <MapleLeaf size={34} color="gold" />
        </div>
        <div className="absolute top-2 left-[15%] sm:left-[18%] animate-float-slow opacity-80 [animation-delay:3s]">
          <MapleLeaf size={26} color="rose" />
        </div>

        {/* Top-Right: Crescent Moon & Golden Stars cluster (just like the poster) */}
        <div className="absolute top-6 right-[6%] sm:right-[10%] flex flex-col items-center">
          <CrescentMoon size={28} color="#E89F38" className="opacity-90 drop-shadow-xs" />
        </div>
        <div className="absolute top-6 right-[14%] animate-pulse-glow">
          <StarFivePoint size={14} color="#F59E0B" />
        </div>
        <div className="absolute top-12 right-[18%] animate-pulse-glow [animation-delay:1.2s]">
          <StarSparkle size={16} color="#D97706" />
        </div>
        <div className="absolute top-16 right-[8%] animate-pulse-glow [animation-delay:2s]">
          <StarFivePoint size={12} color="#FBBF24" />
        </div>

        {/* Floating autumn maple leaves at bottom-right (as in poster) */}
        <div className="absolute bottom-6 right-[4%] sm:right-[8%] animate-float-slow opacity-90 [animation-delay:2.5s]">
          <MapleLeaf size={44} color="amber" />
        </div>
        <div className="absolute bottom-16 right-[10%] sm:right-[14%] animate-float-slow opacity-85 [animation-delay:4s]">
          <MapleLeaf size={32} color="rose" />
        </div>
        <div className="absolute bottom-4 left-[6%] animate-float-slow opacity-80 [animation-delay:2s]">
          <MapleLeaf size={36} color="purple" />
        </div>

        {/* Scattered soft golden stars across the sky */}
        <div className="absolute top-1/3 left-[16%] animate-pulse-glow [animation-delay:0.8s]">
          <StarSparkle size={13} color="#D97706" />
        </div>
        <div className="absolute bottom-1/3 right-[22%] animate-pulse-glow [animation-delay:2.3s]">
          <StarSparkle size={14} color="#E26838" />
        </div>
      </div>

      {/* Main Hero Typography: Warm, Graceful & Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Date: 11/14-11/15 in elegant soft purple-grey serif, matching poster */}
        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
          <StarSparkle size={13} color="#D97706" />
          <span className="text-lg sm:text-2xl font-serif-tc font-semibold text-[#5C4573] tracking-[0.25em]">
            11/14 - 11/15
          </span>
          <StarSparkle size={13} color="#D97706" />
        </div>

        {/* Main Title: 秋季阿里山微奢華兩日遊 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-tc font-black tracking-tight text-[#3A2052] mb-4 sm:mb-5 leading-[1.25] text-balance drop-shadow-xs">
          {TOUR_META.title}
        </h1>

        {/* Delicate divider with maple leaf & golden stars */}
        <div className="flex items-center justify-center gap-3 w-56 mb-5 opacity-80">
          <div className="h-px bg-gradient-to-r from-transparent via-[#CBA8E0] to-transparent flex-1" />
          <MapleLeaf size={18} color="amber" />
          <div className="h-px bg-gradient-to-r from-transparent via-[#CBA8E0] to-transparent flex-1" />
        </div>

        {/* Subtitle: 在芬多精的環抱下共享浩瀚日出，在水墨意象建築中沐浴藝術的洗禮 */}
        <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-[#4A3560] font-serif-tc font-normal leading-relaxed text-balance">
          {TOUR_META.subtitle}
        </p>

        {/* Poster Romantic Script Accent: Good Times in Alishan */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#79618E] font-serif italic">
          <span className="tracking-wider">✦ Good Times in Alishan ✦</span>
        </div>
      </div>
    </section>
  );
};
