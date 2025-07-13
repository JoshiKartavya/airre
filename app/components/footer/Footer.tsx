import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full min-h-screen flex flex-col justify-center items-end bg-white text-black font-michroma relative pt-12 pb-8 px-4">
      {/* Contact us top left */}
      <div className="absolute left-12 top-12 xl:text-[24px] font-mono flex items-center gap-2">
        <span className="text-xl">&#123;&#125;</span> Contact us
      </div>

      {/* Main content */}
      <div className="flex flex-col items-start w-1/2">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-michroma text-center mb-6 leading-tight">
          Lets Shape the<br />future together!
        </h2>
        <button className="border-2 border-black rounded-lg px-8 py-2 text-lg font-michroma flex items-center gap-2 mb-8 hover:bg-black hover:text-white transition-colors">
          Connect us <span className="text-2xl">&#8250;</span>
        </button>
        <hr className="w-full border-t-4 border-black my-4" />
      {/* Copyright */}
      <div className="w-full flex justify-start mt-4">
        <span className="text-[28px] font-mono tracking-widest font-nunito">© 2025 airre club. All rights reserved.</span>
      </div>
      </div>

    </footer>
  );
};

export default Footer;