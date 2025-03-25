import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

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
