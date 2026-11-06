/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DynamicDashboard } from './components/DynamicDashboard';
import { WeatherWidget } from './components/WeatherWidget';
import { DailyItinerary } from './components/DailyItinerary';
import { TravelInfo } from './components/TravelInfo';
import { EmergencyContacts } from './components/EmergencyContacts';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FAF6FC] via-[#FDFBFD] to-[#FAF5FA] text-[#2D1F3B] selection:bg-[#EADEF2] selection:text-[#3B2052]">
      {/* 頂部 App Header 導覽 */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigateSection={handleTabChange}
      />

      <main className="flex-1">
        {/* 1. 活動總覽：只顯示 hero、即時行程 (動態行程儀表板) 和 天氣 */}
        {activeTab === 'overview' && (
          <div className="animate-in fade-in duration-250">
            <Hero />
            <DynamicDashboard onSwitchToItinerary={() => handleTabChange('itinerary')} />
            <WeatherWidget />
          </div>
        )}

        {/* 2. 每日行程 */}
        {activeTab === 'itinerary' && (
          <div className="animate-in fade-in duration-250">
            <DailyItinerary />
          </div>
        )}

        {/* 3. 旅遊資訊：三大專屬版塊（溫馨提醒、飯店資訊、景點介紹） */}
        {activeTab === 'info' && (
          <div className="animate-in fade-in duration-250">
            <TravelInfo />
          </div>
        )}

        {/* 4. 緊急聯絡 */}
        {activeTab === 'contact' && (
          <div className="animate-in fade-in duration-250">
            <EmergencyContacts />
          </div>
        )}
      </main>

      {/* 頁尾 */}
      <Footer onNavigateSection={handleTabChange} />
    </div>
  );
}
