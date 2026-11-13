import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { EzSuHeader } from "./EzSuHeader";
import { EzSuScene1_Invasion } from "./EzSuScene1_Invasion";
import { EzSuScene2_TranHungDao } from "./EzSuScene2_TranHungDao";
import { EzSuScene3_BachDangBattle } from "./EzSuScene3_BachDangBattle";
import { EzSuScene4_Triumph } from "./EzSuScene4_Triumph";
import { EzSuVideoProps } from "./types";

export const EZSU_SCENE_DURATIONS = {
  s1: 420,
  s2: 345,
  s3: 415,
  s4: 365,
};

export const TOTAL_EZSU_FRAMES =
  EZSU_SCENE_DURATIONS.s1 +
  EZSU_SCENE_DURATIONS.s2 +
  EZSU_SCENE_DURATIONS.s3 +
  EZSU_SCENE_DURATIONS.s4; // 1545 frames (~51.5s)

export const EzSuBachDangVideo: React.FC<EzSuVideoProps> = ({
  enableAudio = true,
}) => {
  const frame = useCurrentFrame();

  const t1 = EZSU_SCENE_DURATIONS.s1; // 420
  const t2 = t1 + EZSU_SCENE_DURATIONS.s2; // 765
  const t3 = t2 + EZSU_SCENE_DURATIONS.s3; // 1180
  const t4 = t3 + EZSU_SCENE_DURATIONS.s4; // 1545

  let currentStageName = "1. Bối Cảnh Lịch Sử";
  let yearMilestone = "NĂM 1287";

  if (frame >= t3) {
    currentStageName = "4. Đại Thắng Khải Hoàn";
    yearMilestone = "HÀO KHÍ ĐÔNG A";
  } else if (frame >= t2) {
    currentStageName = "3. Trận Địa Cọc Ngầm";
    yearMilestone = "THÁNG 4/1288";
  } else if (frame >= t1) {
    currentStageName = "2. Trần Hưng Đạo";
    yearMilestone = "NĂM 1288";
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#0d0603" }}>
      {/* Global Header Bar */}
      <EzSuHeader
        currentStageName={currentStageName}
        yearMilestone={yearMilestone}
        totalDurationInFrames={t4}
      />

      {/* Scene 1: Bối Cảnh Xâm Lăng (0 - 420 frames) */}
      <Sequence durationInFrames={EZSU_SCENE_DURATIONS.s1} name="Scene 1: Bối Cảnh">
        <EzSuScene1_Invasion durationInFrames={EZSU_SCENE_DURATIONS.s1} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_s1.mp3")} volume={1} />
        )}
      </Sequence>

      {/* Scene 2: Hưng Đạo Vương (420 - 765 frames) */}
      <Sequence from={t1} durationInFrames={EZSU_SCENE_DURATIONS.s2} name="Scene 2: Trần Quốc Tuấn">
        <EzSuScene2_TranHungDao durationInFrames={EZSU_SCENE_DURATIONS.s2} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_s2.mp3")} volume={1} />
        )}
      </Sequence>

      {/* Scene 3: Bãi Cọc Bạch Đằng (765 - 1180 frames) */}
      <Sequence from={t2} durationInFrames={EZSU_SCENE_DURATIONS.s3} name="Scene 3: Thủy Chiến Bạch Đằng">
        <EzSuScene3_BachDangBattle durationInFrames={EZSU_SCENE_DURATIONS.s3} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_s3.mp3")} volume={1} />
        )}
      </Sequence>

      {/* Scene 4: Khải Hoàn Ca (1180 - 1545 frames) */}
      <Sequence from={t3} durationInFrames={EZSU_SCENE_DURATIONS.s4} name="Scene 4: Khải Hoàn">
        <EzSuScene4_Triumph durationInFrames={EZSU_SCENE_DURATIONS.s4} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_s4.mp3")} volume={1} />
        )}
      </Sequence>
    </AbsoluteFill>
  );
};

export * from "./types";
