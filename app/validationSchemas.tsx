import { z } from "zod";

/* Validation object's schema */
export const createCourseSchema = z.object({
  title: z.string().min(3).max(255),
  grade: z.number().min(0).max(100).optional().nullable(),
  credits: z.number().min(0).max(100).multipleOf(0.1).optional().nullable(),
  isBinary: z.boolean().optional(),
  year: z.preprocess(
    (val) => (val === "" ? null : val),
    z
      .enum(["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH"])
      .nullable()
      .optional()
  ),
  semester: z.preprocess(
    (val) => (val === "" ? null : val),
    z.enum(["A", "B", "SUMMER"]).nullable().optional()
  ),
});

/* Schema for fetching a course (includes `id`) */
export const courseSchema = createCourseSchema.extend({
  id: z.number(),
});

/* TypeScript Type */
export type CourseForm = z.infer<typeof createCourseSchema>;
export type Course = z.infer<typeof courseSchema>;
