'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2b2b2d] via-[#1a1a1c] to-[#2b2b2d]">
      {/* Decorative paint strokes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 relative">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* House shape */}
              <path
                d="M100 40 L160 80 L160 160 L40 160 L40 80 Z"
                fill="none"
                stroke="white"
                strokeWidth="3"
              />
              {/* Roof */}
              <path d="M30 80 L100 30 L170 80" fill="none" stroke="white" strokeWidth="3" />
              {/* Paint roller */}
              <g transform="translate(120, 100)">
                <rect x="0" y="0" width="40" height="15" rx="3" fill="#ef4444" />
                <rect x="10" y="15" width="20" height="3" fill="#fbbf24" />
                <line x1="20" y1="18" x2="20" y2="50" stroke="#60a5fa" strokeWidth="3" />
                <circle cx="20" cy="50" r="3" fill="#1e40af" />
              </g>
              {/* Color sections */}
              <rect x="50" y="100" width="20" height="50" fill="#ef4444" opacity="0.8" />
              <rect x="70" y="100" width="20" height="50" fill="#fbbf24" opacity="0.8" />
              <rect x="90" y="100" width="20" height="50" fill="#60a5fa" opacity="0.8" />
              <rect x="110" y="100" width="20" height="50" fill="#1e40af" opacity="0.8" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-6">
          {t('hero.subtitle')}
        </p>
        
        <p className="text-xl md:text-2xl text-yellow-400 mb-12 font-semibold italic">
          "{t('hero.slogan')}"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50 min-w-[200px]"
          >
            {t('hero.viewPortfolio')}
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 min-w-[200px]"
          >
            {t('hero.contactMe')}
          </button>
        </div>

        {/* Contact info quick access */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-gray-400">
          <a href="tel:0718639445" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>0718639445</span>
          </a>
          
          <a href="mailto:imachrafsobhi@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>imachrafsobhi@gmail.com</span>
          </a>
          
          <a href="https://api.whatsapp.com/send?phone=212718639445" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
