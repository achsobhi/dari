import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "140px 40px 10px 40px",
        position:"relative",
        bottom:"0",
        marginTop:"80px"
      }}
      className="bg-[#3B3363] text-white py-8 px-6 fixed bottom-0 left-0 right-0  z-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <span>
            <img src="logo.png" alt="" />
          </span>
          <div className="flex space-x-3 mt-3">
            <Link href="#" className="text-blue-500 text-2xl">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-pink-500 text-2xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white text-2xl">
              <FaXTwitter />
            </Link>
          </div>
          <button className="border border-gray-300 text-white px-4 py-1 mt-4 hover:bg-gray-600">
            Contactez-nous
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Navigation</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Aide</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Règlement
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Conditions d'utilisation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Gestion compte
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Offres et services
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{
        "border-color": "#716D6D",
        marginTop:"20px"
      }}/>
      <div className="text-center text-gray-400 mt-6 text-sm">
        © 2025 RentDari. Tous droits réservés.
      </div>
    </footer>
  );
}
