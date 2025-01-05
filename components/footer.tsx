"use client"
import Image from "next/image"
import React from "react"

const initialYear = 2022
const date = new Date()
const currentYear = date.getMonth() == 11 ? Number(date.getFullYear()) + 1 : Number(date.getFullYear())
const Footer = () => {
  return (
    <footer className="p-5 flex flex-col items-center justify-center text-white bg-emerald-900 text-sm w-full space-y-5">
      <div>Made with ❤️</div>
      <div className="flex items-center space-x-2">
        <span>Built using</span>{" "}
        <span>
          <Image
            src={"/next-white.svg"}
            alt="Next.js logo"
            height={75}
            width={75}
          />
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <span>Deployed in</span>{" "}
        <span>
          <Image
            src={"/vercel-white.svg"}
            alt="Vercel logo"
            height={75}
            width={75}
          />
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:gap-1">
        <p className="text-center">
          Copyright © {initialYear} - {currentYear} AhmadBShaik.
        </p>
        <p className="text-center">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
