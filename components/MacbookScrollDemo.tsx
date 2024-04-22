import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";
import logo from '@/assets/brand/ts-logo.png'


export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-white ">
      <MacbookScroll
        title={
          <span className="text-4xl text-capitalise">
             Where soulful melodies meet electrifying beats.
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            {/* <Badge className="h-10 w-10 transform -rotate-12" /> */}
          </Link>
        }
        src={`https://utfs.io/f/0cb0db14-9fae-48aa-bce7-324fe1c06dd1-6if3ho.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo

