import { useEffect, useState } from 'react'
import { SESSION_KEY_INTRO } from '../lib/emailjs'
import InteractiveLogoAperture from './InteractiveLogoAperture'
import './IntroLoader.css'

export default function IntroLoader({ onComplete }) {
  const [stage, setStage] = useState(() => {
    return sessionStorage.getItem(SESSION_KEY_INTRO) === 'true' ? 'done' : 'initial'
  })

  useEffect(() => {
    const isPlayed = sessionStorage.getItem(SESSION_KEY_INTRO) === 'true'
    if (isPlayed) {
      if (onComplete) onComplete()
      return
    }

    const fadeTimer = setTimeout(() => {
      setStage('fadeout')
    }, 4500)

    const endTimer = setTimeout(() => {
      setStage('done')
      sessionStorage.setItem(SESSION_KEY_INTRO, 'true')
      if (onComplete) onComplete()
    }, 5200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(endTimer)
    }
  }, [onComplete])

  if (stage === 'done') return null

  return (
    <div className={`intro-loader intro-loader--${stage}`}>
      <div className="intro-loader__bg">
        <div className="intro-loader__glow"></div>
        <div className="intro-loader__grid"></div>
      </div>

      <div className="intro-loader__content">
        <InteractiveLogoAperture isLoader={true} />
      </div>
    </div>
  )
}
