import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "../MultilingualPresentation/AudioWaveform";
import { EzSuBackground } from "./EzSuBackground";

export const EzSuScene3_BachDangBattle: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.9 },
  });

  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Ebb tide level: water drops, stakes emerge
  const tideEbb = interpolate(frame, [20, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <EzSuBackground tintColor="#0284C7" />

      {/* Main Content Area */}
      <div
        style={{
          position: "absolute",
          top: 95,
          bottom: 35,
          left: 80,
          right: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        {/* Header */}
        <div
          style={{
            transform: `translateY(${(1 - entrance) * 30}px)`,
            opacity: entrance,
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "5px 16px",
              borderRadius: 6,
              backgroundColor: "rgba(2, 132, 199, 0.2)",
              border: "1px solid #38BDF8",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 800,
              color: "#7DD3FC",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            CHIẾN ĐỊA THỦY CHIẾN • THÁNG 4 NĂM 1288
          </div>

          <h2
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 48,
              fontWeight: 900,
              color: "#FEF08A",
              margin: "0 0 10px 0",
            }}
          >
            Trận Địa Cọc Ngầm Sông Bạch Đằng
          </h2>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#E2E8F0", margin: 0 }}>
            Nắm chắc quy luật thủy triều, dồn toàn bộ hạm đội giặc vào cửa tử.
          </p>
        </div>

        {/* Animated Battle Map View */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          {/* Tactical River Map (Bản đồ chiến sự motion graphic) */}
          <div
            style={{
              height: 380,
              borderRadius: 20,
              backgroundColor: "rgba(10, 25, 40, 0.85)",
              border: "2px solid rgba(56, 189, 248, 0.4)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
              padding: 20,
            }}
          >
            <div style={{ position: "absolute", top: 16, left: 20, fontSize: 16, fontWeight: 800, color: "#38BDF8" }}>
              BẢN ĐỒ CHIẾN ĐỊA BẠCH ĐẰNG GIANG
            </div>

            {/* River flow curve representation */}
            <svg viewBox="0 0 500 320" style={{ width: "100%", height: "100%" }}>
              {/* River Banks */}
              <path
                d="M 20 80 Q 180 120 300 90 T 480 180 L 480 300 L 20 300 Z"
                fill="rgba(14, 116, 144, 0.25)"
              />
              <path
                d="M 20 80 Q 180 120 300 90 T 480 180"
                stroke="#38BDF8"
                strokeWidth="3"
                fill="none"
              />

              {/* Water surface level dropping with tide */}
              <rect
                x="30"
                y={120 + tideEbb * 30}
                width="440"
                height={150 - tideEbb * 30}
                fill="rgba(6, 182, 212, 0.2)"
              />

              {/* Wooden Stakes (Bãi cọc nhô lên khi thủy triều rút) */}
              {Array.from({ length: 15 }).map((_, i) => {
                const stakeX = 140 + (i % 5) * 60 + (i > 7 ? 25 : 0);
                const stakeY = 170 + Math.floor(i / 5) * 35;
                const stakeHeight = 35 * tideEbb;

                return (
                  <g key={i}>
                    <line
                      x1={stakeX}
                      y1={stakeY}
                      x2={stakeX}
                      y2={stakeY - stakeHeight}
                      stroke="#F59E0B"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    {/* Iron tip */}
                    <polygon
                      points={`${stakeX - 4},${stakeY - stakeHeight} ${stakeX + 4},${stakeY - stakeHeight} ${stakeX},${stakeY - stakeHeight - 10}`}
                      fill="#EF4444"
                    />
                  </g>
                );
              })}

              {/* Red Ambush Arrows (Quân Đại Việt từ 2 bờ sông xông ra) */}
              <g>
                <path
                  d="M 80 40 L 150 120"
                  stroke="#DC2626"
                  strokeWidth="5"
                  markerEnd="url(#arrow-red)"
                />
                <text x="60" y="35" fill="#FCA5A5" fontSize="12" fontWeight="bold">Trần Quốc Tuấn</text>

                <path
                  d="M 400 60 L 320 130"
                  stroke="#DC2626"
                  strokeWidth="5"
                />
                <text x="350" y="55" fill="#FCA5A5" fontSize="12" fontWeight="bold">Nguyễn Khoái</text>
              </g>

              {/* Trapped Mongolian Fleet */}
              <g transform="translate(220, 160)">
                <rect x="-35" y="-15" width="70" height="30" rx="6" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
                <text x="0" y="5" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">Ô MÃ NHI</text>
                <text x="0" y="32" fill="#F87171" fontSize="11" textAnchor="middle">⚠️ Mắc Cọc Ngầm</text>
              </g>
            </svg>

            {/* Bottom map note */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 20,
                right: 20,
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                color: "#E2E8F0",
              }}
            >
              <span>🔴 Quân Đại Việt Phục Kích</span>
              <span>🌊 Thủy Triều Rút Mạnh</span>
              <span>🪵 Bãi Cọc Gỗ Bọc Sắt</span>
            </div>
          </div>

          {/* Tactical Results Card */}
          <div
            style={{
              padding: "26px",
              borderRadius: 20,
              backgroundColor: "rgba(30, 20, 8, 0.8)",
              border: "2px solid #F59E0B",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FDE68A" }}>
              ⚔️ THẮNG LỢI CHIẾN DỊCH BẠCH ĐẰNG
            </div>

            <div
              style={{
                padding: "16px",
                borderRadius: 14,
                backgroundColor: "rgba(220, 38, 38, 0.25)",
                border: "1.5px solid #EF4444",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 36 }}>🔥</span>
              <div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#FCA5A5" }}>
                  &gt; 400 CHIẾN THUYỀN
                </div>
                <div style={{ fontSize: 14, color: "#FEF2F2" }}>
                  Bị đâm thủng, đốt cháy và chôn vùi dưới đáy sông.
                </div>
              </div>
            </div>

            <ul style={{ margin: 0, paddingLeft: 20, color: "#FEF3C7", fontSize: 15, lineHeight: 1.8 }}>
              <li><strong>Bắt sống tướng giặc:</strong> Ô Mã Nhi, Phàn Tiếp, Tích Lệ Cơ bị bắt sống tại trận.</li>
              <li>Thoát Hoan kinh hoàng phải chui vào ống đồng trốn chạy về phương Bắc.</li>
              <li>Toàn bộ đạo quân xâm lược Nguyên Mông bị bẻ gãy hoàn toàn.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Subtitle */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              backdropFilter: "blur(10px)",
              maxWidth: 1000,
            }}
          >
            <span style={{ fontSize: 20 }}>🎙️</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 16, color: "#FEF08A" }}>
              &ldquo;Trận quyết chiến diễn ra trên sông Bạch Đằng. Nắm chắc con nước thủy triều, quân dân Đại Việt khéo léo dụ đoàn thuyền giặc vào trận địa cọc ngầm. Khi nước rút, hơn 400 chiến thuyền Ô Mã Nhi bị đâm vỡ tan tành.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#0284C7"
            accentColor="#EF4444"
            active={frame < durationInFrames - 10}
            label="Chiến Trận Bạch Đằng"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
