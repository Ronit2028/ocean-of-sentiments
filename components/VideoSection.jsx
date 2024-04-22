"use client"

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSection = () => {
    const videos = [
        {
            id: '8kfiaBS9G0Q',
            title: 'Video Title 1',
            thumbnailUrl: 'https://youtu.be/8kfiaBS9G0Q?si=B1H25TLou_raY2KV',
        },
        {
            id: 'Y3UMQx4GAh4',
            title: 'Video Title 2',
            thumbnailUrl: 'https://youtu.be/Y3UMQx4GAh4?si=x6XhTBMft9O3vW7Z',
        },
        {
            id: 'VlyLyBqNvVE',
            title: 'Video Title 3',
            thumbnailUrl: 'https://youtu.be/VlyLyBqNvVE?si=VWl31AmIQqqheHuF',
        },
        {
            id: '1W7k3dwfiXY',
            title: 'Video Title 4',
            thumbnailUrl: 'https://youtu.be/1W7k3dwfiXY?si=RyUVyCQNxSeIv349',
        },
        {
            id: 'RuLnMn-S7yg',
            title: 'Video Title 5',
            thumbnailUrl: 'https://youtu.be/RuLnMn-S7yg?si=J075K0Y3IBEc-3BL',
        },
        {
            id: 'sWGkn3CPlQ4',
            title: 'Video Title 6',
            thumbnailUrl: 'https://youtu.be/sWGkn3CPlQ4?si=2ZkGB-2LCOygry0x',
        },
        {
            id: 'PvN_E7yxuBk',
            title: 'Video Title 7',
            thumbnailUrl: 'https://youtu.be/PvN_E7yxuBk?si=qd7NpYUB0-XopT5N',
        },
        {
            id: 'nwTPlTwT5Ps',
            title: 'Video Title 8',
            thumbnailUrl: 'https://youtu.be/nwTPlTwT5Ps?si=4wfN701YT0r_mvBt',
        },
        {
            id: 'ur4zlbjjgwY',
            title: 'Video Title 9',
            thumbnailUrl: 'https://youtu.be/ur4zlbjjgwY?si=qdy6Kk0VRYovm1of',
        },
        // Add more video objects here as needed
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        centerMode: true,
        autoplay:true,
        speed:5000,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (

        <div className="w-full">
            <Slider {...settings}>
                {videos.map((video) => (
                    <div className='p-6' key={video.id}>
                         <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default VideoSection;
