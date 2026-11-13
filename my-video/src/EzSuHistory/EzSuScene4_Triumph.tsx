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

export const EzSuScene4_Triumph: React.FC<{ durationInFrames: number }> = ({
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
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <EzSuBackground tintColor="#F59E0B" />

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
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "5px 20px",
              borderRadius: 9999,
              background: "linear-gradient(90deg, #DC2626 0%, #B45309 100%)",
              border: "1.5px solid #FDE047",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 800,
              color: "#FEF08A",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            KHẢI HOÀN CA • HÀO KHÍ ĐÔNG A MUÔN ĐỜI
          </div>

          <h2
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 52,
              fontWeight: 900,
              color: "#FEF08A",
              margin: "0 0 10px 0",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
            }}
          >
            Đại Thắng Bạch Đằng 1288
          </h2>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 22, color: "#E2E8F0", margin: 0 }}>
            Chấm dứt vĩnh viễn mộng xâm lăng của đế chế Mông Cổ, bảo toàn trọn vẹn non sông Đại Việt.
          </p>
        </div>

        {/* 3 Pillars of Historic Significance */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            margin: "15px 0",
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              padding: "26px",
              borderRadius: 20,
              backgroundColor: "rgba(35, 20, 8, 0.85)",
              border: "2px solid #F59E0B",
              backdropFilter: "blur(14px)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transform: `scale(${entrance})`,
            }}
          >
            <span style={{ fontSize: 44 }}>🏆</span>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#FDE68A" }}>
              3 Lần Đại Thắng
            </h3>
            <p style={{ margin: 0, fontSize: 15, color: "#FEF3C7", lineHeight: 1.6 }}>
              1258, 1285, và 1288 &minus; Kỳ tích chưa từng có trong lịch sử nhân loại khi đánh bại đạo quân Mông Cổ hùng mạnh nhất thế giới.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              padding: "26px",
              borderRadius: 20,
              backgroundColor: "rgba(35, 12, 10, 0.85)",
              border: "2px solid #EF4444",
              backdropFilter: "blur(14px)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transform: `scale(${entrance})`,
            }}
          >
            <span style={{ fontSize: 44 }}>🛡️</span>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#FCA5A5" }}>
              Đoàn Kết Dân Tộc
            </h3>
            <p style={{ margin: 0, fontSize: 15, color: "#FEE2E2", lineHeight: 1.6 }}>
              Bài học lịch sử ngàn vàng: &ldquo;Vua tôi đồng lòng, anh em hòa mục, cả nước góp sức&rdquo; chính là sức mạnh vô địch.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              padding: "26px",
              borderRadius: 20,
              backgroundColor: "rgba(10, 30, 20, 0.85)",
              border: "2px solid #10B981",
              backdropFilter: "blur(14px)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              transform: `scale(${entrance})`,
            }}
          >
            <span style={{ fontSize: 44 }}>📜</span>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#A7F3D0" }}>
              Trang Sử Hoàng Kim
            </h3>
            <p style={{ margin: 0, fontSize: 15, color: "#D1FAE5", lineHeight: 1.6 }}>
              Khẳng định vị thế độc lập tự chủ của dân tộc Việt Nam, mãi mãi là nguồn tự hào bất diệt của con cháu Lạc Hồng.
            </p>
          </div>
        </div>

        {/* EZ Sử Signature Outro Banner */}
        <div
          style={{
            padding: "16px 28px",
            borderRadius: 16,
            background: "linear-gradient(90deg, #DC2626 0%, #B45309 50%, #15803D 100%)",
            border: "1.5px solid #FDE047",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 28 }}>🇻🇳</span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#FEF08A" }}>
                EZ SỬ • LỊCH SỬ DỄ NHỚ - TỰ HÀO DÂN TỘC
              </div>
              <div style={{ fontSize: 13, color: "#F8FAFC" }}>
                Đăng ký kênh để theo dõi các trận đánh hào hùng của dân tộc Việt Nam
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "8px 22px",
              borderRadius: 9999,
              backgroundColor: "#FEF08A",
              color: "#7F1D1D",
              fontFamily: "system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            SUBSCRIBE EZ SỬ
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
              &ldquo;Đại thắng Bạch Đằng năm 1288 đã chôn vùi vĩnh viễn mộng bành trướng của quân Nguyên Mông, khắc ghi trang sử vàng chói lọi của Hào khí Đông A trong dòng chảy 4000 năm giữ nước.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#F59E0B"
            accentColor="#DC2626"
            active={frame < durationInFrames - 10}
            label="Khải Hoàn Ca"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
