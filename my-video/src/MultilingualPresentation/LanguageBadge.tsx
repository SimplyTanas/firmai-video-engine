import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const LanguageBadge: React.FC<{
  flag: string;
  langLabel: string;
  badgeText: string;
  primaryColor: string;
  accentColor: string;
}> = ({ flag, langLabel, badgeText, primaryColor, accentColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "8px 20px",
        borderRadius: 9999,
        background: `linear-gradient(90deg, ${primaryColor}22 0%, rgba(255,255,255,0.06) 100%)`,
        border: `1.5px solid ${accentColor}66`,
        boxShadow: `0 0 20px ${primaryColor}44`,
        transform: `scale(${entrance}) translateY(${(1 - entrance) * -20}px)`,
        opacity: entrance,
      }}
    >
      <span style={{ fontSize: 28, lineHeight: 1 }}>{flag}</span>
      <span
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: accentColor,
          letterSpacing: 0.5,
        }}
      >
        {langLabel}
      </span>
      <span
        style={{
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor: "rgba(255,255,255,0.4)",
        }}
      />
      <span
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 15,
          fontWeight: 500,
          color: "#CBD5E1",
        }}
      >
        {badgeText}
      </span>
    </div>
  );
};
