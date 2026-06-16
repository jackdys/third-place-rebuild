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

  return (
    <p ref={ref} className="font-accent italic text-tp-orange text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
      {words.map((word, i) => {
        const wordDelay = i * 600
        const dotDelay = wordDelay + 400
        return (
          <span key={i}>
            <span
              className={`value-word ${triggered ? 'animate' : ''}`}
              style={{ animationDelay: `${wordDelay}ms` }}
            >
              {word}
            </span>
            {i < words.length - 1 && (
              <span
                className={`value-dot ${triggered ? 'animate' : ''}`}
                style={{ animationDelay: `${dotDelay}ms` }}
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
