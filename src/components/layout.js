import React, { useState } from "react"
import styles from './layout.module.less'
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Arrow = function() {
  const [dir, setDir] = useState("rotate(0deg)")

  const handleArrowClick = function() {
    if (dir === "rotate(180deg)") {
      setDir("rotate(0deg)")
    } else {
      setDir("rotate(180deg)")
    }
  }

  return (
    <div
      role="button"
      tabIndex="0"
      style={{ transform: dir }}
      onClick={handleArrowClick}
      onKeyPress={handleArrowClick}
    >
      <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: "20px", width: "20px", display: "block", fill: "currentcolor"}}>
        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd">
        </path>
      </svg>
    </div>
  )
}

const Menu = function() {
  return (
    <div style={{ float: 'right' }}>
      <Arrow />
    </div>
  )
}

// const Menu = function() {
//   const data = [
//     {
//       name: 'My Files',
//       path: '/my-files/',
//     },
//     {
//       name: 'About',
//       path: '/about/',
//     },
//   ]

//   return (
//     <ul className={styles.menus}>
//       {
//         data.map(t => (
//           <li key={t.name} className={styles.menuItem}>
//             <Link to={t.path}>
//               {t.name}
//             </Link>
//           </li>
//         ))
//       }
//     </ul>
//   )
// }

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