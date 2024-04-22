/* eslint-disable react/prop-types */
import styles from './TaskCounter.module.css'

export function TaskCounter ({completed = false ,title, counter}) {
  return (
    <ul className={styles.counterWrapper}>
      <li className={completed ? styles.titleCompleted : styles.titleCreated}>{title}</li>
      <li className={styles.counter}>{counter}</li>
    </ul>
  )
}