import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Inspector } from 'react-dev-inspector'
import Hero from './components/Hero'
import CalendarModal from './components/CalendarModal'

function App() {
  const { t, i18n } = useTranslation();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
    <Inspector />
    {calendarOpen && <CalendarModal onClose={() => setCalendarOpen(false)} />}
    <main className="min-h-screen font-body selection:bg-tp-orange selection:text-tp-black overflow-x-hidden">
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
          <a href="#" className="hover:text-tp-orange transition-colors">{t('nav.home')}</a>
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
              className="bg-tp-orange text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-tp-green transition-all tracking-widest"
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
        <a href="https://wa.me/34624319964" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block bg-tp-green text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-tp-orange transition-all tracking-widest">
          {t('nav.whatsapp')}
        </a>
      </nav>

      <div id="main-content">
        {/* 1. Hero Section */}
        <Hero onCalendarOpen={() => setCalendarOpen(true)} />

        {/* 2. Main Intro */}
        <section className="relative py-32 px-6 bg-tp-black overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-tp-green/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tp-orange/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight">
                {t('intro.title1')} <br />
                <span className="text-tp-orange font-accent italic font-light">{t('intro.title2')}</span>
              </h2>
            </div>

            {/* Glassmorphism Content Card */}
            <div className="relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-10 left-10 text-tp-orange/20 text-[10rem] font-accent leading-none pointer-events-none">"</div>
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div className="space-y-6 text-xl text-tp-cream/80 leading-relaxed font-light">
                  <p>{t('intro.p1')}</p>
                  <p>{t('intro.p2')}</p>
                </div>
                
                <div className="flex flex-col justify-center">
                  <blockquote className="border-l-4 border-tp-orange pl-8 py-2 italic text-2xl md:text-3xl text-white font-accent leading-snug">
                    {t('intro.p3')}
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-20 flex flex-col items-center">
              <button
                onClick={() => setCalendarOpen(true)}
                className="bg-tp-orange text-tp-black px-12 py-5 rounded-full text-xl font-bold hover:bg-white transition-all shadow-2xl hover:scale-105 active:scale-95 tracking-wide"
              >
                {t('intro.join')}
              </button>
              <div className="mt-8">
                <button onClick={() => setCalendarOpen(true)} className="text-tp-orange/80 hover:text-tp-orange hover:underline underline-offset-8 decoration-2 transition-all font-medium flex items-center gap-2">
                  <span>{t('intro.checkCalendar')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Activities */}
        <section className="py-32 px-6 bg-tp-black/50 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-white text-center mb-20">{t('experience.title')}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 place-items-center">
              {[
                { key: 'contact',    img: 'contact-impro',        label: t('experience.activities.contact') },
                { key: 'sacred',     img: 'sacred-connections',   label: t('experience.activities.sacred') },
                { key: 'breath',     img: 'breathwork',           label: t('experience.activities.breath') },
                { key: 'mens',       img: 'mens-circle',          label: t('experience.activities.mens') },
                { key: 'improv',     img: 'improv-theatre',       label: t('experience.activities.improv') },
                { key: 'playfights', img: 'conscious-playfights', label: t('experience.activities.playfights') },
              ].map(({ key, img, label }) => (
                <div key={key} className="group flex flex-col items-center cursor-pointer">
                  <div className="relative w-44 h-44 md:w-52 md:h-52">
                    <img
                      src={`/activities/${img}.png`}
                      alt={label}
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.7))' }}
                    />
                  </div>
                  <svg viewBox="0 0 260 80" className="w-full max-w-[260px]">
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

      {/* Footer */}
      <footer className="bg-tp-black pt-32 pb-16 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* About Section */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">{t('footer.about')}</h5>
            <ul className="space-y-4 text-tp-cream/70 text-lg">
              <li><a href="https://thirdplacemalaga.com/thirdplacemalaga" className="hover:text-white transition-colors">Third Place Málaga</a></li>
              <li><a href="https://thirdplacemalaga.com/theteam" className="hover:text-white transition-colors">{t('footer.team')}</a></li>
              <li><a href="https://thirdplacemalaga.com/contact" className="hover:text-white transition-colors font-bold text-white">{t('footer.contact')}</a></li>
            </ul>
          </div>

          {/* Activities Section */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">{t('footer.activities')}</h5>
            <ul className="text-tp-cream/70 space-y-3 text-lg">
              <li className="hover:text-tp-orange cursor-pointer transition-colors">{t('experience.activities.contact')}</li>
              <li className="hover:text-tp-orange cursor-pointer transition-colors">{t('experience.activities.sacred')}</li>
              <li className="hover:text-tp-orange cursor-pointer transition-colors">{t('experience.activities.mens')}</li>
              <li className="hover:text-tp-orange cursor-pointer transition-colors">{t('experience.activities.improv')}</li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">{t('footer.connect')}</h5>
            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:thirdplacemalaga@gmail.com" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">{t('footer.mail')}</a>
              <a href="https://wa.me/34624319964" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">WhatsApp</a>
              <a href="https://www.instagram.com/thirdplacemalaga/" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">Instagram</a>
              <a href="https://www.meetup.com/thirdplacemalaga/" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">Meetup</a>
            </div>
          </div>
        </div>

        {/* Full Width Location Section */}
        <div className="max-w-6xl mx-auto">
          <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">{t('footer.visit')}</h5>
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[500px] mb-8 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.544520935574!2d-4.432269!3d36.707175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f796122d2645%3A0x6c79a83689c169fd!2sEspacio%20Bohemia!5e0!3m2!1sen!2ses!4v1718536000000!5m2!1sen!2ses" 
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
            <p>Calle Leopoldo Alas Clarín 3, Málaga, Spain</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-tp-cream/40 text-xs tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} thirdplacemalaga | {t('footer.crafted')}
          </p>
          <div className="flex gap-4 items-center">
            <img 
              src={i18n.language === 'es' ? "https://thirdplacemalaga.com/wp-content/plugins/translatepress-multilingual/assets/flags/4x3/es_ES.svg" : "https://thirdplacemalaga.com/wp-content/plugins/translatepress-multilingual/assets/flags/4x3/en_GB.svg"}
              alt={i18n.language === 'es' ? "Español" : "English"}
              className="w-6 h-auto rounded-sm opacity-60" 
            />
            <span className="text-tp-cream/40 text-xs font-bold uppercase tracking-widest">
              {i18n.language === 'es' ? "Español" : "English"}
            </span>
          </div>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App
