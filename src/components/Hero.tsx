import { useTranslation } from 'react-i18next'

interface Props {
  onCalendarOpen: () => void
}

// Stable firefly data — defined outside component to avoid re-computation
const FIREFLIES = [
  { size: 3, left: 8,  top: 20, x:  22, y: -18, dur: 7.2, delay: 0.0, color: '#C49A68' },
  { size: 2, left: 18, top: 65, x: -16, y: -28, dur: 9.1, delay: 1.3, color: '#5ECFB0' },
  { size: 4, left: 28, top: 40, x:  12, y:  20, dur: 8.4, delay: 2.7, color: '#C49A68' },
  { size: 2, left: 38, top: 12, x: -20, y: -14, dur: 6.8, delay: 0.9, color: '#5ECFB0' },
  { size: 3, left: 50, top: 78, x:  18, y: -22, dur: 9.6, delay: 3.5, color: '#ffffff' },
  { size: 2, left: 62, top: 30, x: -14, y:  18, dur: 7.8, delay: 1.8, color: '#C49A68' },
  { size: 4, left: 72, top: 55, x:  24, y: -12, dur: 8.9, delay: 4.2, color: '#5ECFB0' },
  { size: 2, left: 82, top: 18, x: -18, y: -24, dur: 7.3, delay: 0.5, color: '#C49A68' },
  { size: 3, left: 90, top: 70, x: -22, y:  16, dur: 9.0, delay: 2.1, color: '#ffffff' },
  { size: 2, left: 14, top: 85, x:  14, y: -20, dur: 8.2, delay: 5.0, color: '#5ECFB0' },
  { size: 3, left: 44, top: 50, x: -10, y: -30, dur: 7.6, delay: 3.8, color: '#C49A68' },
  { size: 2, left: 58, top: 88, x:  20, y: -16, dur: 8.7, delay: 1.1, color: '#5ECFB0' },
  { size: 3, left: 76, top: 8,  x: -16, y:  22, dur: 9.3, delay: 6.1, color: '#C49A68' },
  { size: 2, left: 96, top: 42, x: -24, y: -10, dur: 7.9, delay: 4.6, color: '#ffffff' },
]

const Hero = ({ onCalendarOpen }: Props) => {
  const { t } = useTranslation();

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

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl text-white font-light italic mb-4 drop-shadow-lg opacity-90" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {t('hero.subtitle')}
        </h2>

        {/* Logo with fireflies */}
        <div className="relative w-full max-w-lg md:max-w-2xl mx-auto mb-8">
          {/* Firefly layer */}
          <div className="absolute inset-0 overflow-visible pointer-events-none" style={{ zIndex: 1 }}>
            {FIREFLIES.map((ff, i) => (
              <span
                key={i}
                className="firefly"
                style={{
                  width: ff.size,
                  height: ff.size,
                  left: `${ff.left}%`,
                  top: `${ff.top}%`,
                  background: ff.color,
                  boxShadow: `0 0 ${ff.size * 4}px ${ff.size * 2}px ${ff.color}80`,
                  '--ff-x': `${ff.x}px`,
                  '--ff-y': `${ff.y}px`,
                  '--ff-dur': `${ff.dur}s`,
                  '--ff-delay': `${ff.delay}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>

          <img
            src="/ThirdPlace-Logo.png"
            alt="Third Place Málaga Logo"
            className="logo-breathe w-full opacity-90 saturate-50 contrast-125 hover:opacity-100 hover:saturate-100 relative"
            style={{ zIndex: 2 }}
          />
        </div>

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
  );
};

export default Hero;
