import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "./AudioWaveform";

export const FinaleScene: React.FC<{
  companyName: string;
  durationInFrames: number;
}> = ({ companyName, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.9 },
  });

  const languages = [
    {
      flag: "🇻🇳",
      label: "Tiếng Việt",
      text: "Tự động hóa & Tối ưu",
      color: "#F43F5E",
    },
    {
      flag: "🇬🇧",
      label: "English",
      text: "Global Scale & Insights",
      color: "#38BDF8",
    },
    {
      flag: "🇨🇳",
      label: "中文",
      text: "全场景智能驱动",
      color: "#FBBF24",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #070B19 0%, #111A3A 50%, #050811 100%)",
        overflow: "hidden",
      }}
    >
      {/* Central Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          transform: `translate(-50%, -50%) scale(${1 + Math.sin(frame * 0.06) * 0.1})`,
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(244, 63, 94, 0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Rotating Background Star / Ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "2px dashed rgba(255, 255, 255, 0.12)",
          transform: `translate(-50%, -50%) rotate(${frame * 0.3}deg)`,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 80px",
          zIndex: 10,
        }}
      >
        {/* Brand Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            transform: `scale(${entrance})`,
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 20 }}>🌐</span>
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: "#38BDF8",
              letterSpacing: 2,
            }}
          >
            TRILINGUAL POWERED BY {companyName.toUpperCase()}
          </span>
        </div>

        {/* Big Central Heading */}
        <h1
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 66,
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            maxWidth: 1200,
            textShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
            transform: `scale(${entrance}) translateY(${(1 - entrance) * 20}px)`,
          }}
        >
          Một Nền Tảng • Three Languages • 全球互联
        </h1>

        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 24,
            color: "#94A3B8",
            maxWidth: 900,
            margin: "0 0 45px 0",
            lineHeight: 1.5,
          }}
        >
          Linh hoạt chuyển đổi và kết nối thông điệp đa quốc gia cùng giải pháp trí tuệ nhân tạo toàn diện từ FirmAI.
        </p>

        {/* Language Pillars */}
        <div
          style={{
            display: "flex",
            gap: 30,
            marginBottom: 50,
          }}
        >
          {languages.map((lang, idx) => {
            const cardSpring = spring({
              frame: frame - 15 - idx * 8,
              fps,
              config: { damping: 14, mass: 0.8 },
            });

            return (
              <div
                key={idx}
                style={{
                  width: 320,
                  padding: "24px 20px",
                  borderRadius: 20,
                  backgroundColor: "rgba(15, 23, 42, 0.7)",
                  backdropFilter: "blur(16px)",
                  border: `1.5px solid ${lang.color}55`,
                  boxShadow: `0 10px 30px ${lang.color}22`,
                  transform: `scale(${cardSpring}) translateY(${(1 - cardSpring) * 30}px)`,
                  opacity: cardSpring,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 44 }}>{lang.flag}</span>
                <span
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: lang.color,
                  }}
                >
                  {lang.label}
                </span>
                <span
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 16,
                    color: "#E2E8F0",
                  }}
                >
                  {lang.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Audio Waveform & Call to Action */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
          }}
        >
          <div
            style={{
              padding: "14px 38px",
              borderRadius: 9999,
              background: "linear-gradient(90deg, #F43F5E 0%, #38BDF8 50%, #FBBF24 100%)",
              color: "#0F172A",
              fontFamily: "system-ui, sans-serif",
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 0.5,
              boxShadow: "0 0 35px rgba(56, 189, 248, 0.6)",
              transform: `scale(${1 + Math.sin(frame * 0.1) * 0.03})`,
            }}
          >
            Khám phá ngay • Explore Now • 立即体验
          </div>

          <AudioWaveform
            color="#38BDF8"
            accentColor="#FBBF24"
            active={frame < durationInFrames - 10}
            label="Finale Voiceover"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
