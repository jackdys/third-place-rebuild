import { useTranslation } from 'react-i18next'

interface Props {
  onCalendarOpen: () => void
}

// 30 fireflies spread across the full hero — positions as % of hero section
const FIREFLIES = [
  // amber cluster — left side
  { size: 3, left:  5, top: 18, x:  18, y: -14, dur: 7.2, delay: 0.0, color: '#C49A68' },
  { size: 2, left:  9, top: 55, x:  22, y: -20, dur: 9.4, delay: 2.8, color: '#C49A68' },
  { size: 2, left: 12, top: 80, x:  14, y: -28, dur: 8.1, delay: 5.2, color: '#C49A68' },
  { size: 4, left: 18, top: 35, x:  20, y:  16, dur: 9.8, delay: 1.4, color: '#C49A68' },
  { size: 2, left: 22, top: 70, x:  16, y: -18, dur: 7.6, delay: 6.9, color: '#C49A68' },
  // teal cluster — left-center
  { size: 3, left: 28, top: 15, x: -12, y:  22, dur: 8.7, delay: 3.3, color: '#5ECFB0' },
  { size: 2, left: 32, top: 60, x:  18, y: -24, dur: 9.2, delay: 0.7, color: '#5ECFB0' },
  { size: 3, left: 36, top: 88, x: -16, y: -20, dur: 7.9, delay: 4.1, color: '#5ECFB0' },
  // white — center, near logo
  { size: 2, left: 40, top: 10, x:  12, y:  18, dur: 8.3, delay: 1.9, color: '#ffffff' },
  { size: 3, left: 44, top: 45, x: -14, y: -22, dur: 9.6, delay: 7.4, color: '#ffffff' },
  { size: 2, left: 48, top: 82, x:  20, y: -16, dur: 7.4, delay: 2.3, color: '#ffffff' },
  { size: 4, left: 50, top: 28, x: -18, y:  24, dur: 8.8, delay: 5.8, color: '#C49A68' },
  { size: 2, left: 52, top: 72, x:  16, y: -12, dur: 9.1, delay: 0.4, color: '#5ECFB0' },
  // teal — right-center
  { size: 3, left: 56, top: 18, x: -22, y:  14, dur: 7.7, delay: 3.7, color: '#5ECFB0' },
  { size: 2, left: 60, top: 55, x:  14, y: -26, dur: 9.3, delay: 6.2, color: '#5ECFB0' },
  { size: 3, left: 64, top: 85, x: -18, y: -18, dur: 8.5, delay: 1.1, color: '#C49A68' },
  // amber — right side
  { size: 2, left: 68, top: 12, x:  20, y:  20, dur: 7.3, delay: 4.5, color: '#C49A68' },
  { size: 4, left: 72, top: 40, x: -24, y: -14, dur: 9.7, delay: 2.6, color: '#C49A68' },
  { size: 2, left: 76, top: 68, x:  18, y: -22, dur: 8.2, delay: 7.1, color: '#ffffff' },
  { size: 3, left: 80, top: 22, x: -16, y:  18, dur: 7.8, delay: 0.9, color: '#5ECFB0' },
  { size: 2, left: 84, top: 78, x:  22, y: -16, dur: 9.0, delay: 5.5, color: '#C49A68' },
  // far right
  { size: 3, left: 88, top: 35, x: -20, y: -20, dur: 8.6, delay: 3.0, color: '#C49A68' },
  { size: 2, left: 91, top: 60, x: -14, y:  16, dur: 7.5, delay: 6.4, color: '#5ECFB0' },
  { size: 4, left: 94, top: 15, x: -22, y:  22, dur: 9.5, delay: 1.7, color: '#ffffff' },
  { size: 2, left: 97, top: 82, x: -18, y: -24, dur: 8.0, delay: 4.8, color: '#C49A68' },
  // extra scattered
  { size: 2, left: 15, top: 48, x:  12, y: -18, dur: 7.1, delay: 8.2, color: '#ffffff' },
  { size: 3, left: 42, top: 92, x: -10, y: -22, dur: 9.9, delay: 0.2, color: '#5ECFB0' },
  { size: 2, left: 58, top:  5, x:  16, y:  20, dur: 8.4, delay: 3.9, color: '#C49A68' },
  { size: 3, left: 74, top: 92, x: -20, y: -14, dur: 7.6, delay: 6.7, color: '#5ECFB0' },
  { size: 2, left: 87, top: 50, x: -16, y: -18, dur: 9.2, delay: 2.0, color: '#ffffff' },
]

const Hero = ({ onCalendarOpen }: Props) => {
  const { t } = useTranslation()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://thirdplacemalaga.com/wp-content/uploads/2025/08/actionvance-g41ZkoO75rE-unsplash-scaled.jpg"
          alt="Movement and nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Firefly layer — full hero width */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {FIREFLIES.map((ff, i) => (
          <span
            key={i}
            className="firefly"
            style={{
              width:  ff.size,
              height: ff.size,
              left:   `${ff.left}%`,
              top:    `${ff.top}%`,
              background: ff.color,
              boxShadow: `0 0 ${ff.size * 5}px ${ff.size * 2}px ${ff.color}70`,
              '--ff-x':     `${ff.x}px`,
              '--ff-y':     `${ff.y}px`,
              '--ff-dur':   `${ff.dur}s`,
              '--ff-delay': `${ff.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-5xl" style={{ zIndex: 2 }}>
        <h2
          className="text-2xl md:text-3xl text-white font-light italic mb-4 drop-shadow-lg opacity-90"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {t('hero.subtitle')}
        </h2>

        <img
          src="/ThirdPlace-Logo.png"
          alt="Third Place Málaga Logo"
          className="logo-breathe w-full max-w-lg md:max-w-2xl mx-auto mb-8 opacity-90 saturate-50 contrast-125 hover:opacity-100 hover:saturate-100"
        />

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
          <button
            onClick={onCalendarOpen}
            className="bg-[#c49a68] text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-tp-orange transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {t('hero.calendar')}
          </button>
          <button
            onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white border-b-2 border-white/50 hover:border-white transition-all pb-1 text-lg font-medium"
          >
            {t('hero.discover')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-60">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
