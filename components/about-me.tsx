export const AboutMe = ({ aboutRef }: { aboutRef: React.MutableRefObject<HTMLElement | null> }) => {

  return <section
    className="w-full max-w-7xl mx-auto p-5 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)]"
    ref={aboutRef}
    id="about">
    <div className="my-5 text-xl font-bold">About Me</div>
    <div className="space-y-5">
      <p>
        I love building software and enjoying nature.
      </p>
      <p>
        My passion lies in coding and developing
        solutions to real-world challenges. I have experience of building
        micro applications from scratch.
      </p>
      <p>
        I started programming {`${new Date().getFullYear() - 2018}`} years
        ago. Since I started programming I always trying to find mentors to
        review my code and thriving to improve my code quality.
      </p>

      <div className="md:hidden flex flex-col text-sm pt-10">
        <div className="mb-5 text-lg font-medium">Timeline</div>
        <>
          <div className="flex">
            <div className={`w-10 flex flex-col items-center mr-2.5 text-emerald-700 text-xs`}>
            </div>
            <div>
              <div className="flex items-center">
                <div className={`h-3 w-3 rounded-full bg-emerald-700 animate-bounce  z-10 -ml-1 mb-1`}>
                </div>

                <div className=" mx-2.5 font-bold"></div>
              </div>
              <div className="h-8 w-1 rounded-full bg-emerald-500 flex items-center">
              </div>
            </div>
          </div>
        </>
        <>
          <div className="flex">
            <div className="w-10 flex flex-col items-center mr-2.5 text-emerald-700 text-xs">
              <div>Aug</div>
              <div>2022</div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-emerald-700 z-10 -ml-1">
                </div>

                <div className=" mx-2.5 font-bold">💻 Software Developer</div>
              </div>
              <div className="h-20 w-1 rounded-full bg-emerald-500 flex items-center">
              </div>
            </div>
          </div>
        </>
        <>
          <div className="flex">
            <div className="w-10 flex flex-col items-center mr-2.5 text-emerald-700 text-xs">
              <div>Jan</div>
              <div>2022</div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-emerald-700 z-10 -ml-1">
                </div>

                <div className=" mx-2.5 font-bold">🌱 Software Developer Intern</div>
              </div>
              <div className="h-20 w-1 rounded-full bg-emerald-500 flex items-center">
              </div>
            </div>
          </div>
        </>
        <>
          <div className="flex">
            <div className="w-10 flex flex-col items-center mr-2.5 text-emerald-700 text-xs">
              <div>Aug</div>
              <div>2018</div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-emerald-700 z-10 -ml-1">
                </div>

                <div className=" mx-2.5 font-bold">🚀 Wrote "Hello World!"</div>
              </div>

            </div>
          </div>
        </>
      </div>

      <div className="hidden md:flex flex-col items-center md:text-md pt-16">
        <div className="mb-10 text-lg font-medium">Timeline</div>

        <>
          <div className="flex w-full items-center">
            <div className="flex-1 flex justify-end rounded">
            </div>
            <div className={`h-3 w-3 rounded-full bg-emerald-700 animate-bounce z-10`}></div>
            <div className="flex-1">
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex-1">
            </div>
            <div className={`h-10 w-1 mt-2 rounded-full  bg-emerald-500 flex items-center`}></div>
            <div className="flex-1">

            </div>
          </div>
        </>
        <>
          <div className="flex w-full items-center">
            <div className="flex-1 flex justify-end rounded">
              <div className="px-2 py-1 mx-5 bg-emerald-500 text-white rounded-full text-sm">
                Aug 2022
              </div>
            </div>
            <div className="h-3 w-3 rounded-full bg-emerald-700 z-10"></div>
            <div className="flex-1">
              <div className=" mx-5 font-bold">💻 Software Developer</div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex-1">
            </div>
            <div className="h-32 w-1 rounded-full bg-emerald-500 flex items-center"></div>
            <div className="flex-1">

            </div>
          </div>
        </>

        <>
          <div className="flex w-full items-center">
            <div className="flex-1 flex justify-end rounded">
              <div className=" mx-5 font-bold">Software Developer Intern 🌱</div>
            </div>
            <div className="h-3 w-3 rounded-full bg-emerald-700 z-10"></div>
            <div className="flex-1">
              <div className="px-2 py-1 mx-5 bg-emerald-500 text-white rounded-full text-sm w-fit">
                Jan 2022
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex-1">
            </div>
            <div className="h-32 w-1 rounded-full bg-emerald-500 flex items-center"></div>
            <div className="flex-1"></div>
          </div>
        </>
        <>
          <div className="flex w-full items-center">
            <div className="flex-1 flex justify-end rounded">
              <div className="px-2 py-1 mx-5 bg-emerald-500 text-white rounded-full text-sm">
                Aug 2018
              </div>
            </div>
            <div className="h-3 w-3 rounded-full bg-emerald-700 z-10"></div>
            <div className="flex-1">
              <div className=" mx-5 font-bold">🚀 Wrote "Hello World!"</div>
            </div>
          </div>
        </>
      </div>
    </div>
  </section>
}