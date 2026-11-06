import React, { useState } from 'react';
import { TOUR_LEADERS } from '../data/tourData';
import { MapleLeaf, StarSparkle } from './MapleLeafStars';
import {
  Phone,
  Copy,
  Check,
  Bus,
} from 'lucide-react';

export const EmergencyContacts: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone.replace(/-/g, ''));
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#EADEF2]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold text-[#3A2052] flex items-center gap-2">
            <span>導遊領隊緊急聯絡</span>
            <MapleLeaf size={22} color="amber" />
          </h2>
          <p className="text-xs sm:text-sm text-[#735D8A] mt-1 font-serif-tc">
            若遇突發狀況、身體不適或與車隊脫節，請立即撥打隨行領隊電話。
          </p>
        </div>
      </div>

      {/* Main Tour Leaders */}
      <div>
        <h3 className="text-xs font-semibold text-[#6E4B8B] uppercase tracking-wider mb-4 flex items-center gap-2">
          <Bus className="w-4 h-4 text-[#8A5DA8]" />
          <span>隨團專車領隊 (直撥通話 / 複製號碼)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOUR_LEADERS.map((leader) => {
            const cleanPhone = leader.phone.replace(/[^0-9]/g, '');
            const isCopied = copiedPhone === leader.phone;

            return (
              <div
                key={leader.busGroup}
                className="relative rounded-3xl bg-gradient-to-br from-[#FAF4FC] via-white to-[#F8F0FA] border-2 border-[#E2D2ED] p-6 sm:p-7 shadow-[0_4px_20px_rgba(90,61,115,0.04)] hover:border-[#C9B2DB] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EFE7F6] text-[#4F3369] border border-[#DECFEC] shadow-2xs">
                      <Bus className="w-3.5 h-3.5 text-[#D97706]" />
                      {leader.busGroup}
                    </span>
                    <span className="text-xs text-[#7A648F] font-medium">
                      {leader.role}
                    </span>
                  </div>

                  <div className="my-3">
                    <span className="text-xs text-[#7E6991] block mb-1">隨車領隊姓名</span>
                    <div className="text-2xl font-serif-tc font-bold text-[#351D4A]">
                      {leader.name}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#4A2D62] tracking-wide">
                      {leader.phone}
                    </span>
                  </div>
                </div>

                {/* Call & Copy Action Buttons */}
                <div className="mt-6 pt-5 border-t border-[#EADEF2] flex items-center gap-3">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#6E4B8B] to-[#553870] hover:from-[#5E3D7A] hover:to-[#472D5F] active:scale-[0.98] transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-[#E9D5FF]" />
                    <span>一鍵撥打電話</span>
                  </a>

                  <button
                    onClick={() => handleCopy(leader.phone)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#4A2D62] bg-white border border-[#DECFEC] hover:bg-[#FAF4FC] active:scale-[0.98] transition-all shadow-2xs"
                    title="複製電話號碼"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">已複製</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#7E579B]" />
                        <span>複製號碼</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
