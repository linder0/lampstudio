import { motion } from 'framer-motion'
import { useLamp } from '../context/LampContext'
import { useCallback } from 'react'

// Play an esoteric, otherworldly sound
const playChime = (isOn: boolean) => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const now = audioContext.currentTime

    // Base frequency - use overtone series ratios for mystical quality
    const base = isOn ? 65 : 55 // C2 or A1 - deep and resonant

    // Overtone/harmonic series - natural but haunting
    // ON: rising overtones (fundamental → 5th partial → 6th partial)
    // OFF: falling into fundamental with tritone ghost
    const harmonicsOn = [1, 1.5, 2, 2.5, 3]  // Fundamental, fifth, octave, etc
    const harmonicsOff = [3, 2, 1.414, 1]    // Descending with tritone (√2)
    const harmonics = isOn ? harmonicsOn : harmonicsOff

    const createTone = (
      freq: number,
      delay: number,
      vol: number,
      dur: number,
      type: OscillatorType = 'sine'
    ) => {
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      osc.type = type
      osc.frequency.setValueAtTime(freq, now + delay)
      // Subtle vibrato for ethereal quality
      osc.frequency.setValueAtTime(freq, now + delay)

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(freq * 4, now + delay)
      filter.frequency.exponentialRampToValueAtTime(freq * 1.5, now + delay + dur)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(audioContext.destination)

      gain.gain.setValueAtTime(0, now + delay)
      gain.gain.linearRampToValueAtTime(vol, now + delay + 0.08)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur)

      osc.start(now + delay)
      osc.stop(now + delay + dur + 0.1)
    }

    // Layer the harmonics with staggered timing
    harmonics.forEach((ratio, i) => {
      const freq = base * ratio
      const delay = i * 0.09
      const vol = 0.07 / (1 + i * 0.3) // Quieter for higher partials
      const dur = 1.8 - (i * 0.15)
      createTone(freq, delay, vol, dur)

      // Ghost tone - slightly sharp for beating/shimmer
      createTone(freq * 1.008, delay + 0.02, vol * 0.3, dur * 0.7)
    })

    // Sub-bass undertone
    createTone(base * 0.5, 0.1, 0.04, 2.2)

    // High crystalline ping
    createTone(base * 8, 0, 0.015, 0.4, 'triangle')

  } catch (e) {
    // Audio not supported
  }
}

export default function LampToggle() {
  const { isLampOn, toggleLamp } = useLamp()

  const handleRelease = useCallback(() => {
    // Play chime for the NEW state (opposite of current)
    playChime(!isLampOn)
    toggleLamp()
  }, [toggleLamp, isLampOn])

  return (
    <motion.button
      onMouseUp={handleRelease}
      onTouchEnd={handleRelease}
      className="flex flex-col items-center cursor-pointer group"
      aria-label={`Light is ${isLampOn ? 'on' : 'off'}. Click to toggle.`}
      whileHover={{ y: 3 }}
      whileTap={{ y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Cord */}
      <div className="flex flex-col items-center -mt-24">
        {/* String - extends off screen */}
        <div
          className="w-px h-72 transition-colors duration-500"
          style={{
            backgroundColor: isLampOn ? 'var(--burgundy)' : 'var(--burgundy-light)',
          }}
        />

        {/* Pull bead */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          {/* Bead */}
          <div
            className="w-3 h-5 rounded-full transition-all duration-500 border"
            style={{
              backgroundColor: isLampOn ? 'var(--burgundy)' : 'var(--cream-dark)',
              borderColor: isLampOn ? 'var(--burgundy)' : 'var(--burgundy-light)',
              boxShadow: isLampOn
                ? '0 0 12px rgba(196, 167, 125, 0.5)'
                : '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />

          {/* Little highlight on bead */}
          <div
            className="absolute top-1 left-1 w-1 h-1 rounded-full transition-opacity duration-500"
            style={{
              backgroundColor: isLampOn ? 'var(--accent)' : 'var(--cream)',
              opacity: isLampOn ? 0.8 : 0.5,
            }}
          />
        </motion.div>
      </div>
    </motion.button>
  )
}
