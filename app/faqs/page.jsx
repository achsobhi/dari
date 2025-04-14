"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Or any other icon library
import Link from "next/link";

const FAQPage = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      category: "Général",
      questions: [
        {
          question: "Comment ça marche ?",
          answer: (
            <>
              Notre plateforme simplifie la location d'appartements en connectant
              directement propriétaires et locataires, sans intermédiaire.
            </>
          ),
        },
        {
          question: "Cette plateforme est-elle gratuite ?",
          answer: "Les conditions d'utilisation concernant les frais sont détaillées sur notre page dédiée.",
        },
        {
          question: "Comment contacter un propriétaire ?",
          answer: "Une fois que vous avez trouvé un appartement qui vous intéresse, un bouton 'Contacter le propriétaire' sera disponible sur la page de l'annonce.",
        },
        {
          question: "Comment puis-je créer un compte ?",
          answer: "Vous pouvez créer un compte en cliquant sur le bouton 'S'inscrire' en haut à droite de la page.",
        },
      ],
    },
    {
      category: "Annonces et Propriétaires",
      questions: [
        {
          question: "Comment publier une annonce ?",
          answer: "Les propriétaires peuvent publier une annonce en se connectant à leur compte et en cliquant sur 'Publier une nouvelle annonce'.",
        },
        {
          question: "Quels types de documents dois-je fournir pour prouver que je suis propriétaire ?",
          answer: "Les documents acceptés incluent généralement un titre de propriété, une facture de services publics récente, etc.",
        },
      ],
    },
    {
      category: "Réservations",
      questions: [
        {
          question: "Comment faire une réservation ?",
          answer: "Pour réserver un appartement, cliquez sur le bouton 'Réserver' sur la page de l'annonce et suivez les étapes indiquées.",
        },
        {
          question: "Que faire si je dois annuler ma réservation ?",
          answer: "Les politiques d'annulation varient en fonction du propriétaire. Veuillez consulter les conditions d'annulation spécifiques à la réservation.",
        },
      ],
    },
  ];

  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
    setOpenQuestion(null); // Close any open questions when a category is toggled
  };

  const toggleQuestion = (questionIndex, categoryName) => {
    setOpenQuestion(
      openQuestion === `${categoryName}-${questionIndex}`
        ? null
        : `${categoryName}-${questionIndex}`
    );
  };

  return (
    <div className="py-12 m-11">
      <div className="relative py-24 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-[#00CECB]">
            Pour en savoir plus, consultez notre FAQ
          </h1>
          <p className="text-lg text-gray-700">
            Choisissez parmi les catégories ci-dessous pour trouver les réponses
            que vous cherchez
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-8 p-4 md:p-8 bg-white rounded-lg shadow-md">
        {faqData.map((categoryItem) => (
          <div key={categoryItem.category} className="mb-7">
            <div
              className="flex justify-between items-center py-3 px-4 bg-gray-200 rounded-t-lg cursor-pointer mt-2 "
              onClick={() => toggleCategory(categoryItem.category)}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {categoryItem.category}
              </h2>
              {openCategory === categoryItem.category ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
            {openCategory === categoryItem.category && (
              <div className="border border-gray-300 rounded-b-lg">
                {categoryItem.questions.map((questionItem, index) => (
                  <div key={index} className="border-b border-gray-300">
                    <div
                      className="flex justify-between items-center py-3 px-4 cursor-pointer"
                      onClick={() =>
                        toggleQuestion(index, categoryItem.category)
                      }
                    >
                      <h3 className="text-lg font-medium text-gray-700">
                        {questionItem.question}
                      </h3>
                      {openQuestion === `${categoryItem.category}-${index}` ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {openQuestion === `${categoryItem.category}-${index}` && (
                      <div className="py-3 px-4 text-gray-600 bg-gray-50">
                        {questionItem.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-12 p-4 md:p-8 text-center ">
        <h2 className="text-lg text-gray-800 ">
          Vous ne trouvez pas ce que vous cherchez ?
        </h2>
        <Link href="/contactezNous" className="bg-[#3B3561] hover:bg-[#1c192d] text-white font-bold py-3 px-6 rounded-full transition duration-300 relative top-7">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};

export default FAQPage;
