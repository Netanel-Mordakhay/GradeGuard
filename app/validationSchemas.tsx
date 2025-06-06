import { z } from "zod";
import { Prisma } from "@prisma/client";

/* Create course object's schema */
export const createCourseSchema = z.object({
  title: z.string().min(3).max(255),
  grade: z.number().min(0).max(100).optional().nullable(),
  credits: z.number().min(0).max(100).multipleOf(0.1),
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

/* User Register Validation */
export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  lastName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password too long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

/* User login validation */
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

/* User profile update validation */
export const updateUserSchema = z.object({
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50).optional(),
  email: z.string().email().optional(),
  avatar: z.string().min(1).max(100).optional(),
  password: z
    .string()
    .min(6)
    .max(100)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    )
    .optional(),
});

/* TODO Validation */
export const createTodoSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().max(255).optional(),
  dueDate: z.preprocess(
    (val) => (val === "" ? null : val),
    z.union([z.string().datetime(), z.date()]).optional().nullable()
  ),
  category: z
    .enum(["GENERAL", "HOMEWORK", "TEST"])
    .optional()
    .default("GENERAL"),
  importance: z.number().int().min(1).max(5).optional().nullable(),
  color: z
    .enum(["RED", "BLUE", "GREEN", "YELLOW", "PURPLE", "ORANGE"])
    .optional()
    .nullable(),
  courseId: z.number().optional().nullable(),
});

/* For fetch - fetches with id */
export const todoSchema = createTodoSchema.extend({
  id: z.number(),
});

/* COMMENT Schema */
export const createTodoCommentSchema = z.object({
  text: z.string().min(1).max(255),
  todoId: z.number(),
});

/* TypeScript Type */
export type CourseForm = z.infer<typeof createCourseSchema>;
export type Course = z.infer<typeof courseSchema>;

export type RegisterForm = z.infer<typeof registerSchema>;
export type LoginForm = z.infer<typeof loginSchema>;
export type UpdateUserForm = z.infer<typeof updateUserSchema>;

export type CreateTodoForm = z.infer<typeof createTodoSchema>; // Todo without id
export type Todo = z.infer<typeof todoSchema>; // Todo with id
export type CreateTodoCommentForm = z.infer<typeof createTodoCommentSchema>;
export type TodoWithCourse = Prisma.TodoGetPayload<{
  include: { course: true };
}>; // Todo with related course if exists

/* At the beginning only god and I knew why these works - now, only god and GPT do. */

/* Normalizing courses before using in in the UI - 
TODO: this should be later fixed, it's stupid, but currently solves the issue. */
export function normalizeCourse(dbCourse: Prisma.CourseGetPayload<{}>): Course {
  return {
    id: dbCourse.id,
    title: dbCourse.title,
    grade: dbCourse.grade ?? undefined,
    credits: dbCourse.credits,
    isBinary: dbCourse.isBinary ?? undefined,
    year: dbCourse.year ?? undefined,
    semester: dbCourse.semester ?? undefined,
  };
}

export function normalizeCourseForExport(
  dbCourse: Prisma.CourseGetPayload<{}>
): z.infer<typeof createCourseSchema> {
  return {
    title: dbCourse.title,
    grade: dbCourse.grade ?? undefined,
    credits: dbCourse.credits,
    isBinary: dbCourse.isBinary ?? undefined,
    year: dbCourse.year ?? undefined,
    semester: dbCourse.semester ?? undefined,
  };
}

export function normalizeTodoForForm(todo: TodoWithCourse): CreateTodoForm {
  return {
    title: todo.title,
    description: todo.description ?? undefined,
    dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined,
    category: todo.category,
    importance: todo.importance ?? undefined,
    color: todo.color ?? undefined,
    courseId: todo.courseId ?? undefined,
  };
}
