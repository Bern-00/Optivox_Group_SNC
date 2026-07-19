import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [transitioning, setTransitioning] = useState(false)
  const [targetTheme, setTargetTheme] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTargetTheme(next)
    setTransitioning(true)

    // Switch the actual theme at midpoint — hidden under the overlay
    setTimeout(() => {
      setTheme(next)
      localStorage.setItem('theme', next)
    }, 800)

    // End transition after overlay animation completes
    setTimeout(() => {
      setTransitioning(false)
      setTargetTheme(null)
    }, 1900)
  }

  return (
    <ThemeContext.Provider value={{ theme, targetTheme, transitioning, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
