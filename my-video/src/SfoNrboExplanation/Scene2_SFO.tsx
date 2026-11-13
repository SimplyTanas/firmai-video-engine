import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "../MultilingualPresentation/AudioWaveform";

export const Scene2_SFO: React.FC<{ durationInFrames: number }> = ({
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

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #02121e 0%, #062238 50%, #020b12 100%)",
        opacity: exitOpacity,
        overflow: "hidden",
      }}
    >
      {/* Background Water Ambient */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
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
              backgroundColor: "rgba(6, 182, 212, 0.15)",
              border: "1px solid rgba(6, 182, 212, 0.4)",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#22D3EE",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            PHÂN CẢNH 2 • CHI TIẾT THUẬT TOÁN SFO
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
            SFO: Cơ Chế Săn Mồi Đôi (Sailfish &amp; Sardines)
          </h2>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#94A3B8", margin: 0 }}>
            Quần thể kép tương tác động: Đàn cá buồm săn lùng và siết chặt vòng vây bầy cá mòi.
          </p>
        </div>

        {/* Dynamic Dual Diagram & Math Formula */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          {/* Swarm Simulation View */}
          <div
            style={{
              height: 380,
              borderRadius: 20,
              backgroundColor: "rgba(3, 15, 29, 0.75)",
              border: "1.5px solid rgba(6, 182, 212, 0.3)",
              position: "relative",
              overflow: "hidden",
              padding: 24,
            }}
          >
            <div style={{ position: "absolute", top: 16, left: 20, fontSize: 16, fontWeight: 700, color: "#38BDF8" }}>
              Mô Phỏng Quần Thể Săn Mồi 2D
            </div>

            {/* Target Global Optimum */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#EF4444",
                boxShadow: "0 0 25px #EF4444",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 900,
                color: "#FFFFFF",
              }}
            >
              ★
            </div>

            {/* Elite Sailfish */}
            <div
              style={{
                position: "absolute",
                top: `${50 + Math.sin(frame * 0.05) * 15}%`,
                left: `${50 + Math.cos(frame * 0.05) * 20}%`,
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "#F59E0B",
                boxShadow: "0 0 18px #F59E0B",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Orbiting Sardines & Sailfish swarming */}
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = (i / 18) * Math.PI * 2 + frame * 0.03 * (i % 2 === 0 ? 1 : -0.7);
              const radius = 60 + (i % 4) * 35;
              const x = 50 + (Math.cos(angle) * radius * 0.22);
              const y = 50 + (Math.sin(angle) * radius * 0.35);

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${y}%`,
                    left: `${x}%`,
                    width: i < 5 ? 12 : 8,
                    height: i < 5 ? 12 : 8,
                    borderRadius: "50%",
                    backgroundColor: i < 5 ? "#38BDF8" : "#94A3B8",
                    boxShadow: i < 5 ? "0 0 8px #38BDF8" : "none",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              );
            })}

            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 20,
                right: 20,
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                color: "#CBD5E1",
              }}
            >
              <span>⭐ Vùng tối ưu toàn cục</span>
              <span>🟠 Cá buồm tinh anh (Elite SF)</span>
              <span>🔵 Đàn cá mòi (Sardines)</span>
            </div>
          </div>

          {/* Mathematical Formulation Card */}
          <div
            style={{
              padding: "26px",
              borderRadius: 20,
              backgroundColor: "rgba(15, 23, 42, 0.75)",
              border: "1.5px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, color: "#22D3EE" }}>
              📐 Phương Trình Cập Nhật Vị Trí
            </div>

            <div
              style={{
                padding: "16px",
                borderRadius: 12,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                border: "1px dashed rgba(56, 189, 248, 0.4)",
                fontFamily: "monospace",
                fontSize: 18,
                color: "#F8FAFC",
                lineHeight: 1.6,
              }}
            >
              X<sub>SF</sub><sup>t+1</sup> = X<sub>elite</sub><sup>SF</sup> &minus; &lambda;<sub>i</sub> &times; [r &times; (X<sub>elite</sub> + X<sub>sardine</sub>)/2 &minus; X<sub>SF</sub><sup>t</sup>]
            </div>

            <div style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.6 }}>
              <p style={{ margin: "0 0 8px 0" }}>
                <strong style={{ color: "#38BDF8" }}>• &lambda;<sub>i</sub>:</strong> Hệ số giảm dần kiểm soát phạm vi săn mồi.
              </p>
              <p style={{ margin: "0 0 8px 0" }}>
                <strong style={{ color: "#F59E0B" }}>• Ưu thế:</strong> Phủ kín không gian tìm kiếm đa chiều rất nhanh.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "#EF4444" }}>• Điểm yếu:</strong> Ở các vòng lặp cuối, độ biến thiên &lambda; nhỏ khiến thuật toán dễ đình trệ (stagnation).
              </p>
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
              &ldquo;Thuật toán SFO lấy cảm hứng từ tập tính săn mồi của cá buồm đại dương. Với cơ chế hai quần thể cá buồm và cá mòi, SFO có khả năng thăm dò không gian cực rộng nhưng dễ chậm lại ở giai đoạn cuối.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#06B6D4"
            accentColor="#38BDF8"
            active={frame < durationInFrames - 10}
            label="SFO Analysis"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
