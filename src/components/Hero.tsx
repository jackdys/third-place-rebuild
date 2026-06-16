import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Nature Background - Exact image from your provided copy */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://thirdplacemalaga.com/wp-content/uploads/2025/08/actionvance-g41ZkoO75rE-unsplash-scaled.jpg" 
          alt="Movement and nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl text-white font-light italic mb-4 drop-shadow-lg opacity-90">
          "You’re almost there"
        </h2>
        <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter drop-shadow-2xl">
          Third Place Málaga
        </h1>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="https://thirdplacemalaga.com/calendar"
            className="bg-tp-green text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-tp-orange transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Check our calendar
          </a>
          <button className="text-white border-b-2 border-white/50 hover:border-white transition-all pb-1 text-lg font-medium">
            Discover Activities
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-60">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
