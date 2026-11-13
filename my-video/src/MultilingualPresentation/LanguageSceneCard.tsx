import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AudioWaveform } from "./AudioWaveform";
import { LanguageBadge } from "./LanguageBadge";
import { LanguageScene } from "./types";

export const LanguageSceneCard: React.FC<{
  scene: LanguageScene;
  companyName: string;
  durationInFrames: number;
}> = ({ scene, companyName, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for main content
  const contentSpring = spring({
    frame,
    fps,
    config: { damping: 15, mass: 0.9 },
  });

  // Fade out transition at the end of the scene
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const exitScale = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0.96],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: scene.bgGradient,
        overflow: "hidden",
        opacity: exitOpacity,
        transform: `scale(${exitScale})`,
      }}
    >
      {/* Background Glowing Ambient Orbs */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 650,
          height: 650,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${scene.primaryColor}55 0%, transparent 70%)`,
          filter: "blur(60px)",
          transform: `scale(${1 + Math.sin(frame * 0.05) * 0.08})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: -100,
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${scene.accentColor}33 0%, transparent 70%)`,
          filter: "blur(80px)",
          transform: `scale(${1 + Math.cos(frame * 0.04) * 0.08})`,
        }}
      />

      {/* Subtle Digital Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Main Content Area */}
      <div
        style={{
          position: "absolute",
          top: 110,
          bottom: 120,
          left: 80,
          right: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        {/* Header Block: Badge & Brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LanguageBadge
            flag={scene.flag}
            langLabel={scene.langLabel}
            badgeText={scene.badgeText}
            primaryColor={scene.primaryColor}
            accentColor={scene.accentColor}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "6px 18px",
              borderRadius: 9999,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${scene.primaryColor}, ${scene.accentColor})`,
              }}
            />
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 16,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: 2,
              }}
            >
              {companyName}
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            transform: `translateY(${(1 - contentSpring) * 35}px)`,
            opacity: contentSpring,
          }}
        >
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: scene.accentColor,
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 12,
            }}
          >
            {scene.tagline}
          </div>

          <h1
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 58,
              fontWeight: 850,
              lineHeight: 1.15,
              color: "#FFFFFF",
              margin: 0,
              maxWidth: 1300,
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
            }}
          >
            {scene.title}
          </h1>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 24,
              fontWeight: 400,
              lineHeight: 1.45,
              color: "#CBD5E1",
              marginTop: 18,
              maxWidth: 1100,
            }}
          >
            {scene.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid (Staggered spring animations) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {scene.features.map((feat, idx) => {
            const cardSpring = spring({
              frame: frame - 15 - idx * 7,
              fps,
              config: { damping: 14, mass: 0.8 },
            });

            return (
              <div
                key={idx}
                style={{
                  padding: "24px 28px",
                  borderRadius: 20,
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  backdropFilter: "blur(16px)",
                  border: `1.5px solid rgba(255, 255, 255, 0.1)`,
                  boxShadow: `0 12px 30px rgba(0, 0, 0, 0.4)`,
                  transform: `translateY(${(1 - cardSpring) * 45}px) scale(${cardSpring})`,
                  opacity: cardSpring,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      fontSize: 32,
                      padding: 10,
                      borderRadius: 12,
                      background: `rgba(255, 255, 255, 0.08)`,
                      border: `1px solid ${scene.accentColor}33`,
                    }}
                  >
                    {feat.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    {feat.title}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "#94A3B8",
                    margin: 0,
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar: Subtitle & Audio Waveform */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {/* Voiceover Captions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(12px)",
              maxWidth: 950,
            }}
          >
            <span style={{ fontSize: 20 }}>🎙️</span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 17,
                fontWeight: 500,
                color: "#F1F5F9",
                letterSpacing: 0.2,
              }}
            >
              &ldquo;{scene.voiceSubtitle}&rdquo;
            </span>
          </div>

          {/* Audio Waveform */}
          <AudioWaveform
            color={scene.primaryColor}
            accentColor={scene.accentColor}
            active={frame < durationInFrames - 10}
            label={`${scene.langLabel} Audio`}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
