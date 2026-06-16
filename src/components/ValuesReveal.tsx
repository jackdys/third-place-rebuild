import { useEffect, useRef, useState } from 'react'

interface Props {
  values: string
}

const ValuesReveal = ({ values }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = values.split(' · ')

  const previewColors: Record<number, string> = {
    0: '#C49A68', // Movement — amber
    1: '#5ECFB0', // Body Awareness — light teal
    2: '#C49A68', // Creativity — amber
    3: '#5ECFB0', // Connection — light teal
    4: '#C49A68', // Playfulness — amber
  }

  return (
    <p ref={ref} className="font-accent italic text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
      {words.map((word, i) => {
        const wordDelay = i * 600
        const dotDelay = wordDelay + 400
        const color = previewColors[i] ?? '#2b997a'
        return (
          <span key={i}>
            <span
              className={`value-word ${triggered ? 'animate' : ''}`}
              style={{ animationDelay: `${wordDelay}ms`, color }}
            >
              {word}
            </span>
            {i < words.length - 1 && (
              <span
                className={`value-dot ${triggered ? 'animate' : ''}`}
                style={{ animationDelay: `${dotDelay}ms`, color }}
              >
                ·
              </span>
            )}
          </span>
        )
      })}
    </p>
  )
}

export default ValuesReveal
