import { useEffect, useRef, useState } from "react"

export const useWindowWidth = () => {
  const windowWidth = useRef<number>(0)

  if (typeof window === "undefined") {
    return 0
  }

  const handleResize = () => {
    typeof window !== "undefined"
      ? (windowWidth.current = window.innerWidth)
      : (windowWidth.current = 0)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [window])

  return windowWidth.current
}
