import styles from "./fact.module.sass"

export default function Fact({ title, text }) {
  return (
    <div className={styles.fact}>
      <h4 className={styles.title}>{title}</h4>
      <h2 className={styles.data}>{text}</h2>
    </div>
  )
}