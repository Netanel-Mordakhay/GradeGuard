import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import { createTodoSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  try {
    // check user's session
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // getting request
    const body = await request.json();

    // Validations
    const validation = createTodoSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const {
      title,
      description,
      dueDate,
      category,
      importance,
      color,
      courseId,
    } = validation.data;

    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        category,
        importance,
        color,
        courseId,
        userId: session.user.id,
      },
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { error: "Internal server error while creating todo" },
      { status: 500 }
    );
  }
}
