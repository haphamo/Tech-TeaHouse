import { useState, useEffect } from "react"

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { windowWidth }
}

export default useWindowWidth
