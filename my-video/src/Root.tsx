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
import {
  CanvasSfoNrbo,
  CanvasSfoNrboSchema,
  TOTAL_CANVAS_SFO_NRBO_FRAMES,
  CANVAS_SCENE_DURATIONS,
} from "./CanvasSfoNrbo";
import { Scene1_Landscape } from "./CanvasSfoNrbo/Scene1_Landscape";
import { Scene2_SfoSwarm } from "./CanvasSfoNrbo/Scene2_SfoSwarm";
import { Scene3_NrboNewton } from "./CanvasSfoNrbo/Scene3_NrboNewton";
import { Scene4_HybridSynthesis } from "./CanvasSfoNrbo/Scene4_HybridSynthesis";
import { Scene5_Applications } from "./CanvasSfoNrbo/Scene5_Applications";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* ========================================================= */}
      {/* 0. CANVAS DESIGN: SFO & NRBO HYBRID OPTIMIZATION          */}
      {/* ========================================================= */}
      <Composition
        id="CanvasSfoNrbo"
        component={CanvasSfoNrbo}
        durationInFrames={TOTAL_CANVAS_SFO_NRBO_FRAMES} // 4140 frames (138s = 2m18s)
        fps={30}
        width={1920}
        height={1080}
        schema={CanvasSfoNrboSchema}
        defaultProps={{
          enableAudio: true,
          showDebugRulers: true,
        }}
      />

      <Folder name="CanvasSfoNrbo-Scenes">
        <Composition
          id="Canvas-Scene1-Landscape"
          component={() => (
            <Scene1_Landscape durationInFrames={CANVAS_SCENE_DURATIONS.s1} />
          )}
          durationInFrames={CANVAS_SCENE_DURATIONS.s1}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Canvas-Scene2-SfoSwarm"
          component={() => (
            <Scene2_SfoSwarm durationInFrames={CANVAS_SCENE_DURATIONS.s2} />
          )}
          durationInFrames={CANVAS_SCENE_DURATIONS.s2}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Canvas-Scene3-NrboNewton"
          component={() => (
            <Scene3_NrboNewton durationInFrames={CANVAS_SCENE_DURATIONS.s3} />
          )}
          durationInFrames={CANVAS_SCENE_DURATIONS.s3}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Canvas-Scene4-HybridSynthesis"
          component={() => (
            <Scene4_HybridSynthesis durationInFrames={CANVAS_SCENE_DURATIONS.s4} />
          )}
          durationInFrames={CANVAS_SCENE_DURATIONS.s4}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Canvas-Scene5-Applications"
          component={() => (
            <Scene5_Applications durationInFrames={CANVAS_SCENE_DURATIONS.s5} />
          )}
          durationInFrames={CANVAS_SCENE_DURATIONS.s5}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>

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
