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

export const EzSuScene1_Invasion: React.FC<{ durationInFrames: number }> = ({
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
      <EzSuBackground tintColor="#DC2626" />

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
              padding: "5px 16px",
              borderRadius: 6,
              backgroundColor: "rgba(220, 38, 38, 0.2)",
              border: "1px solid #EF4444",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 800,
              color: "#FCA5A5",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            BỐI CẢNH LỊCH SỬ • THẾ KỶ XIII (1287 - 1288)
          </div>

          <h1
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 48,
              fontWeight: 900,
              color: "#FEF08A",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
              margin: "0 0 10px 0",
            }}
          >
            Cơn Bão Nguyên Mông &amp; Vận Mệnh Đại Việt
          </h1>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 21,
              color: "#E2E8F0",
              margin: 0,
            }}
          >
            Đế chế vó ngựa thảo nguyên bất bại từ Á sang Âu dồn tổng lực xâm lăng Đại Việt lần thứ ba.
          </p>
        </div>

        {/* 2 Strategic Factions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 100px 1fr",
            gap: 24,
            alignItems: "center",
          }}
        >
          {/* Faction 1: Đế Chế Nguyên Mông */}
          <div
            style={{
              padding: "28px",
              borderRadius: 20,
              backgroundColor: "rgba(35, 12, 10, 0.8)",
              border: "2px solid rgba(239, 68, 68, 0.4)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              transform: `scale(${entrance})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <span style={{ fontSize: 36 }}>🐎</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#F87171" }}>
                  Đại Quân Nguyên Mông
                </h3>
                <span style={{ fontSize: 14, color: "#FCA5A5" }}>Thoát Hoan &amp; Ô Mã Nhi thống lĩnh</span>
              </div>
            </div>

            <ul style={{ margin: 0, paddingLeft: 20, color: "#FEE2E2", fontSize: 16, lineHeight: 1.8 }}>
              <li><strong>Hơn 300.000 quân thiện chiến:</strong> Kỵ binh tinh nhuệ kết hợp hạm đội thủy quân hùng hậu.</li>
              <li>Đã san phẳng đại lục Á - Âu, thôn tính trọn vẹn Nam Tống.</li>
              <li>Mục tiêu: Đập tan Đại Việt làm bàn đạp bành trướng Đông Nam Á.</li>
            </ul>
          </div>

          {/* VS Clash */}
          <div
            style={{
              textAlign: "center",
              fontSize: 44,
              fontWeight: 900,
              color: "#FBBF24",
              textShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
            }}
          >
            ⚔️
          </div>

          {/* Faction 2: Hào Khí Đông A Đại Việt */}
          <div
            style={{
              padding: "28px",
              borderRadius: 20,
              backgroundColor: "rgba(30, 24, 8, 0.8)",
              border: "2px solid rgba(245, 158, 11, 0.4)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              transform: `scale(${entrance})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <span style={{ fontSize: 36 }}>🛡️</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#FDE047" }}>
                  Quân Dân Đại Việt
                </h3>
                <span style={{ fontSize: 14, color: "#FDE68A" }}>Triều Trần • Hào Khí Đông A</span>
              </div>
            </div>

            <ul style={{ margin: 0, paddingLeft: 20, color: "#FEF3C7", fontSize: 16, lineHeight: 1.8 }}>
              <li><strong>Hội nghị Diên Hồng:</strong> Vạn người muôn miệng một lòng, đồng thanh hô vang: <em>&ldquo;ĐÁNH!&rdquo;</em></li>
              <li>Quốc dân khắc vào tay hai chữ <strong>&ldquo;Sát Thát&rdquo;</strong> thề quyết tử vì giang sơn.</li>
              <li>Chiến lược phòng ngự chủ động: Vườn không nhà trống &amp; Dụ địch vào bẫy.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Voiceover Box & Waveform */}
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
              &ldquo;Cuối thế kỷ 13, đế chế Mông Cổ với vó ngựa bách chiến bách thắng đã san phẳng từ Á sang Âu. Năm 1287, Hốt Tất Liệt phát động cuộc xâm lược Đại Việt lần thứ ba với hơn 30 vạn đại quân.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#DC2626"
            accentColor="#FBBF24"
            active={frame < durationInFrames - 10}
            label="EZ Sử Thuyết Minh"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
