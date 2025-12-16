import { useState } from "react";
import CmpLogo from "../assets/Biacsyslogo.svg";
import { Link } from "react-router-dom";
import Button from "./Ui/button";
// import IconButton from "./Icon-Button";
// import { FiSun } from "react-icons/fi";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="logo-container flex items-center gap-2">
            <img className="h-8 w-8" src={CmpLogo} alt="Biacsys logo" />
            <h3 className="text-gray-600 font-bold text-xl sm:text-2xl">Biacsys</h3>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link className="text-gray-700 hover:text-black" to="/">Home</Link>
            <Link className="text-gray-700 hover:text-black" to="/services">Services</Link>
            <Link className="text-gray-700 hover:text-black" to="/about">About</Link>
            <Button to="/contact" padding="10px 24px">Contact Us</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-4 py-3">
            <Link className="block py-2 text-gray-700" to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link className="block py-2 text-gray-700" to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link className="block py-2 text-gray-700" to="/about" onClick={() => setOpen(false)}>About</Link>
            <div className="pt-2">
              <Button to="/contact" padding="10px 24px">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
