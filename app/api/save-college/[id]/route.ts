import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.savedCollege.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "College removed successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to remove college",
      },
      { status: 500 }
    );
  }
}