import { z } from "zod";

export const CANVAS_SCENE_DURATIONS = {
  s1: 934, // 29.94s + padding
  s2: 786, // 25.03s + padding
  s3: 736, // 23.35s + padding
  s4: 906, // 29.02s + padding
  s5: 778, // 24.74s + padding
};

export const TOTAL_CANVAS_SFO_NRBO_FRAMES =
  CANVAS_SCENE_DURATIONS.s1 +
  CANVAS_SCENE_DURATIONS.s2 +
  CANVAS_SCENE_DURATIONS.s3 +
  CANVAS_SCENE_DURATIONS.s4 +
  CANVAS_SCENE_DURATIONS.s5; // 4140 frames = 138.00s

export const CanvasSfoNrboSchema = z.object({
  enableAudio: z.boolean().default(true),
  showDebugRulers: z.boolean().default(true),
});

export type CanvasSfoNrboProps = z.infer<typeof CanvasSfoNrboSchema>;
