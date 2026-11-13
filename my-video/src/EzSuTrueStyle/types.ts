import { z } from "zod";

export const EzSuTrueStyleSchema = z.object({
  title: z.string().default("THỜI KỲ QUÂN CHỦ TỰ CHỦ (905 - 938)"),
  enableAudio: z.boolean().default(true),
});

export type EzSuTrueStyleProps = z.infer<typeof EzSuTrueStyleSchema>;
