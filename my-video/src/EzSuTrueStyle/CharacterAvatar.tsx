import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const CharacterAvatar: React.FC<{
  name: string;
  title?: string;
  x: number;
  y: number;
  scale?: number;
  delay?: number;
}> = ({ name, title, x, y, scale = 1, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, mass: 0.8 },
  });

  if (frame < delay) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: `translate(-50%, -50%) scale(${entrance * scale})`,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      {/* Circle Portrait (Recreating EZ Sử character badge) */}
      <div
        style={{
          width: 82,
          height: 82,
          borderRadius: "50%",
          backgroundColor: "#60A5FA",
          border: "3.5px solid #FFFFFF",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          {/* Background circle gradient */}
          <circle cx="50" cy="50" r="50" fill="#60A5FA" />

          {/* Robe / Body */}
          <path d="M 20 100 Q 50 65 80 100 Z" fill="#1E293B" />
          <path d="M 40 78 L 50 92 L 60 78 Z" fill="#E2E8F0" />

          {/* Face */}
          <ellipse cx="50" cy="56" rx="20" ry="22" fill="#FCD34D" />

          {/* Eyes */}
          <circle cx="43" cy="54" r="2.5" fill="#1E293B" />
          <circle cx="57" cy="54" r="2.5" fill="#1E293B" />

          {/* Mustache */}
          <path
            d="M 42 66 Q 50 63 58 66 Q 50 70 42 66 Z"
            fill="#1E293B"
          />

          {/* Historical Vietnamese Mandarin Hat (Khăn xếp / Mũ quan) */}
          <path
            d="M 28 42 Q 50 30 72 42 L 70 34 Q 50 24 30 34 Z"
            fill="#0F172A"
          />
          <path
            d="M 32 35 Q 50 18 68 35 Q 50 28 32 35 Z"
            fill="#1E293B"
          />
          {/* Hat ribbons */}
          <circle cx="50" cy="32" r="4" fill="#DC2626" />
        </svg>
      </div>

      {/* Pill Name Label Below */}
      <div
        style={{
          marginTop: -6,
          padding: "3px 14px",
          borderRadius: 9999,
          backgroundColor: "#FFFFFF",
          border: "2px solid #0F172A",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 14,
            fontWeight: 900,
            color: "#0F172A",
            letterSpacing: 0.8,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </span>
        {title && (
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#DC2626",
              marginTop: -2,
            }}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
};
