"use client";

import { useState } from "react";
import { testimonials } from "@/data";
import { cn } from "@/lib/utils";

type Tab = "Digital" | "AV";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "Digital", label: "Software Clients", icon: "💻" },
  { id: "AV", label: "AV Clients", icon: "🔊" },
];

const digitalIds = [1, 2, 3];
const avIds = [4, 5];

const softwareBrands = ["TechCorp", "HealthFirst", "GlobalLogistics", "EduSphere", "FinTrack", "SmartHR"];
const avBrands = ["Grand Villa Bengaluru", "Horizon Cinemas", "Sky Tower Residence", "Prestige Corporate Park"];

export default function Testimonials() {
  const [tab, setTab] = useState<Tab>("Digital");

  const shown = testimonials.filter((t) =>
    tab === "Digital" ? digitalIds.includes(t.id) : avIds.includes(t.id)
  );

  return (
    <section id="testimonials" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Social Proof</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What Our <span className="text-blue-400">Clients Say</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-800/60 border border-slate-700 rounded-2xl p-1.5 gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  tab === t.id
                    ? t.id === "AV"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                      : "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((t) => {
            const isAV = avIds.includes(t.id);
            return (
              <div
                key={t.id}
                className={cn(
                  "border rounded-2xl p-8 transition-all duration-300 flex flex-col",
                  isAV
                    ? "bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40"
                    : "bg-slate-800/50 border-slate-700 hover:border-blue-500/40"
                )}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed mb-6 flex-1 text-sm italic">
                  &ldquo;{t.message}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold",
                      isAV
                        ? "bg-gradient-to-br from-amber-500 to-orange-600"
                        : "bg-gradient-to-br from-blue-500 to-violet-600"
                    )}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                  </div>
                  {isAV && (
                    <span className="ml-auto text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      AV
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Logos */}
        <div className="mt-16 space-y-6">
          <div>
            <p className="text-slate-500 text-xs text-center mb-3 uppercase tracking-widest">Software Clients</p>
            <div className="flex flex-wrap justify-center gap-3">
              {softwareBrands.map((brand) => (
                <div key={brand} className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-500 text-sm font-medium">
                  {brand}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-slate-500 text-xs text-center mb-3 uppercase tracking-widest">AV & Home Theater Clients</p>
            <div className="flex flex-wrap justify-center gap-3">
              {avBrands.map((brand) => (
                <div key={brand} className="px-5 py-2.5 bg-amber-500/5 border border-amber-500/20 rounded-xl text-amber-600/70 text-sm font-medium">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
