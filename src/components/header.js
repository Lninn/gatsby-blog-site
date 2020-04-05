import React, { useState } from "react"
import styles from "./header.module.less"
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

const Header = function({ title }) {
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
  const [menuStatus, setMenuStatus] = useState(false)

  const handleClick = function() {
    setMenuStatus(!menuStatus)
  }

  let clsName = menuStatus ? styles.open : ""

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>
          <Link to={`/`}>
            {title}
          </Link>
        </h3>
        <span
          tabIndex="0"
          role="button"
          className={styles.menuBtn}
          onKeyDown={handleClick}
          onClick={handleClick}>
          <MenuIcon />
        </span>
      </div>
      <nav className={clsName}>
        <ul className="clearfix" style={{fontSize: rhythm(3 / 4) }}>
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
  )
}

export default Header