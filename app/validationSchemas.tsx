import { z } from "zod";

/* Validation object's schema */
export const createCourseSchema = z.object({
  title: z.string().min(3).max(255),
  // grade 0-100, if empty / null cast to undefined
  grade: z.preprocess(
    (val) =>
      val === "" || val === null || isNaN(val as number)
        ? undefined
        : Number(val),
    z.number().min(0).max(100).optional()
  ),
});
