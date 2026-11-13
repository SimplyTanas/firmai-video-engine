import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { CANVAS_SCENE_DURATIONS, CanvasSfoNrboProps } from "./types";
export * from "./types";
import { Scene1_Landscape } from "./Scene1_Landscape";
import { Scene2_SfoSwarm } from "./Scene2_SfoSwarm";
import { Scene3_NrboNewton } from "./Scene3_NrboNewton";
import { Scene4_HybridSynthesis } from "./Scene4_HybridSynthesis";
import { Scene5_Applications } from "./Scene5_Applications";

export const CanvasSfoNrbo: React.FC<CanvasSfoNrboProps> = ({
  enableAudio = true,
}) => {
  const d = CANVAS_SCENE_DURATIONS;

  // Cumulative frame offsets
  const startS1 = 0;
  const startS2 = startS1 + d.s1;
  const startS3 = startS2 + d.s2;
  const startS4 = startS3 + d.s3;
  const startS5 = startS4 + d.s4;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14" }}>
      {/* SCENE 1: LANDSCAPE & LOCAL TRAPS */}
      <Sequence from={startS1} durationInFrames={d.s1}>
        <Scene1_Landscape durationInFrames={d.s1} />
        {enableAudio && (
          <Audio src={staticFile("audio/canvas_sfo_nrbo_s1.mp3")} volume={1} />
        )}
      </Sequence>

      {/* SCENE 2: SFO SWARM & LÉVY FLIGHT */}
      <Sequence from={startS2} durationInFrames={d.s2}>
        <Scene2_SfoSwarm durationInFrames={d.s2} />
        {enableAudio && (
          <Audio src={staticFile("audio/canvas_sfo_nrbo_s2.mp3")} volume={1} />
        )}
      </Sequence>

      {/* SCENE 3: NRBO & QUADRATIC CONVERGENCE */}
      <Sequence from={startS3} durationInFrames={d.s3}>
        <Scene3_NrboNewton durationInFrames={d.s3} />
        {enableAudio && (
          <Audio src={staticFile("audio/canvas_sfo_nrbo_s3.mp3")} volume={1} />
        )}
      </Sequence>

      {/* SCENE 4: HYBRID SYNTHESIS & BENCHMARKS */}
      <Sequence from={startS4} durationInFrames={d.s4}>
        <Scene4_HybridSynthesis durationInFrames={d.s4} />
        {enableAudio && (
          <Audio src={staticFile("audio/canvas_sfo_nrbo_s4.mp3")} volume={1} />
        )}
      </Sequence>

      {/* SCENE 5: PRACTICAL APPLICATIONS & FUTURE */}
      <Sequence from={startS5} durationInFrames={d.s5}>
        <Scene5_Applications durationInFrames={d.s5} />
        {enableAudio && (
          <Audio src={staticFile("audio/canvas_sfo_nrbo_s5.mp3")} volume={1} />
        )}
      </Sequence>
    </AbsoluteFill>
  );
};
