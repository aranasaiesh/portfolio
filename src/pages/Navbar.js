import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="mx-auto px-4 py-2 max-w-7xl sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex sm:gap-48">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center font-bold text-lg"
            >
              <h1>LOGO</h1>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8 items-center ">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/skills" className="nav-link">
                Skills
              </Link>
              <Link href="/service" className="nav-link">
                Service
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="flex pt-2 pb-3 space-x-4">
            <Link href="/" className="nav-link-mobile">
              Home
            </Link>
            <Link href="/about" className="nav-link-mobile">
              About
            </Link>
            <Link href="/skills" className="nav-link-mobile">
              Skills
            </Link>
            <Link href="/service" className="nav-link-mobile">
              Service
            </Link>
            <Link href="/contact" className="nav-link-mobile">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
