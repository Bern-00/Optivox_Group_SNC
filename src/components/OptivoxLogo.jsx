import { useId } from 'react'
import './OptivoxLogo.css'

/**
 * Optivox vortex — 6 curved crescent blades sweeping clockwise,
 * matching the actual company logo turbine / camera-iris look.
 *
 * Solid metallic blades with 3D overlapping depth.
 */

// Precise crescent blade path:
// Starts at outer circle (radius 72, top-left), sweeps along outer rim,
// curves inward elegantly to meet the inner circle (radius 16),
// sweeps along inner hole, and curves back to the outer rim.
const BLADE_PATH = 
  'M 100 28 ' + // Start at top center outer rim (0, 72)
  'A 72 72 0 0 1 162.35 64 ' + // Arc along the outer rim to 30 degrees (60 deg span)
  'C 142 90, 122 108, 113.85 111.05 ' + // Swoop inward toward center hole
  'A 16 16 0 0 1 100 116 ' + // Arc along center hole (radius 16)
  'C 90 102, 86 65, 100 28 ' + // Sweep back up to start point, tapering beautifully
  'Z'

export default function OptivoxLogo({ variant = 'gold', spinning = false }) {
  const idSuffix = useId().replace(/:/g, '-')

  const gradId = `ol-grad-${variant}-${idSuffix}`
  const clipId = `ol-clip-${idSuffix}`
  const shadowId = `ol-shadow-${idSuffix}`

  const gradUrl = `url(#${gradId})`
  const clipUrl = `url(#${clipId})`
  const shadowUrl = `url(#${shadowId})`

  return (
    <svg
      viewBox="0 0 200 200"
      className="optivox-aperture-svg"
      aria-hidden="true"
    >
      <defs>
        {/*
         * Fixed-direction gradient (upper-left light source, userSpaceOnUse).
         * As blades rotate, they pass through bright and dark zones —
         * simulating the 3-D metallic lighting of the actual logo.
         */}
        {variant === 'gold' ? (
          <linearGradient id={gradId} x1="20" y1="20" x2="180" y2="180"
            gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#fff7db" />
            <stop offset="25%"  stopColor="#e8c870" />
            <stop offset="60%"  stopColor="#c09040" />
            <stop offset="85%"  stopColor="#8a5a1a" />
            <stop offset="100%" stopColor="#4e2303" />
          </linearGradient>
        ) : (
          <linearGradient id={gradId} x1="20" y1="20" x2="180" y2="180"
            gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#404060" />
            <stop offset="40%"  stopColor="#1a1a30" />
            <stop offset="100%" stopColor="#040408" />
          </linearGradient>
        )}

        {/* Subtle drop shadow behind each individual blade to create the 3D overlapping depth */}
        <filter id={shadowId} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="-1.5" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.55" />
        </filter>

        <clipPath id={clipId}>
          <circle cx="100" cy="100" r="72" />
        </clipPath>
      </defs>

      {/* Outer boundary ring */}
      <circle cx="100" cy="100" r="72" fill="none" stroke={gradUrl} strokeWidth="3.5" />

      {/* 6 overlapping vortex blades */}
      <g
        className={spinning ? 'optivox-aperture-blades--spinning' : undefined}
        clipPath={clipUrl}
      >
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d={BLADE_PATH}
            fill={gradUrl}
            filter={shadowUrl} // Apply drop shadow to individual blades to stack them in 3D
            stroke={variant === 'gold' ? '#fff7db' : '#555577'} // Edge highlight
            strokeWidth="0.5"
            strokeOpacity="0.4"
            transform={`rotate(${i * 60} 100 100)`}
          />
        ))}
      </g>

      {/* Center is completely hollow, showing overlapping blades */}
    </svg>
  )
}
