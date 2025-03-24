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

  return { todos, userId: session.user.id };
}
