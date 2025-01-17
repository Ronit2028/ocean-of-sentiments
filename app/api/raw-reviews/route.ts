// app/api/raw-reviews/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET endpoint: Fetch all raw reviews
export async function GET() {
  try {
    const rawReviews = await prisma.rawReview.findMany(
       // Optionally include related game data
    );
    console.log('Fetched raw reviews:', rawReviews); // Debugging log
    return NextResponse.json(rawReviews, { status: 200 });
  } catch (error) {
    console.error('Error fetching raw reviews:', error); // Log error for debugging
    return NextResponse.json({ error: 'Error fetching raw reviews' }, { status: 500 });
  }
}

// POST endpoint: Create a new raw review
export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data for raw review:', data); // Debugging log

    const rawReview = await prisma.rawReview.create({
      data: {
        content: data.content,
        gameId: data.gameId,
      },
    });

    console.log('Created raw review:', rawReview); // Debugging log
    return NextResponse.json(rawReview, { status: 201 });
  } catch (error) {
    console.error('Error creating raw review:', error); // Log error for debugging
    return NextResponse.json({ error: 'Error creating raw review' }, { status: 500 });
  }
}
