import "./index.css";
import { Composition, Folder } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";
import { Title } from "./HelloWorld/Title";
import {
  defaultMultilingualProps,
  defaultScenes,
  FinaleScene,
  LanguageSceneCard,
  MultilingualPresentation,
  MultilingualVideoSchema,
} from "./MultilingualPresentation";
import {
  SCENE_DURATIONS,
  SfoNrboExplanation,
  SfoNrboVideoSchema,
  TOTAL_SFO_NRBO_FRAMES,
} from "./SfoNrboExplanation";
import { Scene1_Intro } from "./SfoNrboExplanation/Scene1_Intro";
import { Scene2_SFO } from "./SfoNrboExplanation/Scene2_SFO";
import { Scene3_NRBO } from "./SfoNrboExplanation/Scene3_NRBO";
import { Scene4_HybridArchitecture } from "./SfoNrboExplanation/Scene4_HybridArchitecture";
import { Scene5_Applications } from "./SfoNrboExplanation/Scene5_Applications";
import {
  EZSU_SCENE_DURATIONS,
  EzSuBachDangVideo,
  EzSuVideoSchema,
  TOTAL_EZSU_FRAMES,
} from "./EzSuHistory";
import { EzSuScene1_Invasion } from "./EzSuHistory/EzSuScene1_Invasion";
import { EzSuScene2_TranHungDao } from "./EzSuHistory/EzSuScene2_TranHungDao";
import { EzSuScene3_BachDangBattle } from "./EzSuHistory/EzSuScene3_BachDangBattle";
import { EzSuScene4_Triumph } from "./EzSuHistory/EzSuScene4_Triumph";
import {
  EzSuTrueMappingVideo,
  EzSuTrueStyleSchema,
  TOTAL_EZSU_TRUE_FRAMES,
} from "./EzSuTrueStyle";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. TRUE EZ SỬ STYLE: MAP ANIMATION (MATCHING SCREENSHOT)   */}
      {/* ========================================================= */}
      <Composition
        id="EzSuTrueMappingVideo"
        component={EzSuTrueMappingVideo}
        durationInFrames={TOTAL_EZSU_TRUE_FRAMES} // 1380 frames (~46s)
        fps={30}
        width={1920}
        height={1080}
        schema={EzSuTrueStyleSchema}
        defaultProps={{
          title: "THỜI KỲ QUÂN CHỦ TỰ CHỦ (905 - 938)",
          enableAudio: true,
        }}
      />

      {/* ========================================================= */}
      {/* 2. EZ SỬ STYLE: TRẬN BẠCH ĐẰNG 1288 HISTORICAL VIDEO      */}
      {/* ========================================================= */}
      <Composition
        id="EzSuBachDangVideo"
        component={EzSuBachDangVideo}
        durationInFrames={TOTAL_EZSU_FRAMES} // 1545 frames (~51.5s)
        fps={30}
        width={1920}
        height={1080}
        schema={EzSuVideoSchema}
        defaultProps={{
          title: "ĐẠI THẮNG BẠCH ĐẰNG 1288 • EZ SỬ",
          enableAudio: true,
        }}
      />

      <Folder name="EzSuScenes">
        <Composition
          id="EzSuScene1Invasion"
          component={() => (
            <EzSuScene1_Invasion durationInFrames={EZSU_SCENE_DURATIONS.s1} />
          )}
          durationInFrames={EZSU_SCENE_DURATIONS.s1}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="EzSuScene2TranHungDao"
          component={() => (
            <EzSuScene2_TranHungDao durationInFrames={EZSU_SCENE_DURATIONS.s2} />
          )}
          durationInFrames={EZSU_SCENE_DURATIONS.s2}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="EzSuScene3BachDangBattle"
          component={() => (
            <EzSuScene3_BachDangBattle durationInFrames={EZSU_SCENE_DURATIONS.s3} />
          )}
          durationInFrames={EZSU_SCENE_DURATIONS.s3}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="EzSuScene4Triumph"
          component={() => (
            <EzSuScene4_Triumph durationInFrames={EZSU_SCENE_DURATIONS.s4} />
          )}
          durationInFrames={EZSU_SCENE_DURATIONS.s4}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>

      {/* ========================================================= */}
      {/* 2. SFO-NRBO HYBRID OPTIMIZATION EXPLANATION VIDEO         */}
      {/* ========================================================= */}
      <Composition
        id="SfoNrboExplanation"
        component={SfoNrboExplanation}
        durationInFrames={TOTAL_SFO_NRBO_FRAMES} // 2130 frames = 71 seconds
        fps={30}
        width={1920}
        height={1080}
        schema={SfoNrboVideoSchema}
        defaultProps={{
          title: "THUẬT TOÁN LAI HYBRID SFO - NRBO",
          enableAudio: true,
        }}
      />

      <Folder name="SfoNrboScenes">
        <Composition
          id="SfoNrboScene1Intro"
          component={() => <Scene1_Intro durationInFrames={SCENE_DURATIONS.s1} />}
          durationInFrames={SCENE_DURATIONS.s1}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SfoNrboScene2Sfo"
          component={() => <Scene2_SFO durationInFrames={SCENE_DURATIONS.s2} />}
          durationInFrames={SCENE_DURATIONS.s2}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SfoNrboScene3Nrbo"
          component={() => <Scene3_NRBO durationInFrames={SCENE_DURATIONS.s3} />}
          durationInFrames={SCENE_DURATIONS.s3}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SfoNrboScene4Hybrid"
          component={() => (
            <Scene4_HybridArchitecture durationInFrames={SCENE_DURATIONS.s4} />
          )}
          durationInFrames={SCENE_DURATIONS.s4}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SfoNrboScene5Applications"
          component={() => (
            <Scene5_Applications durationInFrames={SCENE_DURATIONS.s5} />
          )}
          durationInFrames={SCENE_DURATIONS.s5}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>

      {/* ========================================================= */}
      {/* 2. TRILINGUAL FIRMAI PRESENTATION                         */}
      {/* ========================================================= */}
      <Composition
        id="MultilingualPresentation"
        component={MultilingualPresentation}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
        schema={MultilingualVideoSchema}
        defaultProps={defaultMultilingualProps}
      />

      <Folder name="MultilingualScenes">
        <Composition
          id="SceneVietnamese"
          component={() => (
            <LanguageSceneCard
              scene={defaultScenes[0]}
              companyName="FirmAI"
              durationInFrames={150}
            />
          )}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SceneEnglish"
          component={() => (
            <LanguageSceneCard
              scene={defaultScenes[1]}
              companyName="FirmAI"
              durationInFrames={150}
            />
          )}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SceneChinese"
          component={() => (
            <LanguageSceneCard
              scene={defaultScenes[2]}
              companyName="FirmAI"
              durationInFrames={150}
            />
          )}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SceneFinale"
          component={() => (
            <FinaleScene companyName="FirmAI" durationInFrames={150} />
          )}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>

      {/* ========================================================= */}
      {/* 3. DEFAULT STARTER TEMPLATES                              */}
      {/* ========================================================= */}
      <Folder name="Elements">
        <Composition
          id="Logo"
          component={Logo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            logoColor1: "#91EAE4",
            logoColor2: "#86A8E7",
          }}
        />
        <Composition
          id="Title"
          component={Title}
          durationInFrames={115}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            titleText: "Welcome to Remotion",
            titleColor: "#000000",
          }}
        />
        <Composition
          id="HelloWorld"
          component={HelloWorld}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            titleText: "Welcome to Remotion",
            titleColor: "#000000",
          }}
        />
      </Folder>
    </>
  );
};
