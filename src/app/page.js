"use client"
import { useEffect } from "react"
import Gallery from "./components/gallery"
import Lenis from "@studio-freight/lenis"
import { useMotionValue, useSpring } from "framer-motion"

import styles from "./page.module.css"

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak",
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias",
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers",
  },
  {
    name: "Landon Speers",
    handle: "landon_speers",
  },
]

export default function Home() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  }
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  }

  //Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const mouseMove = (e) => {
    const { clientX, clientY } = e
    const targetX = clientX - (window.innerWidth / 2) * 0.25
    const targetY = clientY - (window.innerHeight / 2) * 0.3
    mousePosition.x.set(targetX)
    mousePosition.y.set(targetY)
  }
  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {projects.map(({ handle }, i) => {
        return <Gallery mousePosition={mousePosition} key={i} handle={handle} />
      })}
    </main>
  )
}
