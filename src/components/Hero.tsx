import { useTranslation } from 'react-i18next'

interface Props {
  onCalendarOpen: () => void
}

const Hero = ({ onCalendarOpen }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Nature Background */}
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
            className="bg-[#c49a68] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-tp-orange transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {t('hero.calendar')}
          </button>
          <button className="text-white border-b-2 border-white/50 hover:border-white transition-all pb-1 text-lg font-medium">
            {t('hero.discover')}
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
