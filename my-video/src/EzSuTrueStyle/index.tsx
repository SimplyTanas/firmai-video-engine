import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { EzSuBottomBar } from "./EzSuBottomBar";
import { Scene1_KhucThuaDu } from "./Scene1_KhucThuaDu";
import { Scene2_KhucHao } from "./Scene2_KhucHao";
import { Scene3_DuongDinhNghe } from "./Scene3_DuongDinhNghe";
import { Scene4_NgoQuyenBachDang } from "./Scene4_NgoQuyenBachDang";
import { EzSuTrueStyleProps } from "./types";

export const EZSU_TRUE_DURATIONS = {
  s1: 330, // 905: Khúc Thừa Dụ
  s2: 395, // 907: Khúc Hạo
  s3: 315, // 930-931: Dương Đình Nghệ
  s4: 340, // 938: Ngô Quyền
};

export const TOTAL_EZSU_TRUE_FRAMES =
  EZSU_TRUE_DURATIONS.s1 +
  EZSU_TRUE_DURATIONS.s2 +
  EZSU_TRUE_DURATIONS.s3 +
  EZSU_TRUE_DURATIONS.s4; // 1380 frames (~46s)

export const EzSuTrueMappingVideo: React.FC<EzSuTrueStyleProps> = ({
  enableAudio = true,
}) => {
  const frame = useCurrentFrame();

  const t1 = EZSU_TRUE_DURATIONS.s1; // 330
  const t2 = t1 + EZSU_TRUE_DURATIONS.s2; // 725
  const t3 = t2 + EZSU_TRUE_DURATIONS.s3; // 1040
  const t4 = t3 + EZSU_TRUE_DURATIONS.s4; // 1380

  // Calculate smoothly advancing historical year from 905 to 938
  let currentYear = 905;
  if (frame < t1) {
    currentYear = 905;
  } else if (frame < t2) {
    // 907 to 920
    const progress = (frame - t1) / (t2 - t1);
    currentYear = 907 + progress * 13;
  } else if (frame < t3) {
    // 930 to 931
    const progress = (frame - t2) / (t3 - t2);
    currentYear = 930 + progress * 1;
  } else {
    // 938
    currentYear = 938;
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#BCE4F8" }}>
      {/* 1. Scene 1: Khúc Thừa Dụ (Năm 905) */}
      <Sequence durationInFrames={EZSU_TRUE_DURATIONS.s1} name="Năm 905: Khúc Thừa Dụ">
        <Scene1_KhucThuaDu durationInFrames={EZSU_TRUE_DURATIONS.s1} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_map_s1.mp3")} volume={1} />
        )}
      </Sequence>

      {/* 2. Scene 2: Khúc Hạo (Năm 907) - Matching Image 2 exactly */}
      <Sequence from={t1} durationInFrames={EZSU_TRUE_DURATIONS.s2} name="Năm 907: Khúc Hạo">
        <Scene2_KhucHao durationInFrames={EZSU_TRUE_DURATIONS.s2} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_map_s2.mp3")} volume={1} />
        )}
      </Sequence>

      {/* 3. Scene 3: Dương Đình Nghệ (Năm 930 - 931) */}
      <Sequence from={t2} durationInFrames={EZSU_TRUE_DURATIONS.s3} name="Năm 931: Dương Đình Nghệ">
        <Scene3_DuongDinhNghe durationInFrames={EZSU_TRUE_DURATIONS.s3} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_map_s3.mp3")} volume={1} />
        )}
      </Sequence>

      {/* 4. Scene 4: Ngô Quyền Bạch Đằng (Năm 938) */}
      <Sequence from={t3} durationInFrames={EZSU_TRUE_DURATIONS.s4} name="Năm 938: Ngô Quyền">
        <Scene4_NgoQuyenBachDang durationInFrames={EZSU_TRUE_DURATIONS.s4} />
        {enableAudio && (
          <Audio src={staticFile("audio/ezsu_map_s4.mp3")} volume={1} />
        )}
      </Sequence>

      {/* 5. Persistent Signature EZ Sử Bottom Bar & Scrolling Timeline */}
      <EzSuBottomBar
        currentYear={currentYear}
        periodTitle="THỜI KỲ QUÂN CHỦ TỰ CHỦ (905 - 938)"
        totalDurationInFrames={t4}
      />
    </AbsoluteFill>
  );
};

export * from "./types";
