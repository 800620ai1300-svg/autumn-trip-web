import React, { useState, useEffect } from 'react';
import { SCHEDULE_ITEMS, TOUR_META } from '../data/tourData';
import { ScheduleItem } from '../types/tour';
import { MapleLeaf, StarSparkle } from './MapleLeafStars';
import {
  Clock,
  Navigation,
  ArrowRight,
  Luggage,
  HeartHandshake,
  CalendarCheck,
  MapPin,
  Utensils,
  Sparkles,
  SlidersHorizontal,
  RotateCcw,
} from 'lucide-react';

interface DynamicDashboardProps {
  onSwitchToItinerary: () => void;
}

export const DynamicDashboard: React.FC<DynamicDashboardProps> = ({
  onSwitchToItinerary,
}) => {
  // Real device time synchronized every second
  const [deviceTime, setDeviceTime] = useState<Date>(new Date());
  // Optional preview override for testing the during/after states
  const [simulatedTime, setSimulatedTime] = useState<Date | null>(null);
  const [showSimControls, setShowSimControls] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDeviceTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeTime = simulatedTime || deviceTime;

  // Tour start & end timestamps
  const tripStartTime = new Date(TOUR_META.startDateIso).getTime();
  const tripEndTime = new Date(TOUR_META.endDateIso).getTime();
  const currentTimeMs = activeTime.getTime();

  // Status computation
  let tripStatus: 'BEFORE' | 'DURING' | 'AFTER' = 'BEFORE';
  if (currentTimeMs < tripStartTime) {
    tripStatus = 'BEFORE';
  } else if (currentTimeMs > tripEndTime) {
    tripStatus = 'AFTER';
  } else {
    tripStatus = 'DURING';
  }

  // Find current and next schedule items during the trip
  let currentItem: ScheduleItem | null = null;
  let nextItem: ScheduleItem | null = null;

  if (tripStatus === 'DURING') {
    // Sort items by start time
    const sorted = [...SCHEDULE_ITEMS].sort(
      (a, b) => new Date(a.startIso).getTime() - new Date(b.startIso).getTime()
    );

    // Find matching active item
    for (let i = 0; i < sorted.length; i++) {
      const start = new Date(sorted[i].startIso).getTime();
      const end = new Date(sorted[i].endIso).getTime();

      if (currentTimeMs >= start && currentTimeMs < end) {
        currentItem = sorted[i];
        nextItem = sorted[i + 1] || null;
        break;
      } else if (currentTimeMs < start) {
        // Gap before next item
        nextItem = sorted[i];
        currentItem = sorted[i - 1] || sorted[0];
        break;
      }
    }

    if (!currentItem && sorted.length > 0) {
      currentItem = sorted[sorted.length - 1];
    }
  }

  // Countdown computation for BEFORE status
  const timeDiff = Math.max(0, tripStartTime - currentTimeMs);
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Formatter for readable device time
  const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const daysArr = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    const weekday = daysArr[date.getDay()];
    const hoursStr = String(date.getHours()).padStart(2, '0');
    const minStr = String(date.getMinutes()).padStart(2, '0');
    const secStr = String(date.getSeconds()).padStart(2, '0');
    return `${year}年${month}月${day}日 (${weekday}) ${hoursStr}:${minStr}:${secStr}`;
  };

  return (
    <section id="dashboard" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 z-20">
      {/* Outer Card Container: Warm, Pearlescent White with Lilac Border */}
      <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(90,61,115,0.06)] border border-[#EADEF2] overflow-hidden">
        {/* Top Synchronized Clock Bar: Luminous, warm pastel lavender tone */}
        <div className="bg-gradient-to-r from-[#F4EDF8] via-[#FAF4FD] to-[#F4EDF8] text-[#3D2555] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm border-b border-[#E8DCF0]">
          <div className="flex items-center gap-2 font-mono">
            <Clock className="w-4 h-4 text-[#D97706] animate-pulse" />
            <span className="text-[#6E5684]">裝置同步時間：</span>
            <span className="font-semibold text-[#3D2555] tracking-wide">
              {formatDateTime(activeTime)}
            </span>
            {simulatedTime && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold border border-[#FDE68A] ml-1">
                模擬預覽中
              </span>
            )}
          </div>

          {/* Time simulation toggles */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSimControls(!showSimControls)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-[#F8F2FC] text-[#553B70] text-xs font-medium border border-[#DFCFEB] transition-colors shadow-2xs"
              title="測試不同時間點的行程儀表板狀態"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{showSimControls ? '收合時間測試' : '時間模擬切換'}</span>
            </button>
            {simulatedTime && (
              <button
                onClick={() => setSimulatedTime(null)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EFE7F6] hover:bg-[#E7DBF0] text-[#553B70] text-xs transition-colors"
                title="回到真實手機/電腦時間"
              >
                <RotateCcw className="w-3 h-3 text-[#795B94]" />
                <span>重置時間</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Simulation Bar (Expandable) */}
        {showSimControls && (
          <div className="bg-[#FAF5FB] border-b border-[#E8DCF0] px-4 sm:px-6 py-3 text-xs text-[#523A68] flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#3D2555] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#885BAA]" />
              快速切換時間體驗：
            </span>
            <button
              onClick={() => setSimulatedTime(null)}
              className={`px-3 py-1 rounded-md transition-colors ${
                !simulatedTime
                  ? 'bg-[#6C4989] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#DFCFEB] text-[#553B70] hover:bg-[#F4ECF8]'
              }`}
            >
              真實裝置時間 (未出發)
            </button>
            <button
              onClick={() => setSimulatedTime(new Date('2026-11-14T11:45:00+08:00'))}
              className={`px-3 py-1 rounded-md transition-colors ${
                simulatedTime?.toISOString() === new Date('2026-11-14T11:45:00+08:00').toISOString()
                  ? 'bg-[#6C4989] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#DFCFEB] text-[#553B70] hover:bg-[#F4ECF8]'
              }`}
            >
              11/14 11:45 奮起湖午餐中
            </button>
            <button
              onClick={() => setSimulatedTime(new Date('2026-11-14T16:20:00+08:00'))}
              className={`px-3 py-1 rounded-md transition-colors ${
                simulatedTime?.toISOString() === new Date('2026-11-14T16:20:00+08:00').toISOString()
                  ? 'bg-[#6C4989] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#DFCFEB] text-[#553B70] hover:bg-[#F4ECF8]'
              }`}
            >
              11/14 16:20 阿里山森林浴中
            </button>
            <button
              onClick={() => setSimulatedTime(new Date('2026-11-15T05:30:00+08:00'))}
              className={`px-3 py-1 rounded-md transition-colors ${
                simulatedTime?.toISOString() === new Date('2026-11-15T05:30:00+08:00').toISOString()
                  ? 'bg-[#6C4989] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#DFCFEB] text-[#553B70] hover:bg-[#F4ECF8]'
              }`}
            >
              11/15 05:30 玉山觀日出中
            </button>
            <button
              onClick={() => setSimulatedTime(new Date('2026-11-15T21:00:00+08:00'))}
              className={`px-3 py-1 rounded-md transition-colors ${
                simulatedTime?.toISOString() === new Date('2026-11-15T21:00:00+08:00').toISOString()
                  ? 'bg-[#6C4989] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#DFCFEB] text-[#553B70] hover:bg-[#F4ECF8]'
              }`}
            >
              11/15 21:00 旅程已結束
            </button>
          </div>
        )}

        {/* Dashboard Content per Status */}
        <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white to-[#FCF9FD]">
          {/* STATE 1: BEFORE TRIP (< 11/14 06:40) */}
          {tripStatus === 'BEFORE' && (
            <div className="text-center py-4 sm:py-6 max-w-2xl mx-auto animate-in fade-in duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F6EEFA] border border-[#EADEF2] text-[#6A4788] mb-5 shadow-xs">
                <Luggage className="w-8 h-8 text-[#6A4788]" />
              </div>

              {/* Required Main Text: 行程即將開始 */}
              <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold text-[#3A2052] mb-3 tracking-tight">
                行程即將開始
              </h2>

              {/* Required Subtitle (small text): 請收拾好行李，帶著愉快的心情和我們一起出發 */}
              <p className="text-sm sm:text-base text-[#614D75] font-serif-tc leading-relaxed mb-8">
                請收拾好行李，帶著愉快的心情和我們一起出發
              </p>

              {/* Departure Countdown Banner */}
              <div className="bg-gradient-to-br from-[#FAF3FC] via-white to-[#F8F0FA] rounded-2xl border border-[#E2D2ED] p-5 sm:p-6 mb-8 shadow-xs">
                <div className="text-xs font-semibold text-[#6E4B8B] tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
                  <StarSparkle size={12} color="#D97706" />
                  <span>距離出發倒數計時</span>
                  <StarSparkle size={12} color="#D97706" />
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
                  <div className="flex flex-col items-center bg-white p-2.5 sm:p-3 rounded-xl border border-[#EADEF2] shadow-2xs">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#3E2554] tabular-nums">
                      {days}
                    </span>
                    <span className="text-[11px] text-[#7A668D] font-medium">天</span>
                  </div>
                  <div className="flex flex-col items-center bg-white p-2.5 sm:p-3 rounded-xl border border-[#EADEF2] shadow-2xs">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#3E2554] tabular-nums">
                      {String(hours).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-[#7A668D] font-medium">時</span>
                  </div>
                  <div className="flex flex-col items-center bg-white p-2.5 sm:p-3 rounded-xl border border-[#EADEF2] shadow-2xs">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#3E2554] tabular-nums">
                      {String(minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-[#7A668D] font-medium">分</span>
                  </div>
                  <div className="flex flex-col items-center bg-white p-2.5 sm:p-3 rounded-xl border border-[#EADEF2] shadow-2xs">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#6A4788] tabular-nums">
                      {String(seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-[#7A668D] font-medium">秒</span>
                  </div>
                </div>

                <div className="mt-4 text-xs text-[#6A4E7E] flex items-center justify-center gap-2">
                  <MapleLeaf size={14} color="amber" />
                  <span>首發班車：2026/11/14 06:40 台北出發 · 07:30 台中出發</span>
                </div>
              </div>

              {/* View Full Schedule Button */}
              <button
                onClick={onSwitchToItinerary}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#482D5E] bg-[#EFE6F6] hover:bg-[#E6DBF0] border border-[#DECFEC] active:scale-[0.98] transition-all shadow-xs"
              >
                <CalendarCheck className="w-4 h-4 text-[#6A4788]" />
                <span>提前查閱完整行程表</span>
              </button>
            </div>
          )}

          {/* STATE 2: AFTER TRIP (> 11/15 19:00) */}
          {tripStatus === 'AFTER' && (
            <div className="text-center py-6 sm:py-8 max-w-2xl mx-auto animate-in fade-in duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F6EEFA] border border-[#EADEF2] text-[#6A4788] mb-5 shadow-xs">
                <HeartHandshake className="w-8 h-8 text-[#6A4788]" />
              </div>

              {/* Required Main Text: 旅程已完成 */}
              <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold text-[#3A2052] mb-3 tracking-tight">
                旅程已完成
              </h2>

              {/* Required Subtitle (small text): 謝謝你參與本次旅行，期待下次見！ */}
              <p className="text-sm sm:text-base text-[#614D75] font-serif-tc leading-relaxed mb-8">
                謝謝你參與本次旅行，期待下次見！
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FAF3FC] via-white to-[#FAF3FC] border border-[#E8DCF0] max-w-lg mx-auto mb-8 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#573971] mb-2">
                  <StarSparkle size={13} color="#D97706" />
                  <span>本次旅行圓滿回顧</span>
                </div>
                <div className="text-xs text-[#5D4773] space-y-1.5 leading-relaxed">
                  <p>· 奮起湖老街與山城鐵路便當文化體驗</p>
                  <p>· 入住百年歷史阿里山賓館（海拔 2,274M）</p>
                  <p>· 阿里山森林浴、神木林道與清晨玉山浩瀚日出</p>
                  <p>· 達娜伊谷鄒族原鄉風味與故宮南院水墨藝術洗禮</p>
                </div>
              </div>

              <button
                onClick={onSwitchToItinerary}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#482D5E] bg-[#EFE6F6] hover:bg-[#E6DBF0] border border-[#DECFEC] active:scale-[0.98] transition-all shadow-xs"
              >
                <span>查看行程歷史回顧</span>
                <ArrowRight className="w-4 h-4 text-[#6A4788]" />
              </button>
            </div>
          )}

          {/* STATE 3: DURING TRIP (11/14 06:40 ~ 11/15 19:00) */}
          {tripStatus === 'DURING' && (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EADEF2]">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C3AED]"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#3D2555] font-serif-tc">
                    活動進行中 · 動態行程追蹤
                  </span>
                </div>
                <div className="text-xs text-[#6F5188] font-medium">
                  第 {currentItem?.day || 1} 天行程
                </div>
              </div>

              {/* Grid: 目前行程 & 下一個行程 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-8">
                {/* 1. 目前行程 (Current Activity) */}
                <div className="relative rounded-2xl bg-gradient-to-br from-[#FAF3FC] via-white to-[#F7EEFB] border-2 border-[#D8C2E8] p-6 shadow-xs flex flex-col justify-between">
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#6C4989] text-white shadow-2xs">
                      <Sparkles className="w-3 h-3 text-[#FDE047]" />
                      目前行程
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#684784] mb-2 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#8A5DA8]" />
                      <span>{currentItem?.timeRange}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#351D4A] mb-2">
                      {currentItem?.activity}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#5C4573] font-medium mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#8A5DA8] shrink-0" />
                      <span>地點：{currentItem?.location}</span>
                    </div>

                    {currentItem?.mealNote && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] text-xs font-medium mb-3">
                        <Utensils className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{currentItem.mealNote}</span>
                      </div>
                    )}

                    {currentItem?.detailNote && (
                      <p className="text-xs sm:text-sm text-[#5B466F] leading-relaxed mt-1">
                        {currentItem.detailNote}
                      </p>
                    )}
                  </div>

                  {currentItem?.image && (
                    <div className="mt-4 pt-4 border-t border-[#EADEF2] flex items-center gap-3">
                      <img
                        src={currentItem.image}
                        alt={currentItem.activity}
                        className="w-14 h-14 rounded-lg object-cover border border-[#DFCFEB] shrink-0"
                      />
                      <span className="text-xs text-[#6A557F] line-clamp-2">
                        {currentItem.description || currentItem.detailNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. 下一個行程 (Next Activity) */}
                <div className="rounded-2xl bg-white border border-[#E4D5EE] p-6 shadow-xs flex flex-col justify-between hover:border-[#D1BEE0] transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#7A648F] flex items-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5 text-[#8A5DA8]" />
                        下一個行程
                      </span>
                      {nextItem && (
                        <span className="text-xs font-mono text-[#583973] font-semibold bg-[#F5ECF8] px-2.5 py-0.5 rounded-md border border-[#E5D7EE]">
                          {nextItem.timeRange}
                        </span>
                      )}
                    </div>

                    {nextItem ? (
                      <>
                        <h3 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#3A224E] mb-2">
                          {nextItem.activity}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs text-[#644E7B] font-medium mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#8F77A5] shrink-0" />
                          <span>預計地點：{nextItem.location}</span>
                        </div>

                        {nextItem.mealNote && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF4FD] border border-[#EADEF2] text-[#61457A] text-xs font-medium mb-3">
                            <Utensils className="w-3.5 h-3.5 text-[#8A5DA8]" />
                            <span>{nextItem.mealNote}</span>
                          </div>
                        )}

                        <p className="text-xs sm:text-sm text-[#66507A] leading-relaxed">
                          {nextItem.detailNote || nextItem.description || '緊接著依導隊指引集合出發。'}
                        </p>
                      </>
                    ) : (
                      <div className="py-6 text-center text-[#745E8B] text-sm font-serif-tc">
                        此為今日最後一項行程，請在飯店充分放鬆休息。
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#F2E8F8] text-xs text-[#7A5D94] flex items-center justify-between">
                    <span>提示：請依隨團領隊廣播為準</span>
                    <MapleLeaf size={14} color="amber" />
                  </div>
                </div>
              </div>

              {/* Required Action Button: 完整行程按鈕 (點選可直接切換至行程表頁面) */}
              <div className="text-center pt-2">
                <button
                  onClick={onSwitchToItinerary}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#6E4B8B] to-[#553870] hover:from-[#5E3D7A] hover:to-[#472D5F] active:scale-[0.98] shadow-sm transition-all duration-200"
                >
                  <CalendarCheck className="w-4 h-4 text-[#E9D5FF]" />
                  <span>查看完整行程</span>
                  <ArrowRight className="w-4 h-4 text-[#E9D5FF]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
