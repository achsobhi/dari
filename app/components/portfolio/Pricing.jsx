'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t('pricing.packages.basic.title'),
      price: t('pricing.packages.basic.price'),
      unit: t('pricing.perRoom'),
      features: t('pricing.packages.basic.features'),
      color: 'from-blue-500 to-blue-600',
      popular: false,
    },
    {
      name: t('pricing.packages.standard.title'),
      price: t('pricing.packages.standard.price'),
      unit: '',
      features: t('pricing.packages.standard.features'),
      color: 'from-red-500 to-red-600',
      popular: true,
    },
    {
      name: t('pricing.packages.premium.title'),
      price: t('pricing.packages.premium.price'),
      unit: t('pricing.perSqm'),
      features: t('pricing.packages.premium.features'),
      color: 'from-yellow-500 to-yellow-600',
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#2b2b2d]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-xl transition-all duration-300 ${
                pkg.popular
                  ? 'transform md:-translate-y-4 ring-4 ring-red-500'
                  : 'hover:-translate-y-2'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ {t('pricing.contactForQuote')}
                  </span>
                </div>
              )}

              {/* Package name */}
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-start justify-center gap-2">
                  <span className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pkg.color}`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 text-lg mt-2">
                    {t('pricing.currency')}
                  </span>
                </div>
                {pkg.unit && (
                  <p className="text-gray-400 mt-2">{pkg.unit}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  {t('pricing.startingFrom')}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className={`w-6 h-6 flex-shrink-0 mt-0.5 text-transparent bg-clip-text`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" className={`stroke-current bg-gradient-to-r ${pkg.color}`} style={{stroke: pkg.color.includes('red') ? '#ef4444' : pkg.color.includes('yellow') ? '#eab308' : '#3b82f6'}} />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${pkg.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
              >
                {t('pricing.contactForQuote')}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 {t('pricing.contactForQuote')}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0718639445"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0718639445
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=212718639445"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
