import styles from "./page.module.sass"
import { planets } from "../../data"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const planet = planets.map(p => 
    <Link key={p.name} href={`${p.name.toLowerCase()}/overview`}>
      <Image 
        src={p.images.planet}
        width={50} height={50} alt={p.name}
      />
      <p>{p.name}</p>
    </Link>
  )

  return (
    <section>
      {planet}
    </section>
  )
}
