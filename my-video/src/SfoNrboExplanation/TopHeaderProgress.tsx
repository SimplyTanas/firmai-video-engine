import React from "react";
import { useCurrentFrame } from "remotion";

const STAGES = [
  { label: "1. Đặt Vấn Đề", color: "#38BDF8" },
  { label: "2. Giải Mã SFO", color: "#06B6D4" },
  { label: "3. Giải Mã NRBO", color: "#F59E0B" },
  { label: "4. Cơ Chế Lai SFO-NRBO", color: "#EF4444" },
  { label: "5. Ứng Dụng Thực Tiễn", color: "#10B981" },
];

export const TopHeaderProgress: React.FC<{
  currentStageIndex: number;
  totalDurationInFrames: number;
}> = ({ currentStageIndex, totalDurationInFrames }) => {
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              backgroundColor: "#EF4444",
              color: "#FFFFFF",
              fontFamily: "system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            DEEP-DIVE
          </div>
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#F8FAFC",
              letterSpacing: 1,
            }}
          >
            THUẬT TOÁN TỐI ƯU HÓA LAI • SFO-NRBO
          </span>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {STAGES.map((st, idx) => {
            const isActive = idx === currentStageIndex;
            return (
              <div
                key={idx}
                style={{
                  padding: "5px 14px",
                  borderRadius: 9999,
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.16)"
                    : "rgba(0, 0, 0, 0.4)",
                  border: isActive
                    ? `1.5px solid ${st.color}`
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive ? `0 0 14px ${st.color}55` : "none",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? st.color : "#94A3B8",
                  }}
                >
                  {st.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: 4,
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progressPercent}%`,
            height: "100%",
            background: "linear-gradient(90deg, #38BDF8 0%, #06B6D4 25%, #F59E0B 50%, #EF4444 75%, #10B981 100%)",
            boxShadow: "0 0 10px rgba(239, 68, 68, 0.8)",
          }}
        />
      </div>
    </div>
  );
};
