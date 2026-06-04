"use client";

import {
  FaRegFileAlt,
  FaUsers,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Job Posts",
    value: "48",
    icon: FaRegFileAlt,
  },
  {
    title: "Total Applicants",
    value: "1,284",
    icon: FaUsers,
  },
  {
    title: "Active Jobs",
    value: "18",
    icon: FaBolt,
  },
  {
    title: "Jobs Closed",
    value: "32",
    icon: FaCheckCircle,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="rounded-xl border border-zinc-800 bg-[#111111] p-5 transition-all hover:border-zinc-700"
          >
            <div className="mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                <Icon size={18} />
              </div>
            </div>

            <p className="text-sm text-zinc-500">
              {item.title}
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-white">
              {item.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}