import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, collegeId } = await req.json();

    const saved = await prisma.savedCollege.create({
      data: {
        userId,
        collegeId,
      },
    });

    return NextResponse.json({
      success: true,
      data: saved,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to save college",
      },
      { status: 500 }
    );
  }
}