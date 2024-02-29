import styles from "./button.module.sass"
import Link from "next/link"

export default function Button({ text, url }) {
  return (
    <Link 
      href={url}
      className={`${styles.button}`}
    >
      {text}
    </Link>
  )
}