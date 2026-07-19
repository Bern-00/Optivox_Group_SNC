import { useTheme } from '../context/ThemeContext'
import './ThemeTransition.css'

/**
 * Full-screen theme-switch overlay.
 *
 * Shows the actual PNG logo (preserving the exact metallic font),
 * with the spinning O masked from the PNG itself.
 * Uses mix-blend-mode for zero backgrounds.
 */
export default function ThemeTransition() {
  const { transitioning, targetTheme } = useTheme()

  if (!transitioning || !targetTheme) return null

  const isDark = targetTheme === 'dark'
  const logoSrc = isDark ? '/images/logo-dark.png' : '/images/logo-light.png'

  return (
    <div className={`theme-transition theme-transition--${targetTheme}`}>
      <div className="theme-transition__logo-container">
        
        {/* Base Logo (O masked out) */}
        <img
          src={logoSrc}
          alt="Optivox Group"
          className="theme-transition__logo-base"
          draggable={false}
        />

        {/* Spinning Helix O */}
        <div className="theme-transition__logo-helix-wrap">
          <div className="theme-transition__logo-helix-inner">
            <img
              src={logoSrc}
              alt=""
              className="theme-transition__logo-helix-img"
              draggable={false}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
