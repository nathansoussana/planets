"use client"
import Fact from "./Fact.jsx"
import { planets } from "../../../data.js"
import { usePathname } from "next/navigation"
import styles from "./facts.module.sass"

export default function Facts() {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <div className={styles.facts}>
      <Fact title="Rotation time" text={planet.rotation} />
      <Fact title="Revolution time" text={planet.revolution} />
      <Fact title="Radius" text={planet.radius} />
      <Fact title="Average temp." text={planet.temperature} />
    </div>
  )
}