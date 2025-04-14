"use client";
import React, { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      style={{
        height: "100px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
      className="flex items-center justify-between bg-white shadow-md p-4 fixed top-0 left-0 right-0 h-16 z-50"
    >
      <button
        onClick={() => setShow(true)}
        className="md:hidden font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <h1>
        <Link href="/" className="flex items-center text-xl p-4">
          <span>
            <img src="logo.png" alt="Logo" />
          </span>
        </Link>
      </h1>

      {/* Desktop Navigation */}
      <div
        style={{ fontFamily: "Inria Serif" }}
        className="hidden md:flex space-x-8"
      >
        <Link
          href="/"
          className={clsx(
            "box link font-medium cursor-pointer",
            pathname === "/"
            ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
            : "text-[#3B3561]"              
          )}
        >
          Accuiel
        </Link>
        <Link
          href="/faqs"
          className={clsx(
            "box link font-medium cursor-pointer",
            pathname === "/faqs"
            ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
            : "text-[#3B3561]"          )}
        >
          FAQ’s
        </Link>
        <Link
          href="/aboutUs"
          className={clsx(
            "box link font-medium cursor-pointer",
            pathname === "/aboutUs"
            ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
              : "text-[#3B3561]"
          )}
        >
          À propos
        </Link>
        <Link
          href="/contactezNous"
          className={clsx(
            "box link font-medium cursor-pointer",
            pathname === "/contactezNous"
              ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
              : "text-[#3B3561]"
          )}
        >
          contactez-nous
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 p-4">
        <Link href="/saves" className="flex items-center text-gray-600 cursor-pointer">
          <img src="saves.png" alt="" width="30px" />
        </Link>
        <Link href="/notification" className="flex items-center text-gray-600 cursor-pointer">
          <img src="notification.png" alt="" width="30px" />
        </Link>
        <Link href="/user" className="flex items-center text-gray-600 cursor-pointer">
          <img src="user.png" alt="" width="30px" />
        </Link>
      </div>

      {/* Mobile Side Menu */}
      <div
        onClick={() => setShow(false)}
        className={clsx(
          "h-screen w-sm p-3 bg-gray-400 rounded-tr-lg rounded-br-lg absolute left-0 top-0 transition duration-300",
          {
            "translate-0": show === true,
            "translate-x-[-100%]": show === false,
          }
        )}
      >
        <div className="flex justify-end p-2">
          <button onClick={() => setShow(false)} className="cursor-pointer">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 40.783203 7.2714844 A 2 2 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 10.714844 7.8867188 A 2 2 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 7.8867188 39.386719 A 2 2 0 1 0 10.714844 42.214844 L 25.050781 27.878906 39.386719 42.214844 A 2 2 0 1 0 42.214844 39.386719 L 27.878906 25.050781 42.214844 10.714844 A 2 2 0 0 0 40.783203 7.2714844 z"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className={clsx(
              "box link font-medium cursor-pointer",
              pathname === "/"
              ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
              : "text-[#3B3561]"            )}
          >
            Accuiel
          </Link>
          <Link
            href="/faqs"
            className={clsx(
              "box link font-medium cursor-pointer",
              pathname === "/faqs"
              ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
              : "text-[#3B3561]"            )}
          >
            FAQ’s
          </Link>
          <Link
            href="/aboutUs"
            className={clsx(
              "box link font-medium cursor-pointer",
              pathname === "/aboutUs"
              ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
              : "text-[#3B3561]"            )}
          >
            À propos
          </Link>
          <Link
            href="/contactezNous"
            className={clsx(
              "box link font-medium cursor-pointer",
              pathname === "/contactezNous"
              ? " font-semibold border-t-2 border-b-2 text-[#3B3561] border-[#3B3561] pt-1 pb-1"
              : "text-[#3B3561]"            )}
          >
            contactez-nous
          </Link>
        </div>
      </div>

      <style jsx>{`
        .link {
          font-size: 16px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
