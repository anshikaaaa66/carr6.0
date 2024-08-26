"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/contants/appdata";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="relative">
      {/* Curvy warm-colored box with shadow */}
      <div className="relative shadow-lg h-20 flex justify-between items-center px-[5%] bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full">
        
        {/* Silver animated lightning */}
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-gold via-orange-400 to-gold animate-lightning rounded-t-full"></div>
        
        {/* Logo / Home Link */}
        <Link href="/" className="text-white font-extrabold text-3xl pl-5 animate-pulse">
          Code Scrapper
        </Link>
        
        {/* Hamburger Menu for mobile */}
        <div
          className="md:hidden flex flex-col gap-1 pr-5 cursor-pointer"
          onClick={() => setIsMenu(!isMenu)}
        >
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </div>
        
        {/* Navigation Links */}
        <div
          className={`${
            isMenu ? "flex flex-col animate-menu-open" : "hidden md:flex navbar-menu"
          } gap-5 md:flex-row md:static bg-transparent md:w-auto text-center`}
        >
          {links?.map((link) => (
            <div key={link.link} className="relative navbar-menu-item">
              <Link
                className={`${
                  pathname === link.link ? "text-white" : "text-gray-200"
                } transition-colors duration-300 font-medium text-lg hover:text-yellow-200`}
                href={link.link}
              >
                <span>{link.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
