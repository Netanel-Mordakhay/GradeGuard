import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import {
  createTodoSchema,
  normalizeTodoForForm,
} from "@/app/validationSchemas";
const { Parser } = require("json2csv");

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dbTodo = await prisma.todo.findMany({
    where: { userId: session.user.id },
    orderBy: { title: "asc" },
    include: { course: true },
  });

  const cleanCourses = dbTodo.map(normalizeTodoForForm);

  const validCourses = cleanCourses.filter(
    (course) => createTodoSchema.safeParse(course).success
  );

  const parser = new Parser();
  const csv = parser.parse(validCourses);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=todos.csv",
    },
  });
}
