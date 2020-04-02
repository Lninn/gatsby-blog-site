import React from "react"
import styles from './layout.module.less'
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  
  return (
    <div className={styles.layout}>
      <Link to={`/`}>
        <h3 className={styles.title}>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        className={styles.menuItem}
      >
        About
      </Link>
      <Link
        to={`/my-files/`}
        className={styles.menuItem}
      >
        My Files
      </Link>
      {children}
    </div>
  )
}