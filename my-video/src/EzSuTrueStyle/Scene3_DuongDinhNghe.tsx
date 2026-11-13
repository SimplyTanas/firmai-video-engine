import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CharacterAvatar } from "./CharacterAvatar";
import { HistoricalMapSvg } from "./HistoricalMapSvg";

export const Scene3_DuongDinhNghe: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, durationInFrames], [1.12, 1.2], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Dynamic Animated Map with Military Arrows & Battle Marker */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(-40px, -30px)`,
          transformOrigin: "50% 60%",
        }}
      >
        <HistoricalMapSvg
          highlightRegion="tinh_hai_quan"
          attackArrow={{
            x1: 1180,
            y1: 630,
            x2: 960,
            y2: 660,
          }}
          battleMarker={{
            x: 940,
            y: 650,
            label: "Trận Đại La (931)",
          }}
        />

        {/* Character Avatar: Dương Đình Nghệ */}
        <CharacterAvatar
          name="DƯƠNG ĐÌNH NGHỆ"
          title="Tiết Độ Sứ (931)"
          x={860}
          y={770}
          delay={10}
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
          border: "2px solid #EF4444",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 24 }}>⚔️</span>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#F87171", letterSpacing: 1 }}>
            NĂM 930 - 931: DƯƠNG ĐÌNH NGHỆ ĐÁNH ĐUỔI QUÂN NAM HÁN
          </div>
          <div style={{ fontSize: 13, color: "#E2E8F0" }}>
            Khởi binh từ Ái Châu (Thanh Hóa), giải phóng Đại La, quét sạch viện binh
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
