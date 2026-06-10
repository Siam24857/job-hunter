"use client";

import { useState } from "react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("jobseekers");
  const [openFaq, setOpenFaq] = useState(null);

  const jobSeekersPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs per month",
        "Basic profile",
        "Email alerts",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      popular: true,
      features: [
        "Apply to up to 30 jobs per month",
        "Unlimited saved jobs",
        "Application tracking",
        "Salary insights",
      ],
    },
    {
      name: "Premium",
      price: "$39",
      period: "/month",
      features: [
        "Unlimited applications",
        "Profile boost to recruiters",
        "Early access to new jobs",
        "Priority support",
      ],
    },
  ];

  const recruiterPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      features: [
        "Up to 3 active job posts",
        "Basic applicant management",
        "Standard listing visibility",
        "Perfect for first-year hiring",
      ],
    },
    {
      name: "Growth",
      price: "$49",
      period: "/month",
      popular: true,
      features: [
        "Up to 10 active job posts",
        "Applicant tracking",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      features: [
        "Up to 50 active job posts",
        "Advanced analytics dashboard",
        "Featured job listings",
        "Team collaboration",
        "Custom branding",
        "Priority support",
      ],
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes. You can cancel your subscription at any time from your account settings.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Refunds are reviewed on a case-by-case basis according to our refund policy.",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "We accept Visa, Mastercard, American Express, PayPal, and other major payment methods.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. You can upgrade or downgrade your plan whenever needed.",
    },
  ];

  const plans =
    activeTab === "jobseekers" ? jobSeekersPlans : recruiterPlans;

  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the plan that best fits your hiring or job-search needs.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("jobseekers")}
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeTab === "jobseekers"
                  ? "bg-blue-600 text-white"
                  : "text-slate-300"
              }`}
            >
              For Job Seekers
            </button>

            <button
              onClick={() => setActiveTab("recruiters")}
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeTab === "recruiters"
                  ? "bg-blue-600 text-white"
                  : "text-slate-300"
              }`}
            >
              For Recruiters
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 transition hover:-translate-y-2 duration-300 ${
                plan.popular
                  ? "border-blue-500 bg-slate-900"
                  : "border-slate-700 bg-slate-900/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-blue-600 text-sm px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
          <h3 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}