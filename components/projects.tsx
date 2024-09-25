import { Link } from "react-scroll"

export const Projects = ({
  projectsRef,
}: {
  projectsRef: React.MutableRefObject<HTMLElement | null>
}) => {
  const projects = [
    {
      title: "Little Learners",
      description:
        "The School Website built with re-usable components using atomic design pattern leveraging Atomic Design Pattern.",
      sourceCode: "https://github.com/ahmad-bsh/little-learners",
      viewLive: "https://little-learners-ten.vercel.app",
    },
    {
      title: "Agriculture Website",
      description:
        "The agriculture website with Home, About, Contact, Projects and Project detail(leveraging dynamic routing in Next.js) pages.",
      sourceCode: "https://github.com/ahmad-bsh/agriculture",
      viewLive: "https://agriculture-indol-five.vercel.app",
    },
    {
      title: "My portfolio",
      description:
        "Clean and responsive portfolio built using Next.js, React.js and Tailwind.css with minimal animations.",
      sourceCode: "https://github.com/AhmadBShaik/portfolio/",
      viewLive: "#",
      noRedirect: true,
    },
    {
      title: "Happy Travel",
      description:
        "Travel Website which have which let's users to discover travel locations, view latest photographs to know the current scenary.This website will also provides latest news about travel locations.",
      sourceCode: "https://github.com/AhmadBShaik/happy-travel",
      viewLive: "https://ahmadbshaik.github.io/happy-travel/",
    },
    {
      title: "Botanical Garden",
      description:
        "Fully responsive static website with custom mobile menu built using tailwind utility classes.",
      sourceCode: "https://github.com/ahmad-bsh/botanical-garden",
      viewLive: "https://botanical-garden-plum.vercel.app/",
    },
  ]
  return (
    <section
      className="w-full max-w-7xl mx-auto p-5 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)]"
      ref={projectsRef}
      id="projects">
      <div className="my-5 text-xl font-bold">Personal Projects</div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 cursor-default">
        {projects.map((project) => (
          <div
            className="border p-5 rounded shadow-md flex flex-col"
            key={project.title}>
            <p className="text-lg font-medium">{project.title}</p>
            <p className="flex-1 mt-2.5">{project.description}</p>
            <div className="flex justify-between mt-2.5">
              <div
                className="text-emerald-500 hover:text-emerald-700 bg-white hover:bg-emerald-50 px-2 py-1 rounded cursor-pointer border border-emerald-500 hover:border-emerald-700"
                onClick={() => {
                  window.open(project.sourceCode, "_blank")
                }}>
                Source Code
              </div>
              {project.viewLive ? (
                project.noRedirect ? (
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <div className="bg-emerald-500 hover:bg-emerald-700 text-white px-2 py-1 rounded cursor-pointer">
                      View Live
                    </div>
                  </Link>
                ) : (
                  <div
                    className="bg-emerald-500 hover:bg-emerald-700 text-white px-2 py-1 rounded cursor-pointer"
                    onClick={() => {
                      window.open(project.viewLive, "_blank")
                    }}>
                    View Live
                  </div>
                )
              ) : null}
            </div>
          </div>
        ))}
      </ul>
    </section>
  )
}
