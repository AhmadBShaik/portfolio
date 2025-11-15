"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSectionContext } from "@/context/sectionContext";
import { useIsInViewport } from "@/hooks/viewport";
import { Hero } from "./hero";
import { AboutMe } from "./about-me";
import { Skills } from "./skills";
import { Projects } from "./projects";
// import { Contact } from "./contact";
import { useRotationMultiplierContext } from "@/context/rotationContext";
import { Contact } from "./contact";

const Content = () => {
  const { sectionName, setSectionName } = useSectionContext();
  const { setRotationMultiplier } = useRotationMultiplierContext();

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const isInViewportHome = useIsInViewport(
    homeRef as React.MutableRefObject<HTMLElement>
  );

  const isInViewportAbout = useIsInViewport(
    aboutRef as React.MutableRefObject<HTMLElement>
  );

  const isInViewportSkills = useIsInViewport(
    skillsRef as React.MutableRefObject<HTMLElement>
  );

  const isInViewportProjects = useIsInViewport(
    projectsRef as React.MutableRefObject<HTMLElement>
  );

  const isInViewportContact = useIsInViewport(
    contactRef as React.MutableRefObject<HTMLElement>
  );

  useEffect(() => {
    if (isInViewportHome) {
      setSectionName("");
    } else if (isInViewportAbout) {
      setSectionName("/About");
    } else if (isInViewportSkills) {
      setSectionName("/Skills");
    } else if (isInViewportProjects) {
      setSectionName("/Projects");
    }
    // else if (isInViewportContact) {
    //   setSectionName("/Contact");
    // }
  }, [
    isInViewportHome,
    isInViewportAbout,
    isInViewportSkills,
    isInViewportProjects,
    // isInViewportContact,
  ]);

  useEffect(() => {
    setRotationMultiplier((prev) => prev + 120);
  }, [sectionName]);

  return (
    <section className="flex flex-col xl:px-0 mx-auto">
      <Hero homeRef={homeRef!} />
      <AboutMe aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </section>
  );
};

export default Content;
