import { z } from "zod";

export const FeatureItemSchema = z.object({
  icon: z.string(),
  title: z.string(),
  desc: z.string(),
});

export const LanguageSceneSchema = z.object({
  id: z.string(),
  langCode: z.enum(["vi", "en", "zh"]),
  langLabel: z.string(),
  flag: z.string(),
  badgeText: z.string(),
  title: z.string(),
  subtitle: z.string(),
  tagline: z.string(),
  features: z.array(FeatureItemSchema),
  audioFile: z.string(),
  voiceSubtitle: z.string(),
  primaryColor: z.string(),
  secondaryColor: z.string(),
  accentColor: z.string(),
  bgGradient: z.string(),
});

export const MultilingualVideoSchema = z.object({
  companyName: z.string(),
  sceneDurationInFrames: z.number().int().min(60).max(600),
  enableAudio: z.boolean(),
  scenes: z.array(LanguageSceneSchema),
});

export type FeatureItem = z.infer<typeof FeatureItemSchema>;
export type LanguageScene = z.infer<typeof LanguageSceneSchema>;
export type MultilingualVideoProps = z.infer<typeof MultilingualVideoSchema>;
