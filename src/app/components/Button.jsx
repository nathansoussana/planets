import styles from "./button.module.sass"
import Link from "next/link"

export default function Button({ number, text, url, className }) {
  return (
    <Link 
      href={url}
      className={className}
    >
      <div className={styles.number}>{number}</div>
      <div className={styles.text}>{text}</div>
    </Link>
  )
}