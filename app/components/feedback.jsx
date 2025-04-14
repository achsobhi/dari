"use client"; // Required if using Next.js App Router

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewForm from "./addFAQ";
import Seperator from "./seperator";

const Feedback = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const feedbackSpacing = "6rem"; // Adjust this value for consistent spacing

  return (
    <div className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <Seperator title={"Ce que nos utilisateurs pensent de nous ?"} />

        <div className="relative w-full flex flex-col items-center gap-y-12 md:gap-y-16 lg:gap-y-20 mt-8 md:mt-12 lg:mt-16">
          <div
            className="w-full max-w-md md:max-w-lg lg:max-w-2xl bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 self-start"
            data-aos="fade-right"
          >
            <img src="/user1.jpg" alt="User" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">Kobe Brayent</h3>
              <p className="text-yellow-500 text-sm md:text-base">⭐⭐⭐⭐⭐ 21/03/2025</p>
              <p className="text-gray-500 italic w-full md:w-96 text-sm md:text-base">
                "Super expérience, le site est simple à utiliser et efficace !"
              </p>
            </div>
          </div>

          <div
            className="w-full max-w-md md:max-w-lg lg:max-w-2xl bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 self-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img src="/user2.jpg" alt="User" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">Achraf Cy</h3>
              <p className="text-yellow-500 text-sm md:text-base">⭐⭐⭐⭐⭐ 11/03/2024</p>
              <p className="text-gray-500 italic text-sm md:text-base">
                "Super expérience, le site est simple à utiliser et efficace !"
              </p>
            </div>
          </div>

          <div
            className="w-full max-w-md md:max-w-lg lg:max-w-2xl bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 self-start"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img src="/user3.jpg" alt="User" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">Kobe Brayent</h3>
              <p className="text-yellow-500 text-sm md:text-base">⭐⭐⭐⭐⭐ 21/03/2025</p>
              <p className="text-gray-500 italic text-sm md:text-base"></p>
            </div>
          </div>

          <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;