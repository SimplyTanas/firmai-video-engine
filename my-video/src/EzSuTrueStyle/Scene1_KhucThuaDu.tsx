import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CharacterAvatar } from "./CharacterAvatar";
import { HistoricalMapSvg } from "./HistoricalMapSvg";

export const Scene1_KhucThuaDu: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  // Ken Burns subtle camera zoom into Tĩnh Hải Quân
  const scale = interpolate(frame, [0, durationInFrames], [1, 1.08], {
    extrapolateRight: "clamp",
  });
  const panX = interpolate(frame, [0, durationInFrames], [0, -30], {
    extrapolateRight: "clamp",
  });
  const panY = interpolate(frame, [0, durationInFrames], [0, -20], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Dynamic Animated Map */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(${panX}px, ${panY}px)`,
          transformOrigin: "50% 60%",
        }}
      >
        <HistoricalMapSvg highlightRegion="tinh_hai_quan" />

        {/* Character Avatar: Khúc Thừa Dụ */}
        <CharacterAvatar
          name="KHÚC THỪA DỤ"
          title="Tiết Độ Sứ (905)"
          x={940}
          y={720}
          delay={15}
        />
      </div>

      {/* Historical Context Floating Overlay Badge (EZ Sử style) */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 48,
          padding: "10px 22px",
          borderRadius: 8,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          border: "2px solid #FACC15",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 24 }}>🚩</span>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#FACC15", letterSpacing: 1 }}>
            NĂM 905: KHÚC THỪA DỤ XƯNG TIẾT ĐỘ SỨ
          </div>
          <div style={{ fontSize: 13, color: "#E2E8F0" }}>
            Khởi đầu thời kỳ tự chủ, chấm dứt ách đô hộ của nhà Đường
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
