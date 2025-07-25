"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex flex-row items-center justify-between p-4 bg-transparent absolute top-0 left-0 z-20">
        <h1 className="font-michroma uppercase text-[var(--primary)] xl:text-5xl">airre</h1>
        <div
          className="menu-icon relative xl:w-[72px] xl:h-[72px] cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Image src="/icons/menu.svg" alt="Menu Icon" fill />
        </div>
      </div>

      {/* Overlay Nav Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-screen w-1/2 min-w-[320px] bg-black text-white z-50 flex flex-col justify-start p-8 font-michroma animate-fade-in">
          {/* Close Icon */}
          <div className="flex justify-end relative">
            <button className="absolute top-8 right-0" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <Image className="cursor-pointer" src="/icons/cross.svg" alt="Close Icon" width={48} height={48} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col justify-start items-start mt-28">
            <h2 className="text-3xl md:text-4xl mb-8">Navigation links</h2>
            <ul className="space-y-6 text-2xl md:text-3xl">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/blog" className="hover:underline">Blogs</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/members" className="hover:underline">Members</a></li>
            </ul>
            <h2 className="text-3xl md:text-4xl mt-12 mb-8">Social Media links</h2>
            <ul className="space-y-6 text-2xl md:text-3xl">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Github</a></li>
              <li><a href="#" className="hover:underline">Hugging face</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
            </ul>
          </div>

          {/* Decorative corners */}
          <div className="flex justify-between w-full absolute bottom-12 left-0 px-8">
            <Image src="/images/star.png" alt="Star" width={32} height={32} />
            <Image src="/images/star.png" alt="Star" width={32} height={32} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;