import { z } from "zod";

export const SfoNrboVideoSchema = z.object({
  title: z.string().default("THUẬT TOÁN LAI HYBRID SFO - NRBO"),
  enableAudio: z.boolean().default(true),
});

export type SfoNrboVideoProps = z.infer<typeof SfoNrboVideoSchema>;
