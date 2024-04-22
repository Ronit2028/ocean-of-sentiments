"use client"
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

const MusicSection = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const songs = [
        {
            "title": " Baarish Ka Asar",
            "audio_url": "https://utfs.io/f/1a40c63a-ca5f-4348-be4e-c0402e51dd6f-ux66k3.mp3",
            "cover_image_url": "https://utfs.io/f/5b3deed2-b9fb-49bb-939b-7f1ee2ff8d20-ugjso5.jpg",
            "duration": 270 // Duration in seconds
        },
        {
            "title": " Dhalti Rahe",
            "audio_url": "https://utfs.io/f/21bc143c-c3c5-43e0-9cd9-4aec49e54856-ittsli.mp3",
            "cover_image_url": "https://utfs.io/f/0d246a66-d069-403a-a321-33b8e4ee58b8-5zeqaw.jpeg",
            "duration": 268 // Duration in seconds
        },
        {
            "title": "Doorie",
            "audio_url": "https://utfs.io/f/8c25505b-1d7c-4fe5-81c2-62bd08bce5f5-rnd788.mp3",
            "cover_image_url": "https://utfs.io/f/d20235f8-32ce-4ae6-9856-78d92cd984d6-lxje0m.jpg",
            "duration": 202 // Duration in seconds
        },
        {
            "title": "Aisi Woh Baarish",
            "audio_url": "https://utfs.io/f/ad3d8015-4fac-43f5-b10d-b1e656bf8f4c-tfvbl6.mp3",
            "cover_image_url": "https://utfs.io/f/3f6df2c7-031d-48a6-afc4-0ccaf4b775db-z2v92w.jpg",
            "duration": 184 // Duration in seconds
        },
        {
            "title": "Khabar",
            "audio_url": "https://utfs.io/f/98dc8682-8683-4b4c-82fb-56eb7930e76a-uukpz1.mp3",
            "cover_image_url": "https://utfs.io/f/269cf481-2b66-489b-b247-6b0985b36582-xvrrw1.jpg",
            "duration": 212 // Duration in seconds
        },
        // Add more songs as needed
    ];

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

    const playSong = async (songIndex) => {
        setCurrentSongIndex(songIndex);
        await audioRef.current.load(); // Load the new audio
        await audioRef.current.play(); // Start playing the new audio
        setIsPlaying(true);
    }

    return (
        <div className='max-w-7xl mx-auto py-12 flex flex-wrap'>
            <div className="w-full lg:w-1/2">
                <img src={songs[currentSongIndex].cover_image_url} alt={songs[currentSongIndex].title} className='w-[80%] rounded-2xl object-cover h-[100%]' />
            </div>
            <div className="w-full lg:w-1/2 p-4">
                <p className="text-2xl text-end font-bold pb-5 border-b ">
                    Listen To Our Latest Music
                </p>
                {songs.map((song, index) => (
                    <div onClick={() => {playSong(index)}} key={index} className='py-4 flex items-center justify-between px-8 border-b border-white/10'>
                        <div>
                            <p className="text-lg font-semibold">
                                {song.title}
                            </p>
                            <p className="text-sm text-white/50">
                                Twin Strings
                            </p>
                        </div>
                        <p className="text-lg font-semibold">
                            {formatTime(song.duration)}
                        </p>
                        <button onClick={() => {playSong(index)}}>Play</button>
                    </div>
                ))}
                <div className='py-4 flex items-center justify-between px-8 border-b border-white/10'>
                    <div className="w-full p-4 rounded-lg">
                        <audio
                            ref={audioRef}
                            src={songs[currentSongIndex].audio_url}
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

export default MusicSection;
