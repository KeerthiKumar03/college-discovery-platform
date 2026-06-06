import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const review = await prisma.review.create({
      data: {
        userName: body.userName,
        rating: body.rating,
        comment: body.comment,
        collegeId: body.collegeId,
      },
    });

    return NextResponse.json({
      success: true,
      review,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to add review",
      },
      { status: 500 }
    );
  }
}