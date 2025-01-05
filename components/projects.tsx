import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Link as ScrollLink } from "react-scroll"

export const Projects = ({
  projectsRef,
}: {
  projectsRef: React.MutableRefObject<HTMLElement | null>
}) => {
  const projects = [
    {
      title: "Little Learners",
      description:
        "Developed a school website with reusable components using the Atomic Design pattern, ensuring a consistent neubrutalism theme throughout.",
      image: '/projects/little-learners.png',
      sourceCode: "https://github.com/ahmad-bsh/little-learners",
      viewLive: "https://little-learners-ten.vercel.app",
    },
    {
      title: "Agriculture Website",
      description:
        "Developed an agriculture website featuring Home, About, Contact, Projects, and Project Detail pages, leveraging dynamic routing in Next.js.",
      image: '/projects/agriculture-website.png',
      sourceCode: "https://github.com/ahmad-bsh/agriculture",
      viewLive: "https://agriculture-indol-five.vercel.app",
    },
    {
      title: "My portfolio",
      description:
        "Built a clean, responsive portfolio using Next.js, React.js, and Tailwind CSS, enhanced with subtle animations.",
      image: '/projects/portfolio.png',
      sourceCode: "https://github.com/AhmadBShaik/portfolio/",
      viewLive: "#",
      noRedirect: true,
    },
    {
      title: "Happy Travel",
      description:
        "Developed a travel website enabling users to discover destinations, view recent photographs of current scenery, and stay updated with the latest travel news.",
      image: '/projects/happy-travel.png',
      sourceCode: "https://github.com/AhmadBShaik/happy-travel",
      viewLive: "https://ahmadbshaik.github.io/happy-travel/",
    },
    {
      title: "Botanical Garden",
      description:
        "Developed a fully responsive static website with a custom mobile menu using Tailwind CSS utility classes.",
      image: '/projects/botanical-garden.png',
      sourceCode: "https://github.com/ahmad-bsh/botanical-garden",
      viewLive: "https://botanical-garden-plum.vercel.app/",
    },
  ]
  return (
    <section
      className="w-full max-w-7xl mx-auto p-5"
      ref={projectsRef}
      id="projects">
      <h2 className="my-5 text-2xl md:text-3xl font-bold">Personal Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 cursor-default">
        {projects.map((project) => (
          <li key={project.title} className="h-full">
            <article
              className="border rounded shadow-md flex flex-col h-full"
            >
              <div className="aspect-video relative">
                <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover rounded-t" quality={100} priority sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <strong className="md:text-lg font-medium">{project.title}</strong>
                <p className="text-sm md:text-base flex-1 mt-2.5">{project.description}</p>
                <div className="flex justify-between mt-5">
                  {
                    project.noRedirect ? <div /> :
                      <Link
                        href={project.sourceCode}
                        target="_blank"
                        className="text-emerald-500 hover:text-emerald-700 bg-white hover:bg-emerald-50 px-2 py-1 rounded cursor-pointer border border-emerald-500 hover:border-emerald-700"
                        onClick={() => {
                          window.open(project.sourceCode, "_blank")
                        }}>
                        Source Code
                      </Link>
                  }
                  {project.viewLive ? (
                    project.noRedirect ? (
                      <ScrollLink
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <div className="bg-emerald-500 hover:bg-emerald-700 text-white px-2 py-1 rounded cursor-pointer">
                          View Live
                        </div>
                      </ScrollLink>
                    ) : (
                      <Link
                        href={project.viewLive}
                        target="_blank"
                        className="bg-emerald-500 hover:bg-emerald-700 text-white px-2 py-1 rounded cursor-pointer"
                        onClick={() => {
                          window.open(project.viewLive, "_blank")
                        }}>
                        View Live
                      </Link>
                    )
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
