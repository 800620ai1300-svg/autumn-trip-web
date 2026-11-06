import React from 'react';

export const MapleLeaf: React.FC<{
  className?: string;
  size?: number;
  color?: 'purple' | 'gold' | 'rose' | 'amber';
  style?: React.CSSProperties;
}> = ({ className = '', size = 24, color = 'amber', style }) => {
  const colorMap = {
    purple: 'url(#maplePurpleGrad)',
    gold: 'url(#mapleGoldGrad)',
    rose: 'url(#mapleRoseGrad)',
    amber: 'url(#mapleAmberGrad)',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <defs>
        {/* Soft Lavender Plum */}
        <linearGradient id="maplePurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C49AD2" />
          <stop offset="60%" stopColor="#966B9E" />
          <stop offset="100%" stopColor="#6C4675" />
        </linearGradient>
        {/* Warm Golden Honey */}
        <linearGradient id="mapleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        {/* Warm Russet Rose / Terracotta */}
        <linearGradient id="mapleRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        {/* Autumn Amber Ochre (as in reference poster) */}
        <linearGradient id="mapleAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#E26838" />
          <stop offset="100%" stopColor="#B4381C" />
        </linearGradient>
      </defs>
      {/* 7-lobed Japanese/Formosan mountain maple leaf silhouette */}
      <path
        d="M50 8 
           C48 20 44 26 35 24 
           C32 23 27 22 23 26 
           C20 29 22 34 26 38 
           C21 38 12 40 10 47 
           C9 52 14 56 22 55 
           C16 60 12 68 18 73 
           C23 77 30 72 36 67 
           C33 73 34 81 40 84 
           C45 86 48 80 49 75 
           L49 94 
           L51 94 
           L51 75 
           C52 80 55 86 60 84 
           C66 81 67 73 64 67 
           C70 72 77 77 82 73 
           C88 68 84 60 78 55 
           C86 56 91 52 90 47 
           C88 40 79 38 74 38 
           C78 34 80 29 77 26 
           C73 22 68 23 65 24 
           C56 26 52 20 50 8 Z"
        fill={colorMap[color]}
        opacity="0.95"
      />
      {/* Central delicate leaf vein */}
      <path
        d="M50 20 L50 78 M50 45 L34 35 M50 45 L66 35 M50 58 L28 54 M50 58 L72 54"
        stroke="#FFF7ED"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
};

export const StarSparkle: React.FC<{
  size?: number;
  className?: string;
  color?: string;
}> = ({ size = 16, className = '', color = '#D97706' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
        fill={color}
      />
    </svg>
  );
};

export const StarFivePoint: React.FC<{
  size?: number;
  className?: string;
  color?: string;
}> = ({ size = 14, className = '', color = '#F59E0B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
};

export const CrescentMoon: React.FC<{
  size?: number;
  className?: string;
  color?: string;
}> = ({ size = 22, className = '', color = '#F59E0B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
};

export const CompanyLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Warm Royal Plum & Golden Sun Crest */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#724E8E] via-[#5F3B7A] to-[#4B2965] p-[1px] shadow-sm flex items-center justify-center shrink-0 border border-[#D8B4FE]/40">
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mountain contours */}
          <path
            d="M6 29L15 15L22 25L28 17L35 29H6Z"
            fill="url(#mountainGradWarm)"
            opacity="0.9"
          />
          {/* Rising golden sun */}
          <circle cx="20" cy="11" r="3.5" fill="#FDE047" opacity="0.95" />
          <path
            d="M20 5V8 M20 14V17 M14 11H17 M23 11H26"
            stroke="#FEF08A"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="mountainGradWarm" x1="6" y1="15" x2="35" y2="29">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
        </svg>
        <span className="sr-only">Company Logo</span>
      </div>
    </div>
  );
};
