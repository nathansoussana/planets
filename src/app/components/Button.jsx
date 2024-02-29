import Link from "next/link"

export default function Button({ text, url }) {
  return (
    <Link href={url}>{text}</Link>
  )
}