import React from "react";

export const HistoricalMapSvg: React.FC<{
  highlightRegion?: "tinh_hai_quan" | "thanh_hai_quan" | "so" | "dai_truong_hoa" | "all";
  battleMarker?: { x: number; y: number; label: string };
  attackArrow?: { x1: number; y1: number; x2: number; y2: number };
}> = ({ highlightRegion = "all", battleMarker, attackArrow }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#BCE4F8", // Soft light blue ocean from EZ Sử screenshot
      }}
    >
      {/* ========================================================= */}
      {/* 1. CONTINENT LANDMASS BASE & ISLANDS                      */}
      {/* ========================================================= */}
      {/* Neutral Landmasses (White / Off-white background continents) */}
      <path
        d="M 0 0 L 1920 0 L 1920 300 Q 1850 420 1800 520 T 1720 700 L 1920 850 L 1920 1080 L 0 1080 Z"
        fill="#FFFFFF"
      />

      {/* ========================================================= */}
      {/* 2. KINGDOMS & PROVINCES (Matching Image 2 exact palette)  */}
      {/* ========================================================= */}

      {/* Region: ĐẠI TRƯỜNG HÒA (Yunnan / Nanzhao) - Emerald/Jade Green */}
      <g id="dai-truong-hoa">
        <path
          d="M 450 180 
             Q 520 120 750 160 
             Q 980 200 1150 260 
             Q 1130 380 1050 480 
             Q 950 560 880 620 
             Q 750 630 650 550 
             Q 550 500 480 430 
             Q 380 440 370 340 
             Q 380 230 450 180 Z"
          fill="#00A389"
          stroke="#00846C"
          strokeWidth="3"
          opacity={highlightRegion === "tinh_hai_quan" ? 0.75 : 1}
        />
        <text
          x="820"
          y="340"
          fill="#000000"
          fontSize="42"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2"
          textAnchor="middle"
        >
          ĐẠI TRƯỜNG HÒA
        </text>
      </g>

      {/* Region: SỞ (Hunan) - Bright Orange / Coral */}
      <g id="so">
        <path
          d="M 1150 260 
             Q 1220 160 1320 150 
             Q 1420 160 1460 280 
             Q 1450 400 1420 500 
             Q 1250 540 1150 480 
             Q 1130 380 1150 260 Z"
          fill="#F26A36"
          stroke="#D84F1B"
          strokeWidth="3"
          opacity={highlightRegion === "tinh_hai_quan" ? 0.75 : 1}
        />
        <text
          x="1300"
          y="350"
          fill="#000000"
          fontSize="46"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="4"
          textAnchor="middle"
        >
          SỞ
        </text>
      </g>

      {/* Region: NGÔ (Jiangsu / Jiangxi) - Violet Grey */}
      <g id="ngo">
        <path
          d="M 1460 140 
             Q 1560 120 1680 130 
             Q 1750 220 1780 320 
             Q 1650 420 1560 440 
             Q 1460 380 1460 280 
             Q 1420 160 1460 140 Z"
          fill="#8C7AA9"
          stroke="#715E8F"
          strokeWidth="3"
        />
        <text
          x="1610"
          y="180"
          fill="#000000"
          fontSize="38"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2"
          textAnchor="middle"
        >
          NGÔ
        </text>
      </g>

      {/* Region: NGÔ VIỆT (Zhejiang) - Pink / Rose */}
      <g id="ngo-viet">
        <path
          d="M 1780 170 
             Q 1860 160 1920 180 
             L 1920 330 
             Q 1850 350 1750 320 Z"
          fill="#D98880"
          stroke="#C06F67"
          strokeWidth="3"
        />
        <text
          x="1850"
          y="230"
          fill="#000000"
          fontSize="32"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2"
          textAnchor="middle"
        >
          NGÔ VIỆT
        </text>
      </g>

      {/* Region: MÂN (Fujian) - Peach / Salmon */}
      <g id="man">
        <path
          d="M 1560 440 
             Q 1660 420 1760 450 
             Q 1780 560 1700 660 
             Q 1580 630 1540 540 Z"
          fill="#F3A683"
          stroke="#DA8B67"
          strokeWidth="3"
        />
        <text
          x="1670"
          y="560"
          fill="#000000"
          fontSize="40"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="4"
          textAnchor="middle"
        >
          MÂN
        </text>
      </g>

      {/* Region: THANH HẢI QUÂN TIẾT ĐỘ SỨ (Guangdong / Pearl River delta) - Dark Teal */}
      <g id="thanh-hai-quan">
        <path
          d="M 1150 480 
             Q 1280 540 1420 500 
             Q 1540 540 1560 620 
             Q 1480 720 1380 770 
             Q 1250 820 1140 760 
             Q 1060 690 1020 630 
             Q 1050 560 1150 480 Z"
          fill="#009E73"
          stroke="#00805D"
          strokeWidth="3"
        />
        <text
          x="1300"
          y="630"
          fill="#000000"
          fontSize="36"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2"
          textAnchor="middle"
        >
          THANH HẢI QUÂN
        </text>
        <text
          x="1300"
          y="675"
          fill="#000000"
          fontSize="34"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2"
          textAnchor="middle"
        >
          TIẾT ĐỘ SỨ
        </text>
      </g>

      {/* Region: TĨNH HẢI QUÂN (VIỆT NAM) - Vibrant Golden Saffron Yellow */}
      <g id="tinh-hai-quan">
        <path
          d="M 880 620 
             Q 1050 560 1120 480 
             Q 1150 550 1050 630 
             Q 1020 680 960 760 
             Q 890 850 820 940 
             Q 760 920 780 840 
             Q 820 740 850 670 
             Q 880 640 880 620 Z"
          fill="#F4C430"
          stroke="#D4A410"
          strokeWidth="4.5"
          filter="drop-shadow(0 0 10px rgba(244, 196, 48, 0.4))"
        />
        <text
          x="950"
          y="605"
          fill="#000000"
          fontSize="40"
          fontWeight="950"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="3"
          textAnchor="middle"
        >
          TĨNH
        </text>
        <text
          x="950"
          y="650"
          fill="#000000"
          fontSize="38"
          fontWeight="950"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="3"
          textAnchor="middle"
        >
          HẢI QUÂN
        </text>
      </g>

      {/* Hainan Island (Đảo Hải Nam) - Bean-shaped emerald island in the Gulf */}
      <path
        d="M 1150 800 Q 1220 780 1250 840 Q 1240 920 1160 930 Q 1090 900 1110 830 Z"
        fill="#00A389"
        stroke="#00846C"
        strokeWidth="2.5"
      />

      {/* ========================================================= */}
      {/* 3. OPTIONAL DYNAMIC MILITARY OVERLAYS (ARROWS & BATTLES)  */}
      {/* ========================================================= */}
      {attackArrow && (
        <g id="military-arrow">
          <defs>
            <marker
              id="arrowhead-red"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
            </marker>
          </defs>
          <line
            x1={attackArrow.x1}
            y1={attackArrow.y1}
            x2={attackArrow.x2}
            y2={attackArrow.y2}
            stroke="#DC2626"
            strokeWidth="8"
            strokeDasharray="12 6"
            markerEnd="url(#arrowhead-red)"
          />
        </g>
      )}

      {battleMarker && (
        <g id="battle-marker" transform={`translate(${battleMarker.x}, ${battleMarker.y})`}>
          <circle cx="0" cy="0" r="28" fill="#DC2626" opacity="0.3" />
          <circle cx="0" cy="0" r="18" fill="#DC2626" />
          <text x="0" y="7" fill="#FFFFFF" fontSize="18" fontWeight="bold" textAnchor="middle">
            ⚔️
          </text>
          <rect x="-80" y="24" width="160" height="28" rx="6" fill="#000000" opacity="0.85" />
          <text x="0" y="43" fill="#FEF08A" fontSize="13" fontWeight="bold" textAnchor="middle">
            {battleMarker.label}
          </text>
        </g>
      )}
    </svg>
  );
};
