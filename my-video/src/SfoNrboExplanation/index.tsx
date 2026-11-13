import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Scene1_Intro } from "./Scene1_Intro";
import { Scene2_SFO } from "./Scene2_SFO";
import { Scene3_NRBO } from "./Scene3_NRBO";
import { Scene4_HybridArchitecture } from "./Scene4_HybridArchitecture";
import { Scene5_Applications } from "./Scene5_Applications";
import { TopHeaderProgress } from "./TopHeaderProgress";
import { SfoNrboVideoProps } from "./types";

export const SCENE_DURATIONS = {
  s1: 395,
  s2: 425,
  s3: 515,
  s4: 395,
  s5: 400,
};

export const TOTAL_SFO_NRBO_FRAMES =
  SCENE_DURATIONS.s1 +
  SCENE_DURATIONS.s2 +
  SCENE_DURATIONS.s3 +
  SCENE_DURATIONS.s4 +
  SCENE_DURATIONS.s5; // 2130 frames

export const SfoNrboExplanation: React.FC<SfoNrboVideoProps> = ({
  enableAudio = true,
}) => {
  const frame = useCurrentFrame();

  const t1 = SCENE_DURATIONS.s1; // 395
  const t2 = t1 + SCENE_DURATIONS.s2; // 820
  const t3 = t2 + SCENE_DURATIONS.s3; // 1335
  const t4 = t3 + SCENE_DURATIONS.s4; // 1730
  const t5 = t4 + SCENE_DURATIONS.s5; // 2130

  let currentStageIndex = 0;
  if (frame >= t4) currentStageIndex = 4;
  else if (frame >= t3) currentStageIndex = 3;
  else if (frame >= t2) currentStageIndex = 2;
  else if (frame >= t1) currentStageIndex = 1;

  return (
    <AbsoluteFill style={{ backgroundColor: "#030712" }}>
      {/* Top Header Progress Tracker spanning the entire video */}
      <TopHeaderProgress
        currentStageIndex={currentStageIndex}
        totalDurationInFrames={t5}
      />

      {/* Scene 1: Introduction (0 - 395 frames) */}
      <Sequence durationInFrames={SCENE_DURATIONS.s1} name="Scene 1: Intro">
        <Scene1_Intro durationInFrames={SCENE_DURATIONS.s1} />
        {enableAudio && (
          <Audio src={staticFile("audio/sfo_nrbo_s1.mp3")} volume={1} />
        )}
      </Sequence>

      {/* Scene 2: SFO Deep Dive (395 - 820 frames) */}
      <Sequence from={t1} durationInFrames={SCENE_DURATIONS.s2} name="Scene 2: SFO">
        <Scene2_SFO durationInFrames={SCENE_DURATIONS.s2} />
        {enableAudio && (
          <Audio src={staticFile("audio/sfo_nrbo_s2.mp3")} volume={1} />
        )}
      </Sequence>

      {/* Scene 3: NRBO Deep Dive (820 - 1335 frames) */}
      <Sequence from={t2} durationInFrames={SCENE_DURATIONS.s3} name="Scene 3: NRBO">
        <Scene3_NRBO durationInFrames={SCENE_DURATIONS.s3} />
        {enableAudio && (
          <Audio src={staticFile("audio/sfo_nrbo_s3.mp3")} volume={1} />
        )}
      </Sequence>

      {/* Scene 4: Hybrid Architecture (1335 - 1730 frames) */}
      <Sequence from={t3} durationInFrames={SCENE_DURATIONS.s4} name="Scene 4: Hybrid">
        <Scene4_HybridArchitecture durationInFrames={SCENE_DURATIONS.s4} />
        {enableAudio && (
          <Audio src={staticFile("audio/sfo_nrbo_s4.mp3")} volume={1} />
        )}
      </Sequence>

      {/* Scene 5: Applications & Conclusions (1730 - 2130 frames) */}
      <Sequence from={t4} durationInFrames={SCENE_DURATIONS.s5} name="Scene 5: Applications">
        <Scene5_Applications durationInFrames={SCENE_DURATIONS.s5} />
        {enableAudio && (
          <Audio src={staticFile("audio/sfo_nrbo_s5.mp3")} volume={1} />
        )}
      </Sequence>
    </AbsoluteFill>
  );
};

export * from "./types";
