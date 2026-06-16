import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  src: string
  onClose: () => void
  onCalendarOpen: () => void
}

const VideoModal = ({ src, onClose, onCalendarOpen }: Props) => {
  const { i18n } = useTranslation()
  const es = i18n.language === 'es'
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const benefits = es
    ? ['Libera tensión acumulada y estrés', 'Procesa emociones difíciles o bloqueadas', 'Desbloquea una relajación profunda y apreciación por la vida']
    : ['Release accumulated tension & life stressors', 'Process difficult or stuck emotions', 'Unlock deep relaxation & appreciation for life']

  const steps = es
    ? ['Activación', 'Enraizamiento', 'Liberación', 'Integración']
    : ['Activation', 'Grounding', 'Release', 'Integration']

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative w-full max-w-2xl max-h-[95dvh] bg-tp-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white/60 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src={src}
          className="w-full aspect-video object-cover shrink-0"
          autoPlay
          muted
          playsInline
          controls
        />

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-8 py-10 space-y-8">

          {/* Heading */}
          <div>
            <p className="text-tp-orange/60 text-xs uppercase tracking-[0.3em] mb-3 font-sans">
              {es ? 'Respiración & Liberación' : 'Breathe & Release'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {es ? 'Respiración en Málaga: Un Viaje de Liberación, Relajación & Vitalidad' : 'Breathwork in Málaga: A Journey of Release, Relaxation & Vitality'}
            </h2>
            <p className="text-tp-cream/70 text-lg font-light leading-relaxed">
              {es
                ? 'Únete a nosotros para una sesión transformadora de una hora de respiración donde serás guiado suavemente hacia una conexión profunda con tu cuerpo y el momento presente.'
                : 'Join us for a transformative one-hour breathwork session where you\'ll be gently guided into a profound connection with your body and the present moment.'}
            </p>
          </div>

          {/* Benefits — no label, just let them flow */}
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-tp-cream/80">
                <span className="text-[#C49A68] mt-1 shrink-0">·</span>
                <span className="font-light text-lg">{b}</span>
              </li>
            ))}
          </ul>

          {/* Session structure */}
          <div className="space-y-4">
            <h4 className="text-tp-orange text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              {es ? 'Estructura de la sesión' : 'Session Structure'}
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              {steps.map((step, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="italic text-white text-lg font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{step}</span>
                  {i < steps.length - 1 && <span className="text-[#C49A68] opacity-60">→</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Practical Details */}
          <div className="space-y-5">
            <h4 className="text-tp-orange text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              {es ? 'Detalles Prácticos' : 'Practical Details'}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <p className="text-tp-orange/60 text-xs uppercase tracking-[0.2em] mb-2 font-sans">{es ? 'Cuándo' : 'When'}</p>
                <p className="text-white font-semibold">{es ? 'Lunes' : 'Mondays'}</p>
                <p className="text-tp-cream/60 text-sm">19:00 – 20:10</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <p className="text-tp-orange/60 text-xs uppercase tracking-[0.2em] mb-2 font-sans">{es ? 'Precio' : 'Cost'}</p>
                <p className="text-white font-semibold">10€</p>
                <p className="text-tp-cream/60 text-sm">{es ? 'En efectivo en la puerta' : 'Cash at the door'}</p>
              </div>
            </div>
            <p className="text-tp-cream/50 text-sm">
              {es
                ? 'Materiales incluidos: mantas, esterillas de yoga, antifaces y cojines. Llega 10–15 minutos antes; pon el teléfono en modo avión.'
                : 'Materials provided: blankets, yoga mats, eye masks, cushions. Arrive 10–15 minutes early; use airplane mode on phones.'}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={() => { onClose(); onCalendarOpen() }}
            className="w-full bg-tp-orange text-tp-black py-4 rounded-lg font-bold text-lg hover:bg-white transition-all hover:scale-105 active:scale-95 tracking-wide"
          >
            {es ? 'Reserva tu lugar' : 'Reserve your spot'}
          </button>

        </div>
      </div>
    </div>
  )
}

export default VideoModal
