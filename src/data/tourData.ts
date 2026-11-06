import { ScheduleItem, TourLeader, EmergencyPhone, AttractionInfo, WeatherCondition } from '../types/tour';

export const TOUR_META = {
  title: '秋季阿里山微奢華兩日遊',
  subtitle: '在芬多精的環抱下共享浩瀚日出，在水墨意象建築中沐浴藝術的洗禮',
  dateRange: '2026/11/14 - 11/15',
  startDateIso: '2026-11-14T06:40:00+08:00',
  endDateIso: '2026-11-15T19:00:00+08:00',
  companyName: '企業年度秋季員工旅遊',
  hotelName: '阿里山賓館 (海拔 2,274M 百年歷史度假飯店)',
};

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  // DAY 1 - 2026/11/14
  {
    id: 'd1-taipei-dept',
    day: 1,
    timeRange: '06:40',
    startIso: '2026-11-14T06:40:00+08:00',
    endIso: '2026-11-14T07:30:00+08:00',
    location: '台北',
    activity: '專車出發',
    mealNote: '早餐：摩斯漢堡',
    detailNote: 'A 車準時於指定集合點發車，備有能量元氣早餐',
    badge: '出發'
  },
  {
    id: 'd1-taichung-dept',
    day: 1,
    timeRange: '07:30',
    startIso: '2026-11-14T07:30:00+08:00',
    endIso: '2026-11-14T11:00:00+08:00',
    location: '台中',
    activity: '專車出發',
    mealNote: '早餐：摩斯漢堡',
    detailNote: 'B 車於台中集合點發車',
    badge: '出發'
  },
  {
    id: 'd1-fenqihu',
    day: 1,
    timeRange: '11:00 - 12:30',
    startIso: '2026-11-14T11:00:00+08:00',
    endIso: '2026-11-14T12:30:00+08:00',
    location: '奮起湖',
    activity: '老街觀光與午餐',
    mealNote: '午餐：奮起湖鐵路便當',
    detailNote: '老街慢活漫步、古早味鐵道便當',
    description: '山城、老街、鐵道是奮起湖的三大特色。奮起湖車站是阿里山森林鐵路最大的中途養護站，舊時運送木材與乘載工人的列車會在此地停留較長時間，造就了奮起湖的鐵路便當文化。',
    image: '/images/fenqihu.jpg',
    badge: '特色人文'
  },
  {
    id: 'd1-shuttle',
    day: 1,
    timeRange: '13:30',
    startIso: '2026-11-14T13:30:00+08:00',
    endIso: '2026-11-14T14:00:00+08:00',
    location: '阿里山森林遊樂區',
    activity: '轉乘接駁車至飯店',
    detailNote: '抵達國家森林遊樂區轉運站，轉乘專屬接駁車直達阿里山賓館',
    badge: '園區專車'
  },
  {
    id: 'd1-checkin',
    day: 1,
    timeRange: '14:00 - 15:00',
    startIso: '2026-11-14T14:00:00+08:00',
    endIso: '2026-11-14T15:40:00+08:00',
    location: '阿里山賓館',
    activity: '辦理入住 & 房間休息',
    detailNote: '領取房卡、行李安置、享受全檜木古典大廳與高山芬多精',
    description: '阿里山賓館位在海拔 2274 米之阿里山山嶺，是全台灣海拔最高的百年歷史度假飯店，前身為日治時期的「阿里山林場俱樂部」，曾接待過多位日本總督、中華民國總統，見證了阿里山林場的滄桑與變遷。',
    image: '/images/alishan_house.jpg',
    badge: '微奢華住宿'
  },
  {
    id: 'd1-train',
    day: 1,
    timeRange: '15:40 - 15:46',
    startIso: '2026-11-14T15:40:00+08:00',
    endIso: '2026-11-14T16:00:00+08:00',
    location: '阿里山火車站',
    activity: '搭乘經典小火車',
    detailNote: '搭小火車到沼平車站（穿梭巨木林道體驗經典森鐵）',
    image: '/images/forest_train.jpg',
    badge: '鐵道巡禮'
  },
  {
    id: 'd1-forest-walk',
    day: 1,
    timeRange: '16:00 - 17:30',
    startIso: '2026-11-14T16:00:00+08:00',
    endIso: '2026-11-14T17:30:00+08:00',
    location: '阿里山森林遊樂區',
    activity: '步行享受森林浴',
    detailNote: '路線：沼平車站 → 姊妹潭 → 神木群步道 → 受鎮宮 → 返回飯店',
    description: '漫步在數百至數千年巨木巨杉林蔭下，深呼吸吸收豐富高山負離子與芬多精，探尋傳奇姊妹潭湖畔倒影。',
    badge: '森林療癒'
  },
  {
    id: 'd1-dinner',
    day: 1,
    timeRange: '17:30 - 20:30',
    startIso: '2026-11-14T17:30:00+08:00',
    endIso: '2026-11-14T21:00:00+08:00',
    location: '阿里山賓館 餐廳',
    activity: '享用豐盛晚餐',
    mealNote: '晚餐：飯店精緻自助晚餐 (Buffet)',
    detailNote: '在溫暖的高山餐廳享用時令山珍海味料理、在地時蔬與熱騰騰暖胃湯品',
    badge: '美饌饗宴'
  },

  // DAY 2 - 2026/11/15
  {
    id: 'd2-sunrise-meet',
    day: 2,
    timeRange: '04:20',
    startIso: '2026-11-15T04:20:00+08:00',
    endIso: '2026-11-15T04:30:00+08:00',
    location: '阿里山賓館 大廳',
    activity: '集合出發',
    detailNote: '清晨早起務必穿著防風保暖大衣、毛帽、攜帶溫水壺與相機',
    badge: '晨曦集合'
  },
  {
    id: 'd2-yushan-sunrise',
    day: 2,
    timeRange: '04:20 - 07:30',
    startIso: '2026-11-15T04:20:00+08:00',
    endIso: '2026-11-15T07:30:00+08:00',
    location: '玉山國家公園',
    activity: '玉山觀日出與群峰遠眺',
    detailNote: '專車前往玉山觀日、自忠觀景台眺望群峰。沿途觀賞玉山國家公園紀念碑、鹿林神木、野生獼猴保護區',
    description: '站在台灣屋脊的門戶，迎接自中央山脈玉山主峰稜線破曉而出的萬丈金芒，雲海隨晨曦翻湧，令人永生難忘。',
    image: '/images/hero_sunrise.jpg',
    badge: '壯麗絕景'
  },
  {
    id: 'd2-breakfast',
    day: 2,
    timeRange: '07:30 - 09:30',
    startIso: '2026-11-15T07:30:00+08:00',
    endIso: '2026-11-15T09:30:00+08:00',
    location: '阿里山賓館 餐廳',
    activity: '享用元氣早餐',
    mealNote: '早餐：飯店精緻自助早餐',
    detailNote: '觀日出後返回飯店享用熱粥、咖啡、西式餐點，並可稍作整理打包行李',
    badge: '晨光朝食'
  },
  {
    id: 'd2-hotel-dept',
    day: 2,
    timeRange: '09:30',
    startIso: '2026-11-15T09:30:00+08:00',
    endIso: '2026-11-15T12:00:00+08:00',
    location: '阿里山賓館',
    activity: '集合出發 / 退房啟程',
    badge: '啟程'
  },
  {
    id: 'd2-lunch-danayiku',
    day: 2,
    timeRange: '12:00 - 13:30',
    startIso: '2026-11-15T12:00:00+08:00',
    endIso: '2026-11-15T13:30:00+08:00',
    location: '達娜伊谷 (山美部落)',
    activity: '享用鄒族特色午餐',
    mealNote: '午餐：阿貴鄒族風味餐廳',
    detailNote: '主打放山豬、原木炭火鹽烤台灣鯛、竹筒飯等正統原住民特色料理',
    description: '達娜伊谷為鄒族語「忘憂谷」之意。園區擁有清澈見底的溪流與保育鯝魚生態，阿貴風味餐廳更以原木柴火慢烤鮮魚與放山豬著稱。',
    badge: '原民風味'
  },
  {
    id: 'd2-npm-south',
    day: 2,
    timeRange: '14:30 - 16:30',
    startIso: '2026-11-15T14:30:00+08:00',
    endIso: '2026-11-15T16:30:00+08:00',
    location: '國立故宮博物院南部院區',
    activity: '參觀博物館與漫步水墨園區',
    detailNote: '欣賞亞洲藝術珍寶展覽，並參觀以水墨行草筆勢打造的雙曲面綠建築至美橋與人工湖',
    description: '國立故宮博物院南院定位為亞洲藝術文化博物館，園區是以傳統水墨畫發展出的流線型體。期待達到「平衡南北，文化均富」，順道帶動中南部的文化、教育、社會、與經濟發展。',
    image: '/images/npm_south.jpg',
    badge: '人文藝術'
  },
  {
    id: 'd2-return',
    day: 2,
    timeRange: '傍晚',
    startIso: '2026-11-15T16:30:00+08:00',
    endIso: '2026-11-15T19:00:00+08:00',
    location: '返程賦歸',
    activity: '返回台中 / 台北',
    badge: '平安歸程'
  }
];

export const TOUR_LEADERS: TourLeader[] = [
  {
    busGroup: 'A 車 (台北出發)',
    departureCity: '台北',
    role: '專車隨行領隊',
    name: '高景彬',
    phone: '0972-815-834'
  },
  {
    busGroup: 'B 車 (台中出發)',
    departureCity: '台中',
    role: '專車隨行領隊',
    name: '簡志龍',
    phone: '0926-829-306'
  }
];

export const EMERGENCY_CONTACTS: EmergencyPhone[] = [
  {
    name: '阿里山賓館 總機櫃檯',
    phone: '05-267-9811',
    desc: '客房服務、入住諮詢與接駁服務',
    category: 'hotel'
  },
  {
    name: '阿里山國家森林遊樂區遊客中心',
    phone: '05-267-9917',
    desc: '園區諮詢、步道路況與小火車即時動態',
    category: 'visitor'
  },
  {
    name: '阿里山香林衛生室 (醫療站)',
    phone: '05-267-9911',
    desc: '高山症處置、緊急急救與常備醫療諮詢',
    category: 'medical'
  },
  {
    name: '嘉義縣警察局阿里山派出所',
    phone: '05-267-9904',
    desc: '緊急報案、園區治安與交通指引',
    category: 'police'
  }
];

export const WARM_REMINDERS = [
  {
    id: 'shoes',
    title: '鞋著與雨具常備藥',
    content: '請穿著舒適的休閒鞋或登山鞋，並攜帶雨具及個人常備藥品。',
    tip: '森林步道濕氣較重，請避免穿高跟鞋或硬底皮鞋。'
  },
  {
    id: 'weather-clothing',
    title: '海拔溫差與洋蔥式穿搭',
    content: '阿里山海拔約 2,200 公尺，日夜溫差較大 (氣溫在 13~20 度左右)，請務必準備保暖防風外套，採洋蔥式穿搭。',
    tip: '清晨前往玉山觀日出氣溫可能降至 10 度以下，毛帽與輕量防風大衣必備。'
  },
  {
    id: 'motion-sickness',
    title: '暈車藥品提醒',
    content: '阿里山彎道較多，容易暈車者務必於出發前 30 分鐘服用暈車藥。',
    tip: '山路行車若感到不適，可即時告知領隊或司機調整空調與車速。'
  },
  {
    id: 'eco-amenities',
    title: '環保旅宿備品',
    content: '飯店響應環保，不提供一次性備品 (牙刷、牙膏、刮鬍刀) 等，請自行攜帶。',
    tip: '阿里山賓館提供毛巾、沐浴乳、洗髮精，個人盥洗用具敬請自備。'
  }
];

export const HOTEL_INFO = {
  name: '阿里山賓館 (Alishan House)',
  elevation: '2,274 公尺',
  tagline: '全台海拔最高之百年歷史度假飯店',
  history: '阿里山賓館位在海拔 2274 米之阿里山山嶺，是全台灣海拔最高的百年歷史度假飯店，前身為日治時期的「阿里山林場俱樂部」，曾接待過多位日本總督、中華民國總統，見證了阿里山林場的滄桑與變遷。',
  features: [
    '全館採用珍貴古木紅檜建築，散發天然淡雅檜木芳香',
    '頂樓設有 360 度無死角森林觀景台，是觀賞阿里山雲海與星空的秘密基地',
    '客房提供冷暖空調，高山低溫環境依舊溫暖舒適',
    '坐落於森林遊樂區核心，步行即可銜接神木步道與沼平車站'
  ],
  dining: {
    dinner: '17:30 - 20:30 精緻自助百匯晚餐（在地山珍、溫補熱湯、現切肉品與高山鮮蔬）',
    breakfast: '07:30 - 09:30 中西式自助早餐（現煮咖啡、有機蛋品、熱清粥小菜與烘焙麵包）'
  },
  image: '/images/forest_train.jpg'
};

export const ATTRACTIONS: AttractionInfo[] = [
  {
    id: 'fenqihu-railway',
    title: '奮起湖老街 & 鐵路便當文化',
    subtitle: '山城 · 老街 · 鐵道 — 阿里山森林鐵路最大中途站',
    description: '山城、老街、鐵道是奮起湖的三大特色。奮起湖車站是阿里山森林鐵路最大的中途養護站，舊時運送木材與乘載工人的列車會在此地停留較長時間，造就了奮起湖的鐵路便當文化。依山而建的老街兩側保留百年檜木老鋪，香味四溢的鐵路便當與草仔粿更是不容錯過的美食記憶。',
    highlights: ['阿里山森鐵最大中途調度站', '馳名經典雙主菜鐵道鐵盒便當', '老街石階、愛玉伯天然野生愛玉'],
    image: '/images/alishan_house.jpg',
    tags: ['人文鐵道', '特色美食', '老街漫遊']
  },
  {
    id: 'alishan-forest-train',
    title: '阿里山林業鐵路小火車 & 巨木林道',
    subtitle: '穿梭雲霧中的世界級高山登山鐵道',
    description: '搭乘經典紅色小火車自阿里山站出發至沼平車站，車窗外參天檜木飛馳而過。隨後漫步沼平、姊妹潭、巨木群棧道與受鎮宮，在海拔兩千多公尺的林間棧道沐浴純淨芬多精，仰望千年生生不息的神木傳奇。',
    highlights: ['世界遺產級高山森林小火車', '神木群巨型紅檜步道', '平靜如鏡的姊妹潭高山湖泊'],
    image: '/images/fenqihu.jpg',
    tags: ['世界級鐵道', '千年神木', '芬多精森林浴']
  },
  {
    id: 'yushan-sunrise',
    title: '玉山國家公園 觀日出奇景',
    subtitle: '破曉朝陽破雲而出，金光灑滿自忠群峰',
    description: '專車清晨前往玉山觀日、自忠觀景台眺望群峰。沿途觀賞玉山國家公園紀念碑、鹿林神木、野生獼猴保護區。當第一道曙光劃破玉山連綿山際，翻騰的金色雲海伴隨清涼的高山晨風，感受天地之遼闊壯美。',
    highlights: ['自忠觀景台眺望玉山主峰與北峰群脊', '台灣第二大樹齡約 2700 年鹿林神木', '野生獼猴生態保護區巡禮'],
    image: '/images/hero_sunrise.jpg',
    tags: ['日出雲海', '台灣之巔', '鹿林神木']
  },
  {
    id: 'npm-south',
    title: '國立故宮博物院 南部院區',
    subtitle: '以東方水墨意象鑄造的亞洲藝術殿堂',
    description: '國立故宮博物院南院定位為亞洲藝術文化博物館，園區是以傳統水墨畫發展出的流線型體。期待達到「平衡南北，文化均富」，順道帶動中南部的文化、教育、社會、與經濟發展。建築本身宛如墨筆在嘉南平原輕點而成的飛白與濃墨，戶外水景人工湖與至美橋更兼具現代與傳統美學。',
    highlights: ['展覽匯聚亞洲陶瓷、織品、佛教藝術極品', '水墨行草行雲流水的雙曲面流線鋼構建築', '漫步至美橋與湖畔人工濕地生態園區'],
    image: '/images/npm_south.jpg',
    tags: ['水墨綠建築', '故宮典藏', '亞洲文化']
  }
];

export const WEATHER_FORECAST: WeatherCondition[] = [
  {
    location: '阿里山國家森林遊樂區',
    elevation: '海拔 2,216M',
    temp: 16,
    tempMin: 12,
    tempMax: 19,
    condition: '涼爽晴朗 · 偶有山嵐',
    icon: 'SunDim',
    rainProb: '10%',
    humidity: '68%',
    uvIndex: '5 (中量級)',
    wind: '微風 2 級',
    sunrise: '06:08',
    sunset: '17:15',
    clothingTip: '早晚偏涼（約 12~14°C），白天步道健走約 18°C，建議穿著長袖排汗衫搭配防風保暖外套。'
  },
  {
    location: '奮起湖老街 (山城鐵道)',
    elevation: '海拔 1,403M',
    temp: 19,
    tempMin: 15,
    tempMax: 22,
    condition: '微涼舒適 · 輕霧繚繞',
    icon: 'CloudSun',
    rainProb: '15%',
    humidity: '75%',
    uvIndex: '4 (中量級)',
    wind: '和風 2 級',
    sunrise: '06:09',
    sunset: '17:16',
    clothingTip: '氣候宜人濕潤，建議薄長袖外搭針織或薄風衣，穿著舒適健走鞋。'
  },
  {
    location: '國立故宮博物院南部院區 (嘉義太保)',
    elevation: '海拔 25M',
    temp: 25,
    tempMin: 21,
    tempMax: 28,
    condition: '秋高氣爽 · 陽光和煦',
    icon: 'Sun',
    rainProb: '5%',
    humidity: '58%',
    uvIndex: '6 (高量級)',
    wind: '輕風 1 級',
    sunrise: '06:11',
    sunset: '17:18',
    clothingTip: '平地氣溫溫暖舒適，室內館內展區有恆溫冷氣（約 20°C），請隨身攜帶隨行薄外套防寒。'
  }
];
