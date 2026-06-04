"use client";

import { useState } from "react";
import { Switch, Label } from "@heroui/react";

export default function PostJobForm({ company }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    type: "Full-time",
    salaryMin: "",
    salaryMax: "",
    currency: "USD",
    location: "",
    isRemote: false,
    deadline: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
    companyId: company?.id || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoteToggle = () => {
    setForm((prev) => ({
      ...prev,
      isRemote: !prev.isRemote,
      location: !prev.isRemote ? "Remote" : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", form);

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        status: "active",
      }),
    });

    const data = await res.json();
    console.log("Job Created:", data);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl space-y-8 bg-[#111] p-8 rounded-xl border border-gray-700"
      >
        <h1 className="text-3xl font-bold">Post a New Job</h1>

        {/* SECTION 1: JOB INFO */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
            Job Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="title"
              placeholder="Job Title"
              className="w-full p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none"
              onChange={handleChange}
              required
            />

            <input
              name="category"
              placeholder="Job Category (e.g., Engineering, Sales, Design)"
              className="w-full p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none"
              onChange={handleChange}
              required
            />

            <select
              name="type"
              className="w-full p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none"
              onChange={handleChange}
              required
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Remote</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>

            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="salaryMin"
                  placeholder="Min Salary"
                  type="number"
                  className="p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none"
                  onChange={handleChange}
                  required
                />
                <input
                  name="salaryMax"
                  placeholder="Max Salary"
                  type="number"
                  className="p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <input
              name="currency"
              placeholder="Currency (USD, EUR, GBP, etc.)"
              className="w-full p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none"
              onChange={handleChange}
              required
            />

            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center justify-between p-4 bg-black border border-gray-600 rounded">
                <div className="flex items-center gap-3">
                  {/* CORRECT HeroUI v1 Switch pattern - WORKS! */}
                  <Switch 
                    isSelected={form.isRemote}
                    onChange={handleRemoteToggle}
                  >
                    <Switch.Control>
                      <Switch.Thumb />
                    </Switch.Control>
                    <Switch.Content>
                      <Label className="text-sm text-white">Remote Job</Label>
                    </Switch.Content>
                  </Switch>
                </div>
                <span className="text-sm text-gray-400">
                  {form.isRemote ? "🌍 Working from anywhere" : "🏢 Office based"}
                </span>
              </div>

              <input
                name="location"
                placeholder={form.isRemote ? "Remote position - no location needed" : "City, Country (e.g., New York, USA)"}
                value={form.location}
                onChange={handleChange}
                disabled={form.isRemote}
                className="w-full p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                required={!form.isRemote}
              />
            </div>

            <input
              type="date"
              name="deadline"
              className="w-full p-3 bg-black border border-gray-600 rounded focus:border-white focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* SECTION 2: JOB DESCRIPTION */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
            Job Description
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Responsibilities *</label>
              <textarea
                name="responsibilities"
                placeholder="• Lead development of new features\n• Collaborate with cross-functional teams\n• Write clean, maintainable code\n• Participate in code reviews"
                className="w-full p-3 bg-black border border-gray-600 rounded min-h-[150px] focus:border-white focus:outline-none font-mono text-sm"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Requirements *</label>
              <textarea
                name="requirements"
                placeholder="• 5+ years of experience in React\n• Strong knowledge of JavaScript/TypeScript\n• Bachelor's degree in Computer Science or related field\n• Excellent problem-solving skills"
                className="w-full p-3 bg-black border border-gray-600 rounded min-h-[150px] focus:border-white focus:outline-none font-mono text-sm"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Benefits (Optional)</label>
              <textarea
                name="benefits"
                placeholder="• Competitive salary and equity\n• Health, dental, and vision insurance\n• Flexible working hours\n• Professional development budget\n• Remote work stipend"
                className="w-full p-3 bg-black border border-gray-600 rounded min-h-[120px] focus:border-white focus:outline-none font-mono text-sm"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: COMPANY INFORMATION */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
            Company Information
          </h2>
          
          <div className="p-6 border border-gray-700 rounded-lg bg-black/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-lg">🏢</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Auto-filled from your profile</p>
                <p className="font-semibold text-lg">{company?.companyName || "Loading..."}</p>
              </div>
            </div>
            {company?.companyName && (
              <div className="mt-3 text-sm text-green-500">
                ✓ Your company is approved and verified
              </div>
            )}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-colors text-lg"
        >
          Publish Job
        </button>
      </form>
    </div>
  );
}







