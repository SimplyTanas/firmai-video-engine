import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const TIMELINE_MILESTONES = [
  { year: 905, label: "Khúc Thừa Dụ", xPercent: 12 },
  { year: 907, label: "Khúc Hạo", xPercent: 28 },
  { year: 917, label: "Khúc Thừa Mỹ", xPercent: 44 },
  { year: 930, label: "Nam Hán xâm lược", xPercent: 60 },
  { year: 931, label: "Dương Đình Nghệ", xPercent: 76 },
  { year: 938, label: "Bạch Đằng - Ngô Quyền", xPercent: 92 },
];

export const EzSuBottomBar: React.FC<{
  currentYear: number;
  periodTitle?: string;
  totalDurationInFrames: number;
}> = ({
  currentYear,
  periodTitle = "THỜI KỲ QUÂN CHỦ TỰ CHỦ (905 - 938)",
  totalDurationInFrames,
}) => {
  const frame = useCurrentFrame();
  const progressRatio = Math.min(1, Math.max(0, frame / totalDurationInFrames));

  // Pointer position interpolated based on current year
  const needleXPercent = interpolate(
    currentYear,
    [905, 938],
    [12, 92],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* 1. Timeline Track Ribbon (Grey / Dark Slate band with Year Numbers) */}
      <div
        style={{
          height: 64,
          backgroundColor: "rgba(241, 245, 249, 0.95)",
          borderTop: "2px solid rgba(0, 0, 0, 0.15)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        {/* Needle Marker Indicator (Yellow Arrow pointer from screenshot) */}
        <div
          style={{
            position: "absolute",
            left: `${needleXPercent}%`,
            top: -12,
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 120,
          }}
        >
          {/* Active Year Tag Badge */}
          <div
            style={{
              padding: "2px 10px",
              backgroundColor: "#DC2626",
              color: "#FFFFFF",
              borderRadius: 4,
              fontSize: 16,
              fontWeight: 900,
              boxShadow: "0 2px 8px rgba(220, 38, 38, 0.4)",
            }}
          >
            {Math.round(currentYear)}
          </div>
          {/* Pointer pin */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "8px solid #DC2626",
            }}
          />
        </div>

        {/* Milestone Years on the Ribbon */}
        {TIMELINE_MILESTONES.map((m) => {
          const isPassed = currentYear >= m.year;
          return (
            <div
              key={m.year}
              style={{
                position: "absolute",
                left: `${m.xPercent}%`,
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: isPassed ? "#0F172A" : "#94A3B8",
                  letterSpacing: -0.5,
                  lineHeight: 1,
                }}
              >
                {m.year}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: isPassed ? "#2563EB" : "#94A3B8",
                  marginTop: 2,
                  whiteSpace: "nowrap",
                }}
              >
                {m.label}
              </span>
            </div>
          );
        })}

        {/* Small Picture-in-Picture Mini-map Thumbnail at Bottom Left (as in EZ Sử video) */}
        <div
          style={{
            position: "absolute",
            left: 28,
            bottom: 74,
            width: 140,
            height: 85,
            borderRadius: 6,
            backgroundColor: "#FFFFFF",
            border: "2px solid rgba(0, 0, 0, 0.2)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 10, fontWeight: 800, color: "#64748B", textAlign: "center" }}>
            🗺️ BẢN ĐỒ TOÀN CẢNH<br />ĐÔNG NAM Á
          </div>
        </div>
      </div>

      {/* 2. Main White Period Title Banner (Exactly like Image 2) */}
      <div
        style={{
          height: 62,
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E2E8F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 34,
            fontWeight: 950,
            color: "#000000",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {periodTitle}
        </h2>

        {/* Circular EZ Sử Watermark in Bottom Right */}
        <div
          style={{
            position: "absolute",
            right: 28,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
            border: "2px solid #FFFFFF",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: 0.5,
            }}
          >
            EZ
          </span>
        </div>
      </div>

      {/* 3. YouTube/Video Red Playhead Line at Bottom Edge */}
      <div
        style={{
          height: 5,
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progressRatio * 100}%`,
            backgroundColor: "#EF4444",
          }}
        />
      </div>
    </div>
  );
};
