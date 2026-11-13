import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "../MultilingualPresentation/AudioWaveform";

export const Scene5_Applications: React.FC<{ durationInFrames: number }> = ({
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

  const apps = [
    {
      icon: "⚡",
      title: "Hệ Thống Điện Thông Minh",
      desc: "Điều độ kinh tế (Economic Dispatch), giảm tổn thất truyền tải và tích hợp năng lượng tái tạo.",
      color: "#FBBF24",
    },
    {
      icon: "🧠",
      title: "Trí Tuệ Nhân Tạo & Deep Learning",
      desc: "Tối ưu hóa siêu tham số (Hyperparameter Tuning), huấn luyện trọng số nơ-ron tránh cực tiểu địa phương.",
      color: "#38BDF8",
    },
    {
      icon: "⚙️",
      title: "Thiết Kế Cơ Khí & Kết Cấu",
      desc: "Tối ưu hóa áp lực bồn chứa, giảm trọng lượng giàn cầu và khí động học cánh máy bay.",
      color: "#34D399",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #021a12 0%, #063826 50%, #010f0a 100%)",
        opacity: exitOpacity,
        overflow: "hidden",
      }}
    >
      {/* Background Green Ambient */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "25%",
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
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
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#34D399",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            PHÂN CẢNH 5 • ỨNG DỤNG THỰC TIỄN &amp; TỔNG KẾT
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
            Tác Động Kỹ Thuật &amp; Tương Lai Tối Ưu Hóa
          </h2>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#94A3B8", margin: 0 }}>
            Giải quyết các bài toán tối ưu hóa phi tuyến tính, đa cực trị trong công nghiệp hiện đại.
          </p>
        </div>

        {/* 3 Applications Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {apps.map((app, idx) => {
            const cardSpring = spring({
              frame: frame - 10 - idx * 7,
              fps,
              config: { damping: 14, mass: 0.8 },
            });

            return (
              <div
                key={idx}
                style={{
                  padding: "26px",
                  borderRadius: 20,
                  backgroundColor: "rgba(6, 30, 22, 0.75)",
                  backdropFilter: "blur(14px)",
                  border: `1.5px solid ${app.color}44`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4)`,
                  transform: `translateY(${(1 - cardSpring) * 35}px) scale(${cardSpring})`,
                  opacity: cardSpring,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      fontSize: 32,
                      padding: 10,
                      borderRadius: 12,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: `1px solid ${app.color}55`,
                    }}
                  >
                    {app.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 19,
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    {app.title}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 15,
                    color: "#94A3B8",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {app.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Grand Takeaway Box */}
        <div
          style={{
            padding: "18px 28px",
            borderRadius: 16,
            background: "linear-gradient(90deg, rgba(6, 182, 212, 0.15) 0%, rgba(245, 158, 11, 0.15) 50%, rgba(16, 185, 129, 0.2) 100%)",
            border: "1.5px solid rgba(52, 211, 153, 0.4)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#34D399", letterSpacing: 1.5, textTransform: "uppercase" }}>
              Giá Trị Cốt Lõi (Key Takeaway)
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", marginTop: 4 }}>
              🐟 SFO (Thăm Dò Toàn Cục) + 📐 NRBO (Gia Tốc &amp; Phá Bẫy) = Giải Pháp Hoàn Hảo
            </div>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: 9999,
              backgroundColor: "#10B981",
              color: "#022c1f",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            FIRMAI RESEARCH
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
              &ldquo;Thuật toán lai SFO-NRBO mang lại hiệu năng vượt trội cho hệ thống điện, tối ưu mạng nơ-ron và cơ khí chính xác. Sự kết hợp hoàn hảo giữa sinh thái học và giải tích toán học.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#10B981"
            accentColor="#34D399"
            active={frame < durationInFrames - 10}
            label="Conclusion"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
