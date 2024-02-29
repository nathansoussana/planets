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
        src={`/${planet.images.internal}`}
        width={290} height={290} alt={planet.name}
      />
    </>
  )
}