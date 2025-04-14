"use client";
import React from "react";
import { useState } from "react";
import Carousel from "./carousel";
import FastFiltring from "./fastFiltring";

export default function Search() {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [rentType, setRentType] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Add your search logic here
    // For now, just log the selected values
    console.log("City:", city);
    console.log("Price:", price);
    console.log("Rent Type:", rentType);
  };

  return (
    <div
      style={{
        position: "relative",
      }}
      className=" mb-36 flex flex-col items-center space-y-8 p-6  gap-14"
    >
      <h2 className=" title text-lg md:text-xl font-semibold ">
        Vous recherchez une location ?
      </h2>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col items-center">
          <label className="text-sm italic text-gray-700">
            Où le veux-tu ?
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border rounded-l-full px-4 py-2 w-48"
          >
            <option value="">Selectionnez la ville</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Marrakech">Marrakech</option>
          </select>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-sm italic text-gray-700">
            Prix approximatif
          </label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border  px-4 py-2 w-48"
          >
            <option value="">Choisir votre prix</option>
            <option value="500-1000">500 - 1000 MAD</option>
            <option value="1000-2000">1000 - 2000 MAD</option>
            <option value="2000+">2000+ MAD</option>
          </select>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-sm italic text-gray-700">
            Quel type de loyer ?
          </label>
          <select
            value={rentType}
            onChange={(e) => setRentType(e.target.value)}
            className="border rounded-r-full px-4 py-2 w-48"
          >
            <option value="">Choisir le type</option>
            <option value="Appartement">Appartement</option>
            <option value="Maison">Maison</option>
          </select>
        </div>

        <button
          className="bg-[#3B3561] text-white rounded-full px-6 mt-5 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <FastFiltring />

      <div
        className="flex flex-col gap-4"
      >
        <h2 className="title  text-lg md:text-xl font-semibold">
          Où souhaitez-vous louer votre bien ?
        </h2>
        <button className=" animated-button w-52 m-auto">
          <span>Publier une annonce</span>
          <span></span>
        </button>
      </div>
    </div>
  );
}