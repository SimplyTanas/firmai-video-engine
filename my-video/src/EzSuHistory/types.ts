import { z } from "zod";

export const EzSuVideoSchema = z.object({
  title: z.string().default("ĐẠI THẮNG BẠCH ĐẰNG 1288 • EZ SỬ"),
  enableAudio: z.boolean().default(true),
});

export type EzSuVideoProps = z.infer<typeof EzSuVideoSchema>;
