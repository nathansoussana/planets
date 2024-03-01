import styles from "./page.module.sass"
import { planets } from "../../data"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const planet = planets.map(p => 
    <Link key={p.name} href={`${p.name.toLowerCase()}/overview`} className={styles.planet}>
      <Image src={`/${p.images.planet}`} width={50} height={50} alt={p.name} className={styles.planet_image}/>
      <h3 className={styles.planet_name}>{p.name}</h3>
    </Link>
  )

  return (
    <section className={styles.planets}>
      {planet}
    </section>
  )
}
