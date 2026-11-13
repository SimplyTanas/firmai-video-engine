import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const CanvasBackground: React.FC<{
  currentStage: string;
  stageNumber: string;
}> = ({ currentStage, stageNumber }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070B14",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      }}
    >
      {/* 1. Architectural Blueprint Grid */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
      >
        <defs>
          <pattern
            id="smallGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#4A90E2"
              strokeWidth="0.8"
            />
          </pattern>
          <pattern
            id="mainGrid"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <rect width="200" height="200" fill="url(#smallGrid)" />
            <path
              d="M 200 0 L 0 0 0 200"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mainGrid)" />
      </svg>

      {/* 2. Precision Blueprint Rulers & Ticks */}
      {/* Top Ruler */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 60,
          right: 60,
          height: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          color: "rgba(255, 255, 255, 0.4)",
          fontSize: 10,
          letterSpacing: 2,
        }}
      >
        <span>X:00.00</span>
        <span>X:20.00</span>
        <span>X:40.00</span>
        <span>X:60.00</span>
        <span>X:80.00</span>
        <span>X:100.00</span>
      </div>

      {/* Left Ruler */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          bottom: 40,
          width: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRight: "1px solid rgba(255, 255, 255, 0.15)",
          color: "rgba(255, 255, 255, 0.4)",
          fontSize: 10,
          letterSpacing: 1,
        }}
      >
        <span>Y:00</span>
        <span>Y:25</span>
        <span>Y:50</span>
        <span>Y:75</span>
        <span>Y:100</span>
      </div>

      {/* 3. Corner Architectural Brackets */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 65,
          width: 30,
          height: 30,
          borderTop: "2px solid #00F0FF",
          borderLeft: "2px solid #00F0FF",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          width: 30,
          height: 30,
          borderTop: "2px solid #00F0FF",
          borderRight: "2px solid #00F0FF",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 65,
          width: 30,
          height: 30,
          borderBottom: "2px solid #00F0FF",
          borderLeft: "2px solid #00F0FF",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          width: 30,
          height: 30,
          borderBottom: "2px solid #00F0FF",
          borderRight: "2px solid #00F0FF",
        }}
      />

      {/* 4. Top-Right Telemetry & Canvas Status */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 50,
          display: "flex",
          gap: 20,
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#00F0FF",
              boxShadow: "0 0 10px #00F0FF",
            }}
          />
          <span style={{ color: "#00F0FF", fontWeight: 700 }}>CANVAS LIVE</span>
        </div>
        <span>FRAME: {frame}</span>
        <span>RES: 1920x1080</span>
        <span style={{ color: "#FFD700" }}>STAGE {stageNumber}: {currentStage}</span>
      </div>

      {/* 5. Subtle Vignette Depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 60%, rgba(3, 6, 12, 0.75) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
