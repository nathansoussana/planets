'use client'
import { planets } from "../../../../data"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Page() {
  const pathname = usePathname()
  const planet = planets.find(p => pathname.includes(p.name.toLowerCase()))

  return (
    <>
      <Image 
        src={`/${planet.images.planet}`}
        width={100} height={100} alt={planet.name}
      />
    </>
  )
}