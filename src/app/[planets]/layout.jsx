'use client'
import { planets } from "../../../data"
import { usePathname } from "next/navigation"
import Buttons from '../components/Buttons'
import Facts from '../components/Facts'
import styles from './layout.module.sass'

export default function Layout({ children }) {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <section className={styles.page}>
      <div className={styles.main_content}>
        <div className={styles.main_content_image}>
          {children}
        </div>
        <div className={styles.main_content_copy}>
          <div>
            <h1 className={styles.title}>{planet.name}</h1>
            <p className={styles.text}>{planet.overview.content}</p>
            <p className={styles.source}>Source: Wikipedia</p>
          </div>
          <Buttons />
        </div>
      </div>
      <Facts />
    </section>
  )
}