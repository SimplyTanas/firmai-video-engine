import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const EzSuBackground: React.FC<{
  tintColor?: string;
}> = ({ tintColor = "#B45309" }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #130a05 0%, #241408 50%, #0d0603 100%)",
        overflow: "hidden",
      }}
    >
      {/* Antique Vignette & Ambient Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${tintColor}22 0%, transparent 70%)`,
          filter: "blur(90px)",
        }}
      />

      {/* Rotating Bronze Drum (Trống Đồng Đông Sơn) Motif */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 850,
          height: 850,
          borderRadius: "50%",
          border: "2px dashed rgba(245, 158, 11, 0.12)",
          transform: `translate(-50%, -50%) rotate(${frame * 0.15}deg)`,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 720,
            height: 720,
            borderRadius: "50%",
            border: "1.5px solid rgba(245, 158, 11, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Inner solar rays */}
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 2,
                height: 300,
                backgroundColor: "rgba(245, 158, 11, 0.06)",
                transform: `rotate(${(i / 14) * 180}deg)`,
              }}
            />
          ))}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: "rgba(245, 158, 11, 0.08)",
              border: "2px solid rgba(245, 158, 11, 0.15)",
            }}
          />
        </div>
      </div>

      {/* Floating Ember Particles (Tàn lửa lịch sử) */}
      {Array.from({ length: 24 }).map((_, i) => {
        const seedX = (i * 73) % 100;
        const speed = 0.8 + (i % 5) * 0.3;
        const currentY = 100 - (((frame * speed + i * 40) % 120));
        const opacity = Math.sin((currentY / 100) * Math.PI) * 0.7;
        const drift = Math.sin((frame * 0.04) + i) * 15;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(${seedX}% + ${drift}px)`,
              top: `${currentY}%`,
              width: (i % 3) + 2,
              height: (i % 3) + 2,
              borderRadius: "50%",
              backgroundColor: i % 2 === 0 ? "#F59E0B" : "#EF4444",
              boxShadow: `0 0 8px ${i % 2 === 0 ? "#F59E0B" : "#EF4444"}`,
              opacity: Math.max(0, opacity),
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* Vintage Paper Texture Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.7) 100%),
            linear-gradient(to right, rgba(245, 158, 11, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 158, 11, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "auto, 40px 40px, 40px 40px",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
