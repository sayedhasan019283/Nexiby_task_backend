import { z } from 'zod';

export const taskValidationSchema = z.object({
  body : z.object({
    title: z.string().min(1, "Title is required"), 
  status: z.enum(["pending",  "completed"]).optional().default("pending"),
  })
});

export const  TaskValidation = {
  taskValidationSchema
}
