import { useTranslation } from 'react-i18next'

interface Props {
  onCalendarOpen: () => void
}

// 30 fireflies spread across the full hero — positions as % of hero section
const FIREFLIES = [
  { size: 2, left:  61.8, top:   0.0, x:   22.0, y:    0.0, dur: 7.0, delay: 0.0, color: '#C49A68' },
  { size: 2, left:  23.6, top:  37.3, x:  -22.9, y:   20.9, dur: 7.1, delay: 0.3, color: '#C49A68' },
  { size: 3, left:  85.4, top:  74.6, x:    3.5, y:  -39.8, dur: 7.2, delay: 0.6, color: '#5ECFB0' },
  { size: 3, left:  47.2, top:  11.9, x:   29.8, y:   38.9, dur: 7.3, delay: 0.9, color: '#5ECFB0' },
  { size: 4, left:   9.0, top:  49.2, x:  -21.7, y:   -3.8, dur: 7.3, delay: 1.2, color: '#ffffff' },
  { size: 2, left:  70.8, top:  86.5, x:   26.1, y:  -16.7, dur: 7.4, delay: 1.6, color: '#C49A68' },
  { size: 2, left:  32.6, top:  23.8, x:  -10.4, y:   38.6, dur: 7.5, delay: 1.9, color: '#C49A68' },
  { size: 3, left:  94.4, top:  61.1, x:  -22.6, y:  -43.5, dur: 7.6, delay: 2.2, color: '#5ECFB0' },
  { size: 3, left:  56.2, top:  98.4, x:   20.7, y:    7.5, dur: 7.7, delay: 2.5, color: '#5ECFB0' },
  { size: 4, left:  18.0, top:  35.7, x:  -28.6, y:   11.9, dur: 7.8, delay: 2.8, color: '#ffffff' },
  { size: 2, left:  79.8, top:  73.0, x:   16.9, y:  -36.3, dur: 7.9, delay: 3.1, color: '#C49A68' },
  { size: 2, left:  41.6, top:  10.3, x:   14.7, y:   46.7, dur: 8.0, delay: 3.4, color: '#C49A68' },
  { size: 3, left:   3.4, top:  47.6, x:  -19.1, y:  -11.0, dur: 8.0, delay: 3.7, color: '#5ECFB0' },
  { size: 3, left:  65.2, top:  84.9, x:   30.3, y:   -6.7, dur: 8.1, delay: 4.0, color: '#5ECFB0' },
  { size: 4, left:  27.1, top:  22.2, x:  -22.9, y:   32.8, dur: 8.2, delay: 4.3, color: '#ffffff' },
  { size: 2, left:  88.9, top:  59.5, x:   -6.4, y:  -48.6, dur: 8.3, delay: 4.7, color: '#C49A68' },
  { size: 2, left:  50.7, top:  96.8, x:   16.9, y:   14.1, dur: 8.4, delay: 5.0, color: '#C49A68' },
  { size: 3, left:  12.5, top:  34.1, x:  -31.0, y:    1.4, dur: 8.5, delay: 5.3, color: '#5ECFB0' },
  { size: 3, left:  74.3, top:  71.4, x:   28.3, y:  -28.3, dur: 8.6, delay: 5.6, color: '#5ECFB0' },
  { size: 4, left:  36.1, top:   8.7, x:   -2.1, y:   49.0, dur: 8.7, delay: 5.9, color: '#ffffff' },
  { size: 2, left:  97.9, top:  46.0, x:  -14.1, y:  -16.9, dur: 8.7, delay: 6.2, color: '#C49A68' },
  { size: 2, left:  59.7, top:  83.3, x:   30.7, y:    4.0, dur: 8.8, delay: 6.5, color: '#C49A68' },
  { size: 3, left:  21.5, top:  20.6, x:  -32.8, y:   22.9, dur: 8.9, delay: 6.8, color: '#5ECFB0' },
  { size: 3, left:  83.3, top:  57.9, x:   10.6, y:  -47.8, dur: 9.0, delay: 7.1, color: '#5ECFB0' },
  { size: 4, left:  45.1, top:  95.2, x:   11.0, y:   19.1, dur: 9.1, delay: 7.4, color: '#ffffff' },
  { size: 2, left:   6.9, top:  32.5, x:  -29.6, y:   -9.3, dur: 9.2, delay: 7.8, color: '#C49A68' },
  { size: 2, left:  68.7, top:  69.8, x:   36.3, y:  -16.9, dur: 9.3, delay: 8.1, color: '#C49A68' },
  { size: 3, left:  30.5, top:   7.1, x:  -18.8, y:   45.3, dur: 9.3, delay: 8.4, color: '#5ECFB0' },
  { size: 3, left:  92.3, top:  44.4, x:   -7.5, y:  -20.7, dur: 9.4, delay: 8.7, color: '#5ECFB0' },
  { size: 4, left:  54.1, top:  81.7, x:   27.5, y:   14.3, dur: 9.5, delay: 9.0, color: '#ffffff' },
  { size: 2, left:  15.9, top:  19.0, x:  -38.6, y:   10.4, dur: 9.6, delay: 9.3, color: '#C49A68' },
  { size: 2, left:  77.7, top:  56.3, x:   26.3, y:  -41.3, dur: 9.7, delay: 0.1, color: '#C49A68' },
  { size: 3, left:  39.5, top:  93.6, x:    3.8, y:   21.7, dur: 9.8, delay: 0.4, color: '#5ECFB0' },
  { size: 3, left:   1.3, top:  30.9, x:  -24.6, y:  -18.9, dur: 9.9, delay: 0.7, color: '#5ECFB0' },
  { size: 4, left:  63.1, top:  68.2, x:   39.8, y:   -3.5, dur: 10.0, delay: 1.0, color: '#ffffff' },
  { size: 2, left:  24.9, top:   5.5, x:  -33.1, y:   36.1, dur: 10.0, delay: 1.3, color: '#C49A68' },
  { size: 2, left:  86.7, top:  42.8, x:   -0.0, y:  -22.0, dur: 10.1, delay: 1.7, color: '#C49A68' },
  { size: 3, left:  48.5, top:  80.1, x:   20.9, y:   22.9, dur: 10.2, delay: 2.0, color: '#5ECFB0' },
  { size: 3, left:  10.3, top:  17.4, x:  -39.8, y:   -3.5, dur: 10.3, delay: 2.3, color: '#5ECFB0' },
  { size: 4, left:  72.1, top:  54.7, x:   38.9, y:  -29.8, dur: 10.4, delay: 2.6, color: '#ffffff' },
  { size: 2, left:  33.9, top:  92.0, x:   -3.8, y:   21.7, dur: 10.5, delay: 2.9, color: '#C49A68' },
  { size: 2, left:  95.7, top:  29.3, x:  -16.7, y:  -26.1, dur: 7.1, delay: 3.2, color: '#C49A68' },
  { size: 3, left:  57.5, top:  66.6, x:   38.6, y:   10.4, dur: 7.2, delay: 3.5, color: '#5ECFB0' },
  { size: 3, left:  19.3, top:   3.9, x:  -43.5, y:   22.6, dur: 7.2, delay: 3.8, color: '#5ECFB0' },
  { size: 4, left:  81.2, top:  41.2, x:    7.5, y:  -20.7, dur: 7.3, delay: 4.1, color: '#ffffff' },
  { size: 2, left:  43.0, top:  78.5, x:   11.9, y:   28.6, dur: 7.4, delay: 4.4, color: '#C49A68' },
  { size: 2, left:   4.8, top:  15.8, x:  -36.3, y:  -16.9, dur: 7.5, delay: 4.8, color: '#C49A68' },
  { size: 3, left:  66.6, top:  53.1, x:   46.7, y:  -14.7, dur: 7.6, delay: 5.1, color: '#5ECFB0' },
  { size: 3, left:  28.4, top:  90.4, x:  -11.0, y:   19.1, dur: 7.7, delay: 5.4, color: '#5ECFB0' },
  { size: 4, left:  90.2, top:  27.7, x:   -6.7, y:  -30.3, dur: 7.8, delay: 5.7, color: '#ffffff' },
  { size: 2, left:  52.0, top:  65.0, x:   32.8, y:   22.9, dur: 7.8, delay: 6.0, color: '#C49A68' },
  { size: 2, left:  13.8, top:   2.3, x:  -48.6, y:    6.4, dur: 7.9, delay: 6.3, color: '#C49A68' },
  { size: 3, left:  75.6, top:  39.6, x:   14.1, y:  -16.9, dur: 8.0, delay: 6.6, color: '#5ECFB0' },
  { size: 3, left:  37.4, top:  76.9, x:    1.4, y:   31.0, dur: 8.1, delay: 6.9, color: '#5ECFB0' },
  { size: 4, left:  99.2, top:  14.2, x:  -28.3, y:  -28.3, dur: 8.2, delay: 7.2, color: '#ffffff' },
  { size: 2, left:  61.0, top:  51.5, x:   49.0, y:    2.1, dur: 8.3, delay: 7.6, color: '#C49A68' },
  { size: 2, left:  22.8, top:  88.8, x:  -16.9, y:   14.1, dur: 8.4, delay: 7.9, color: '#C49A68' },
  { size: 3, left:  84.6, top:  26.1, x:    4.0, y:  -30.7, dur: 8.5, delay: 8.2, color: '#5ECFB0' },
  { size: 3, left:  46.4, top:  63.4, x:   22.9, y:   32.8, dur: 8.5, delay: 8.5, color: '#5ECFB0' },
  { size: 4, left:   8.2, top:   0.7, x:  -47.8, y:  -10.6, dur: 8.6, delay: 8.8, color: '#ffffff' },
  { size: 2, left:  70.0, top:  38.0, x:   19.1, y:  -11.0, dur: 8.7, delay: 9.1, color: '#C49A68' },
  { size: 2, left:  31.8, top:  75.3, x:   -9.3, y:   29.6, dur: 8.8, delay: 9.4, color: '#C49A68' },
  { size: 3, left:  93.6, top:  12.6, x:  -16.9, y:  -36.3, dur: 8.9, delay: 0.2, color: '#5ECFB0' },
  { size: 3, left:  55.4, top:  49.9, x:   45.3, y:   18.8, dur: 9.0, delay: 0.5, color: '#5ECFB0' },
  { size: 4, left:  17.2, top:  87.2, x:  -20.7, y:    7.5, dur: 9.1, delay: 0.8, color: '#ffffff' },
  { size: 2, left:  79.0, top:  24.5, x:   14.3, y:  -27.5, dur: 9.2, delay: 1.1, color: '#C49A68' },
  { size: 2, left:  40.8, top:  61.8, x:   10.4, y:   38.6, dur: 9.2, delay: 1.5, color: '#C49A68' },
  { size: 3, left:   2.6, top:  99.1, x:  -41.3, y:  -26.3, dur: 9.3, delay: 1.8, color: '#5ECFB0' },
  { size: 3, left:  64.4, top:  36.4, x:   21.7, y:   -3.8, dur: 9.4, delay: 2.1, color: '#5ECFB0' },
  { size: 4, left:  26.2, top:  73.7, x:  -18.9, y:   24.6, dur: 9.5, delay: 2.4, color: '#ffffff' },
  { size: 2, left:  88.0, top:  11.0, x:   -3.5, y:  -39.8, dur: 9.6, delay: 2.7, color: '#C49A68' },
  { size: 2, left:  49.8, top:  48.3, x:   36.1, y:   33.1, dur: 9.7, delay: 3.0, color: '#C49A68' },
  { size: 3, left:  11.6, top:  85.6, x:  -22.0, y:    0.0, dur: 9.8, delay: 3.3, color: '#5ECFB0' },
  { size: 3, left:  73.5, top:  22.9, x:   22.9, y:  -20.9, dur: 9.9, delay: 3.6, color: '#5ECFB0' },
  { size: 4, left:  35.3, top:  60.2, x:   -3.5, y:   39.8, dur: 9.9, delay: 3.9, color: '#ffffff' },
  { size: 2, left:  97.1, top:  97.5, x:  -29.8, y:  -38.9, dur: 10.0, delay: 4.2, color: '#C49A68' },
  { size: 2, left:  58.9, top:  34.8, x:   21.7, y:    3.8, dur: 10.1, delay: 4.6, color: '#C49A68' },
  { size: 3, left:  20.7, top:  72.1, x:  -26.1, y:   16.7, dur: 10.2, delay: 4.9, color: '#5ECFB0' },
  { size: 3, left:  82.5, top:   9.4, x:   10.4, y:  -38.6, dur: 10.3, delay: 5.2, color: '#5ECFB0' },
  { size: 4, left:  44.3, top:  46.7, x:   22.6, y:   43.5, dur: 10.4, delay: 5.5, color: '#ffffff' },
  { size: 2, left:   6.1, top:  84.0, x:  -20.7, y:   -7.5, dur: 10.5, delay: 5.8, color: '#C49A68' },
  { size: 2, left:  67.9, top:  21.3, x:   28.6, y:  -11.9, dur: 7.0, delay: 6.1, color: '#C49A68' },
  { size: 3, left:  29.7, top:  58.6, x:  -16.9, y:   36.3, dur: 7.1, delay: 6.4, color: '#5ECFB0' },
  { size: 3, left:  91.5, top:  95.9, x:  -14.7, y:  -46.7, dur: 7.2, delay: 6.7, color: '#5ECFB0' },
  { size: 4, left:  53.3, top:  33.2, x:   19.1, y:   11.0, dur: 7.3, delay: 7.0, color: '#ffffff' },
  { size: 2, left:  15.1, top:  70.5, x:  -30.3, y:    6.7, dur: 7.4, delay: 7.4, color: '#C49A68' },
  { size: 2, left:  76.9, top:   7.8, x:   22.9, y:  -32.8, dur: 7.5, delay: 7.7, color: '#C49A68' },
  { size: 3, left:  38.7, top:  45.1, x:    6.4, y:   48.6, dur: 7.6, delay: 8.0, color: '#5ECFB0' },
  { size: 3, left:   0.5, top:  82.4, x:  -16.9, y:  -14.1, dur: 7.7, delay: 8.3, color: '#5ECFB0' },
  { size: 4, left:  62.3, top:  19.7, x:   31.0, y:   -1.4, dur: 7.7, delay: 8.6, color: '#ffffff' },
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
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '75%', background: `linear-gradient(to top,
          #0a0a0a 0%,
          rgba(10,10,10,0.987) 6.3%,
          rgba(10,10,10,0.951) 12.2%,
          rgba(10,10,10,0.896) 17.8%,
          rgba(10,10,10,0.825) 23.2%,
          rgba(10,10,10,0.741) 28.5%,
          rgba(10,10,10,0.648) 33.9%,
          rgba(10,10,10,0.550) 39.4%,
          rgba(10,10,10,0.452) 45.2%,
          rgba(10,10,10,0.359) 51.3%,
          rgba(10,10,10,0.275) 57.8%,
          rgba(10,10,10,0.204) 64.7%,
          rgba(10,10,10,0.147) 71.9%,
          rgba(10,10,10,0.102) 79.3%,
          rgba(10,10,10,0.066) 86.6%,
          rgba(10,10,10,0.038) 93.4%,
          transparent 100%
        )` }} />
      </div>

      {/* Firefly layer — fades out before the button row */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, maskImage: 'linear-gradient(to bottom, black 50%, transparent 72%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 72%)' }}>
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
              boxShadow: `0 0 ${ff.size * 7}px ${ff.size * 3}px ${ff.color}90`,
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
            className="bg-[#c49a68] text-white px-10 py-4 rounded-lg text-xl font-bold border-[3px] border-white/50 hover:bg-white hover:text-[#c49a68] hover:border-white transition-all shadow-xl hover:scale-105 active:scale-95"
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
