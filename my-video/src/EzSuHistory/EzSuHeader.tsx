import React from "react";
import { useCurrentFrame } from "remotion";

export const EzSuHeader: React.FC<{
  currentStageName: string;
  yearMilestone: string;
  totalDurationInFrames: number;
}> = ({ currentStageName, yearMilestone, totalDurationInFrames }) => {
  const frame = useCurrentFrame();
  const progressPercent = Math.min(100, Math.max(0, (frame / totalDurationInFrames) * 100));

  return (
    <div
      style={{
        position: "absolute",
        top: 28,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: EZ SỬ Signature Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
              border: "1.5px solid #FBBF24",
              boxShadow: "0 0 16px rgba(220, 38, 38, 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16 }}>📜</span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 14,
                fontWeight: 900,
                color: "#FDE68A",
                letterSpacing: 2,
              }}
            >
              EZ SỬ
            </span>
          </div>

          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#FDE68A",
              letterSpacing: 1,
            }}
          >
            LỊCH SỬ VIỆT NAM • ĐẠI VIỆT THỜI TRẦN
          </div>
        </div>

        {/* Right: Year Milestone & Stage Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "4px 14px",
              borderRadius: 9999,
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              color: "#F59E0B",
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {currentStageName}
          </div>

          <div
            style={{
              padding: "5px 16px",
              borderRadius: 9999,
              backgroundColor: "rgba(220, 38, 38, 0.2)",
              border: "1.5px solid #EF4444",
              boxShadow: "0 0 12px rgba(239, 68, 68, 0.4)",
              color: "#FCA5A5",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            {yearMilestone}
          </div>
        </div>
      </div>

      {/* Golden Timeline Progress Bar */}
      <div
        style={{
          width: "100%",
          height: 3,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progressPercent}%`,
            height: "100%",
            background: "linear-gradient(90deg, #DC2626 0%, #F59E0B 50%, #FDE047 100%)",
            boxShadow: "0 0 12px #F59E0B",
          }}
        />
      </div>
    </div>
  );
};
