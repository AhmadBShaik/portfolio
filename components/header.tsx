"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSectionContext } from "@/context/sectionContext";
import { Link } from "react-scroll";
import { useWindowWidth } from "@/hooks/window-width";
import { useRotationMultiplierContext } from "@/context/rotationContext";

const Header = () => {
  const windowWidth = useWindowWidth();

  const [isOpen, setOpen] = useState<boolean>(false);
  const { sectionName } = useSectionContext();

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About Me", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" }
  ]
  const { rotationMultiplier, setRotationMultiplier } = useRotationMultiplierContext();

  useEffect(() => {
    const handler = setInterval(() => {
      if (sectionName === "") {
        setRotationMultiplier(prev => prev + 120);
        console.log(rotationMultiplier)
      }
    }, 2500);
    return () => clearInterval(handler);
  });
  React.useEffect(() => {
    if (sectionName === "") {
      setRotationMultiplier(prev => prev + 120);
    }
  }, [sectionName]);

  const previousSectionNameRef = useRef<string>('')

  React.useEffect(() => {
    if (sectionName === "/About" && previousSectionNameRef.current !== "/Skills") {
      setRotationMultiplier(prev => prev + 120);
    }
    previousSectionNameRef.current = sectionName
  }, [sectionName]);

  return (
    <header
      className={`w-full ${isOpen ? "h-screen" : "h-16"} ${sectionName !== "" ? "border-b border-emerald-700 bg-white" : ""
        } sm:h-20 fixed text-emerald-700 backdrop-blur-md z-20`}
    >
      <div className="flex h-16 sm:h-20 items-center px-5 xl:px-0 max-w-7xl mx-auto font-bold justify-between">
        <div className="flex items-end">
          <span className={`${sectionName !== "" ? "hidden" : "block"
            } mr-3 duration-500	`} style={{
              rotate: `${rotationMultiplier}deg`
            }}><Image src={'/a-white.svg'} alt={""} height={30} width={30} /></span>

          <span className={`${sectionName === "" ? "hidden" : "block"
            } mr-3 duration-500`} style={{
              rotate: `${rotationMultiplier}deg`
            }}><Image src={'/a-emerald.svg'} alt={""} height={30} width={30} /></span>
          <div>

            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={windowWidth < 640 ? -64 : -81}
              duration={500}
            >

              <span
                className={`${sectionName === "" ? "text-white hover:text-emerald-100" : "hover:text-emerald-800 "
                  } text-xl sm:text-2xl xl:text-3xl cursor-pointer`}
              >
                Ahmad B Shaik
              </span>
            </Link>
            <span
              className={`${sectionName === "" ? "text-white" : ""
                } text-sm sm:text-md xl:text-xl cursor-default`}
            >
              {sectionName}
            </span>
          </div>
        </div>
        <div className="md:hidden cursor-pointer">
          <Image
            src={
              isOpen
                ? "/x.svg"
                : sectionName === ""
                  ? "/menu-white.svg"
                  : "/menu-black.svg"
            }
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </div>
        {isOpen ? (
          <div className="absolute top-0 left-0 bottom-0 right-0 md:hidden bg-emerald-700 backdrop-blur-2xl z-100">
            <div className="h-screen flex flex-col bg-emerald-700">
              <div className="flex h-16 sm:h-20 items-center px-5 xl:px-0 max-w-6xl mx-auto font-bold  w-full justify-end">
                <div className="md:hidden cursor-pointer">
                  <Image
                    src={isOpen ? "/x.svg" : "/menu.svg"}
                    alt=""
                    width={20}
                    height={20}
                    onClick={() => setOpen((prevState) => !prevState)}
                  />
                </div>
              </div>
              <div className="text-white text-center flex-1 flex items-center justify-center">
                <ul className="">
                  {navItems.map(item => <li key={item.name}>
                    <Link
                      activeClass="active"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={windowWidth < 640 ? -64 : -81}
                      duration={500}
                    >
                      <div
                        className="hover:cursor-pointer hover:text-white text-emerald-50 hover:underline p-2.5"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </div>
                    </Link>
                  </li>)}

                </ul>
              </div>
            </div>
          </div>
        ) : null}
        <ul
          className={`${sectionName === "" ? "text-white" : "hover:text-emerald-600 "
            } hidden md:flex space-x-5`}
        >
          {navItems.map(item => <li key={item.name}>{
            <Link
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={windowWidth < 640 ? -64 : -81}
              duration={500}
            >
              <div className={`${sectionName === "" ? "hover:text-emerald-100" : "hover:text-emerald-800"} hover:underline cursor-pointer`}>
                {item.name}
              </div>
            </Link>

          }</li>)}
        </ul>
      </div>
    </header>
  );
};

export default Header;
