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
    0: '#ffffff',
    1: '#ffffff',
    2: '#ffffff',
    3: '#ffffff',
    4: '#ffffff',
  }

  return (
    <p ref={ref} className="font-accent italic font-light leading-relaxed" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
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
              <span style={{ fontSize: '2rem', lineHeight: 1 }}>{word[0]}</span>
              <span style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{word.slice(1)}</span>
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
