import { useSectionContext } from "@/context/sectionContext"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Image from "next/image"

export const Hero = ({
  homeRef,
}: {
  homeRef: React.MutableRefObject<HTMLElement | null>
}) => {
  const { sectionName } = useSectionContext()

  const [text, _] = useTypewriter({
    words: ["TypeScript.", "React.js.", "Next.js.", "Tailwind.css."],
    loop: false,
  })
  return (
    <section
      className={`w-full h-screen -mt-16 sm:-mt-20 flex items-center ${
        sectionName === "/Projects"
          ? "bg-white"
          : "bg-gradient-to-br from-emerald-600 from-20% via-emerald-700 via-50% to-emerald-800 to-90%"
      }`}
      ref={homeRef}
      id="hero">
      <div className="flex-1 max-w-7xl mx-auto">
        <div className="flex flex-col px-5 xl:px-0">
          <div className="sm:w-1/6"></div>
          <div className="sm:w-5/6">
            <div className="font-bold text-white text-2xl md:text-4xl">
              Hi there! 👋
            </div>
            <div className="font-bold text-white text-4xl md:text-6xl xl:text-6xl">
              I'm <span className="text-teal-300">Ahmad</span>
            </div>
            <div className="font-bold text-white text-md md:text-2xl mt-2">
              A passionate Software Developer.
            </div>
            <span className={`font-bold text-white text-md md:text-2xl mt-0.5`}>
              I write <span className="text-teal-200">{text}</span>
            </span>
            <span className="text-white">
              <Cursor />
            </span>
          </div>
        </div>
        <div className="px-5 xl:px-0 sm:hidden">
          <div className="px-5 flex mt-5 space-x-5 bg-teal-50 bg-opacity-50 rounded w-fit py-1.5">
            <div className="flex items-center cursor-pointer">
              <a
                href="https://www.linkedin.com/in/ahmadbshaik/"
                target="_blank">
                <Image
                  src={"/linkedin.png"}
                  alt="LinkedIn"
                  width={38}
                  height={38}
                  title="LinkedIn"
                />
              </a>
            </div>
            {/* <div className="flex items-center cursor-pointer"><Image src={"/gmail.png"} alt="Gmail" width={42} height={42} title="Email" /></div> */}
            <div className="flex items-center cursor-pointer">
              <a href="https://github.com/ahmadbshaik" target="_blank">
                <Image
                  src={"/github.png"}
                  alt="GitHub"
                  width={40}
                  height={40}
                  title="GitHub"
                />
              </a>
            </div>
          </div>
          <div className="mt-3.5">
            <a
              className="px-5 mt-5 rounded w-fit py-1.5 bg-teal-300 text-emerald-700 hover:bg-teal-200 cursor-pointer font-bold"
              title="Resume"
              download={true}
              href="/Ahmad-Shaik.pdf">
              Resume/CV
            </a>
          </div>
        </div>
        <div className="px-5 xl:px-0 hidden sm:flex items-center space-x-5">
          <div className="px-5 flex mt-5 space-x-5 bg-teal-50 bg-opacity-50 rounded w-fit py-2.5">
            <div className="flex items-center cursor-pointer">
              <a
                href="https://www.linkedin.com/in/ahmadbshaik/"
                target="_blank">
                <Image
                  src={"/linkedin.png"}
                  alt="LinkedIn"
                  width={45}
                  height={45}
                  title="LinkedIn"
                />
              </a>
            </div>
            {/* <div className="flex items-center cursor-pointer"><Image src={"/gmail.png"} alt="Gmail" width={52} height={52} title="Email" /></div> */}
            <div className="flex items-center cursor-pointer">
              <a href="https://github.com/ahmadbshaik" target="_blank">
                <Image
                  src={"/github.png"}
                  alt="GitHub"
                  width={50}
                  height={50}
                  title="GitHub"
                />
              </a>
            </div>
            <div className="flex items-center cursor-pointer">
              <a
                className="px-5 rounded w-fit py-1.5 bg-emerald-700 hover:bg-emerald-800 text-teal-200 cursor-pointer font-bold"
                title="Resume"
                download={true}
                href="/Ahmad-Shaik-Resume.pdf">
                Resume/CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
