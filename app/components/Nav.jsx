"use client";
import React, { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
const Nav = () => {
  const [show, setShow] = useState(false);
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
      className="flex items-center justify-between bg-white shadow-md  p-4 "
    >
      <button
        onClick={() => setShow(true)}
        className="md:hidden font-medium text-gray-700 hover:text-blue-600 cursor-pointer "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <h1>
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-blue-600 hover:text-blue-800"
        >
          <span>
            <img src="logo.png" alt="" />
          </span>
        </Link>
      </h1>
      <div
        style={{
          fontFamily: "Inria Serif",
        }}
        className="hidden md:flex space-x-8 "
      >
        <Link
          href="/"
          className=" link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
        >
          Accuiel
        </Link>
        <Link
          href="/annonce"
          className=" link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
        >
          Annonce
        </Link>
        <Link
          href="/faqs"
          className=" link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
        >
          FAQ’s
        </Link>
        <Link
          href="/a propos"
          className=" link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
        >
          À propos
        </Link>
        <Link
          href="/contactezNous"
          className=" link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
        >
          contactez-nous
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <span className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg
            className="h-5 w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            stroke="currentColor"
            viewBox="0 0 50 50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"
            ></path>
          </svg>
          <span className="hidden sm:inline">Saves</span>
        </span>
        <span className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="hidden sm:inline">Notif</span>
        </span>
        <span className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="hidden sm:inline">Profile</span>
        </span>
      </div>

      <div
  className={clsx(
    "h-screen w-sm p-3 bg-gray-400 rounded-tr-lg rounded-br-lg absolute left-0 top-0 transition duration-300 ",
    {
      "translate-0": show == true,
      "translate-x-[-100%]": show == false,
    }
  )}
>
  <div className=" flex justify-end p-2 ">
    <button onClick={() => setShow(false)} className=" cursor-pointer">
      <svg
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 50"
      >
        <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
      </svg>
    </button>
  </div>

  <div className="flex flex-col space-y-4">
    <Link
      href="/"
      className="link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
    >
      Accuiel
    </Link>
    <Link
      href="/annonce"
      className="link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
    >
      Annonce
    </Link>
    <Link
      href="/faqs"
      className="link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
    >
      FAQ’s
    </Link>
    <Link
      href="/a propos"
      className="link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
    >
      À propos
    </Link>
    <Link
      href="/contactezNous"
      className="link font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
    >
      contactez-nous
    </Link>
  </div>
</div>

      <style>
        {`
        .link{
        font-size:16px
        }
        
        `}
      </style>
    </nav>
  );
};

export default Nav;
