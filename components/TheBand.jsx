"use client"
import React, { useEffect, useState } from 'react';
import { DirectionAwareHoverDemo } from '@/components/DirectionAwareHoverDemo';
import Link from 'next/link';

const TheBand = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('/api/games');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className='py-12 pb-0'>
            <div className="max-w-7xl mx-auto">
                <p className="text-4xl font-bold">
                    Games
                </p>
                <p className="text-lg font-semibold">
                    PC / PSP / XBOX - All at Once
                </p>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7'>
                {games.map((game) => (

                    <Link key={game.id} href={`/${game.id}`}>
                        <DirectionAwareHoverDemo
                            key={game._id}
                            imageUrl={game.image}
                            desc={game.name}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TheBand;
