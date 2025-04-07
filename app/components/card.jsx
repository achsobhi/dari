"use client";
import React, { useState } from "react";
import Image from "next/image";

const AnnonceCard = ({ annonce }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-sm w-[300px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="relative">
        {/* Display the current image */}
        <Image
          key={annonce.images[currentImageIndex].id}
          src={annonce.images[currentImageIndex].path}
          alt={"Image"}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        
        {/* Thumbnail navigation */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {annonce.images.map((_, i) => (
            <div
              key={i}
              onClick={() => handleImageChange(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                i === currentImageIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold">{annonce.location}</h3>
        <p className="text-gray-500">
          {annonce.user.nom} • {annonce.user.role}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 font-bold">⭐ {annonce.rating}</span>
          <span className="text-gray-500 text-sm">{annonce.surface}</span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-3">🛏️ {annonce.nb_chambre}</span>
          <span>🛁 {annonce.nb_douche}</span>
        </div>
        <p className="mt-2 text-lg font-semibold">
          MAD {annonce.prix}{" "}
          <span className="text-sm text-gray-500">for 1 night</span>
        </p>
      </div>
    </div>
  );
};

export default AnnonceCard;
