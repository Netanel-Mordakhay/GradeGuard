import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";

export async function getUserTodos() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return { error: "Unauthorized", todos: [] };

  const todos = await prisma.todo.findMany({
    where: { userId: session.user.id },
    include: {
      course: true, // Return the course if exists - TODO: check the list's info
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const upcomingExam = await prisma.todo.findFirst({
    where: {
      userId: session.user.id,
      dueDate: { gt: new Date() },
      category: "TEST",
    },
    include: {
      course: true, // Return the course if exists - TODO: check the list's info
    },
    orderBy: {
      dueDate: "asc",
    },
  });

  const upcomingTodo = await prisma.todo.findFirst({
    where: {
      userId: session.user.id,
      dueDate: { gt: new Date() },
      category: { not: "TEST" },
    },
    include: {
      course: true, // Return the course if exists - TODO: check the list's info
    },
    orderBy: {
      dueDate: "asc",
    },
  });

  return { todos, upcomingExam, upcomingTodo, userId: session.user.id };
}
