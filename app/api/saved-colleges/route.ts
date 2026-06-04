import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const savedColleges = await prisma.savedCollege.findMany({
      include: {
        college: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: savedColleges,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch saved colleges",
      },
      { status: 500 }
    );
  }
}