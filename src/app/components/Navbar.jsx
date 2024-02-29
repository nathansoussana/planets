'use client'
import styles from './navbar.module.sass'
import { planets } from '../../../data'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const planetNames = planets.map(planet =>
      <Link 
        key={planet.name.toLowerCase()}
        href={`/${planet.name.toLowerCase()}`}
        className={styles.menu_item}  
      >
        {planet.name}
      </Link>
  )

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>The Planets</div>
      <div className={styles.menu}>{planetNames}</div>
      <Image 
        src="icon-hamburger.svg" 
        width={24} height={17} alt="Menu" 
        className={styles.hamburger_icon}
      />
    </nav>
  )
}