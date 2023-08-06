"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 flex flex-col items-center justify-center text-white bg-emerald-900 text-sm w-full space-y-5">
      <div>Made with ❤️</div>
      <div className="flex items-center space-x-2"><span>Built using</span> <span><Image src={"/next-white.svg"} alt="Next.js logo" height={75} width={75} /></span></div>
      <div className="flex items-center space-x-2"><span>Deployed in</span> <span><Image src={"/vercel-white.svg"} alt="Vercel logo" height={75} width={75} /></span></div>
    </footer>
  );
};

export default Footer;
