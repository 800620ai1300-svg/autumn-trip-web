import React from 'react';
import { StarSparkle, StarFivePoint } from './MapleLeafStars';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-[#EADEF2] bg-[#FAF5FB] py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-3.5">
        {/* 只保留「秋季阿里山微奢華兩日遊 · 2026/11/14 - 11/15」文字置中 */}
        <p className="text-sm sm:text-base text-[#3A2052] font-serif-tc font-semibold tracking-wide">
          秋季阿里山微奢華兩日遊 · 2026/11/14 - 11/15
        </p>

        {/* 新增「與美好的風景相遇在秋天」文字至於最底，文字左右加兩顆星星圖案 */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#6C5382] font-serif-tc">
          <StarSparkle size={13} color="#D97706" />
          <StarFivePoint size={11} color="#F59E0B" />
          <span className="tracking-widest px-1.5 font-medium">與美好的風景相遇在秋天</span>
          <StarFivePoint size={11} color="#F59E0B" />
          <StarSparkle size={13} color="#D97706" />
        </div>
      </div>
    </footer>
  );
};
