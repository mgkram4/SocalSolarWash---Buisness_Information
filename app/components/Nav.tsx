"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu p-2 hover: space-y-2 menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-20"
          >
            <Link href="/">Home</Link>
            <Link href="/Read">Benifts</Link>
            <Link href="/Quote">Quote</Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center  rounded-xl  ">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={200} height={150} />
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
