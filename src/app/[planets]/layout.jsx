'use client'
import { planets } from "../../../data"
import { usePathname } from "next/navigation"
import Buttons from '../components/Buttons'
import Facts from '../components/Facts'

export default function Layout({ children }) {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <>
      {children}
      <h1>{planet.name}</h1>
      <p>{planet.overview.content}</p>
      <Buttons />
      <Facts />
    </>
  )
}