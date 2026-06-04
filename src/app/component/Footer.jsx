"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at top, rgba(99,102,241,0.25), transparent 40%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Programming Hero
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-8 max-w-sm">
              The AI-native career platform. Built for people who
              take their work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-10">
              <Link
                href="#"
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-lg bg-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaPinterestP size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-indigo-400">
              Product
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Job discovery
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Worker AI
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Companies
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-indigo-400">
              Navigations
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Help center
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Career library
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-indigo-400">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>
            Copyright 2024 — Programming Hero
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition">
              Terms & Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}