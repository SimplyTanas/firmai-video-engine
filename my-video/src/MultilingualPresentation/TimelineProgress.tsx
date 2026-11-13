import React from "react";
import { useCurrentFrame } from "remotion";
import { LanguageScene } from "./types";

export const TimelineProgress: React.FC<{
  scenes: LanguageScene[];
  sceneDurationInFrames: number;
  totalDurationInFrames: number;
}> = ({ scenes, sceneDurationInFrames, totalDurationInFrames }) => {
  const frame = useCurrentFrame();

  const progressPercent = Math.min(100, Math.max(0, (frame / totalDurationInFrames) * 100));

  const items = [
    ...scenes.map((s, idx) => ({
      flag: s.flag,
      label: s.langLabel,
      color: s.accentColor,
      active: frame >= idx * sceneDurationInFrames && frame < (idx + 1) * sceneDurationInFrames,
      completed: frame >= (idx + 1) * sceneDurationInFrames,
    })),
    {
      flag: "🌐",
      label: "Multilingual Finale",
      color: "#38BDF8",
      active: frame >= scenes.length * sceneDurationInFrames,
      completed: false,
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 36,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 50,
      }}
    >
      {/* Top Indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#22C55E",
              boxShadow: "0 0 10px #22C55E",
            }}
          />
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#F8FAFC",
              letterSpacing: 1,
            }}
          >
            FIRMAI • MULTILINGUAL SHOWCASE
          </span>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 9999,
                backgroundColor: item.active
                  ? "rgba(255, 255, 255, 0.16)"
                  : "rgba(0, 0, 0, 0.3)",
                border: item.active
                  ? `1px solid ${item.color}`
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: item.active
                  ? `0 0 12px ${item.color}66`
                  : "none",
                transform: item.active ? "scale(1.05)" : "scale(1)",
              }}
            >
              <span style={{ fontSize: 16 }}>{item.flag}</span>
              <span
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: item.active ? 700 : 500,
                  color: item.active ? item.color : "#94A3B8",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Track */}
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
            background: "linear-gradient(90deg, #E11D48 0%, #2563EB 50%, #D97706 80%, #38BDF8 100%)",
            boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
          }}
        />
      </div>
    </div>
  );
};
