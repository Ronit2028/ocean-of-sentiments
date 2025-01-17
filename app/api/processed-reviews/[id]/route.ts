import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }:{ params: { id: string } }) {
  try {
    // Fetch the processed review by rawReviewId
    const processedReview = await prisma.processedReview.findMany({ where: { id: params.id } });

    if (!processedReview) {
      return NextResponse.json({ error: "Processed review not found" }, { status: 404 });
    }

    return NextResponse.json(processedReview);
  } catch (error) {
    console.error("Error fetching processed review:", error);
    return NextResponse.json({ error: "Failed to fetch processed review" }, { status: 500 });
  }
}
