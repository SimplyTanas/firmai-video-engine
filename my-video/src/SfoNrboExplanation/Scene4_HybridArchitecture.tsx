import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "../MultilingualPresentation/AudioWaveform";

export const Scene4_HybridArchitecture: React.FC<{ durationInFrames: number }> = ({
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

  // Convergence curves animation progress
  const curveProgress = interpolate(frame, [15, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #180309 0%, #2f0914 50%, #100206 100%)",
        opacity: exitOpacity,
        overflow: "hidden",
      }}
    >
      {/* Background Red Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "20%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "absolute",
          top: 100,
          bottom: 40,
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
              padding: "6px 18px",
              borderRadius: 9999,
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#F87171",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            PHÂN CẢNH 4 • KIẾN TRÚC LAI ĐỘT PHÁ
          </div>

          <h2
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 48,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: "0 0 10px 0",
            }}
          >
            Sự Kết Hợp Hoàn Hảo: SFO + NRBO
          </h2>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#94A3B8", margin: 0 }}>
            Tối ưu hóa đa pha: Thăm dò toàn diện kết hợp gia tốc tiếp tuyến và phá bẫy tức thì.
          </p>
        </div>

        {/* Visual Comparison: Flowchart & Convergence Graph */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          {/* Flowchart of Hybrid Pipeline */}
          <div
            style={{
              padding: "24px",
              borderRadius: 20,
              backgroundColor: "rgba(20, 5, 10, 0.75)",
              border: "1.5px solid rgba(239, 68, 68, 0.35)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, color: "#F87171" }}>
              🔄 Quy Trình Tương Tác Lai (Hybrid Pipeline)
            </div>

            {/* Step 1 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 18px",
                borderRadius: 12,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
              }}
            >
              <span style={{ fontSize: 22 }}>🐟</span>
              <div>
                <strong style={{ color: "#38BDF8", fontSize: 16 }}>Pha 1: SFO Global Exploration</strong>
                <div style={{ fontSize: 13, color: "#CBD5E1" }}>
                  Bầy cá buồm quét diện rộng, khoanh vùng thung lũng chứa cực tiểu toàn cục.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 18px",
                borderRadius: 12,
                backgroundColor: "rgba(245, 158, 11, 0.12)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              <span style={{ fontSize: 22 }}>⚡</span>
              <div>
                <strong style={{ color: "#F59E0B", fontSize: 16 }}>Pha 2: NRSR Local Exploitation</strong>
                <div style={{ fontSize: 13, color: "#CBD5E1" }}>
                  Áp dụng bước nhảy Newton-Raphson kéo bầy cá lao thẳng xuống đáy vực tối ưu.
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 18px",
                borderRadius: 12,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
              }}
            >
              <span style={{ fontSize: 22 }}>🛡️</span>
              <div>
                <strong style={{ color: "#F87171", fontSize: 16 }}>Pha 3: TAO Trap Check &amp; Escape</strong>
                <div style={{ fontSize: 13, color: "#CBD5E1" }}>
                  Giám sát độ đa dạng quần thể; giải phóng các cá thể bị kẹt tại cực trị cục bộ.
                </div>
              </div>
            </div>
          </div>

          {/* Convergence Curve Graph */}
          <div
            style={{
              padding: "24px",
              borderRadius: 20,
              backgroundColor: "rgba(10, 5, 8, 0.8)",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>
                Đồ Thị Hội Tụ (Convergence Curves)
              </span>
              <span style={{ fontSize: 12, color: "#94A3B8" }}>Hàm thử nghiệm CEC Benchmark</span>
            </div>

            {/* SVG Graph */}
            <svg viewBox="0 0 400 220" style={{ width: "100%", height: 210 }}>
              {/* Axes */}
              <line x1="40" y1="20" x2="40" y2="190" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <line x1="40" y1="190" x2="380" y2="190" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <text x="350" y="210" fill="#94A3B8" fontSize="11">Vòng lặp</text>
              <text x="10" y="25" fill="#94A3B8" fontSize="11">Fitness</text>

              {/* Grid lines */}
              <line x1="40" y1="60" x2="380" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="4" />
              <line x1="40" y1="120" x2="380" y2="120" stroke="rgba(255,255,255,0.08)" strokeDasharray="4" />

              {/* Curve 1: SFO standard (Yellow dashed, slows down) */}
              <path
                d="M 40 40 Q 120 70 200 110 T 380 140"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2.5"
                strokeDasharray="6"
                strokeDashoffset={interpolate(curveProgress, [0, 1], [400, 0])}
              />

              {/* Curve 2: NRBO standard (Amber dashed, gets trapped earlier) */}
              <path
                d="M 40 40 Q 100 120 180 135 T 380 135"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeDasharray="4"
                strokeDashoffset={interpolate(curveProgress, [0, 1], [400, 0])}
              />

              {/* Curve 3: Hybrid SFO-NRBO (Steepest, lowest, glowing red) */}
              <path
                d="M 40 40 Q 110 150 200 175 T 380 185"
                fill="none"
                stroke="#EF4444"
                strokeWidth="4"
                strokeDashoffset={interpolate(curveProgress, [0, 1], [400, 0])}
                filter="drop-shadow(0 0 8px rgba(239, 68, 68, 0.9))"
              />
            </svg>

            {/* Legend */}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span style={{ color: "#06B6D4" }}>--- SFO Thuần</span>
              <span style={{ color: "#F59E0B" }}>--- NRBO Thuần</span>
              <span style={{ color: "#EF4444", fontWeight: 700 }}>━ LAI SFO-NRBO (Tối ưu nhất)</span>
            </div>
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
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(10px)",
              maxWidth: 1000,
            }}
          >
            <span style={{ fontSize: 20 }}>🎙️</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 16, color: "#F1F5F9" }}>
              &ldquo;Khi lai ghép, SFO quét sạch không gian tìm kiếm, trong khi NRBO lao thẳng vào tâm nghiệm tối ưu với bước hội tụ dốc đứng. Quần thể liên tục được bảo vệ khỏi bẫy cực trị địa phương.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#EF4444"
            accentColor="#F59E0B"
            active={frame < durationInFrames - 10}
            label="Hybrid Fusion"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
