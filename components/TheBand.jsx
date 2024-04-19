import React from 'react'

import { DirectionAwareHoverDemo } from '@/components/DirectionAwareHoverDemo'

const TheBand = () => {
    return (
        <div className='py-12'>
            <div className="max-w-7xl mx-auto">
                <p className="text-4xl font-bold">
                    The Band
                </p>
                <p className="text-lg font-semibold">
                    Meet the Masters of Melody
                </p>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7'>
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
            </div>
        </div>
    )
}

export default TheBand