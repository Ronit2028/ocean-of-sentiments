import React from 'react';
import { DirectionAwareHoverDemo } from '@/components/DirectionAwareHoverDemo';

const TheBand = () => {
    const Data = [
        {
            imageUrl: "https://utfs.io/f/6339932c-22e8-4b2d-adc6-b7964a33735c-1gmq0.jpg",
            desc: "Sagar"
        },
        {
            imageUrl: "https://utfs.io/f/31b15954-4c08-4485-b3fa-1a1523af0edc-so5unu.jpg",
            desc: "Manav"
        },
        {
            imageUrl: "https://utfs.io/f/beef5e78-60eb-42bf-a348-ca9e7e14953c-ygknuh.jpg",
            desc: "Sahil"
        },
        {
            imageUrl: "https://utfs.io/f/bdbba06c-14c7-4a4c-99f3-3f8718985787-ygknvc.jpg",
            desc: "Sagar"
        },
    ];

    return (
        <div className='py-12 pb-0'>
            <div className="max-w-7xl mx-auto">
                <p className="text-4xl font-bold">
                    The Band
                </p>
                <p className="text-lg font-semibold">
                    Meet the Masters of Melody
                </p>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7'>
                {Data.map((item, index) => (
                    <DirectionAwareHoverDemo key={index} imageUrl={item.imageUrl} desc={item.desc} />
                ))}
            </div>
        </div>
    );
}

export default TheBand;
