"use client"
import { planets } from "../../../data"
import { usePathname } from "next/navigation"
import Button from "./Button.jsx"
import styles from "./buttons.module.sass"

export default function Buttons() {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <div className={styles.buttons}>
      <Button 
        number="01"
        url={`/${planet.name.toLowerCase()}/overview`} 
        text="Overview" 
        className={`
          ${styles.button}
          ${styles[planet.name.toLowerCase()]}
          ${pathname.includes("overview") ? styles.active : ""}
        `}
      />
      <Button 
        number="02"
        url={`/${planet.name.toLowerCase()}/structure`} 
        text="Internal Structure" 
        className={`
          ${styles.button}
          ${styles[planet.name.toLowerCase()]}
          ${pathname.includes("structure") ? styles.active : ""}
        `}
      />
      <Button 
        number="03"
        url={`/${planet.name.toLowerCase()}/geology`} 
        text="Surface Geology" 
        className={`
          ${styles.button}
          ${styles[planet.name.toLowerCase()]}
          ${pathname.includes("geology") ? styles.active : ""}
        `}
      />
    </div>
  )
}