import styles from './navbar.module.sass'
import { planets } from "../../../data"
import Image from 'next/image'

export default function Navbar() {
  const planetNames = planets.map(planet =>
    <li key={planet.name} className={styles.menu_item}>
      {planet.name}
    </li>
  )

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>The Planets</div>
      <ul className={styles.menu}>{planetNames}</ul>
      <Image 
        src="icon-hamburger.svg"
        width={24}
        height={17}
        alt="Menu"
        className={styles.hamburger_icon}
      />
    </nav>
  )
}