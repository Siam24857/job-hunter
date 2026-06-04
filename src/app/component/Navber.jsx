"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient, useSession } from "../lib/auth-client";

export default function Navbar() {
    

const { data: session, status } = useSession()
  const handlelogout = async () => {
    await authClient.signOut();
  }

  const {data: seiosn, isPending} = useSession()
  
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/20 backdrop-blur-xl border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-1 py-2 lg:px-12">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED] shadow-lg shadow-violet-500/30">
            <span className="text-lg font-bold text-white">P</span>
          </div>

          <div className="leading-none">
            <h1 className="text-[22px] font-semibold tracking-tight text-white">
              Programming Hero
            </h1>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <Link
            href="/jobs"
            className="text-sm font-medium text-white transition duration-300 hover:text-violet-400"
          >
            Browse Jobs
          </Link>

          <Link
            href="/company"
            className="text-sm font-medium text-white transition duration-300 hover:text-violet-400"
          >
            Company
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium text-white transition duration-300 hover:text-violet-400"
          >
            Pricing
          </Link>

          <div className="h-6 w-px bg-white/10" />

{session ? (
            <Link
            onClick={handlelogout}
              href="/"
              className="text-sm font-semibold text-violet-400 transition duration-300 hover:text-violet-300"
            >
               Sing out
            </Link>
          ) : (
            <Link
              href="/singin"
              className="text-sm font-semibold text-violet-400 transition duration-300 hover:text-violet-300"
            >
              Sign In
            </Link>
          )}
          

          <Button
            radius="lg"
            className="bg-white px-6 font-semibold text-black transition hover:scale-105 hover:bg-gray-200"
          >
            Get Started
          </Button> 
        </div>
      </nav>
    </header>
  );
}
