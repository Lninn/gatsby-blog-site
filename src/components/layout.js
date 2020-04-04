import React, { useState } from "react"
import styles from './layout.module.less'
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const MenuIcon = function() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bars"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
      </path>
    </svg>
  )
}

const Menu = function() {
  const data = [
    {
      name: "Categroies",
      path: "/",
    },
    {
      name: "My Files",
      path: "/my-files/",
    },
    {
      name: "About",
      path: "/about/",
    },
  ]

  const [menus] = useState(data)

  return (
    <ul className={styles.menus}>
      {
        menus.map(t => (
          <li key={t.name} className={styles.menuItem}>
            <Link to={t.path}>
              {t.name}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

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
              fontSize: rhythm(3 / 5),
            }} 
            className={styles.title}
          >
            {title}
          </h3>
        </Link>
        <Menu />
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