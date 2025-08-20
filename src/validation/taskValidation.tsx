import { z } from "zod"

export const taskSchema = z.object({
    task: z.string().max(30, "Too mach letters for one task"),
    state: z.string().min(1, "Task have to got status")
})

export type taskSchemaVal = z.infer<typeof taskSchema>