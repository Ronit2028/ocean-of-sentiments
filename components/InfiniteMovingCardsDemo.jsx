"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconFileArrowRight } from "@tabler/icons-react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

export function InfiniteMovingCardsDemo() {

            const data =  [
                {
                    "image": "https://utfs.io/f/89338636-54f4-4c59-80f1-ac179fadc68a-ax1ioo.jpg",
                    "title": "Title 1",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, felis non fermentum feugiat, nisi risus fermentum quam, nec dapibus orci turpis ut eros."
                },
                {
                    "image": "https://utfs.io/f/adbfe4be-75fa-44bc-a430-8abda1a131dc-8sfhbl.jpg",
                    "title": "Title 2",
                    "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
                },
                {
                    "image": "/image3.jpg",
                    "title": "Title 3",
                    "content": "Nulla facilisi. Vivamus eget leo a orci ultrices aliquet. Proin accumsan augue vel turpis posuere, nec sollicitudin enim laoreet."
                }
            ]

    return (
        <div className="w-full py-12 text-black bg-white mx-auto ">
            <div className="max-w-7xl mx-auto py-12 border-black/25 border-b">
                <p className="text-4xl font-bold">
                    Latest Stories
                </p>
            </div>
            <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


               {data.map((dat,index)=>(
                <ThreeDCardDemo key={index} image={dat.image} title={dat.title} content={dat.content}/>
               ))}


            </div>
        </div>

    );
}

