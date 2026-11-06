import React, { useState } from 'react';
import { CompanyLogo, MapleLeaf, StarSparkle } from './MapleLeafStars';
import { Menu, X, PhoneCall, Calendar } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: '活動總覽', anchor: 'overview' },
    { id: 'itinerary', label: '每日行程', anchor: 'itinerary' },
    { id: 'info', label: '旅遊資訊', anchor: 'info' },
    { id: 'contact', label: '緊急聯絡', anchor: 'contact' },
  ];

  const handleNavClick = (id: string, anchor: string) => {
    setActiveTab(id);
    onNavigateSection(anchor);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FCFAFD]/92 backdrop-blur-md border-b border-[#EADEF2] shadow-[0_2px_12px_rgba(90,61,115,0.03)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4 md:gap-8">
          {/* Brand title on left, company logo preceding title */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('overview', 'overview')}
              className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-lg p-1 -m-1"
            >
              <CompanyLogo />
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-serif-tc font-bold tracking-tight text-[#3A224E] group-hover:text-[#644280] transition-colors whitespace-nowrap">
                  秋季阿里山微奢華兩日遊
                </span>
                <span className="hidden sm:inline-block text-xs font-mono text-[#826F96] tracking-wide">
                  · 2026/11/14 - 11/15
                </span>
              </div>
            </button>
          </div>

          {/* Navigation Links on the top right */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.anchor)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-150 whitespace-nowrap rounded-xl ${
                    isActive
                      ? 'text-[#482D5E] font-bold bg-[#EFE7F6] border border-[#DECFEC] shadow-xs'
                      : 'text-[#645077] hover:text-[#3A224E] hover:bg-[#F6EFFB]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {isActive && (
                      <StarSparkle size={11} color="#D97706" className="animate-pulse" />
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Quick Access Action */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => handleNavClick('contact', 'contact')}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#54386C] bg-white border border-[#E0D1EC] hover:bg-[#F8F2FC] active:scale-[0.98] rounded-xl transition-all duration-150 shadow-xs whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#7E579B]" />
              <span>領隊專線</span>
            </button>
            <button
              onClick={() => handleNavClick('itinerary', 'itinerary')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#6E4B8B] to-[#553870] hover:from-[#5E3D7A] hover:to-[#472D5F] active:scale-[0.98] rounded-xl transition-all duration-150 shadow-sm whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E9D5FF]" />
              <span>查閱行程</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#482D5E] bg-[#F4ECF8] hover:bg-[#EFE7F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
              aria-label="打開導覽選單"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EADEF2] bg-[#FCFAFD] px-4 pt-3 pb-5 space-y-2 shadow-md animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.anchor)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-[#6E4B8B] text-white shadow-xs'
                      : 'bg-white text-[#4A3560] border border-[#E8DCF0] hover:bg-[#F8F2FC]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <StarSparkle size={12} color="#FDE047" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#EADEF2]/60 flex items-center justify-between text-xs text-[#6F5B82] px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <MapleLeaf size={14} color="amber" />
              2026/11/14 - 11/15
            </span>
            <button
              onClick={() => handleNavClick('contact', 'contact')}
              className="font-semibold text-[#54386C] underline underline-offset-2"
            >
              撥打領隊專線 →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
