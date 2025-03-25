import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createTodoSchema } from "@/app/validationSchemas";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

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

    const updatedTodo = await prisma.todo.update({
      where: { id: Number(params.id) },
      data: {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : null,
        category,
        importance,
        color,
        courseId,
      },
    });

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { error: "Todo not found or update failed" },
      { status: 404 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Request
    await prisma.todo.delete({
      where: { id: Number(params.id) },
    });

    // Reponse
    return NextResponse.json(
      { message: "Todo deleted successfulyy" },
      { status: 200 }
    );

    // Error
  } catch (error) {
    return NextResponse.json(
      { message: "Todo not found or delete failed" },
      { status: 404 }
    );
  }
}
