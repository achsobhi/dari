 import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="py-12 m-11">
      <div
        className="relative  bg-cover bg-center py-24 text-center "
      >
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-3xl text-[#00CECB] md:text-4xl font-bold mb-4">Qui sommes-nous ?</h1>
          <p className="text-lg text-[#3B3561] md:text-xl leading-relaxed font-josefin-sans mt-7">
            Nous sommes une plateforme innovante qui facilite la location
            d'appartements en connectant directement les propriétaires et les
            locataires, sans intermédiaire. Notre objectif est de rendre la
            recherche et la réservation de logements plus simple, rapide et
            sécurisée.
          </p>
        </div>
      </div>

      {/* Notre mission (Our Mission) */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-semibold text-[#3B3561] mb-6">Notre mission</h2>
          <p className="text-lg text-[#3B3561] leading-relaxed mt-7">
            Offrir une expérience de location transparente et sans stress en
            permettant aux utilisateurs de trouver ou publier des annonces en
            toute confiance.
          </p>
        </div>
      </section>

      {/* Pourquoi nous choisir ? (Why Choose Us?) */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-semibold text-[#3B3561] mb-8">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-7">
            <div className="bg-[#CCF5F5] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold  mb-2">Large sélection</h3>
              <p className="text-gray-600 text-sm">
                Des milliers d'annonces vérifiées pour trouver votre logement idéal.
              </p>
            </div>
            <div className="bg-[#CCF5F5] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold  mb-2">Matching intuitif</h3>
              <p className="text-gray-600 text-sm">
                Un système de recommandation personnalisé pour des recherches plus efficaces.
              </p>
            </div>
            <div className="bg-[#CCF5F5] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold  mb-2">Sécurité garantie</h3>
              <p className="text-gray-600 text-sm">
                Vérification des annonces et des profils pour des transactions en toute confiance.
              </p>
            </div>
            <div className="bg-[#CCF5F5] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold  mb-2">Support réactif</h3>
              <p className="text-gray-600 text-sm">
                Notre équipe est disponible pour vous assister à chaque étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre vision (Our Vision) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-semibold text-[#3B3561] mb-6">Notre vision</h2>
          <p className="text-lg text-[#3B3561] leading-relaxed mt-7">
            Créer une communauté de confiance où la location de logements devient
            une expérience fluide et agréable pour tous.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16  text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-xl text-gray-700 ">
            Prêt à trouver votre prochain logement ou à louer votre bien ?
          </h2>
          <button className="cursor-pointer bg-[#3B3561] hover:bg-[#221f38] text-white font-bold py-3 px-6 rounded-full transition duration-300 mt-7">
            Commencez dès maintenant
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;