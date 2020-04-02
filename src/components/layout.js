import React from "react"
import styles from './layout.module.less'
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Link to={`/`}>
          <h3
            style={{
              display: 'inline-block',
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }} 
            className={styles.title}
          >
            {title}
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
      </header>
      <main>{children}</main>
      <footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout