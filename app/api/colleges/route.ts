import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const colleges = await prisma.college.findMany();

    return NextResponse.json({
      success: true,
      data: colleges,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch colleges",
      },
      { status: 500 }
    );
  }
}