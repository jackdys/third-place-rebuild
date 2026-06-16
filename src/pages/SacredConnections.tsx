import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'
import CalendarModal from '../components/CalendarModal'

const SacredConnections = () => {
  const { i18n, t } = useTranslation()
  const es = i18n.language === 'es'
  const [calendarOpen, setCalendarOpen] = useState(false)

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  const themedNights = [
    {
      titleEn: 'Topic Exploration Circle',
      titleEs: 'Círculo de Exploración Temática',
      descEn: 'Dive into a specific theme as a group and engage in different facilitated exercises. Slow down, practice active listening, and reflect together through honest sharing.',
      descEs: 'Sumérgete en un tema específico en grupo con ejercicios facilitados. Practica la escucha activa y reflexiona juntos a través del compartir honesto.',
    },
    {
      titleEn: 'Authentic Connections',
      titleEs: 'Conexiones Auténticas',
      descEn: 'Explore presence-based practices and Authentic Relating exercises that invite openness, vulnerability, and deeper human connection.',
      descEs: 'Explora prácticas de presencia y ejercicios de Authentic Relating que invitan a la apertura, vulnerabilidad y conexión humana más profunda.',
    },
    {
      titleEn: 'Sound & Spirit',
      titleEs: 'Sonido y Espíritu',
      descEn: 'A night dedicated to activating your voice, exploring sound, mantra chanting, and song circles to awaken presence and creative expression.',
      descEs: 'Una noche dedicada a activar tu voz, explorar el sonido, el canto de mantras y los círculos de canciones para despertar la presencia y la expresión creativa.',
    },
    {
      titleEn: 'Reflection & Renewal',
      titleEs: 'Reflexión y Renovación',
      descEn: "A gentle, grounding session to check in on your life and any insights or progress from previous Topic Exploration Circles, Authentic Connections nights, or Sound & Spirit evenings. Reflect on where you've grown, what feels aligned, and renew your intentions for the path ahead. A perfect moment to pause, integrate, and recharge.",
      descEs: 'Una sesión suave y enraizante para hacer un balance de tu vida y los aprendizajes de sesiones anteriores de los Círculos de Exploración Temática, las noches de Conexiones Auténticas o las veladas de Sonido y Espíritu. Reflexiona sobre dónde has crecido, qué se siente alineado, y renueva tus intenciones para el camino por delante. Un momento perfecto para pausar, integrar y recargar.',
    },
  ]

  return (
    <>
      {calendarOpen && <CalendarModal onClose={() => setCalendarOpen(false)} />}

      <div className="min-h-screen bg-tp-black font-body overflow-x-hidden selection:bg-tp-orange selection:text-tp-black">
        <div className="fixed inset-0 pointer-events-none z-50 bg-noise" />

        {/* Nav */}
        <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-tp-black/80 backdrop-blur-lg border-b border-white/5">
          <Link to="/">
            <img src="/logo.png" alt="Third Place Málaga" className="h-10 md:h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setCalendarOpen(true)}
              className="hidden md:block text-tp-cream/70 hover:text-tp-orange transition-colors text-xs uppercase tracking-[0.2em] font-semibold"
            >
              {t('nav.calendar')}
            </button>
            <Link to="/" className="hidden md:block text-tp-cream/70 hover:text-tp-orange transition-colors text-xs uppercase tracking-[0.2em] font-semibold">
              {t('nav.home')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-all text-xs"
            >
              <span className={i18n.language === 'en' ? 'font-bold text-tp-orange' : 'opacity-60'}>EN</span>
              <span className="opacity-30">/</span>
              <span className={i18n.language === 'es' ? 'font-bold text-tp-orange' : 'opacity-60'}>ES</span>
            </button>
          </div>
        </nav>

        {/* Hero — video background */}
        <section className="relative min-h-[85vh] flex items-end justify-center overflow-hidden pb-20">
          <video
            src="/activities/sacred-video.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-tp-black" />

          <div className="relative z-10 text-center px-6 max-w-3xl pt-32">
            <h1
              className="text-7xl md:text-9xl font-bold text-white leading-none mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {es ? 'Conexiones\nSagradas' : 'Sacred\nConnections'}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 italic font-light leading-relaxed mb-3" style={{ fontFamily: 'Lora, serif' }}>
              {es
                ? 'Deja de hablar de las cosas superficiales. Habla con vulnerabilidad. Comparte honestamente.'
                : 'Skip the small talk. Speak vulnerably. Share honestly.'}
            </p>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
              {es
                ? 'Un espacio para conversaciones profundas, authentic relating, amistad, juegos de conexión, activación de voz, expresión creativa y conversación significativa.'
                : 'A place for deep chats, authentic relating, friendship, connection games, voice activation, creative expression and meaningful conversation.'}
            </p>
          </div>
        </section>

        {/* ── Title & taglines ── */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {es
                ? 'Sacred Connections: Una Comunidad para la Presencia, Expresión e Introspección'
                : 'Sacred Connections: A Community for Presence, Expression and Introspection'}
            </h2>
            <div className="space-y-1">
              {(es ? [
                'Un espacio para la conexión auténtica, conversaciones profundas y autoconciencia.',
                'Diseñado para cultivar empatía, presencia, introspección e interacción humana significativa.',
                'Una mezcla de ejercicios interactivos, debates guiados y prácticas de embodiment.',
              ] : [
                'A space for authentic connection, deep conversations, and self-awareness.',
                'Designed to cultivate empathy, presence, introspection and meaningful human interaction.',
                'A mix of interactive exercises, guided discussions, and embodiment practices.',
              ]).map((line, i) => (
                <p key={i} className="text-tp-cream/70 text-base font-light leading-relaxed italic" style={{ fontFamily: 'Lora, serif' }}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Two-column: image + Core Elements ── */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: video clip */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-black">
                <video
                  src="/activities/sacred-video.mp4"
                  className="w-full h-full object-cover opacity-90"
                  autoPlay muted loop playsInline
                />
              </div>

              {/* Right: Core Elements */}
              <div>
                <p className="text-tp-orange text-xs uppercase tracking-[0.35em] mb-6 font-sans font-semibold">
                  {es ? 'Elementos Principales' : 'Core Elements'}
                </p>
                <ul className="space-y-4">
                  {(es ? [
                    'Escucha Activa y Presencia – Aprende a estar plenamente presente contigo y con otros',
                    'Ejercicios Expresivos y Reflexivos – Exploración estructurada de la vulnerabilidad e introspección',
                    'Conciencia Corporal – Conexión no verbal y experiencias somáticas. Trabajamos mucho con la voz',
                    'Empatía y Dinámicas de Relación – Practica ver y ser visto sin juicio',
                    'Trabajo en Grupo y en Pareja – De conversaciones individuales a dinámicas de grupo completo',
                  ] : [
                    'Active Listening & Presence – Learn to be fully present with yourself & others',
                    'Expressive & Reflective Exercises – Engage in structured prompts for vulnerability & insight',
                    'Body-Based Awareness – Explore non-verbal connection & somatic experiences. We work a lot with voice',
                    'Empathy & Relating Dynamics – Practice seeing & being seen without judgment',
                    'Group & Partner Work – From one-on-one conversations to full-group dynamics',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-tp-cream/80">
                      <span className="text-[#C49A68] mt-0.5 shrink-0">·</span>
                      <span className="font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 md:px-12"><div className="border-t border-white/10" /></div>

        {/* ── Our Vision ── */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-tp-orange text-xs uppercase tracking-[0.35em] font-sans font-semibold">
              {es ? 'Nuestra Visión' : 'Our Vision'}
            </p>
            {(es ? [
              'Inspirado en la filosofía, la psicología y la comunicación consciente. Nos nutrimos de ideas de las constelaciones familiares, el movimiento Authentic Relating, la comunicación no violenta, el circling, y un sinfín de libros, conversaciones, talleres, experiencias vitales y recursos en línea etc…',
              'Las sesiones siguen una rotación temática estructurada pero lúdica, dando a cada encuentro su propio sabor mientras contribuye a un viaje más amplio.',
              'Hacemos énfasis en un entorno seguro, consensuado y sin juicios para la exploración y el crecimiento.',
              'Construir Comunidad – Estamos creando un vibrante "Third Place" en Málaga: una tribu/familia donde crecemos juntos, nos reencontramos con caras conocidas y construimos confianza, comprensión y conexión significativa.',
            ] : [
              'Inspired by philosophy, psychology, and conscious communication. We draw on ideas from family constellations, the Authentic Relating movement, non-violent communication, circling, and countless books, conversations, workshops, life experience & online resources etc…',
              'Sessions follow a structured yet playful thematic rotation, giving each meetup its own flavour while still contributing to a larger journey.',
              'We emphasise a safe, consensual, non-judgmental environment for exploration & growth.',
              'Building Community – We are creating a strong, vibrant "Third Place" in Málaga: a tribe/family where we grow together, check in with familiar faces, and build trust, understanding, and meaningful connection.',
            ]).map((para, i) => (
              <p key={i} className="text-tp-cream/70 font-light leading-relaxed">{para}</p>
            ))}

            {/* Quote */}
            <blockquote
              className="mt-8 italic text-xl md:text-2xl text-white font-light leading-snug border-l-4 border-tp-orange pl-6 py-1"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {es
                ? 'Piensa en Sacred Connections como un gimnasio para el alma. La gente hace ejercicio para mantenerse físicamente en forma, ¿pero qué hay de entrenar la 🧠 mente, nutrir el ❤️ corazón o encontrar un 🌍 sentido más profundo de dirección? Ahí es donde entra Sacred Connections. A través de encuentros semanales, creamos un viaje constante de crecimiento—ayudándote a descubrirte más a ti mismo y tu lugar en el mundo, sesión a sesión.'
                : "Think of Sacred Connections as a gym for the soul. People often work out to stay physically fit, but what about training the 🧠 mind, nurturing the ❤️ heart, or finding a deeper 🌍 sense of direction? That's where Sacred Connections comes in. Through weekly meetups, we create a steady journey of growth—helping you discover more about yourself and your place in the world, one session at a time."}
            </blockquote>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 md:px-12"><div className="border-t border-white/10" /></div>

        {/* ── Our Themed Nights ── */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-tp-orange text-xs uppercase tracking-[0.35em] font-sans font-semibold">
              {es ? 'Nuestras Noches Temáticas' : 'Our Themed Nights'}
            </p>
            <p className="text-tp-cream/60 font-light">
              {es
                ? 'Así es como están estructurados nuestros encuentros actualmente—cada sesión ofrece algo único:'
                : "Here's how our meetups are currently structured—each session offers something unique:"}
            </p>
            <ol className="space-y-5">
              {themedNights.map((night, i) => (
                <li key={i} className="flex items-start gap-4 text-tp-cream/80 font-light leading-relaxed">
                  <span className="text-tp-orange font-semibold shrink-0 font-sans">{i + 1}.</span>
                  <p>
                    <strong className="text-white font-semibold">{es ? night.titleEs : night.titleEn}</strong>
                    {' – '}
                    {es ? night.descEs : night.descEn}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Video embeds ── */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video bg-black">
                <video
                  src="/activities/sacred-video.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cjYpQ5YgZFQ?rel=0&playsinline=1"
                  allow="fullscreen"
                  allowFullScreen
                  title="Sacred Connections"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 md:px-12"><div className="border-t border-white/10" /></div>

        {/* ── Practical Details ── */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-tp-orange text-xs uppercase tracking-[0.35em] font-sans font-semibold">
              {es ? 'Detalles Prácticos' : 'Practical Details'}
            </p>
            <ul className="space-y-4">
              {(es ? [
                'Cuota de entrada: 10€ (efectivo en puerta). Early bird mensual de 30€ por bloque de 4 sesiones disponible, o 35€ regular por 4 sesiones.',
                '¡Los hispanohablantes son bienvenidos! Muchos participantes (incluyendo el anfitrión) son bilingües. Ten en cuenta, sin embargo, que el inglés es el idioma de trabajo principal.',
                'Abierto a todos, independientemente de creencias religiosas o espirituales. Ven tal como eres.',
                'Únete a nuestro grupo activo de WhatsApp—¡asiste a una sesión para ser añadido!',
              ] : [
                'Entrance fee: 10€ (cash at the door). Early bird monthly payment of 30€ per block of 4 sessions available, or regular 35€ per 4 session blocks.',
                'Spanish speakers are welcome! Many attendees (including the host) are bilingual. Keep in mind, however, that English is the main working language.',
                'Open to all, regardless of religious or spiritual beliefs. Just come as you are.',
                'Join our active WhatsApp group—attend a session to be added!',
              ]).map((note, i) => (
                <li key={i} className="flex items-start gap-3 text-tp-cream/70 font-light leading-relaxed">
                  <span className="text-[#C49A68] mt-1 shrink-0">·</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>

            <p className="text-white italic font-light text-lg" style={{ fontFamily: 'Lora, serif' }}>
              {es ? "Creemos momentos sagrados juntos" : "Let's create sacred moments together"}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setCalendarOpen(true)}
                className="bg-tp-orange text-tp-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                {es ? 'Ver nuestro calendario' : 'Check our calendar for the next event'}
              </button>
              <a
                href={`https://wa.me/34624319964?text=${encodeURIComponent(t('whatsappMessage'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#25D366]/40 text-[#25D366] px-8 py-4 rounded-lg font-semibold hover:bg-[#25D366] hover:text-white transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Footer strip */}
        <footer className="border-t border-white/10 py-10 px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="text-tp-cream/40 hover:text-tp-orange text-xs tracking-[0.3em] uppercase transition-colors">
              ← {es ? 'Volver a la página principal' : 'Back to Third Place Málaga'}
            </Link>
            <p className="text-tp-cream/20 text-xs">© {new Date().getFullYear()} thirdplacemalaga</p>
          </div>
        </footer>

        {/* WhatsApp floating */}
        <a
          href={`https://wa.me/34624319964?text=${encodeURIComponent(t('whatsappMessage'))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 md:right-6 z-[150] flex items-center gap-3 bg-[#25D366] text-white pl-4 md:pl-5 pr-3 md:pr-4 py-3 border-2 border-white/30 shadow-lg hover:scale-105 active:scale-95 transition-transform" style={{ borderRadius: '1.5rem 1.5rem 1.5rem 0.25rem' }}
        >
          <span className="absolute inset-0 bg-[#25D366] wa-pulse" style={{ borderRadius: '1.5rem 1.5rem 1.5rem 0.25rem' }} />
          <span className="relative z-10 font-bold text-sm tracking-wide whitespace-nowrap">{t('joinToday')}</span>
          <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10 shrink-0" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.675 4.797 1.85 6.787L2 30l7.447-1.824A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.42 1.082 1.112-4.305-.272-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.892 1.118-1.094 1.348-.201.23-.403.259-.747.086-.344-.172-1.453-.536-2.767-1.709-1.022-.912-1.712-2.038-1.913-2.382-.2-.344-.021-.53.151-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.56-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43s-1.207 1.18-1.207 2.877 1.235 3.337 1.407 3.567c.172.23 2.43 3.71 5.888 5.203.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.663-.099 2.036-.832 2.323-1.635.287-.803.287-1.491.2-1.635-.085-.143-.315-.23-.66-.402z"/>
          </svg>
        </a>
      </div>
    </>
  )
}

export default SacredConnections
