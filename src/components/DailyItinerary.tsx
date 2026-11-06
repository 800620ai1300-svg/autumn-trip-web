import React, { useState } from 'react';
import { SCHEDULE_ITEMS } from '../data/tourData';
import { ScheduleItem } from '../types/tour';
import { MapleLeaf, StarSparkle, StarFivePoint } from './MapleLeafStars';
import {
  Clock,
  MapPin,
  Utensils,
  ChevronDown,
  ChevronUp,
  Download,
  CheckCircle2,
  Bus,
  Train,
  Mountain,
  Hotel,
  Sun,
  Moon,
  Landmark,
  Footprints,
} from 'lucide-react';

export const DailyItinerary: React.FC = () => {
  const [activeView, setActiveView] = useState<'both' | 'd1' | 'd2'>('both');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedCalendar, setCopiedCalendar] = useState<boolean>(false);

  const day1Items = SCHEDULE_ITEMS.filter((item) => item.day === 1);
  const day2Items = SCHEDULE_ITEMS.filter((item) => item.day === 2);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Icon selector based on activity type for authentic poster styling
  const getItemIcon = (item: ScheduleItem) => {
    if (item.timeRange === '傍晚') return <Moon className="w-4 h-4 text-[#8A5DA8]" />;
    if (item.activity.includes('專車') || item.activity.includes('接駁'))
      return <Bus className="w-4 h-4 text-[#8A5DA8]" />;
    if (item.activity.includes('火車')) return <Train className="w-4 h-4 text-[#8A5DA8]" />;
    if (item.activity.includes('日出') || item.activity.includes('玉山'))
      return <Sun className="w-4 h-4 text-[#D97706]" />;
    if (item.activity.includes('午餐') || item.activity.includes('晚餐') || item.activity.includes('早餐'))
      return <Utensils className="w-4 h-4 text-[#D97706]" />;
    if (item.activity.includes('入住') || item.activity.includes('退房') || item.activity.includes('賓館'))
      return <Hotel className="w-4 h-4 text-[#8A5DA8]" />;
    if (item.activity.includes('博物館') || item.activity.includes('故宮'))
      return <Landmark className="w-4 h-4 text-[#8A5DA8]" />;
    if (item.activity.includes('森林浴')) return <Footprints className="w-4 h-4 text-[#8A5DA8]" />;
    return <Mountain className="w-4 h-4 text-[#8A5DA8]" />;
  };

  // Helper to generate and download an .ics iCalendar file for the entire trip
  const handleExportIcs = () => {
    const calendarEvents = SCHEDULE_ITEMS.map((item) => {
      const formatIcsDate = (isoStr: string) => {
        return new Date(isoStr).toISOString().replace(/-|:|\.\d+/g, '');
      };
      return [
        'BEGIN:VEVENT',
        `SUMMARY:【阿里山秋季員工旅遊】${item.activity}`,
        `DESCRIPTION:${item.detailNote || ''} ${item.mealNote || ''}`,
        `LOCATION:${item.location}`,
        `DTSTART:${formatIcsDate(item.startIso)}`,
        `DTEND:${formatIcsDate(item.endIso)}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
      ].join('\r\n');
    }).join('\r\n');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Alishan Autumn Retreat//TW',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:秋季阿里山微奢華兩日遊',
      calendarEvents,
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Alishan_Tour_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedCalendar(true);
    setTimeout(() => setCopiedCalendar(false), 3000);
  };

  const renderTimelineList = (items: ScheduleItem[]) => (
    <div className="space-y-3.5 relative">
      {/* Delicate vertical timeline guide line */}
      <div className="absolute left-[54px] sm:left-[60px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-[#E2D4EB] via-[#DBC9E5] to-[#E2D4EB] pointer-events-none" />

      {items.map((item) => {
        const hasDetails = Boolean(item.detailNote);
        const isExpanded = hasDetails && expandedId === item.id;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-150 overflow-hidden relative z-10 ${
              isExpanded
                ? 'bg-white border-[#C9B2DB] shadow-sm ring-1 ring-[#EADEF2]'
                : 'bg-white/90 hover:bg-white border-[#EADEF2] hover:border-[#D1BEE0] shadow-2xs'
            }`}
          >
            {/* Timeline Row */}
            <div
              onClick={() => hasDetails && toggleExpand(item.id)}
              className={`p-3.5 sm:p-4 flex items-start sm:items-center justify-between gap-3 select-none ${
                hasDetails ? 'cursor-pointer hover:bg-[#FAF4FC]/60' : 'cursor-default'
              }`}
            >
              {/* Left Column: Time Pill + Icon + Activity Details */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                {/* Time Pill matching reference poster */}
                <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#EFE7F6] text-[#553B70] text-xs font-semibold font-mono whitespace-nowrap min-w-[80px] sm:min-w-[92px] border border-[#DECFEC]/60 shrink-0 shadow-2xs">
                  {item.timeRange}
                </div>

                {/* Activity Icon */}
                <div className="w-8 h-8 rounded-full bg-[#FAF3FC] border border-[#EADEF2] flex items-center justify-center shrink-0">
                  {getItemIcon(item)}
                </div>

                {/* Activity Name & Location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1 min-w-0">
                  <span className="text-sm sm:text-base font-bold text-[#351D4A] font-serif-tc truncate">
                    {item.activity}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#7B668F] shrink-0">
                    <MapPin className="w-3 h-3 text-[#A855F7]" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Right Column: Meal Tag & Expand Chevron */}
              <div className="flex items-center gap-2 shrink-0">
                {item.mealNote && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#92400E] bg-[#FFFBEB] px-2.5 py-1 rounded-md border border-[#FDE68A] font-medium">
                    <Utensils className="w-3 h-3 text-[#D97706]" />
                    {item.mealNote.split('：')[0]}
                  </span>
                )}

                {hasDetails && (
                  <div className="p-1 rounded-lg text-[#7A5D94] hover:bg-[#F3EAF8] transition-colors">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Expanded Content: 行程說明 */}
            {isExpanded && item.detailNote && (
              <div className="px-4 pb-4 pt-1 border-t border-[#F1E6F7] bg-[#FAF5FB]/80 animate-in fade-in duration-150">
                <div className="mt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6E4B8B] mb-1.5">
                    <StarSparkle size={10} color="#D97706" />
                    <span>行程說明：</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4E3963] leading-relaxed bg-white p-3 rounded-xl border border-[#E5D7EE]">
                    {item.detailNote}
                  </p>
                  {item.mealNote && (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#92400E] bg-[#FFFBEB] px-3 py-1 rounded-lg border border-[#FDE68A]">
                      <Utensils className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>{item.mealNote}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="itinerary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#EADEF2]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold text-[#3A2052] flex items-center gap-2">
            <span>每日行程</span>
            <MapleLeaf size={22} color="amber" />
          </h2>
          <p className="text-xs sm:text-sm text-[#735D8A] mt-1 font-serif-tc">
            山林 · 美景 · 美食 · 輕奢享受
          </p>
        </div>

        {/* View Switcher & Export */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="hidden lg:flex items-center p-1 bg-[#F4ECF8] rounded-xl border border-[#E5D7EE]">
            <button
              onClick={() => setActiveView('both')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeView === 'both'
                  ? 'bg-white text-[#4A2D62] shadow-2xs'
                  : 'text-[#6F5786] hover:text-[#3A2052]'
              }`}
            >
              雙日並列 (海報版)
            </button>
            <button
              onClick={() => setActiveView('d1')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeView === 'd1'
                  ? 'bg-white text-[#4A2D62] shadow-2xs'
                  : 'text-[#6F5786] hover:text-[#3A2052]'
              }`}
            >
              DAY 1
            </button>
            <button
              onClick={() => setActiveView('d2')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeView === 'd2'
                  ? 'bg-white text-[#4A2D62] shadow-2xs'
                  : 'text-[#6F5786] hover:text-[#3A2052]'
              }`}
            >
              DAY 2
            </button>
          </div>

          {/* Export to Calendar Button */}
          <button
            onClick={handleExportIcs}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#54386C] bg-white border border-[#E0D1EC] hover:bg-[#F8F2FC] rounded-xl shadow-2xs transition-colors whitespace-nowrap"
            title="下載 .ics 檔案，一鍵加入 Google/Apple 行事曆"
          >
            {copiedCalendar ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">已加入行事曆</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-[#7E579B]" />
                <span>加入手機行事曆</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid: Responsive Two-Column Poster Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* DAY 1 COLUMN */}
        {(activeView === 'both' || activeView === 'd1') && (
          <div className="rounded-3xl bg-gradient-to-b from-[#FAF4FC] via-white to-[#F8F0FA] border border-[#E2D2ED] p-5 sm:p-7 shadow-[0_4px_24px_rgba(90,61,115,0.04)] relative overflow-hidden">
            {/* Top Badge & Day Title from Reference Poster */}
            <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-[#EADEF2]">
              <div className="w-12 h-12 rounded-full bg-[#7D6895] text-white flex flex-col items-center justify-center font-serif-tc shadow-xs shrink-0">
                <span className="text-[9px] uppercase tracking-wider font-sans font-bold leading-none">DAY</span>
                <span className="text-lg font-bold leading-none mt-0.5">1</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif-tc font-bold text-[#351D4A]">
                  11/14 (六) 台北→嘉義→奮起湖→阿里山
                </h3>
                <span className="text-xs text-[#7A648F]">
                  首日精選：奮起湖山城老街、鐵道便當、阿里山森林浴與微奢華入住
                </span>
              </div>
            </div>

            {/* Day 1 List */}
            {renderTimelineList(day1Items)}

            {/* Bottom Poster Script Note */}
            <div className="mt-6 pt-4 border-t border-[#EADEF2] flex items-center justify-between text-xs text-[#826998]">
              <span className="italic font-serif">Good Times in Alishan</span>
              <MapleLeaf size={14} color="amber" />
            </div>
          </div>
        )}

        {/* DAY 2 COLUMN */}
        {(activeView === 'both' || activeView === 'd2') && (
          <div className="rounded-3xl bg-gradient-to-b from-[#FAF4FC] via-white to-[#F8F0FA] border border-[#E2D2ED] p-5 sm:p-7 shadow-[0_4px_24px_rgba(90,61,115,0.04)] relative overflow-hidden">
            {/* Top Badge & Day Title from Reference Poster */}
            <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-[#EADEF2]">
              <div className="w-12 h-12 rounded-full bg-[#7D6895] text-white flex flex-col items-center justify-center font-serif-tc shadow-xs shrink-0">
                <span className="text-[9px] uppercase tracking-wider font-sans font-bold leading-none">DAY</span>
                <span className="text-lg font-bold leading-none mt-0.5">2</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif-tc font-bold text-[#351D4A]">
                  11/15 (日) 阿里山 → 玉山觀日 → 達娜伊谷 → 故宮南院 → 台北
                </h3>
                <span className="text-xs text-[#7A648F]">
                  次日精選：玉山浩瀚日出、鄒族風味饗宴、國立故宮南院水墨藝術
                </span>
              </div>
            </div>

            {/* Day 2 List */}
            {renderTimelineList(day2Items)}

            {/* Bottom Poster Script Note */}
            <div className="mt-6 pt-4 border-t border-[#EADEF2] flex items-center justify-between text-xs text-[#826998]">
              <span className="font-serif-tc">與美好的風景相遇在秋天</span>
              <StarFivePoint size={13} color="#D97706" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
