import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { FinaleScene } from "./FinaleScene";
import { LanguageSceneCard } from "./LanguageSceneCard";
import { TimelineProgress } from "./TimelineProgress";
import { MultilingualVideoProps } from "./types";

export const MultilingualPresentation: React.FC<MultilingualVideoProps> = ({
  companyName,
  sceneDurationInFrames,
  enableAudio,
  scenes,
}) => {
  const totalDuration = sceneDurationInFrames * (scenes.length + 1);

  return (
    <AbsoluteFill style={{ backgroundColor: "#020617" }}>
      {/* Global Top Progress Bar */}
      <TimelineProgress
        scenes={scenes}
        sceneDurationInFrames={sceneDurationInFrames}
        totalDurationInFrames={totalDuration}
      />

      {/* Language Scenes Sequenced */}
      {scenes.map((scene, idx) => (
        <Sequence
          key={scene.id}
          from={idx * sceneDurationInFrames}
          durationInFrames={sceneDurationInFrames}
        >
          <LanguageSceneCard
            scene={scene}
            companyName={companyName}
            durationInFrames={sceneDurationInFrames}
          />
          {enableAudio && (
            <Audio
              src={staticFile(scene.audioFile)}
              volume={0.9}
            />
          )}
        </Sequence>
      ))}

      {/* Finale Scene */}
      <Sequence
        from={scenes.length * sceneDurationInFrames}
        durationInFrames={sceneDurationInFrames}
      >
        <FinaleScene
          companyName={companyName}
          durationInFrames={sceneDurationInFrames}
        />
        {enableAudio && (
          <Audio
            src={staticFile("audio/scene_finale.mp3")}
            volume={0.9}
          />
        )}
      </Sequence>
    </AbsoluteFill>
  );
};

export * from "./defaultData";
export * from "./types";
export * from "./FinaleScene";
export * from "./LanguageSceneCard";
export * from "./AudioWaveform";
export * from "./LanguageBadge";

