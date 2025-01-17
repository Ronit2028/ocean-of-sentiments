// app/api/games/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET endpoint: Fetch all games
export async function GET() {
  try {
    const games = await prisma.game.findMany();
    console.log('Fetched games:', games); // Debugging log
    return NextResponse.json(games, { status: 200 });
  } catch (error) {
    console.error('Error fetching games:', error); // Log error for debugging
    return NextResponse.json({ error: 'Error fetching games' }, { status: 500 });
  }
}

// POST endpoint: Create a new game
export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data:', data); // Log received data for debugging

    const game = await prisma.game.create({
      data: {
        name: data.name,
        image: data.image,
        description: data.description,
        genre: data.genre, // Ensure releaseDate is converted to Date
      },
    });

    console.log('Created game:', game); // Debugging log
    return NextResponse.json(game, { status: 201 });
  } catch (error) {
    console.error('Error creating game:', error); // Log error for debugging
    return NextResponse.json({ error: 'Error creating game' }, { status: 500 });
  }
}
