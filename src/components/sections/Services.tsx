"use client";

import { useState } from "react";
import { services } from "@/data";
import { cn } from "@/lib/utils";

type Tab = "All" | "Digital" | "AV Solutions";

const tabs: Tab[] = ["All", "Digital", "AV Solutions"];

const tabMeta: Record<Tab, { label: string; desc: string }> = {
  All: {
    label: "All Services",
    desc: "Everything we offer — from cutting-edge software to premium AV installations.",
  },
  Digital: {
    label: "Digital Services",
    desc: "Full-stack software engineering, cloud, AI, and design services for modern businesses.",
  },
  "AV Solutions": {
    label: "AV Solutions",
    desc: "Professional audio-visual design, supply, and installation for homes and commercial spaces.",
  },
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = activeTab === "All" ? services : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-blue-400">Services</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex bg-slate-800/60 border border-slate-700 rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  activeTab === tab
                    ? tab === "AV Solutions"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                      : "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {tab === "AV Solutions" ? "🎬 AV Solutions" : tab === "Digital" ? "💻 Digital" : "✦ All"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab description */}
        <p className="text-center text-slate-400 text-sm mb-12 transition-all">
          {tabMeta[activeTab].desc}
        </p>

        {/* AV Solutions banner */}
        {activeTab === "AV Solutions" && (
          <div className="mb-8 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-orange-500/5 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-4xl">🔊</div>
            <div>
              <h3 className="text-white font-bold text-base mb-0.5">Premium AV & Home Theater Division</h3>
              <p className="text-slate-400 text-sm">
                Authorised distributor of Monitor Audio, JBL, Bowers & Wilkins, Marantz, Denon, BenQ, JVC and more — serving 120+ dealer partners across Karnataka.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="ml-auto flex-shrink-0 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl text-sm transition-colors"
            >
              Get a Quote →
            </a>
          </div>
        )}

        {/* Digital banner */}
        {activeTab === "Digital" && (
          <div className="mb-8 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-violet-500/5 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-4xl">⚡</div>
            <div>
              <h3 className="text-white font-bold text-base mb-0.5">End-to-End Digital Engineering</h3>
              <p className="text-slate-400 text-sm">
                From MVP to enterprise scale — we design, build, and deploy world-class digital products with a 250+ project track record.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="ml-auto flex-shrink-0 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl text-sm transition-colors"
            >
              Start a Project →
            </a>
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => {
            const isAV = service.category === "AV Solutions";
            return (
              <div
                key={service.id}
                className={cn(
                  "group relative rounded-2xl p-7 border hover:-translate-y-1 transition-all duration-300 overflow-hidden",
                  isAV
                    ? "bg-slate-900 border-slate-800 hover:border-amber-500/40"
                    : "bg-slate-900 border-slate-800 hover:border-blue-500/40"
                )}
              >
                {/* Hover glow */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
                    isAV
                      ? "bg-gradient-to-br from-amber-500/5 to-orange-600/5"
                      : "bg-gradient-to-br from-blue-500/5 to-violet-600/5"
                  )}
                />

                {/* Category badge */}
                <div className="absolute top-5 right-5">
                  <span
                    className={cn(
                      "text-xs font-semibold px-2.5 py-1 rounded-full",
                      isAV
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    )}
                  >
                    {service.category}
                  </span>
                </div>

                <div className="relative">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3
                    className={cn(
                      "text-xl font-bold text-white mb-3 transition-colors",
                      isAV ? "group-hover:text-amber-400" : "group-hover:text-blue-400"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full flex-shrink-0",
                            isAV ? "bg-amber-400" : "bg-blue-400"
                          )}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA — only visible on "All" tab */}
        {activeTab === "All" && (
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 flex items-center gap-5">
              <div className="text-3xl">💻</div>
              <div>
                <div className="text-white font-semibold mb-0.5">Need a digital product?</div>
                <div className="text-slate-400 text-sm">Web, mobile, AI & more.</div>
              </div>
              <button
                onClick={() => setActiveTab("Digital")}
                className="ml-auto text-blue-400 hover:text-blue-300 text-sm font-semibold whitespace-nowrap transition-colors"
              >
                Explore →
              </button>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 flex items-center gap-5">
              <div className="text-3xl">🔊</div>
              <div>
                <div className="text-white font-semibold mb-0.5">Looking for AV solutions?</div>
                <div className="text-slate-400 text-sm">Home theater, audio, display & more.</div>
              </div>
              <button
                onClick={() => setActiveTab("AV Solutions")}
                className="ml-auto text-amber-400 hover:text-amber-300 text-sm font-semibold whitespace-nowrap transition-colors"
              >
                Explore →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
