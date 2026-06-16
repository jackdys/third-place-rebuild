import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Inspector } from 'react-dev-inspector'
import { FaWhatsapp, FaInstagram, FaFacebook, FaMeetup } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import Hero from './components/Hero'
import CalendarModal from './components/CalendarModal'
import ValuesReveal from './components/ValuesReveal'
import VideoModal from './components/VideoModal'
import ActivityModal, { type ActivityData } from './components/ActivityModal'

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState<ActivityData | null>(null);
  const [showWA, setShowWA] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setShowWA(el.scrollTop > window.innerHeight * 0.85);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const activities: Record<string, ActivityData> = {
    sacred: {
      key: 'sacred-connections',
      tagEn: 'Sacred Connections', tagEs: 'Conexiones Sagradas',
      titleEn: 'A Community for Presence, Expression and Introspection',
      titleEs: 'Una Comunidad para la Presencia, Expresión e Introspección',
      subtitleEn: '',
      subtitleEs: '',
      taglinesEn: [
        'A space for authentic connection, deep conversations, and self-awareness.',
        'Designed to cultivate empathy, presence, introspection and meaningful human interaction.',
        'A mix of interactive exercises, guided discussions, and embodiment practices.',
      ],
      taglinesEs: [
        'Un espacio para la conexión auténtica, conversaciones profundas y autoconciencia.',
        'Diseñado para cultivar empatía, presencia, introspección e interacción humana significativa.',
        'Una mezcla de ejercicios interactivos, debates guiados y prácticas de embodiment.',
      ],
      benefitsLabelEn: 'Core Elements',
      benefitsLabelEs: 'Elementos Principales',
      benefitsEn: [
        'Active Listening & Presence – Learn to be fully present with yourself & others',
        'Expressive & Reflective Exercises – Engage in structured prompts for vulnerability & insight',
        'Body-Based Awareness – Explore non-verbal connection & somatic experiences. We work a lot with voice',
        'Empathy & Relating Dynamics – Practice seeing & being seen without judgment',
        'Group & Partner Work – From one-on-one conversations to full-group dynamics',
      ],
      benefitsEs: [
        'Escucha Activa y Presencia – Aprende a estar plenamente presente contigo y con otros',
        'Ejercicios Expresivos y Reflexivos – Exploración estructurada de la vulnerabilidad e introspección',
        'Conciencia Corporal – Conexión no verbal y experiencias somáticas. Trabajamos mucho con la voz',
        'Empatía y Dinámicas de Relación – Practica ver y ser visto sin juicio',
        'Trabajo en Grupo y en Pareja – De conversaciones individuales a dinámicas de grupo completo',
      ],
      quoteEn: 'Think of Sacred Connections as a gym for the soul. People often work out to stay physically fit, but what about training the 🧠 mind, nurturing the ❤️ heart, or finding a deeper 🌍 sense of direction? That\'s where Sacred Connections comes in. Through weekly meetups, we create a steady journey of growth—helping you discover more about yourself and your place in the world, one session at a time.',
      quoteEs: 'Piensa en Sacred Connections como un gimnasio para el alma. La gente hace ejercicio para mantenerse físicamente en forma, ¿pero qué hay de entrenar la 🧠 mente, nutrir el ❤️ corazón o encontrar un 🌍 sentido más profundo de dirección? Ahí es donde entra Sacred Connections. A través de encuentros semanales, creamos un viaje constante de crecimiento—ayudándote a descubrirte más a ti mismo y tu lugar en el mundo, sesión a sesión.',
      visionEn: 'Inspired by philosophy, psychology, and conscious communication. We draw on ideas from family constellations, the Authentic Relating movement, non-violent communication, circling, and countless books, conversations, workshops, life experience & online resources etc…\n\nSessions follow a structured yet playful thematic rotation, giving each meetup its own flavour while still contributing to a larger journey.\n\nWe emphasise a safe, consensual, non-judgmental environment for exploration & growth.\n\nBuilding Community – We are creating a strong, vibrant "Third Place" in Málaga: a tribe/family where we grow together, check in with familiar faces, and build trust, understanding, and meaningful connection.',
      visionEs: 'Inspirado en la filosofía, la psicología y la comunicación consciente. Nos nutrimos de ideas de las constelaciones familiares, el movimiento Authentic Relating, la comunicación no violenta, el circling, y un sinfín de libros, conversaciones, talleres, experiencias vitales y recursos en línea etc…\n\nLas sesiones siguen una rotación temática estructurada pero lúdica, dando a cada encuentro su propio sabor mientras contribuye a un viaje más amplio.\n\nHacemos énfasis en un entorno seguro, consensuado y sin juicios para la exploración y el crecimiento.\n\nConstruir Comunidad – Estamos creando un vibrante "Third Place" en Málaga: una tribu/familia donde crecemos juntos, nos reencontramos con caras conocidas y construimos confianza, comprensión y conexión significativa.',
      structureEn: [],
      structureEs: [],
      themedNights: [
        { titleEn: 'Topic Exploration Circle', titleEs: 'Círculo de Exploración Temática', descEn: 'Dive into a specific theme as a group and engage in different facilitated exercises. Slow down, practice active listening, and reflect together through honest sharing.', descEs: 'Sumérgete en un tema específico en grupo con ejercicios facilitados. Practica la escucha activa y reflexiona juntos a través del compartir honesto.' },
        { titleEn: 'Authentic Connections', titleEs: 'Conexiones Auténticas', descEn: 'Explore presence-based practices and Authentic Relating exercises that invite openness, vulnerability, and deeper human connection.', descEs: 'Explora prácticas de presencia y ejercicios de Authentic Relating que invitan a la apertura, vulnerabilidad y conexión humana más profunda.' },
        { titleEn: 'Sound & Spirit', titleEs: 'Sonido y Espíritu', descEn: 'A night dedicated to activating your voice, exploring sound, mantra chanting, and song circles to awaken presence and creative expression.', descEs: 'Una noche dedicada a activar tu voz, explorar el sonido, el canto de mantras y los círculos de canciones para despertar la presencia y la expresión creativa.' },
        { titleEn: 'Reflection & Renewal', titleEs: 'Reflexión y Renovación', descEn: 'A gentle, grounding session to check in on your life and any insights or progress from previous sessions. Reflect on where you\'ve grown, what feels aligned, and renew your intentions for the path ahead. A perfect moment to pause, integrate, and recharge.', descEs: 'Una sesión suave y enraizante para hacer un balance de tu vida y los aprendizajes de sesiones anteriores. Reflexiona sobre dónde has crecido, qué se siente alineado, y renueva tus intenciones. Un momento perfecto para pausar, integrar y recargar.' },
      ],
      whenEn: 'Check calendar', whenEs: 'Ver calendario',
      cost: '10€ / 30–35€',
      costNoteEn: 'Cash at the door. Early bird monthly payment of 30€ per block of 4 sessions, or regular 35€ per 4 session blocks.',
      costNoteEs: 'Efectivo en puerta. Early bird mensual de 30€ por bloque de 4 sesiones, o 35€ regular por 4 sesiones.',
      noteEn: 'Spanish speakers are welcome! Many attendees (including the host) are bilingual. Keep in mind, however, that English is the main working language.\nOpen to all, regardless of religious or spiritual beliefs. Just come as you are.\nJoin our active WhatsApp group — attend a session to be added!\nLet\'s create sacred moments together 🌟',
      noteEs: '¡Los hispanohablantes son bienvenidos! Muchos participantes (incluyendo el anfitrión) son bilingües. Ten en cuenta que el inglés es el idioma de trabajo principal.\nAbierto a todos, independientemente de creencias religiosas o espirituales. Ven tal como eres.\nÚnete a nuestro grupo activo de WhatsApp — ¡asiste a una sesión para ser añadido!\nCreemos momentos sagrados juntos 🌟',
      media: { type: 'video', src: '/activities/sacred-video.mp4' },
    },
    improv: {
      key: 'improv-theatre',
      tagEn: 'Improv Theatre', tagEs: 'Teatro de Improvisación',
      titleEn: 'Welcome to the Vibrant World of Improv Theatre in Málaga!',
      titleEs: '¡Bienvenido al Vibrante Mundo del Teatro de Improvisación en Málaga!',
      subtitleEn: 'Short-form, game-based improvisation where we create scenes, stories, and imagined worlds through fun, fast-paced mini-games. No experience needed.',
      subtitleEs: 'Improvisación basada en juegos donde creamos escenas, historias y mundos imaginados. Sin experiencia necesaria.',
      benefitsEn: ['Play and perform in bilingual sessions', 'Learn the fundamentals of great improv — what makes a scene work', 'Build compelling stories with others', 'Join a welcoming, playful community'],
      benefitsEs: ['Actúa y juega en sesiones bilingües', 'Aprende los fundamentos de la improvisación', 'Construye historias con otros', 'Únete a una comunidad acogedora y juguetona'],
      structureEn: ['Warm-up games', 'Mini scenes', 'Story building', 'Performance'],
      structureEs: ['Calentamiento', 'Mini escenas', 'Construcción de historias', 'Actuación'],
      whenEn: 'Sundays · 16:00 – 18:00', whenEs: 'Domingos · 16:00 – 18:00',
      cost: '10€',
      costNoteEn: 'Cash at the door', costNoteEs: 'En efectivo en la puerta',
      noteEn: 'Bilingual & inclusive. Come play, learn, and laugh with us!',
      noteEs: 'Bilingüe e inclusivo. ¡Ven a jugar, aprender y reír con nosotros!',
    },
    playfights: {
      key: 'conscious-playfights',
      tagEn: 'Conscious Playfights', tagEs: 'Juego Consciente',
      titleEn: 'Movement, Connection, Non-Violent Confrontation & Play',
      titleEs: 'Movimiento, Conexión, Confrontación No Violenta y Juego',
      subtitleEn: 'A dynamic experience exploring conscious play through embodied connection and safe physical expression. Bilingual in Spanish and English.',
      subtitleEs: 'Una experiencia dinámica de juego consciente a través de la conexión corporal y la expresión física segura. Bilingüe en español e inglés.',
      benefitsEn: ['Develop body awareness and physical confidence', 'Explore safe, consensual physical confrontation', 'Build trust through playful wrestling and resistance', 'Experience joy in physical play while respecting boundaries'],
      benefitsEs: ['Desarrolla conciencia corporal y confianza física', 'Explora la confrontación física segura y consensuada', 'Construye confianza a través del juego y la resistencia', 'Experimenta la alegría del juego físico respetando límites'],
      structureEn: ['Icebreakers & movement', 'Playful wrestling', 'Cool-down & sharing'],
      structureEs: ['Calentamiento y movimiento', 'Juego y lucha consciente', 'Enfriamiento y círculo de cierre'],
      whenEn: 'Once a month · Saturdays', whenEs: 'Una vez al mes · Sábados',
      cost: '15€ / 20€',
      costNoteEn: 'Individual / Two people (10€ each)', costNoteEs: 'Individual / Dos personas (10€ cada uno)',
      noteEn: 'Wear comfortable, loose-fitting clothing. No martial arts experience needed.',
      noteEs: 'Ropa cómoda y holgada. No se necesita experiencia en artes marciales.',
    },
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
    <Inspector />
    {calendarOpen && <CalendarModal onClose={() => setCalendarOpen(false)} />}
    {videoOpen && <VideoModal src="/activities/breathwork-video.mp4" onClose={() => setVideoOpen(false)} onCalendarOpen={() => { setVideoOpen(false); setCalendarOpen(true) }} />}
    {activeActivity && <ActivityModal data={activeActivity} onClose={() => setActiveActivity(null)} onCalendarOpen={() => { setActiveActivity(null); setCalendarOpen(true) }} />}
    <div ref={scrollRef} className="overflow-y-scroll overflow-x-hidden" style={{ height: '100dvh', scrollSnapType: 'y mandatory', overscrollBehavior: 'contain' }}>
    <main className="min-h-screen font-body selection:bg-tp-orange selection:text-tp-black">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-tp-orange focus:text-white focus:p-4">
        Skip to content
      </a>

      {/* Global Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-tp-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center">
          <img src="/logo.png" alt="Third Place Málaga Logo" className="h-10 md:h-12 w-auto" />
        </div>
        <div className="hidden lg:flex gap-6 text-tp-cream font-semibold text-xs uppercase tracking-[0.2em] items-center">
          <a href="/" className="hover:text-tp-orange transition-colors">{t('nav.home')}</a>
          <a href="#" className="hover:text-tp-orange transition-colors">{t('nav.activities')}</a>
          <button onClick={() => setCalendarOpen(true)} className="hover:text-tp-orange transition-colors">{t('nav.calendar')}</button>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-all text-tp-cream hover:text-tp-orange ml-2"
          >
            <span className={i18n.language === 'en' ? 'font-bold text-tp-orange' : 'opacity-70'}>EN</span>
            <span className="opacity-40">/</span>
            <span className={i18n.language === 'es' ? 'font-bold text-tp-orange' : 'opacity-70'}>ES</span>
          </button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setCalendarOpen(true)}
              className="bg-tp-orange text-white px-4 py-1.5 rounded-md text-xs font-bold hover:bg-tp-green transition-all tracking-widest"
            >
              {t('nav.calendar')}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-xs"
            >
              <span className={i18n.language === 'en' ? 'font-bold text-tp-orange' : 'opacity-70'}>EN</span>
              <span className="opacity-40">/</span>
              <span className={i18n.language === 'es' ? 'font-bold text-tp-orange' : 'opacity-70'}>ES</span>
            </button>
        </div>

      </nav>

      <div id="main-content">
        {/* 1. Hero Section */}
        <Hero onCalendarOpen={() => setCalendarOpen(true)} />

        {/* 2. Intro — Title + Values */}
        <section
          className="snap-start relative px-6 overflow-hidden flex items-center justify-center"
          style={{ height: '100dvh', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.88) 100%), url(/malaga-bg.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}
        >
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-tp-green/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tp-orange/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center pt-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {t('intro.title1')}
            </h2>
            <p className="text-tp-cream/40 text-xs md:text-sm uppercase tracking-[0.4em] mb-6">{t('intro.centeredAround')}</p>
            <ValuesReveal values={t('intro.values')} />
          </div>
        </section>

        {/* 3. Intro — Body Copy */}
        <section
          className="snap-start relative px-6 overflow-hidden flex items-center justify-center"
          style={{ height: '100dvh', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.88) 100%), url(/malaga-bg.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}
        >
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-tp-green/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tp-orange/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center pt-16 overflow-y-auto">
            <div className="flex flex-col items-center mb-8">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-tp-orange" />
              <div className="w-2 h-2 rounded-full bg-tp-orange mt-1" />
            </div>

            <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-3xl px-6 py-8 md:px-8 md:py-10 max-w-2xl">
              <div className="space-y-4 md:space-y-6 text-xl md:text-4xl text-white/95 leading-snug italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('intro.p2').split('! ').map((part, i, arr) => (
                  <p key={i}>{part}{i < arr.length - 1 ? '!' : ''}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center mt-8">
              <div className="w-2 h-2 rounded-full bg-tp-orange" />
              <div className="w-px h-10 bg-gradient-to-b from-tp-orange to-transparent mt-1" />
            </div>
          </div>
        </section>

        {/* 4. Activities */}
        <section id="activities" className="snap-start min-h-screen py-10 md:py-20 px-6 bg-tp-black/50 border-y border-white/5 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-20" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{t('experience.title')}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-16 place-items-center">
              {[
                { key: 'contact',    img: 'contact-impro',        label: t('experience.activities.contact'),    onClick: undefined },
                { key: 'sacred',     img: 'sacred-connections',   label: t('experience.activities.sacred'),     onClick: () => navigate('/sacred-connections') },
                { key: 'breath',     img: 'breathwork',           label: t('experience.activities.breath'),     onClick: () => setVideoOpen(true) },
                { key: 'mens',       img: 'mens-circle',          label: t('experience.activities.mens'),       onClick: undefined },
                { key: 'improv',     img: 'improv-theatre',       label: t('experience.activities.improv'),     onClick: () => setActiveActivity(activities.improv) },
                { key: 'playfights', img: 'conscious-playfights', label: t('experience.activities.playfights'), onClick: () => setActiveActivity(activities.playfights) },
              ].map(({ key, img, label, onClick }) => (
                <div key={key} onClick={onClick} className={`group flex flex-col items-center ${onClick ? 'cursor-pointer' : 'cursor-default'}`}>
                  <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52">
                    <img
                      src={`/activities/${img}.png`}
                      alt={label}
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.7))' }}
                    />
                  </div>
                  <svg viewBox="0 0 260 80" className="w-full max-w-[180px] md:max-w-[260px]">
                    <defs>
                      <path id={`arc-${key}`} d="M 15,4 Q 130,90 245,4" />
                    </defs>
                    <text fill="white" fontSize="18" fontWeight="800" letterSpacing="1">
                      <textPath href={`#arc-${key}`} startOffset="50%" textAnchor="middle">
                        {label}
                      </textPath>
                    </text>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 5. Map */}
      <section className="snap-start min-h-screen bg-tp-black pt-24 pb-16 px-8 border-t border-white/10 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">{t('footer.visit')}</h5>
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[300px] md:h-[460px] mb-8 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200!2d-4.433879!3d36.7072371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7d4dc7e884b%3A0x6c79b830dd8529fd!2sEspacio%20Bohemia%20M%C3%A1laga!5e0!3m2!1sen!2ses!4v1718536000000!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Espacio Bohemia Location"
            ></iframe>
          </div>
          <div className="text-tp-cream/80 text-lg leading-relaxed text-center">
            <p className="font-bold text-white italic">Espacio Bohemia Málaga</p>
            <p>Calle Leopoldo Alas Clarín 3,</p>
            <p>planta baja, Local D (a la derecha del No. 3),</p>
            <p>Málaga</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tp-black pt-20 pb-16 px-8 border-t border-white/5">

        {/* About + Connect */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 mb-20">
          {/* About Section */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">{t('footer.about')}</h5>
            <ul className="space-y-4 text-tp-cream/70 text-lg">
              <li><a href="https://thirdplacemalaga.com/thirdplacemalaga" className="hover:text-white transition-colors">Third Place Málaga</a></li>
              <li><a href="https://thirdplacemalaga.com/theteam" className="hover:text-white transition-colors">{t('footer.team')}</a></li>
              <li><a href="https://thirdplacemalaga.com/contact" className="hover:text-white transition-colors font-bold text-white">{t('footer.contact')}</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">{t('footer.connect')}</h5>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:thirdplacemalaga@gmail.com" aria-label="Gmail" className="group w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-[#EA4335]/40 hover:bg-[#EA4335] hover:border-[#EA4335] transition-all duration-300 hover:scale-110">
                <SiGmail className="w-6 h-6 text-[#EA4335] group-hover:text-white transition-colors" />
              </a>
              <a href={`https://wa.me/34624319964?text=${encodeURIComponent(t('whatsappMessage'))}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="group w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-[#25D366]/40 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 hover:scale-110">
                <FaWhatsapp className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/thirdplacemalaga/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-[#E1306C]/40 hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 hover:scale-110">
                <FaInstagram className="w-6 h-6 text-[#E1306C] group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.facebook.com/thirdplacemalaga" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-[#1877F2]/40 hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 hover:scale-110">
                <FaFacebook className="w-6 h-6 text-[#1877F2] group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.meetup.com/thirdplacemalaga/" target="_blank" rel="noopener noreferrer" aria-label="Meetup" className="group w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-[#ED1C40]/40 hover:bg-[#ED1C40] hover:border-[#ED1C40] transition-all duration-300 hover:scale-110">
                <FaMeetup className="w-6 h-6 text-[#ED1C40] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-tp-cream/40 text-xs tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} thirdplacemalaga | {t('footer.crafted')}
          </p>
        </div>
      </footer>
    </main>
    </div>

    {/* WhatsApp Floating Button */}
    <a
      href={`https://wa.me/34624319964?text=${encodeURIComponent(t('whatsappMessage'))}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join today on WhatsApp"
      className={`wa-flicker fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 md:right-6 z-[150] flex items-center gap-3 bg-[#25D366] text-white px-4 md:px-5 py-3 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-500 ${showWA ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
    >
      <span className="font-bold text-sm tracking-wide whitespace-nowrap">{t('joinToday')}</span>
      <FaWhatsapp className="w-6 h-6 shrink-0 text-white" />
    </a>
    </>
  )
}

export default App
