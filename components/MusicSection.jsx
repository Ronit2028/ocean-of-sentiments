"use client"

import Image from 'next/image'
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';


const MusicSection = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const playPauseToggle = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return (
        <div className='max-w-7xl mx-auto py-12 flex flex-wrap'>
            <div className="w-full lg:w-1/4">
                <img src="https://melodica.tavonline.co/assets/images/album-cover-1.jpg" alt="" srcset="" className='w-full object-cover h-full' />
            </div>
            <div className="w-full lg:w-3/4 p-4">
                <p className="text-2xl text-end font-bold pb-5 border-b ">
                    Listen To Our Latest Music
                </p>
                <div className='py-4 flex items-center justify-between px-8 border-b border-white/10'>
                    <div>
                        <p className="text-lg font-semibold">
                            Track 1
                        </p>
                        <p className="text-sm text-white/50">
                            Album X
                        </p>
                    </div>
                    <p className="text-lg font-semibold">
                        3:59
                    </p>
                </div>
                <div className='py-4 flex items-center justify-between px-8 border-b border-white/10'>
                    <div>
                        <p className="text-lg font-semibold">
                            Track 1
                        </p>
                        <p className="text-sm text-white/50">
                            Album X
                        </p>
                    </div>
                    <p className="text-lg font-semibold">
                        3:59
                    </p>
                </div>
                <div className='py-4 flex items-center justify-between px-8 border-b border-white/10'>
                    <div>
                        <p className="text-lg font-semibold">
                            Track 1
                        </p>
                        <p className="text-sm text-white/50">
                            Album X
                        </p>
                    </div>
                    <p className="text-lg font-semibold">
                        3:59
                    </p>
                </div>
                <div className='py-4 flex items-center justify-between px-8 border-b border-white/10'>
                    <div className="w-full p-4 rounded-lg">
                        <audio
                            ref={audioRef}
                            src="/path/to/your/audio.mp3"
                            onTimeUpdate={updateTime}
                            onLoadedData={updateTime}
                            onEnded={() => setIsPlaying(false)}
                        />
                        <div className="flex justify-center items-center mb-4">
                            <button className="mr-2" onClick={() => audioRef.current.currentTime -= 10}>
                                <FontAwesomeIcon icon={faStepBackward} />
                            </button>
                            <button className="mr-2" onClick={playPauseToggle}>
                                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                            </button>
                            <button onClick={() => audioRef.current.currentTime += 10}>
                                <FontAwesomeIcon icon={faStepForward} />
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="mr-4">{formatTime(currentTime)}</p>
                            <progress className="w-full h-[5px]" max={duration} value={currentTime}></progress>
                            <p className="ml-4">{formatTime(duration)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicSection