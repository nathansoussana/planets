'use client'
import { planets } from "../../../data"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Buttons from '../components/Buttons'
import Facts from '../components/Facts'
import styles from './layout.module.sass'

export default function Layout({ children }) {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))
  
  function findSection(path) {
    if (path.includes("overview")) {
      return "overview"
    } else if (path.includes("structure")) {
      return "structure"
    } else if (path.includes("geology")) {
      return "geology"
    }
  }

  const section = findSection(pathname)

  return (
    <section className={styles.page}>
      <div className={styles.main_content}>
        <div className={styles.main_content_image}>{children}</div>
        <div className={styles.main_content_copy}>
          <div className={styles.main_content_copy_text}>
            <h1 className={styles.title}>{planet.name}</h1>
            {section &&
              <>
                <p className={styles.text}>{planet[section].content}</p>
                <p className={styles.source}>Source:&nbsp;
                  <a href={planet[section].source}>
                    <span className={styles.wikipedia}>Wikipedia</span>
                    <span>&nbsp;</span>
                    <Image src="/icon-source.svg" width={8} height={8} alt="Source"/>
                  </a>
                </p>
              </>
            }
          </div>
          <div className={styles.main_content_copy_buttons}>
            <Buttons />
          </div>
        </div>
      </div>
      <Facts />
    </section>
  )
}