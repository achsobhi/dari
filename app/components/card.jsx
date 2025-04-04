'use client'
import React, { useState } from "react";
import Image from "next/image";

const AnnonceCard = ({ annonce }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
    
      <div className="relative">
        <Image
          src={annonce.images[currentImageIndex]}
          alt={annonce.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
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
          {annonce.owner} • {annonce.date}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 font-bold">⭐ {annonce.rating}</span>
          <span className="text-gray-500 text-sm">{annonce.size}</span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-3">🛏️ {annonce.beds}</span>
          <span>🛁 {annonce.baths}</span>
        </div>
        <p className="mt-2 text-lg font-semibold">
          MAD {annonce.price} <span className="text-sm text-gray-500">for 1 night</span>
        </p>
      </div>
    </div>
  );
};

export default AnnonceCard;
