"use client"
import { useEffect, useMemo, useState } from "react"
import { useWindowWidth } from "./window-width"

export const useIsInViewport = (ref: React.MutableRefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const windowWidth = useWindowWidth()

  if (typeof window === "undefined") return false
  const observer = useMemo(() => {
    const k = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        rootMargin: windowWidth ?? 0 < 640 ? "-65px" : "-85px",
      },
    )
    return k
  }, [windowWidth])

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
