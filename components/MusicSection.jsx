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
            "title": "Song 1",
            "audio_url": "https://open.spotify.com/track/3yHyiUDJdz02FZ6jfUbsmY?si=32eb28d0e46942f2",
            "cover_image_url": "https://i.ytimg.com/vi/ur4zlbjjgwY/sddefault.jpg?v=65f221fc",
            "duration": 239 // Duration in seconds
        },
        {
            "title": "Song 2",
            "audio_url": "https://www.example.com/song2.mp3",
            "cover_image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AwO2Oql889N6ts62tJ4195n4vxzFVRxgp8SPe335aCEZngOP97Rs1sXNIEIkzae0MXI&usqp=CAU",
            "duration": 180 // Duration in seconds
        },
        {
            "title": "Song 3",
            "audio_url": "https://open.spotify.com/track/3yHyiUDJdz02FZ6jfUbsmY?si=32eb28d0e46942f2",
            "cover_image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFi5DLFx9o487NbzcokUzDQ0gyaIjC0dMjt9gEgjdJzBHYrMLKFxyS_lv2h_2OuQQrWE&usqp=CAU",
            "duration": 239 // Duration in seconds
        },
        {
            "title": "Song 4",
            "audio_url": "https://open.spotify.com/track/3yHyiUDJdz02FZ6jfUbsmY?si=32eb28d0e46942f2",
            "cover_image_url": "https://www.example.com/cover1.jpg",
            "duration": 239 // Duration in seconds
        },
        {
            "title": "Song 5",
            "audio_url": "https://open.spotify.com/track/3yHyiUDJdz02FZ6jfUbsmY?si=32eb28d0e46942f2",
            "cover_image_url": "https://www.example.com/cover1.jpg",
            "duration": 239 // Duration in seconds
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

    const playSong = (songIndex) => {
        setCurrentSongIndex(songIndex);
        setIsPlaying(true);
    }

    return (
        <div className='max-w-7xl mx-auto py-12 flex flex-wrap'>
            <div className="w-full lg:w-1/4">
                <img src={songs[currentSongIndex].cover_image_url} alt={songs[currentSongIndex].title} className='w-full object-cover h-full' />
            </div>
            <div className="w-full lg:w-3/4 p-4">
                <p className="text-2xl text-end font-bold pb-5 border-b ">
                    Listen To Our Latest Music
                </p>
                {songs.map((song, index) => (
                    <div key={index} className='py-4 flex items-center justify-between px-8 border-b border-white/10'>
                        <div>
                            <p className="text-lg font-semibold">
                                {song.title}
                            </p>
                            <p className="text-sm text-white/50">
                                Album X
                            </p>
                        </div>
                        <p className="text-lg font-semibold">
                            {formatTime(song.duration)}
                        </p>
                        <button onClick={() => playSong(index)}>Play</button>
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
