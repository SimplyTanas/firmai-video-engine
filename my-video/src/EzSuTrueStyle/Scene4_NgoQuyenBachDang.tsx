import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CharacterAvatar } from "./CharacterAvatar";
import { HistoricalMapSvg } from "./HistoricalMapSvg";

export const Scene4_NgoQuyenBachDang: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, durationInFrames], [1.18, 1.25], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Dynamic Animated Map with Bạch Đằng Battle Marker */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(-60px, -40px)`,
          transformOrigin: "50% 60%",
        }}
      >
        <HistoricalMapSvg
          highlightRegion="tinh_hai_quan"
          attackArrow={{
            x1: 1100,
            y1: 720,
            x2: 980,
            y2: 650,
          }}
          battleMarker={{
            x: 980,
            y: 640,
            label: "Trận Bạch Đằng (938)",
          }}
        />

        {/* Character Avatar: Ngô Quyền */}
        <CharacterAvatar
          name="NGÔ QUYỀN"
          title="Tiền Ngô Vương (938)"
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
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          border: "2px solid #FACC15",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 28 }}>🏆</span>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#FACC15", letterSpacing: 1 }}>
            NĂM 938: ĐẠI THẮNG BẠCH ĐẰNG &bull; CHẤM DỨT NGHÌN NĂM BẮC THUỘC
          </div>
          <div style={{ fontSize: 13, color: "#E2E8F0" }}>
            Ngô Quyền đóng cọc ngầm chôn vùi vạn quân Nam Hán &bull; Khai sinh kỷ nguyên độc lập muôn đời
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
