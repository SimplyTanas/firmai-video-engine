import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CharacterAvatar } from "./CharacterAvatar";
import { HistoricalMapSvg } from "./HistoricalMapSvg";

export const Scene2_KhucHao: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, durationInFrames], [1.08, 1.15], {
    extrapolateRight: "clamp",
  });
  const panX = interpolate(frame, [0, durationInFrames], [-30, -50], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Dynamic Animated Map */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(${panX}px, -20px)`,
          transformOrigin: "50% 60%",
        }}
      >
        <HistoricalMapSvg highlightRegion="tinh_hai_quan" />

        {/* Character Avatar: Khúc Hạo (Identical to Image 2 screenshot!) */}
        <CharacterAvatar
          name="KHÚC HẠO"
          title="Cải Cách Hành Chính"
          x={940}
          y={710}
          delay={5}
        />
      </div>

      {/* Historical Context Floating Overlay Badge */}
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
        <span style={{ fontSize: 24 }}>📜</span>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#FACC15", letterSpacing: 1 }}>
            NĂM 907: KHÚC HẠO CẢI CÁCH ĐẤT NƯỚC
          </div>
          <div style={{ fontSize: 13, color: "#E2E8F0" }}>
            Chia đặt các lộ, phủ, giáp, xã &bull; Khoan dung giản dị, nhân dân yên vui
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
