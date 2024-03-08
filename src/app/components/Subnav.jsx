import { planets } from "../../../data"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./subnav.module.sass"

export default function Subnav() {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <div className={styles.menu}>
      <Link 
        href={`/${planet.name.toLowerCase()}/overview`}
        className={`
          ${styles.menu_item}
          ${styles[planet.name.toLowerCase()]} 
          ${pathname.includes("overview") ? styles.active : ""}
        `}>
        Overview
      </Link>
      <Link 
        href={`/${planet.name.toLowerCase()}/structure`}
        className={`
          ${styles.menu_item}
          ${styles[planet.name.toLowerCase()]} 
          ${pathname.includes("structure") ? styles.active : ""}
        `}>
        Structure
      </Link>
      <Link 
        href={`/${planet.name.toLowerCase()}/geology`}
        className={`
          ${styles.menu_item}
          ${styles[planet.name.toLowerCase()]} 
          ${pathname.includes("geology") ? styles.active : ""}
        `}>
        Surface
      </Link>
    </div>
  )
}