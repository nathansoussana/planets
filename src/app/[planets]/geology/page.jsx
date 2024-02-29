"use client"
import { planets } from "../../../../data"
import { usePathname } from "next/navigation"
import Image from "next/image"
import styles from "./page.module.sass"

export default function Page() {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <div className={styles.images}>
      <Image 
        className={styles.image_planet}
        src={`/${planet.images.planet}`}
        width={290} height={290} alt={planet.name}
      />
      <Image 
        className={styles.image_zoom}
        src={`/${planet.images.geology}`}
        width={163} height={199} alt={planet.name}
      />
    </div>
  )
}