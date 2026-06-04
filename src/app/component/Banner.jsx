"use client"
import Image from "next/image";
import bgimage from  "../../assets/globe.png"
import { PiBuildingOfficeLight } from "react-icons/pi";
import { motion } from "motion/react"
export default function HeroJobs() {
  const stats = [
    { number: "50K", label: "Active Jobs" },
    { number: "12K", label: "Companies" },
    { number: "2M", label: "Job Seekers" },
    { number: "97%", label: "Satisfaction Rate" },
  ];

  const tags = [
    "Product Designer",
    "AI Engineer",
    "DevOps Engineer",
    "UI/UX Designer",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white mt-10">
 <Image
  src={bgimage}
  alt="bg"
  fill
  priority
  className="absolute inset-0 h-full w-full bg-cover object-cover object-center"
/>

      <div className="absolute inset-0 bg-black/70" />

     
      <div className="absolute bottom-[-250px] left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full   blur-3xl" />

    
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff22_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />

     
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 text-center">
   
        <div className="flex items-center gap-2 mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl">
          <PiBuildingOfficeLight /> <p>50,000+ NEW JOBS THIS MONTH</p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your next role —
          faster.
        </p>

        {/* Search Box */}
        <div className="mt-10 flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-2xl md:flex-row">
          <input
            type="text"
            placeholder="Job title, skill or company"
            className="h-14 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
          />

          <input
            type="text"
            placeholder="Location or Remote"
            className="h-14 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
          />

          <button className="h-14 rounded-xl bg-violet-600 px-8 font-semibold transition-all duration-300 hover:bg-violet-500">
            Search
          </button>
        </div>

        <motion.p 
         whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}className="text-lg text-center font-medium text-violet-400">
          Hello that is remote
        </motion.p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Center Text */}
        <div className="mt-40">
          <h2 className="text-3xl font-semibold leading-relaxed text-white/90 md:text-5xl">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-6xl grid-cols-1 gap-6 pb-20 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-black/40 p-8 text-left backdrop-blur-2xl"
            >
              <h3 className="text-5xl font-bold">{item.number}</h3>
              <p className="mt-3 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}