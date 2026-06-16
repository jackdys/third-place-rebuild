import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export interface ThemedNight {
  titleEn: string
  titleEs: string
  descEn: string
  descEs: string
}

export interface ActivityData {
  key: string
  titleEn: string
  titleEs: string
  subtitleEn: string
  subtitleEs: string
  taglinesEn?: string[]
  taglinesEs?: string[]
  tagEn: string
  tagEs: string
  benefitsLabelEn?: string
  benefitsLabelEs?: string
  benefitsEn: string[]
  benefitsEs: string[]
  visionEn?: string
  visionEs?: string
  structureEn: string[]
  structureEs: string[]
  themedNights?: ThemedNight[]
  quoteEn?: string
  quoteEs?: string
  whenEn: string
  whenEs: string
  cost: string
  costNoteEn: string
  costNoteEs: string
  noteEn?: string
  noteEs?: string
  media?: { type: 'video'; src: string } | { type: 'image'; src: string } | { type: 'youtube'; id: string }
}

interface Props {
  data: ActivityData
  onClose: () => void
  onCalendarOpen: () => void
}

const ActivityModal = ({ data, onClose, onCalendarOpen }: Props) => {
  const { i18n } = useTranslation()
  const es = i18n.language === 'es'

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const title = es ? data.titleEs : data.titleEn
  const subtitle = es ? data.subtitleEs : data.subtitleEn
  const taglines = es ? data.taglinesEs : data.taglinesEn
  const tag = es ? data.tagEs : data.tagEn
  const benefits = es ? data.benefitsEs : data.benefitsEn
  const benefitsLabel = es ? (data.benefitsLabelEs ?? 'Elementos Principales') : (data.benefitsLabelEn ?? 'Core Elements')
  const vision = es ? data.visionEs : data.visionEn
  const structure = es ? data.structureEs : data.structureEn
  const when = es ? data.whenEs : data.whenEn
  const costNote = es ? data.costNoteEs : data.costNoteEn
  const note = es ? data.noteEs : data.noteEn

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative w-full max-w-2xl max-h-[95dvh] bg-tp-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 z-20 text-white/60 hover:text-white bg-black/50 rounded-full p-2 transition-colors" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Media */}
        {data.media?.type === 'video' && (
          <div className="w-full shrink-0 bg-black" style={{ maxHeight: '40vh' }}>
            <video
              src={data.media.src}
              className="w-full h-full object-cover"
              style={{ maxHeight: '40vh' }}
              autoPlay
              muted
              loop
              playsInline
              controls
              onLoadedMetadata={e => { (e.target as HTMLVideoElement).currentTime = 2 }}
            />
          </div>
        )}
        {data.media?.type === 'youtube' && (
          <div className="w-full aspect-video shrink-0">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${data.media.id}?autoplay=1&mute=1&loop=1&playlist=${data.media.id}&start=2&playsinline=1&rel=0&controls=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title={title}
            />
          </div>
        )}
        {data.media?.type === 'image' && (
          <img src={data.media.src} alt={title} className="w-full aspect-video object-cover shrink-0" />
        )}
        {!data.media && (
          <div className="w-full aspect-video shrink-0 flex items-center justify-center bg-white/[0.02] border-b border-white/10">
            <img src={`/activities/${data.key}.png`} alt={title} className="h-40 w-40 object-cover rounded-full opacity-80" />
          </div>
        )}

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-8 py-10 space-y-10">

          {/* Title block */}
          <div>
            <p className="text-tp-orange/60 text-xs uppercase tracking-[0.3em] mb-3 font-sans">{tag}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {title}
            </h2>
            {taglines && taglines.length > 0 ? (
              <div className="space-y-3">
                {taglines.map((line, i) => (
                  <p key={i} className="text-tp-cream/70 text-lg font-light leading-relaxed italic" style={{ fontFamily: 'Lora, serif' }}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-tp-cream/70 text-lg font-light leading-relaxed">{subtitle}</p>
            )}
          </div>

          {/* Core Elements */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <h4 className="text-tp-orange text-xs uppercase tracking-[0.3em] mb-5 font-sans font-semibold">{benefitsLabel}</h4>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-tp-cream/80">
                  <span className="text-[#C49A68] mt-1 shrink-0">·</span>
                  <span className="font-light">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          {data.quoteEn && (
            <blockquote className="border-l-4 border-tp-orange pl-6 py-1 italic text-xl text-white font-light leading-snug" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {es ? data.quoteEs : data.quoteEn}
            </blockquote>
          )}

          {/* Our Vision */}
          {vision && (
            <div className="space-y-4">
              <h4 className="text-tp-orange text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                {es ? 'Nuestra Visión' : 'Our Vision'}
              </h4>
              {vision.split('\n\n').map((para, i) => (
                <p key={i} className="text-tp-cream/70 text-base font-light leading-relaxed">{para}</p>
              ))}
            </div>
          )}

          {/* Session structure (for activities without themed nights) */}
          {structure.length > 0 && !data.themedNights && (
            <div>
              <h4 className="text-tp-orange text-xs uppercase tracking-[0.3em] mb-4 font-sans font-semibold">
                {es ? 'Estructura de la sesión' : 'Session Structure'}
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                {structure.map((step, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="font-light text-white text-lg italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{step}</span>
                    {i < structure.length - 1 && <span className="text-[#C49A68] opacity-60">→</span>}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Our Themed Nights */}
          {data.themedNights && (
            <div className="space-y-4">
              <h4 className="text-tp-orange text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                {es ? 'Nuestras Noches Temáticas' : 'Our Themed Nights'}
              </h4>
              <div className="space-y-3">
                {data.themedNights.map((night, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                    <p className="text-white font-semibold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
                      {es ? night.titleEs : night.titleEn}
                    </p>
                    <p className="text-tp-cream/60 text-sm font-light leading-relaxed">{es ? night.descEs : night.descEn}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practical Details */}
          <div className="space-y-5">
            <h4 className="text-tp-orange text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              {es ? 'Detalles Prácticos' : 'Practical Details'}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <p className="text-tp-orange/60 text-xs uppercase tracking-[0.2em] mb-2 font-sans">{es ? 'Cuándo' : 'When'}</p>
                <p className="text-white font-semibold">{when}</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <p className="text-tp-orange/60 text-xs uppercase tracking-[0.2em] mb-2 font-sans">{es ? 'Precio' : 'Cost'}</p>
                <p className="text-white font-semibold">{data.cost}</p>
                {costNote && <p className="text-tp-cream/60 text-sm mt-1 leading-snug">{costNote}</p>}
              </div>
            </div>
            {note && (
              <div className="space-y-2">
                {note.split('\n').map((line, i) => (
                  <p key={i} className="text-tp-cream/50 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            )}
          </div>

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

export default ActivityModal
