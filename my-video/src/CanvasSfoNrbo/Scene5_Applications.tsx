import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CanvasBackground } from "./CanvasBackground";

export const Scene5_Applications: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 14 } });
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp" }
  );

  // Staggered reveal for quadrant application cards
  const card1Spring = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 12 } });
  const card2Spring = spring({ frame: Math.max(0, frame - 28), fps, config: { damping: 12 } });
  const card3Spring = spring({ frame: Math.max(0, frame - 40), fps, config: { damping: 12 } });
  const card4Spring = spring({ frame: Math.max(0, frame - 52), fps, config: { damping: 12 } });

  // Rotating radar animation
  const radarSpin = (frame * 1.5) % 360;

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <CanvasBackground currentStage="ENGINEERING // PRACTICAL DOMAINS" stageNumber="05" />

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
        {/* Left Column: Vision & Computational Synthesis */}
        <div style={{ flex: "0 0 520px", zIndex: 10 }}>
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
            ACT 05 // ỨNG DỤNG THỰC TIỄN & KỸ THUẬT
          </div>

          <h1
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: -1,
            }}
          >
            ĐỘT PHÁ CÔNG NGHỆ <br />
            <span style={{ color: "#00F0FF" }}>KỶ NGUYÊN</span> TỐI ƯU HÓA
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#94A3B8",
              marginBottom: 24,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Giao thoa hoàn mỹ giữa bản năng sinh học tự nhiên và độ chuẩn xác của giải tích giải tích toán học bậc hai. SFO-NRBO thiết lập chuẩn mực mới cho các hệ thống công nghiệp siêu phức tạp.
          </p>

          {/* Metric Summary Box */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid #1E293B",
              borderLeft: "4px solid #10B981",
              padding: "16px 20px",
              marginBottom: 24,
            }}
          >
            <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 2, textTransform: "uppercase" }}>
              CHỈ SỐ HIỆU SUẤT TỔNG HỢP (BENCHMARK 2026)
            </div>
            <div style={{ display: "flex", gap: 30, marginTop: 10 }}>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#10B981", fontFamily: "'JetBrains Mono', monospace" }}>
                  -42.6%
                </div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>Thời gian tính toán</div>
              </div>
              <div style={{ borderLeft: "1px solid #334155", paddingLeft: 24 }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#00F0FF", fontFamily: "'JetBrains Mono', monospace" }}>
                  99.8%
                </div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>Tỷ lệ hội tụ cực tiểu</div>
              </div>
            </div>
          </div>

          {/* Slogan badge */}
          <div
            style={{
              padding: "12px 18px",
              background: "rgba(0, 240, 255, 0.05)",
              border: "1px dashed rgba(0, 240, 255, 0.3)",
              fontSize: 14,
              color: "#E2E8F0",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            &gt; HYBRID INTELLIGENCE: EXPLORE GLOBALLY, CONVERGE PRECISELY.
          </div>
        </div>

        {/* Right Column: 4 Engineering Quadrant Panels */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 20,
            height: "540px",
          }}
        >
          {/* Card 1: AI & Deep Learning */}
          <div
            style={{
              background: "rgba(8, 14, 28, 0.85)",
              border: "1px solid #1E293B",
              borderTop: "3px solid #00F0FF",
              padding: "24px 22px",
              transform: `scale(${interpolate(card1Spring, [0, 1], [0.92, 1])})`,
              opacity: card1Spring,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#00F0FF", fontWeight: 700, letterSpacing: 2 }}>
                  DOM 01 // AI & ML
                </span>
                <span style={{ fontSize: 11, color: "#64748B", fontFamily: "'JetBrains Mono', monospace" }}>
                  HYPERPARAMETERS
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF", marginTop: 10, marginBottom: 8 }}>
                Mạng Nơ-ron Sâu
              </h3>
              <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.5 }}>
                Tối ưu hóa siêu tham số (Learning rate, weight decay, batch size) và kiến trúc Neural Architecture Search (NAS).
              </p>
            </div>
            <div style={{ fontSize: 12, color: "#00F0FF", fontFamily: "'JetBrains Mono', monospace" }}>
              Loss reduction: 10⁻⁴ ➔ 10⁻⁸
            </div>
          </div>

          {/* Card 2: Robotics & Trajectory */}
          <div
            style={{
              background: "rgba(8, 14, 28, 0.85)",
              border: "1px solid #1E293B",
              borderTop: "3px solid #FF3366",
              padding: "24px 22px",
              transform: `scale(${interpolate(card2Spring, [0, 1], [0.92, 1])})`,
              opacity: card2Spring,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#FF3366", fontWeight: 700, letterSpacing: 2 }}>
                  DOM 02 // ROBOTICS
                </span>
                <span style={{ fontSize: 11, color: "#64748B", fontFamily: "'JetBrains Mono', monospace" }}>
                  KINEMATICS
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF", marginTop: 10, marginBottom: 8 }}>
                Quỹ Đạo Cánh Tay Robot
              </h3>
              <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.5 }}>
                Quy hoạch đường đi 6-DOF tránh va chạm vật cản, làm mượt chuyển động và tối thiểu hóa năng lượng tiêu thụ mô-tơ.
              </p>
            </div>
            <div style={{ fontSize: 12, color: "#FF3366", fontFamily: "'JetBrains Mono', monospace" }}>
              Smoothness error: &lt; 0.05 mm
            </div>
          </div>

          {/* Card 3: Smart Microgrids */}
          <div
            style={{
              background: "rgba(8, 14, 28, 0.85)",
              border: "1px solid #1E293B",
              borderTop: "3px solid #F59E0B",
              padding: "24px 22px",
              transform: `scale(${interpolate(card3Spring, [0, 1], [0.92, 1])})`,
              opacity: card3Spring,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700, letterSpacing: 2 }}>
                  DOM 03 // ENERGY
                </span>
                <span style={{ fontSize: 11, color: "#64748B", fontFamily: "'JetBrains Mono', monospace" }}>
                  MICROGRIDS
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF", marginTop: 10, marginBottom: 8 }}>
                Lưới Điện Thông Minh
              </h3>
              <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.5 }}>
                Điều phối tối ưu nguồn phát điện lai (Năng lượng mặt trời, gió, pin lưu trữ) theo thời gian thực và phụ tải biến thiên.
              </p>
            </div>
            <div style={{ fontSize: 12, color: "#F59E0B", fontFamily: "'JetBrains Mono', monospace" }}>
              Operating cost: -18.4%
            </div>
          </div>

          {/* Card 4: Structural Topology */}
          <div
            style={{
              background: "rgba(8, 14, 28, 0.85)",
              border: "1px solid #1E293B",
              borderTop: "3px solid #10B981",
              padding: "24px 22px",
              transform: `scale(${interpolate(card4Spring, [0, 1], [0.92, 1])})`,
              opacity: card4Spring,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#10B981", fontWeight: 700, letterSpacing: 2 }}>
                  DOM 04 // AEROSPACE
                </span>
                <span style={{ fontSize: 11, color: "#64748B", fontFamily: "'JetBrains Mono', monospace" }}>
                  TOPOLOGY
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF", marginTop: 10, marginBottom: 8 }}>
                Tối Ưu Cấu Trúc Cơ Khí
              </h3>
              <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.5 }}>
                Tối ưu hóa topo vật liệu hàng không vũ trụ, giảm trọng lượng tối đa nhưng vẫn giữ nguyên độ cứng vững chịu lực.
              </p>
            </div>
            <div style={{ fontSize: 12, color: "#10B981", fontFamily: "'JetBrains Mono', monospace" }}>
              Weight reduction: -31.2%
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
