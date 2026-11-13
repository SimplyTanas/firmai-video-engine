import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CanvasBackground } from "./CanvasBackground";

export const Scene2_SfoSwarm: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 14 } });
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp" }
  );

  // Dynamic parameters for SFO simulation
  const time = frame * 0.04;
  const attackPower = Math.max(0.1, 1 - (frame / durationInFrames) * 0.85);
  const radarAngle = (frame * 3.5) % 360;

  // Generative swarm particles (Sardines) orbiting and moving toward Sailfish
  const sardineCount = 28;
  const sardines = Array.from({ length: sardineCount }).map((_, i) => {
    const seed = i * 137.5; // Golden angle distribution
    const baseAngle = seed + time * (1.2 + (i % 3) * 0.3);
    const radius =
      120 + (i % 5) * 35 + Math.sin(time * 2 + i) * 25 * (1 - frame / durationInFrames * 0.5);
    const x = 320 + Math.cos(baseAngle) * radius;
    const y = 280 + Math.sin(baseAngle) * (radius * 0.75);
    return { id: i, x, y, speed: 1 + (i % 4) * 0.4 };
  });

  // Sailfish leader coordinates (Hunting path)
  const sailfishX = 320 + Math.sin(time * 0.8) * 80;
  const sailfishY = 280 + Math.cos(time * 0.9) * 60;

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <CanvasBackground currentStage="SFO // SWARM EXPLORATION" stageNumber="02" />

      {/* Main Container */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 100,
          right: 80,
          bottom: 70,
          display: "flex",
          gap: 50,
          alignItems: "center",
        }}
      >
        {/* Left Column: Typographic & Algorithmic Breakdown */}
        <div style={{ flex: "0 0 540px", zIndex: 10 }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "rgba(0, 240, 255, 0.12)",
              border: "1px solid #00F0FF",
              color: "#00F0FF",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              marginBottom: 16,
              transform: `translateX(${interpolate(enter, [0, 1], [-40, 0])}px)`,
            }}
          >
            ACT 02 // SAILFISH OPTIMIZER (SFO)
          </div>

          <h1
            style={{
              fontSize: 54,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: -1,
            }}
          >
            KHÁM PHÁ TOÀN CỤC <br />
            <span style={{ color: "#00F0FF" }}>TRÍ TUỆ BẦY ĐÀN</span> SINH HỌC
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#94A3B8",
              marginBottom: 28,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Khai thác tập tính săn mồi hiệp đồng giữa bầy cá cờ (<em style={{ color: "#00F0FF" }}>Sailfish</em>) và bầy cá mòi (<em style={{ color: "#38BDF8" }}>Sardines</em>). Phân phối bước nhảy Lévy mở rộng diện tích tìm kiếm, xóa bỏ nguy cơ kẹt bẫy cực trị địa phương.
          </p>

          {/* SFO Mathematical Formulation Card */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid #1E293B",
              borderLeft: "4px solid #00F0FF",
              padding: "18px 22px",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#64748B",
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              CẬP NHẬT TỌA ĐỘ VÉC-TƠ SĂN MỒI
            </div>
            <div
              style={{
                fontSize: 17,
                color: "#E2E8F0",
                fontFamily: "'JetBrains Mono', monospace",
                lineHeight: 1.6,
              }}
            >
              X<sub style={{ fontSize: 11 }}>SF</sub>(t+1) = X<sub style={{ fontSize: 11 }}>elite</sub>(t) - λ<sub style={{ fontSize: 11 }}>t</sub> × [2·r₁·X<sub style={{ fontSize: 11 }}>elite</sub> - X<sub style={{ fontSize: 11 }}>SF</sub>(t)]
            </div>
            <div
              style={{
                fontSize: 15,
                color: "#38BDF8",
                fontFamily: "'JetBrains Mono', monospace",
                marginTop: 6,
              }}
            >
              X<sub style={{ fontSize: 11 }}>sardine</sub>(t+1) = r₂ × [X<sub style={{ fontSize: 11 }}>elite</sub> - X<sub style={{ fontSize: 11 }}>sardine</sub>(t) + AP<sub style={{ fontSize: 11 }}>t</sub>]
            </div>
          </div>

          {/* Real-time telemetry indicators */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div
              style={{
                padding: "14px 18px",
                background: "rgba(0, 240, 255, 0.05)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 1.5 }}>
                ATTACK POWER (AP)
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#00F0FF",
                  marginTop: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {attackPower.toFixed(3)}
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>
                Thu hẹp bán kính săn mồi
              </div>
            </div>

            <div
              style={{
                padding: "14px 18px",
                background: "rgba(56, 189, 248, 0.05)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 1.5 }}>
                LÉVY FLIGHT α
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#38BDF8",
                  marginTop: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                1.500 <span style={{ fontSize: 14, color: "#94A3B8" }}>scale</span>
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>
                Bước nhảy siêu khuếch tán
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Vector Radar & Swarm Visual Canvas */}
        <div
          style={{
            flex: 1,
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 640 560"
            style={{
              width: "100%",
              maxHeight: "560px",
              background: "rgba(4, 9, 20, 0.85)",
              border: "1px solid #1E293B",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(0, 240, 255, 0.05)",
            }}
          >
            <defs>
              {/* Radar sweep gradient */}
              <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Concentric Sonar Distance Rings */}
            {[80, 150, 220, 290].map((r, idx) => (
              <circle
                key={idx}
                cx="320"
                cy="280"
                r={r}
                fill="none"
                stroke="#1E293B"
                strokeWidth="1.2"
                strokeDasharray={idx % 2 === 1 ? "4 6" : "none"}
              />
            ))}

            {/* Radar Angle Labels */}
            <text x="325" y="50" fill="#475569" fontSize="10" fontFamily="'JetBrains Mono', monospace">090°</text>
            <text x="590" y="284" fill="#475569" fontSize="10" fontFamily="'JetBrains Mono', monospace">000°</text>
            <text x="325" y="525" fill="#475569" fontSize="10" fontFamily="'JetBrains Mono', monospace">270°</text>
            <text x="25" y="284" fill="#475569" fontSize="10" fontFamily="'JetBrains Mono', monospace">180°</text>

            {/* Radar Crosshairs */}
            <line x1="320" y1="20" x2="320" y2="540" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="280" x2="620" y2="280" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />

            {/* Sweeping Radar Ray */}
            <g transform={`rotate(${radarAngle} 320 280)`}>
              <line x1="320" y1="280" x2="610" y2="280" stroke="#00F0FF" strokeWidth="1.8" />
              <polygon
                points="320,280 610,250 610,280"
                fill="url(#radarSweep)"
                opacity="0.3"
              />
            </g>

            {/* Swarm Lévy Flight Trajectory Trails */}
            <g opacity="0.6">
              {sardines.slice(0, 10).map((s, idx) => {
                const prevX = s.x - Math.cos(idx) * 40;
                const prevY = s.y - Math.sin(idx) * 35;
                return (
                  <line
                    key={`trail-${idx}`}
                    x1={prevX}
                    y1={prevY}
                    x2={s.x}
                    y2={s.y}
                    stroke="#0284C7"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                );
              })}
            </g>

            {/* Vector Lines from Sailfish to Closest Sardines */}
            {sardines.slice(0, 6).map((s, idx) => (
              <line
                key={`vector-${idx}`}
                x1={sailfishX}
                y1={sailfishY}
                x2={s.x}
                y2={s.y}
                stroke="rgba(0, 240, 255, 0.25)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
            ))}

            {/* Sardine School Points */}
            {sardines.map((s) => (
              <g key={s.id}>
                <circle
                  cx={s.x}
                  cy={s.y}
                  r="3.5"
                  fill="#38BDF8"
                  opacity="0.85"
                />
                <circle
                  cx={s.x}
                  cy={s.y}
                  r="7"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="0.8"
                  opacity="0.3"
                />
              </g>
            ))}

            {/* Elite Sailfish (Dominant Agent) */}
            <g transform={`translate(${sailfishX}, ${sailfishY})`} filter="url(#glowCyan)">
              {/* Outer pulsing ring */}
              <circle
                cx="0"
                cy="0"
                r={20 + Math.sin(time * 4) * 4}
                fill="none"
                stroke="#00F0FF"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
              {/* Core diamond marker */}
              <polygon
                points="0,-14 14,0 0,14 -14,0"
                fill="#00F0FF"
              />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
            </g>

            {/* Callout Label for Elite Sailfish */}
            <g transform={`translate(${sailfishX + 22}, ${sailfishY - 18})`}>
              <rect
                x="0"
                y="-14"
                width="150"
                height="24"
                fill="rgba(2, 6, 23, 0.85)"
                stroke="#00F0FF"
                strokeWidth="1"
              />
              <text
                x="10"
                y="3"
                fill="#00F0FF"
                fontSize="11"
                fontWeight="700"
                fontFamily="'JetBrains Mono', monospace"
              >
                SAILFISH ELITE X*
              </text>
            </g>

            {/* Corner Bracket Accents on Radar Viewport */}
            <path d="M 12 30 L 12 12 L 30 12" fill="none" stroke="#00F0FF" strokeWidth="2" />
            <path d="M 628 30 L 628 12 L 610 12" fill="none" stroke="#00F0FF" strokeWidth="2" />
            <path d="M 12 530 L 12 548 L 30 548" fill="none" stroke="#00F0FF" strokeWidth="2" />
            <path d="M 628 530 L 628 548 L 610 548" fill="none" stroke="#00F0FF" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
