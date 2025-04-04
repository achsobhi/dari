"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/image1.jpeg",
    title: "Appartement moderne avec vue sur la mer",
    location: "El Jadida, Sidi Bouzid",
    size: "80 m²",
    beds: 2,
    baths: 1,
    price: "750 MAD / nuit",
    rating: 4.8,
    reviews: 120,
  },
  {
    image: "/images/image2.jpeg",
    title: "Villa luxueuse avec piscine",
    location: "Casablanca, Anfa",
    size: "200 m²",
    beds: 4,
    baths: 3,
    price: "2500 MAD / nuit",
    rating: 4.9,
    reviews: 98,
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === slides.length - 1) {
        setIndex(0); // Reset to first slide when it reaches the end
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [index]); // Depend on index to trigger re-run

  return (
    <div className=" relative w-full overflow-hidden m-9">
      <div
        className="flex justify-center items-center rounded-xl my-10"
        style={{
          height: "85px",
          backgroundColor: "rgba(255, 94, 91, 0.2)",
        }}
      >
        {" "}
        annonces les plus populaires
      </div>
      <div
        className="flex transition-transform mx-3 duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-[500px] flex bg-gray-100 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            {/* Image */}
            <div className="w-1/2">
              <Image
                src={slide.image}
                alt={slide.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-around w-1/2 p-5 bg-cyan-100">
              <h3 className="text-lg font-bold">{slide.title}</h3>
              <p className="text-gray-600">{slide.location}</p>
              <p className="mt-1">{slide.size}</p>
              <p className="flex items-center mt-1">
                <span className="mr-2">🛁 {slide.baths}</span>
                <span>🛏️ {slide.beds}</span>
              </p>
              <p className="mt-2 font-bold">{slide.price}</p>
              <p className="mt-1 text-yellow-500">
                ⭐ {slide.rating} ({slide.reviews} avis)
              </p>
              <button className="mt-3 w-52 bg-red-500 text-white mx-auto px-4 py-2 rounded-lg">
                Voir l'annonce
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}