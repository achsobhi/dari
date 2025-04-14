import React from "react";
import Seperator from "./seperator";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "security.png", // You can use an actual icon component or image here
      title: "Sécurisé & Fiable",
      description: "Toutes les transactions sont sécurisées et vérifiées.",
    },
    {
      icon: "handshake-heart.png", // You can use an actual icon component or image here
      title: "Louez sans intermédiaire",
      description:
        "Effectuez vos transactions directement entre propriétaires et locataires, sans frais d'agence.",
    },
    {
      icon: "sand-watch.png", // You can use an actual icon component or image here
      title: "Réservez en quelques clics",
      description:
        "Un processus fluide pour louer rapidement, sans complications.",
    },
  ];

  return (
    <div className="bg-white py-16 m-11">
        <Seperator title={'Pourquoi nous choisir ?'}/>
      <div className="container mx-auto text-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#CCF4F3]  rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl text-teal-500 mb-4 flex justify-center">
                <img src={`/${reason.icon}`} alt={reason.title} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
