import { z } from "zod";

export const timerSchema = z.object({
    hours: z.number("Has to be a number").min(0, "Number too low (<0)").max(59, "Number too big (>59)"),
    minutes: z.number("Has to be a number").min(0, "Number too low (<0)").max(59, "Number too big (>59)"),
    seconds: z.number("Has to be a number").min(0, "Number too low (<0)").max(59, "Number too big (>59)")
})

export type timerSchemaVal = z.infer<typeof timerSchema>