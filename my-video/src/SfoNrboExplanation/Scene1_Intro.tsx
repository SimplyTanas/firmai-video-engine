import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "../MultilingualPresentation/AudioWaveform";

export const Scene1_Intro: React.FC<{ durationInFrames: number }> = ({
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
        background: "linear-gradient(135deg, #030712 0%, #0c1222 50%, #030712 100%)",
        opacity: exitOpacity,
        overflow: "hidden",
      }}
    >
      {/* Background Radial Glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          width: 650,
          height: 650,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Main Container */}
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
        {/* Title Block */}
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
              backgroundColor: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              fontFamily: "system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#38BDF8",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            METAHEURISTIC OPTIMIZATION • NGUYÊN LÝ NỀN TẢNG
          </div>

          <h1
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 52,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
              margin: "0 0 12px 0",
            }}
          >
            Giải Mã Thuật Toán Lai <span style={{ color: "#38BDF8" }}>SFO</span> &amp;{" "}
            <span style={{ color: "#F59E0B" }}>NRBO</span>
          </h1>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 22,
              color: "#94A3B8",
              margin: 0,
              maxWidth: 1100,
            }}
          >
            Nghịch lý lớn nhất trong tối ưu hóa hiện đại: Cân bằng giữa Thăm dò toàn cục (Exploration) và Khai thác cục bộ (Exploitation).
          </p>
        </div>

        {/* Central Visual: The Two Titans */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 100px 1fr",
            alignItems: "center",
            gap: 20,
            margin: "20px 0",
          }}
        >
          {/* Card SFO */}
          <div
            style={{
              padding: "30px",
              borderRadius: 24,
              background: "rgba(15, 23, 42, 0.7)",
              border: "2px solid rgba(56, 189, 248, 0.4)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 10px 30px rgba(56, 189, 248, 0.15)",
              transform: `scale(${entrance})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <span style={{ fontSize: 36 }}>🐟</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#38BDF8" }}>
                  SFO (Sailfish Optimizer)
                </h3>
                <span style={{ fontSize: 15, color: "#94A3B8" }}>Trí Tuệ Bầy Đàn Săn Mồi Tự Nhiên</span>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#E2E8F0", fontSize: 17, lineHeight: 1.8 }}>
              <li>Mô phỏng bầy cá buồm săn cá mòi ngoài đại dương</li>
              <li><strong style={{ color: "#38BDF8" }}>Thế mạnh:</strong> Khám phá không gian toàn cục cực rộng (Global Exploration)</li>
              <li><span style={{ color: "#F87171" }}>Thách thức:</span> Dễ hội tụ chậm ở giai đoạn cuối</li>
            </ul>
          </div>

          {/* Plus symbol */}
          <div
            style={{
              textAlign: "center",
              fontSize: 48,
              fontWeight: 900,
              color: "#EF4444",
              textShadow: "0 0 20px rgba(239, 68, 68, 0.8)",
            }}
          >
            ⚡
          </div>

          {/* Card NRBO */}
          <div
            style={{
              padding: "30px",
              borderRadius: 24,
              background: "rgba(15, 23, 42, 0.7)",
              border: "2px solid rgba(245, 158, 11, 0.4)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 10px 30px rgba(245, 158, 11, 0.15)",
              transform: `scale(${entrance})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <span style={{ fontSize: 36 }}>📐</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#F59E0B" }}>
                  NRBO (Newton-Raphson)
                </h3>
                <span style={{ fontSize: 15, color: "#94A3B8" }}>Giải Tích Số Học &amp; Tiếp Tuyến</span>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#E2E8F0", fontSize: 17, lineHeight: 1.8 }}>
              <li>Dựa trên phương pháp số cổ điển Newton-Raphson</li>
              <li><strong style={{ color: "#F59E0B" }}>Thế mạnh:</strong> Khai thác cục bộ thần tốc (NRSR Rule) &amp; Phá bẫy cực trị (TAO)</li>
              <li>Hội tụ dốc đứng và đạt độ chính xác cực cao</li>
            </ul>
          </div>
        </div>

        {/* Bottom Voiceover & Audio Waveform */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
              &ldquo;Trong tối ưu hóa metaheuristic, thách thức lớn nhất là cân bằng giữa khám phá toàn cục và khai thác cục bộ. Hôm nay, chúng ta cùng giải mã thuật toán lai đột phá giữa SFO và NRBO.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#38BDF8"
            accentColor="#EF4444"
            active={frame < durationInFrames - 10}
            label="ElevenLabs v4"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
