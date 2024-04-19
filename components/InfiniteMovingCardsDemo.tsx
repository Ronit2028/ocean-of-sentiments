"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconFileArrowRight } from "@tabler/icons-react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="w-full py-12 text-black bg-white mx-auto ">
            <div className="max-w-7xl mx-auto py-12 border-black/25 border-b">
                <p className="text-4xl font-bold">
                    Latest Stories
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {
                    testimonials.map((testimonial,index) => (
                        <ThreeDCardDemo/>
                    ))
                }
            </div>
        </div>

    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
];
