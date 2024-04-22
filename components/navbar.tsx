"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faYoutube, faInstagram, faAmazon, } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";


import logo from '@/assets/brand/ts-logo.png'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center z-50">
      <Navbar className="top-0 !bg-transparent" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-full mx-auto z-50 !rounded-none !bg-black", className)}
    >
      <div>
        <Menu setActive={setActive}>
          <div>
            <Image src={logo} width={75} alt="logo" />
          </div>
          <div className=" flex-wrap gap-5 items-center hidden lg:flex">
            <Link href='/about'>
              <MenuItem setActive={setActive} active={active} item="The Band">
                <div className="  text-sm grid grid-cols-1">
                  <ProductItem
                    title="About The Band"
                    href="/about"
                    src="https://utfs.io/f/a9a41709-bbf9-460b-86bb-988f1a29af88-8gposf.41.54_36ff9be4.jpg"
                    description="Know about these musical stars, how their journey started and a lot more."
                  />
                </div>
              </MenuItem></Link>
            <Link href='/events'>
              <MenuItem setActive={setActive} active={active} item="Tours & Events">
                <div className="  text-sm grid grid-cols-1">
                  <ProductItem
                    title="Live Events Tours & Performances"
                    href="/events"
                    src="https://utfs.io/f/660d9547-dda1-474d-a126-94a903d90f8e-8gposf.41.54_e13de2ad.jpg"
                    description="Know all about the upcoming tours and events and be one the firsts to get the ticket and a chance tp see these music magicians in action."
                  />
                </div>
              </MenuItem></Link>
            <Link href='/music'>
              <MenuItem setActive={setActive} active={active} item="Music">
                <div className="  text-sm grid grid-cols-1">
                  <ProductItem
                    title="New & Top Releases"
                    href="/music"
                    src="https://utfs.io/f/7eebe75a-853b-4c53-911c-86b29760c8ae-8gposf.41.55_d2f1477b.jpg"
                    description="Discover one of the bests and latest musical creations of this band"
                  />
                </div>
              </MenuItem></Link>
          </div>

          <div className="hidden lg:flex items-center">
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
          <button className="flex lg:hidden bg-black my-auto" onClick={() => toggleNav()}>
            <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
          </button>
        </Menu>
        {/* mobile and tab nav */}
        {
          navOpen && <div className={`!bg-black z-50 p-8 flex-wrap gap-5 transition items-start flex flex-col lg:hidden ${navOpen ? 'slide-in' : 'slide-out'}`}>
            <Link href='/about'>
              The Band
            </Link>
            <Link href='/events'>
              Events
            </Link>
            <Link href='/music'>
              Music</Link>
            <div className="flex lg:hidden items-center">
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
        }
        {/*  */}
      </div>
    </div>
  );
}
