"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="py-12">
            <div className="max-w-7xl mx-auto antialiased pt-4 relative">
                <p className="text-4xl font-bold mb-3">
                    Upcoming Tours
                </p>
                <div className="py-6 border-b border-white/50 flex flex-wrap justify-between items-center gap-3">
                    <div>
                        <p className="text-xl font-semibold">
                            April 25, 2024
                        </p>
                        <p className="text-lg font-medium text-white/80">
                            Delhi
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faLocationArrow} /> Delhi University
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faClock} /> 07:00 P.M.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                             Book Tickets
                        </p>
                    </div>
                </div>
                <div className="py-6 border-b border-white/50 flex flex-wrap justify-between items-center gap-3">
                    <div>
                        <p className="text-xl font-semibold">
                            April 25, 2024
                        </p>
                        <p className="text-lg font-medium text-white/80">
                            Delhi
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faLocationArrow} /> Delhi University
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faClock} /> 07:00 P.M.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                             Book Tickets
                        </p>
                    </div>
                </div>
                <div className="py-6 border-b border-white/50 flex flex-wrap justify-between items-center gap-3">
                    <div>
                        <p className="text-xl font-semibold">
                            April 25, 2024
                        </p>
                        <p className="text-lg font-medium text-white/80">
                            Delhi
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faLocationArrow} /> Delhi University
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faClock} /> 07:00 P.M.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                             Book Tickets
                        </p>
                    </div>
                </div>
                <div className="py-6 border-b border-white/50 flex flex-wrap justify-between items-center gap-3">
                    <div>
                        <p className="text-xl font-semibold">
                            April 25, 2024
                        </p>
                        <p className="text-lg font-medium text-white/80">
                            Delhi
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faLocationArrow} /> Delhi University
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faClock} /> 07:00 P.M.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                             Book Tickets
                        </p>
                    </div>
                </div>
                <div className="py-6 border-b border-white/50 flex flex-wrap justify-between items-center gap-3">
                    <div>
                        <p className="text-xl font-semibold">
                            April 25, 2024
                        </p>
                        <p className="text-lg font-medium text-white/80">
                            Delhi
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faLocationArrow} /> Delhi University
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                            <FontAwesomeIcon icon={faClock} /> 07:00 P.M.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">
                             Book Tickets
                        </p>
                    </div>
                </div>
            </div>
        </TracingBeam>
    );
}

