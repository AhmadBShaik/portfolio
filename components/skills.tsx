import Image from "next/image"

export const Skills = ({
  skillsRef,
}: {
  skillsRef: React.MutableRefObject<HTMLElement | null>
}) => {
  const confidentWith = [
    { name: "Next.js", image: "/next.png" },
    { name: "React.js", image: "/react.png" },
    { name: "TypeScript", image: "/typescript.png" },
    { name: "JavaScript", image: "/javascript.png" },
    { name: "React Query", image: "/react-query.png" },
    { name: "Tailwind.css", image: "/tailwind.png" },
    { name: "Supabase", image: "/supabase.png" },
    { name: "HTML", image: "/html.png" },
    { name: "CSS", image: "/css.png" },
    { name: "Python", image: "/python.png" },
  ]

  const usedInPast = [
    { name: "Flask", image: "/flask.png" },
    { name: "PostgreSQL", image: "/postgresql.png" },
    { name: "Supabase", image: "/supabase.png" },
  ]

  const expertise = [
    { name: "PostgreSQL", image: "/postgresql.png" },
    { name: "MongoDB", image: "/mongodb.png" },
    { name: "Zustand", image: "/zustand.png" },
    { name: "Redux Tool Kit", image: "/redux.png" },
    { name: "Jest", image: "/jest.png" },
    { name: "React Testing Library", image: "/react-testing-library.png" },
  ]

  return (
    <section
      className="w-full max-w-7xl mx-auto p-5"
      ref={skillsRef}
      id="skills">
      <h2 className="my-5 text-2xl md:text-3xl font-bold">Skills</h2>

      <div className="mt-5 mb-5 md:text-lg font-bold">I am confident with</div>
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 text-sm md:text-base">
        {confidentWith.map((item) => (
          <li key={item.name}>
            <div className="flex items-center space-x-1">
              <div>
                <Image src={item.image} alt={""} height={35} width={35} />
              </div>
              <div>{item.name}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 mb-5 md:text-lg font-bold">I have used in past</div>
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 text-sm md:text-base">
        {usedInPast.map((item) => (
          <li key={item.name}>
            <div className="flex items-center space-x-1">
              <div>
                <Image src={item.image} alt={""} height={35} width={35} />
              </div>
              <div>{item.name}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 mb-5 md:text-lg font-bold">
        I want to learn/gain expertise in near future
      </div>
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 text-sm md:text-base">
        {expertise.map((item) => (
          <li key={item.name}>
            <div className="flex items-center space-x-1">
              <div>
                <Image src={item.image} alt={""} height={35} width={35} />
              </div>
              <div>{item.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
