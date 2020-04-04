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
      style={{ width: rhythm(0.8) }}
    >
      <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
      </path>
    </svg>
  )
}

const Layout = ({ location, title, children }) => {
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

  const [menuState, setMenuState] = useState(false)

  
  const handleClick = function() {
    setMenuState(!menuState)
  }

  let clsName
  if (menuState) {
    clsName = "clearfix " + styles.navBar + " " + styles.open
  } else {
    clsName = "clearfix " + styles.navBar
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header
        className={styles.header}
        style={{ marginBottom: rhythm(1.5) }}
      >
        <h1 className={styles.title}>
          <Link to={`/`}>
            {title}
          </Link>
        </h1>
        <span
          tabIndex="0"
          role="button"
          className={styles.menuBtn}
          onKeyDown={handleClick}
          onClick={handleClick}>
          <MenuIcon />
        </span>
        <nav>
          <ul className={clsName} style={{fontSize: rhythm(3 / 4) }}>
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
        </nav>
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