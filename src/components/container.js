import React from "react"
import styles from "./container.module.less"

console.log(styles)

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
)