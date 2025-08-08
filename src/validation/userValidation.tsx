import { z } from 'zod';


export const userFormSchema = z.object({
    userName: z.string("Name has to be a string").max(20, "Too much letters for a name").min(1, "Name is required"),
    userAge: z.number("Age has to be a number").min(0, "Nah you have to live.").max(100, "You are not that old")
});

export type UserForm = z.infer<typeof userFormSchema>