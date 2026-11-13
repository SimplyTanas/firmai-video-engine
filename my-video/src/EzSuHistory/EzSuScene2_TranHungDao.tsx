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

export const EzSuScene2_TranHungDao: React.FC<{ durationInFrames: number }> = ({
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
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "5px 16px",
              borderRadius: 6,
              backgroundColor: "rgba(245, 158, 11, 0.2)",
              border: "1px solid #F59E0B",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 800,
              color: "#FDE68A",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            DANH TƯỚNG LỊCH SỬ • QUỐC CÔNG TIẾT CHẾ
          </div>

          <h2
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 48,
              fontWeight: 900,
              color: "#FEF08A",
              margin: "0 0 10px 0",
            }}
          >
            Hưng Đạo Đại Vương Trần Quốc Tuấn (1228 &minus; 1300)
          </h2>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#E2E8F0", margin: 0 }}>
            Linh hồn của cả ba cuộc kháng chiến chống quân Nguyên Mông xâm lược.
          </p>
        </div>

        {/* Character Card & Famous Quote */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          {/* Character Seal Card */}
          <div
            style={{
              padding: "30px",
              borderRadius: 20,
              backgroundColor: "rgba(35, 20, 8, 0.8)",
              border: "2px solid #F59E0B",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 16,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Royal Portrait Emblem */}
            <div
              style={{
                width: 130,
                height: 130,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #DC2626 0%, #B45309 100%)",
                border: "3px solid #FDE047",
                boxShadow: "0 0 25px rgba(245, 158, 11, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 60,
              }}
            >
              👑
            </div>

            <div>
              <h3 style={{ margin: "0 0 6px 0", fontSize: 26, fontWeight: 900, color: "#FDE68A" }}>
                TRẦN QUỐC TUẤN
              </h3>
              <div style={{ fontSize: 15, color: "#FBBF24", fontWeight: 700 }}>
                Quốc Công Tiết Chế • Vạn Kiếp Đại Vương
              </div>
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#CBD5E1",
                borderTop: "1px solid rgba(245, 158, 11, 0.3)",
                paddingTop: 12,
                width: "100%",
                lineHeight: 1.6,
              }}
            >
              Tác giả <em>Hịch Tướng Sĩ</em> &bull; <em>Binh Thư Yếu Lược</em><br />
              Tư tưởng: <strong>&ldquo;Khoan thư sức dân làm kế sâu rễ bền gốc&rdquo;</strong>
            </div>
          </div>

          {/* Immortal Quote Block */}
          <div
            style={{
              padding: "32px",
              borderRadius: 20,
              backgroundColor: "rgba(45, 10, 10, 0.85)",
              border: "2px solid #EF4444",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 800, color: "#FCA5A5", letterSpacing: 2 }}>
              LỜI THỀ BẤT HỦ TRƯỚC VUA TRẦN THÁNH TÔNG
            </div>

            <blockquote
              style={{
                margin: "18px 0",
                fontSize: 32,
                fontWeight: 900,
                color: "#FEF08A",
                lineHeight: 1.4,
                fontStyle: "italic",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              &ldquo;Bệ hạ chém đầu thần trước rồi hãy hàng!&rdquo;
            </blockquote>

            <p style={{ margin: 0, fontSize: 16, color: "#E2E8F0", lineHeight: 1.6 }}>
              Ý chí kiên định ngút trời của Hưng Đạo Vương đã đập tan mọi dao động trong triều đình, củng cố niềm tin tuyệt đối cho toàn quân toàn dân sẵn sàng bước vào trận quyết chiến chiến lược trên sông Bạch Đằng.
            </p>
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
              &ldquo;Trước thế giặc hung tàn, Quốc công Tiết chế Hưng Đạo Vương Trần Quốc Tuấn đã thể hiện khí phách ngút trời với câu nói bất hủ: Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước.&rdquo;
            </span>
          </div>

          <AudioWaveform
            color="#F59E0B"
            accentColor="#EF4444"
            active={frame < durationInFrames - 10}
            label="Khí Phách Đại Việt"
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
