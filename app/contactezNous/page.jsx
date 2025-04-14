import Link from "next/link";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4 py-10  text-gray-800 font-sans m-11">
      <h1 className="text-3xl font-medium mb-4 text-center text-[#00CECB]">Contactez-nous</h1>
      <p className="text-center max-w-xl text-gray-600 mb-4">
        Votre message sera transmis au service concerné. <br />
        Vous pouvez également trouver des réponses à vos questions ici{" "}
        <Link href="/faqs" className="text-[#00CECB] underline">
          FAQs
        </Link>
      </p>

      <form className="mt-10 w-full max-w-2xl flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              <span className="text-red-600">*</span> Prénom
            </label>
            <input
              type="text"
              placeholder="Tapez votre prénom ici"
              className="w-full border rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00CECB]"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              placeholder="Tapez votre nom ici"
              className="w-full border rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00CECB]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 ">
            <span className="text-red-600">*</span> Email
          </label>
          <input
            type="email"
            placeholder="Tapez votre email ici"
            className="w-full border rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00CECB]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 ">
            <span className="text-red-600">*</span> Confirmer l'email
          </label>
          <input
            type="email"
            placeholder="Tapez votre email ici"
            className="w-full border rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00CECB]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 ">
            <span className="text-red-600">*</span> Adresse
          </label>
          <input
            type="text"
            placeholder="Tapez votre adresse ici"
            className="w-full border rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00CECB]"
          />
        </div>

        <div>
          <label className="block text-center text-lg mb-2">Écrivez-nous</label>
          <textarea
            rows="6"
            placeholder="Tapez votre message ici"
            className="w-full border rounded-md px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-[#00CECB]"
          />
        </div>

        <div className="flex justify-center cursor-pointer">
          <button
            type="submit"
            className="cursor-pointer bg-[#3B3561] hover:bg-[#221f38] text-white px-8 py-2 rounded-full  transition"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsPage;
