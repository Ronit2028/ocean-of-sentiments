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
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                </div>
              </MenuItem></Link>
            <Link href='/events'>
              <MenuItem setActive={setActive} active={active} item="Tours & Events">
                <div className="  text-sm grid grid-cols-1">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                </div>
              </MenuItem></Link>
            <Link href='/music'>
              <MenuItem setActive={setActive} active={active} item="Music">
                <div className="  text-sm grid grid-cols-1">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
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
