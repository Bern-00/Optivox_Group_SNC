import { useEffect, useState } from 'react'
import { Globe, Users } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './InteractiveLogoAperture.css'

export default function InteractiveLogoAperture({ isLoader = false, onComplete }) {
  const { theme } = useTheme()
  const [animationState, setAnimationState] = useState('assembled')
  const [agentCount, setAgentCount] = useState(0)
  const [countryCount, setCountryCount] = useState(0)

  const logoPart = (part) => `/images/logo-parts/${part}-${theme}.png`

  useEffect(() => {
    if (isLoader) {
      const collapseTimer = setTimeout(() => setAnimationState('collapsing'), 800)
      const spinTimer = setTimeout(() => setAnimationState('spinning'), 1750)
      const expandTimer = setTimeout(() => setAnimationState('expanding'), 3350)
      const assembleTimer = setTimeout(() => setAnimationState('assembled'), 4200)
      const completeTimer = setTimeout(() => onComplete?.(), 4500)

      return () => {
        clearTimeout(collapseTimer)
        clearTimeout(spinTimer)
        clearTimeout(expandTimer)
        clearTimeout(assembleTimer)
        clearTimeout(completeTimer)
      }
    }

    let transitionTimer
    const states = {
      assembled: { next: 'collapsing', delay: 3600 },
      collapsing: { next: 'spinning', delay: 950 },
      spinning: { next: 'expanding', delay: 4200 },
      expanding: { next: 'assembled', delay: 950 },
    }

    const advance = (currentState) => {
      const { next, delay } = states[currentState]
      transitionTimer = setTimeout(() => {
        setAnimationState(next)
        advance(next)
      }, delay)
    }

    const initialTimer = setTimeout(() => advance('assembled'), 1200)
    return () => {
      clearTimeout(initialTimer)
      clearTimeout(transitionTimer)
    }
  }, [isLoader, onComplete])

  useEffect(() => {
    if (animationState !== 'spinning') {
      const resetTimer = setTimeout(() => {
        setAgentCount(0)
        setCountryCount(0)
      }, 0)
      return () => clearTimeout(resetTimer)
    }

    let agents = 0
    let countries = 0
    const counterTimer = setInterval(() => {
      agents = Math.min(agents + 15, 500)
      countries = Math.min(countries + 1, 30)
      setAgentCount(agents)
      setCountryCount(countries)

      if (agents >= 500 && countries >= 30) {
        clearInterval(counterTimer)
      }
    }, 35)

    return () => clearInterval(counterTimer)
  }, [animationState])

  return (
    <div className={`ila ila--${animationState}`} data-theme={theme}>
      <div className="ila__logo-container" role="img" aria-label="Optivox Group">
        <img
          src={logoPart('word-left')}
          alt=""
          className="ila__logo-letters ila__logo-letters--left"
          draggable={false}
        />
        <img
          src={logoPart('word-right')}
          alt=""
          className="ila__logo-letters ila__logo-letters--right"
          draggable={false}
        />
        <img
          src={logoPart('tagline')}
          alt=""
          className="ila__logo-tagline"
          draggable={false}
        />

        <div className="ila__logo-helix-wrap">
          <div className="ila__logo-helix-inner">
            <img
              src={logoPart('helix-o')}
              alt=""
              className="ila__logo-helix-img"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="ila__stats" aria-hidden={animationState !== 'spinning'}>
        <div className="ila__stat">
          <Users size={20} className="ila__stat-icon" />
          <div className="ila__stat-info">
            <span className="ila__stat-num">{agentCount}+</span>
            <span className="ila__stat-lbl">Active Agents</span>
          </div>
        </div>
        <div className="ila__stat-divider" />
        <div className="ila__stat">
          <Globe size={20} className="ila__stat-icon" />
          <div className="ila__stat-info">
            <span className="ila__stat-num">{countryCount}+</span>
            <span className="ila__stat-lbl">Countries</span>
          </div>
        </div>
      </div>
    </div>
  )
}
