import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.overrideStyles = () => ({
  a: {
    color: "#111"
  }
})

const typography = new Typography(kirkhamTheme)

export const { scale, rhythm, options } = typography
export default typography