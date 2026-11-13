import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const AudioWaveform: React.FC<{
  color: string;
  accentColor: string;
  active: boolean;
  label?: string;
}> = ({ color, accentColor, active, label = "AI Voiceover Active" }) => {
  const frame = useCurrentFrame();
  const barCount = 18;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "8px 18px",
        borderRadius: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 3, height: 28 }}>
        {Array.from({ length: barCount }).map((_, i) => {
          // Compute dynamic height based on sine waves and frame
          const phase = (i * 0.45) + frame * 0.18;
          const secondaryPhase = (i * 0.8) - frame * 0.12;
          const wave = Math.sin(phase) * 0.5 + Math.cos(secondaryPhase) * 0.5;
          const targetHeight = active
            ? interpolate(wave, [-1, 1], [6, 26])
            : 6;

          return (
            <div
              key={i}
              style={{
                width: 3.5,
                height: `${targetHeight}px`,
                borderRadius: 2,
                background: `linear-gradient(180deg, ${accentColor} 0%, ${color} 100%)`,
                boxShadow: active
                  ? `0 0 8px ${accentColor}88`
                  : "none",
              }}
            />
          );
        })}
      </div>
      <span
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
          fontWeight: 600,
          color: "#E2E8F0",
          letterSpacing: 0.5,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
};
