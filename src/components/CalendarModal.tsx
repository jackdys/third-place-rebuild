import { useEffect } from 'react'

const CALENDAR_SRC = '73f0f82ba9ccf67323d2336070b5b82042a93bbb7a4abcb0c3d6bade91744426@group.calendar.google.com'
const EMBED_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_SRC)}&ctz=Europe%2FMadrid&wkst=2&mode=WEEK&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0`

interface Props {
  onClose: () => void
}

const CalendarModal = ({ onClose }: Props) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl h-[95dvh] md:h-[80vh] bg-tp-black border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <span className="text-tp-cream font-bold uppercase tracking-widest text-sm">Calendar</span>
          <button
            onClick={onClose}
            className="text-tp-cream/60 hover:text-white transition-colors p-1"
            aria-label="Close calendar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Calendar iframe */}
        <iframe
          src={EMBED_URL}
          className="w-full flex-1 border-0"
          title="Third Place Málaga Calendar"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default CalendarModal
