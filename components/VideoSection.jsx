"use client"

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSection = () => {
    const videos = [
        {
            id: 'VIDEO_ID_1',
            title: 'Video Title 1',
            thumbnailUrl: 'https://example.com/thumbnail1.jpg',
        },
        {
            id: 'VIDEO_ID_2',
            title: 'Video Title 2',
            thumbnailUrl: 'https://example.com/thumbnail2.jpg',
        },
        {
            id: 'VIDEO_ID_3',
            title: 'Video Title 3',
            thumbnailUrl: 'https://example.com/thumbnail3.jpg',
        },
        // Add more video objects here as needed
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        centerMode: true,
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
                    <div key={video.id.videoId}>
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                            <img src={video.thumbnailUrl} className="border p-4" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default VideoSection;