import styles from "./button.module.sass"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { planets } from "../../../data"

export default function Button({ number, text, url }) {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <Link 
      href={url}
      className={`${styles.button} ${styles[planet.name.toLowerCase()]}`}
    >
      <div className={styles.number}>{number}</div>
      <div className={styles.text}>{text}</div>
    </Link>
  )
}