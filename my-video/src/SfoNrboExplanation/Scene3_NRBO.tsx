import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "../MultilingualPresentation/AudioWaveform";

export const Scene3_NRBO: React.FC<{ durationInFrames: number }> = ({
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
        background: "linear-gradient(135deg, #1f1303 0%, #3a2205 50%, #150901 100%)",
        opacity: exitOpacity,
        overflow: "hidden",
      }}
    >
      {/* Background Warm Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 70%)",
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
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#FBBF24",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            PHÂN CẢNH 3 • CHI TIẾT THUẬT TOÁN NRBO
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
            NRBO: Sức Mạnh Từ Giải Tích Newton-Raphson
          </h2>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#94A3B8", margin: 0 }}>
            Biến phương pháp giải tích tiếp tuyến thành động cơ tối ưu hóa siêu tốc với NRSR và TAO.
          </p>
        </div>

        {/* 2 Key Engines of NRBO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          {/* Engine 1: NRSR */}
          <div
            style={{
              padding: "26px",
              borderRadius: 20,
              backgroundColor: "rgba(30, 20, 5, 0.75)",
              border: "1.5px solid rgba(245, 158, 11, 0.35)",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 32 }}>⚡</span>
                <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#FBBF24" }}>
                  NRSR (Newton-Raphson Search Rule)
                </h3>
              </div>

              <div
                style={{
                  padding: "14px",
                  borderRadius: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  border: "1px dashed rgba(245, 158, 11, 0.4)",
                  fontFamily: "monospace",
                  fontSize: 16,
                  color: "#FDE68A",
                  marginBottom: 14,
                }}
              >
                x<sub>k+1</sub> = x<sub>k</sub> &minus; f(x<sub>k</sub>) / f&prime;(x<sub>k</sub>) &rarr; &Delta;X<sub>NRSR</sub>
              </div>

              <ul style={{ margin: 0, paddingLeft: 20, color: "#E2E8F0", fontSize: 16, lineHeight: 1.8 }}>
                <li>Xấp xỉ đạo hàm cấp 1 và cấp 2 để xác định hướng đổ dốc tối ưu.</li>
                <li>Gia tốc bước nhảy cục bộ (Exploitation) với tốc độ bậc hai (quadratic convergence).</li>
                <li>Đưa nghiệm hội tụ cực nhanh khi ở gần đáy vực.</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: 16,
                padding: "10px 16px",
                borderRadius: 8,
                backgroundColor: "rgba(245, 158, 11, 0.12)",
                fontSize: 14,
                color: "#FBBF24",
                fontWeight: 600,
              }}
            >
              🚀 Tăng tốc độ tìm kiếm cục bộ gấp 3-5 lần thuật toán truyền thống
            </div>
          </div>

          {/* Engine 2: TAO */}
          <div
            style={{
              padding: "26px",
              borderRadius: 20,
              backgroundColor: "rgba(30, 20, 5, 0.75)",
              border: "1.5px solid rgba(239, 68, 68, 0.35)",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 32 }}>🛡️</span>
                <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#F87171" }}>
                  TAO (Trap Avoidance Operator)
                </h3>
              </div>

              <div
                style={{
                  padding: "14px",
                  borderRadius: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  border: "1px dashed rgba(239, 68, 68, 0.4)",
                  fontFamily: "monospace",
                  fontSize: 16,
                  color: "#FECACA",
                  marginBottom: 14,
                }}
              >
                X<sub>new</sub> = X<sub>best</sub> + &delta; &times; Matrix<sub>rand</sub> &times; (X<sub>r1</sub> &minus; X<sub>r2</sub>)
              </div>

              <ul style={{ margin: 0, paddingLeft: 20, color: "#E2E8F0", fontSize: 16, lineHeight: 1.8 }}>
                <li>Toán tử chuyên biệt ngăn chặn hiện tượng bẫy cực trị địa phương (Local Optima).</li>
                <li>Tự động kích hoạt khi khoảng cách giữa các cá thể suy giảm dưới ngưỡng cho phép.</li>
                <li>Tạo các xung lực ngẫu nhiên đa hướng giải cứu quần thể bị đình trệ.</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: 16,
                padding: "10px 16px",
                borderRadius: 8,
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                fontSize: 14,
                color: "#F87171",
                fontWeight: 600,
              }}
            >
              🛡️ Đảm bảo nghiệm luôn tiến đến Global Optimum mà không bị nghẽn
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
              &ldquo;Để khắc phục, chúng ta kết hợp NRBO, thuật toán số hóa phương pháp Newton Raphson. Với quy tắc tìm kiếm NRSR gia tốc tiếp tuyến và toán tử TAO chống bẫy cực trị, NRBO mang lại khả năng khai thác thần tốc.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#F59E0B"
            accentColor="#EF4444"
            active={frame < durationInFrames - 10}
            label="NRBO Analysis"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
