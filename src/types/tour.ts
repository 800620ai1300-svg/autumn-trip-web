export interface ScheduleItem {
  id: string;
  day: 1 | 2;
  timeRange: string;
  startIso: string; // ISO 8601 with +08:00 for accurate device comparison
  endIso: string;
  location: string;
  activity: string;
  mealNote?: string;
  detailNote?: string;
  description?: string;
  image?: string;
  badge?: string;
}

export interface TourLeader {
  busGroup: string;
  departureCity: string;
  role: string;
  name: string;
  phone: string;
}

export interface EmergencyPhone {
  name: string;
  phone: string;
  desc: string;
  category: 'hotel' | 'medical' | 'police' | 'visitor';
}

export interface AttractionInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  tags: string[];
}

export interface WeatherCondition {
  location: string;
  elevation: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  condition: string;
  icon: string;
  rainProb: string;
  humidity: string;
  uvIndex: string;
  wind: string;
  sunrise: string;
  sunset: string;
  clothingTip: string;
}
