'use client'
import { planets } from "../../../data"
import { usePathname } from "next/navigation"
import Button from './Button.jsx'

export default function Buttons() {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <>
      <Button 
        url={`/${planet.name.toLowerCase()}/overview`} 
        text="Overview" 
      />
      <Button 
        url={`/${planet.name.toLowerCase()}/structure`} 
        text="Internal Structure" 
      />
      <Button 
        url={`/${planet.name.toLowerCase()}/surface`} 
        text="Surface Geology" 
      />
    </>
  )
}