"use client"; // Required if using Next.js App Router

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center space-y-16 p-10">
        <div
        className="flex w-full justify-center items-center rounded-xl  "
        style={{
          height: "85px",
          backgroundColor: "rgba(255, 94, 91, 0.2)",
        }}
      >
        {" "}
        Ce que nos utilisateurs pensent de nous ?
      </div>
      <div
        className="self-start w-[700px] bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
        data-aos="fade-right"
      >
        <img src="/user1.jpg" alt="User" className="w-xl h-12 rounded-full" />
        <div >
          <h3 className="font-bold">Kobe Brayent</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐ 21/03/2025</p>
          <p className="text-gray-500 italic w-96">
            "Super expérience, le site est simple à utiliser et efficace !"
          </p>
        </div>
      </div>

      {/* Second Feedback - Right */}
      <div
        className="self-end w-[700px] bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img src="/user2.jpg" alt="User" className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-bold">Achraf Cy</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐ 11/03/2024</p>
          <p className="text-gray-500 italic">
            "Super expérience, le site est simple à utiliser et efficace !"
          </p>
        </div>
      </div>

      {/* Third Feedback - Left */}
      <div
        className="self-start w-[700px] bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <img src="/user3.jpg" alt="User" className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-bold">Kobe Brayent</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐ 21/03/2025</p>
          <p className="text-gray-500 italic">
            "Super expérience, le site est simple à utiliser et efficace !"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
