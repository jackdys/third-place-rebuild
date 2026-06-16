import Hero from './components/Hero'

function App() {
  return (
    <main className="min-h-screen font-body selection:bg-tp-orange selection:text-tp-black overflow-x-hidden">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-tp-orange focus:text-white focus:p-4">
        Skip to content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-tp-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center">
          <img src="/logo.png" alt="Third Place Málaga Logo" className="h-10 md:h-12 w-auto" />
        </div>
        <div className="hidden lg:flex gap-6 text-tp-cream font-semibold text-xs uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-tp-orange transition-colors">Home</a>
          <a href="#" className="hover:text-tp-orange transition-colors">Activities</a>
          <a href="https://thirdplacemalaga.com/calendar" className="hover:text-tp-orange transition-colors">Calendar</a>
          <a href="#" className="hover:text-tp-orange transition-colors text-tp-orange">EN</a>
        </div>
        <a href="https://wa.me/34624319964" target="_blank" rel="noopener noreferrer" className="bg-tp-green text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-tp-orange transition-all tracking-widest">
          WHATSAPP
        </a>
      </nav>

      <div id="main-content">
        {/* 1. Hero Section (Updated with EXACT image) */}
        <Hero />

        {/* 2. Main Intro - Capturing your exact text and "Soul" */}
        <section className="py-32 px-6 bg-tp-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-10 leading-tight">
              A community in Malaga centered around <br />
              <span className="text-tp-orange italic">movement, body-awareness, creativity, connection and laughter.</span>
            </h2>
            <p className="text-2xl text-tp-cream/90 mb-12 font-light">Join us for an event today 🙂</p>
            
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-tp-orange/30 to-transparent my-16" />
            
            <div className="space-y-10 text-xl text-tp-cream/70 leading-relaxed font-light">
              <p>
                Connect with like-minded individuals passionate about community, conscious living, 
                movement, body-awareness, creativity, connection and laughter.
              </p>
              <p>
                Whether you’re seeking new friendships, exploring spiritual practices, 
                looking for a new creative hobby, we welcome you! <br />
                <span className="text-white font-medium italic">Let’s build a supportive network, share ideas, and discover the beauty of Malaga together.</span>
              </p>
            </div>
            
            <div className="mt-20">
              <a 
                href="https://thirdplacemalaga.com/calendar"
                className="inline-block bg-tp-orange text-tp-black px-12 py-5 rounded-full text-xl font-bold hover:bg-white transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                Join us for an event today 🙂
              </a>
              <div className="mt-8">
                <a href="https://thirdplacemalaga.com/calendar" className="text-tp-orange hover:underline underline-offset-8 decoration-2 transition-all font-medium">
                  Check our calendar for the next event
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Placeholder for Activities - (Same as before but with your specific activity list) */}
        <section className="py-32 px-6 bg-tp-black/50 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-white text-center mb-20">The Experience</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Contact Improvisation', 'Sacred Connections', 'Breath and Release', 
                'Men’s Circle', 'Improv Theatre', 'Conscious Playfights'
              ].map((activity) => (
                <div key={activity} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-tp-orange/50 transition-all cursor-pointer">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-tp-orange transition-colors">{activity}</h4>
                  <p className="text-tp-cream/40 uppercase tracking-widest text-xs font-bold">Discover More →</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer - COMPREHENSIVE MATCH to your provided copy */}
      <footer className="bg-tp-black pt-32 pb-16 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-20">
          
          {/* About Section */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">About</h5>
            <ul className="space-y-4 text-tp-cream/70 text-lg">
              <li><a href="https://thirdplacemalaga.com/thirdplacemalaga" className="hover:text-white transition-colors">Third Place Málaga</a></li>
              <li><a href="https://thirdplacemalaga.com/theteam" className="hover:text-white transition-colors">The Team</a></li>
              <li><a href="https://thirdplacemalaga.com/contact" className="hover:text-white transition-colors font-bold text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Location Section - Precise Address */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">Location</h5>
            <div className="text-tp-cream/70 text-lg leading-relaxed">
              <p className="font-bold text-white mb-2 italic">Espacio Bohemia Málaga</p>
              <p>Calle Leopoldo Alas Clarín 3,</p>
              <p>planta baja, Local D (a la derecha del No. 3),</p>
              <p>Málaga, Spain</p>
            </div>
          </div>

          {/* Social & Contact - Direct Links */}
          <div>
            <h5 className="font-bold text-tp-orange text-xl mb-8 uppercase tracking-widest">Connect</h5>
            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:thirdplacemalaga@gmail.com" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">Mail</a>
              <a href="https://wa.me/34624319964" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">WhatsApp</a>
              <a href="https://www.instagram.com/thirdplacemalaga/" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">Instagram</a>
              <a href="https://www.meetup.com/thirdplacemalaga/" className="bg-white/5 p-4 rounded-xl text-center hover:bg-tp-green transition-all">Meetup</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-tp-cream/40 text-xs tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} thirdplacemalaga | Crafted for Connection
          </p>
          <div className="flex gap-4 items-center">
            <img src="https://thirdplacemalaga.com/wp-content/plugins/translatepress-multilingual/assets/flags/4x3/en_GB.svg" alt="English" className="w-6 h-auto rounded-sm opacity-60" />
            <span className="text-tp-cream/40 text-xs font-bold uppercase tracking-widest">English</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
