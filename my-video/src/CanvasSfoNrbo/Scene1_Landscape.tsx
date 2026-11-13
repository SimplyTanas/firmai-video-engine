import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CanvasBackground } from "./CanvasBackground";

export const Scene1_Landscape: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enter = spring({ frame, fps, config: { damping: 14 } });
  const textFade = interpolate(frame, [15, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp" }
  );

  // Animated landscape wave offset
  const waveShift = Math.sin(frame * 0.04) * 15;

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <CanvasBackground currentStage="LANDSCAPE & CHALLENGE" stageNumber="01" />

      {/* Main Content Layout - Canvas Architecture */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 100,
          right: 80,
          bottom: 70,
          display: "flex",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left Column: Monumental Typographic Information Architecture */}
        <div style={{ flex: "0 0 580px", zIndex: 10 }}>
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
            ACT 01 // HỆ TOẠ ĐỘ TỐI ƯU HÓA
          </div>

          <h1
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: -1,
            }}
          >
            THÁCH THỨC <br />
            <span style={{ color: "#00F0FF" }}>ĐA CỰC TRỊ</span> & BẪY CỤC BỘ
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "#94A3B8",
              lineHeight: 1.6,
              marginBottom: 35,
              opacity: textFade,
            }}
          >
            Trong không gian nghiệm thực tế đa chiều, các thuật toán tìm kiếm liên
            tục đối mặt với hàng triệu điểm cực trị giả định. Việc cân bằng giữa
            <strong style={{ color: "#00F0FF" }}> Khám phá toàn cục </strong>
            và
            <strong style={{ color: "#FF3366" }}> Khai thác cục bộ </strong>
            chính là chìa khóa sống còn.
          </p>

          {/* Mathematical Formulation Card */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderLeft: "4px solid #FFD700",
              padding: "18px 24px",
              fontFamily: "monospace",
              fontSize: 16,
              color: "#E2E8F0",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ color: "#FFD700", fontSize: 13, fontWeight: 700 }}>
              FORMULATION: MULTIMODAL BENCHMARK
            </div>
            <div>min f(x) = ∑ [x_i² - 10·cos(2π·x_i) + 10]</div>
            <div style={{ color: "#64748B", fontSize: 13 }}>
              Không gian tìm kiếm: Ω ∈ [-5.12, 5.12]^D
            </div>
          </div>
        </div>

        {/* Right Column: 3D Optimization Topography Contour Visualization */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <svg
            width="680"
            height="520"
            viewBox="0 0 680 520"
            style={{
              overflow: "visible",
              filter: "drop-shadow(0 0 30px rgba(0, 240, 255, 0.1))",
            }}
          >
            {/* Topography Contour Rings */}
            {[260, 220, 180, 140, 100, 60, 25].map((radius, idx) => {
              const ringOpacity = 0.2 + idx * 0.12;
              const isGlobal = idx === 6;
              return (
                <ellipse
                  key={idx}
                  cx={340 + (idx % 2 === 0 ? waveShift * 0.3 : -waveShift * 0.3)}
                  cy={260 + idx * 4}
                  rx={radius}
                  ry={radius * 0.62}
                  fill={isGlobal ? "rgba(255, 215, 0, 0.2)" : "none"}
                  stroke={isGlobal ? "#FFD700" : idx > 4 ? "#00F0FF" : "#3B82F6"}
                  strokeWidth={isGlobal ? 3 : 1.5}
                  strokeDasharray={idx % 2 === 1 ? "6 4" : "none"}
                  opacity={ringOpacity}
                />
              );
            })}

            {/* Local Minima Pit 1 (Trapped Trap) */}
            <g transform="translate(180, 190)">
              <circle
                r="18"
                fill="rgba(239, 68, 68, 0.2)"
                stroke="#EF4444"
                strokeWidth="2"
              />
              <circle r="6" fill="#EF4444" />
              <text
                x="26"
                y="5"
                fill="#EF4444"
                fontSize="12"
                fontFamily="monospace"
                fontWeight="bold"
              >
                BẪY ĐỊA PHƯƠNG A (Local Trap)
              </text>
              <line
                x1="0"
                y1="0"
                x2="22"
                y2="0"
                stroke="#EF4444"
                strokeWidth="1.5"
              />
            </g>

            {/* Local Minima Pit 2 (Trapped Trap) */}
            <g transform="translate(480, 310)">
              <circle
                r="18"
                fill="rgba(239, 68, 68, 0.2)"
                stroke="#EF4444"
                strokeWidth="2"
              />
              <circle r="6" fill="#EF4444" />
              <text
                x="26"
                y="5"
                fill="#EF4444"
                fontSize="12"
                fontFamily="monospace"
                fontWeight="bold"
              >
                BẪY ĐỊA PHƯƠNG B (Local Trap)
              </text>
            </g>

            {/* True Global Minimum (Target) */}
            <g transform="translate(340, 280)">
              {/* Pulsing Target Ring */}
              <circle
                r={22 + (frame % 30) * 0.6}
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
                opacity={1 - (frame % 30) / 30}
              />
              <circle
                r="14"
                fill="rgba(255, 215, 0, 0.3)"
                stroke="#FFD700"
                strokeWidth="2.5"
              />
              <circle r="6" fill="#FFD700" />
              <line x1="-30" y1="0" x2="30" y2="0" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="0" y1="-30" x2="0" y2="30" stroke="#FFD700" strokeWidth="1.5" />
              <text
                x="0"
                y="-40"
                textAnchor="middle"
                fill="#FFD700"
                fontSize="14"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                NGHIỆM TỐI ƯU TOÀN CỤC (GLOBAL OPTIMA)
              </text>
            </g>

            {/* Trapped Agent Particle Path */}
            <path
              d="M 120 120 Q 150 160 180 190"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Bottom Floating Legend */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: 20,
              background: "rgba(10, 14, 23, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "10px 18px",
              display: "flex",
              gap: 24,
              fontSize: 12,
              fontFamily: "monospace",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, backgroundColor: "#EF4444" }} />
              <span style={{ color: "#E2E8F0" }}>Cực tiểu địa phương</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, backgroundColor: "#FFD700" }} />
              <span style={{ color: "#E2E8F0" }}>Cực tiểu toàn cục</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, backgroundColor: "#00F0FF" }} />
              <span style={{ color: "#E2E8F0" }}>Mặt đẳng mức năng lượng</span>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
