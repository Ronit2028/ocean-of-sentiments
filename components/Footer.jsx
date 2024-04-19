import React from 'react'
import logo from '@/assets/brand/ts-logo.png'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faYoutube, faInstagram, faAmazon } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className='bg-black  text-white py-6 '>
            <div className="px-4 mx-auto flex justify-center flex-col items-center flex-wrap">
                <div className='flex flex-col justify-center items-center flex-wrap gap-6'>
                    <Image src={logo} alt='logo' width={200} className='mb-3'></Image>
                    <p className="max-w-7xl text-center text-md font-medium py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obcaecati. Doloremque doloribus sed possimus dignissimos similique cupiditate dolorem neque quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolores.
                    </p>
                    <div className='flex items-center gap-3 flex-wrap mb-3'>
                        <p className="text-md font-medium">
                            Home
                        </p>
                        <p className="text-md font-medium">
                            The Band
                        </p>
                        <p className="text-md font-medium">
                            Tours & Events
                        </p>
                        <p className="text-md font-medium">
                            Music
                        </p>
                    </div>

                </div>
                <div className="flex items-center my-6">
                    <span className="flex gap-3 items-center my-auto">
                        <a href="#" className="text-gray-500">
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                        <a href="#" className=" text-gray-500">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="#" className=" text-gray-500">
                            <FontAwesomeIcon icon={faApple} />
                        </a>
                        <a href="#" className=" text-gray-500">
                            <FontAwesomeIcon icon={faAmazon} />
                        </a>
                        <a href="#" className=" text-gray-500">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer