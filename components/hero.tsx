import { useSectionContext } from "@/context/sectionContext";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Hero = ({ homeRef }: { homeRef: React.MutableRefObject<HTMLElement | null> }) => {
  const { sectionName } = useSectionContext();

  const [text, helper] = useTypewriter({
    words: ["TypeScript.", "React.js.", "Next.js.", "Tailwind.css."],
    loop: false,
  })
  const { isType, isDelete, isDelay, isDone } = helper
  return <section
    className={`w-full h-screen -mt-16 sm:-mt-20 flex items-center ${sectionName === "/Projects"
      ? "bg-white"
      : "bg-gradient-to-br from-emerald-600 from-20% via-emerald-700 via-50% to-emerald-800 to-90%"
      }`}
    ref={homeRef}
    id="hero">
    <div className="flex-1 max-w-7xl mx-auto">
      <div className="flex px-5 md:px-0">
        <div className="sm:w-1/6"></div>
        <div className="sm:w-5/6">
          <div className="font-bold text-white text-2xl md:text-4xl">Hi there! 👋</div>
          <div className="font-bold text-white text-4xl md:text-6xl xl:text-6xl">
            I'm <span className="text-teal-300">Ahmad</span>
          </div>
          <div className="font-bold text-white text-md md:text-2xl mt-2">
            a passionate Software Developer.
          </div>
          <span className={`font-bold text-white text-md md:text-2xl mt-0.5`}>
            I write <span className="text-teal-200">{text}</span>
          </span>
          {isType}
          <span className="text-white">
            <Cursor />
          </span>
        </div>
      </div>
    </div>
  </section>
}