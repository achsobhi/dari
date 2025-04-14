"use client";
import { Pencil, ImagePlus, Home } from 'lucide-react';

const PromoteAnnonce = () => {
  return (
    <div className="bg-[#caf0f8] rounded-lg p-6 md:p-10 text-center max-w-full md:max-w-2xl mx-auto my-8 md:my-12 flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-bold mb-4">
        Gagnez de l’argent en louant votre appartement !
      </h2>
      <p className="text-gray-700 mb-6 md:mb-8">
        Mettez votre appartement en location et commencez à gagner dès aujourd’hui.
      </p>

      <div className="flex justify-center items-center gap-4 md:gap-6 mb-6 md:mb-8 w-full">
        <Pencil className="w-8 h-8 md:w-10 md:h-10 text-gray-500" />
        <span className="text-2xl">→</span>
        <ImagePlus className="w-8 h-8 md:w-10 md:h-10 text-gray-500" />
        <span className="text-2xl">→</span>
        <Home className="w-8 h-8 md:w-10 md:h-10 text-gray-500" />
      </div>

      <button className="bg-[#ff5e5b] text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-red-500 transition text-lg">
        Publier une annonce
      </button>
    </div>
  );
};

export default PromoteAnnonce;