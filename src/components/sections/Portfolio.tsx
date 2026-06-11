"use client";

import { useState } from "react";
import { projects } from "@/data";
import { cn } from "@/lib/utils";

const avCategories = ["Home Theater", "Professional Audio", "Smart Home", "Display Systems"];

type TopTab = "All" | "Digital" | "AV";

const topTabs: { id: TopTab; label: string; icon: string }[] = [
  { id: "All", label: "All Projects", icon: "✦" },
  { id: "Digital", label: "Digital", icon: "💻" },
  { id: "AV", label: "AV & Audio", icon: "🔊" },
];

const projectIcons: Record<string, string> = {
  "Web App": "🌐",
  "Mobile App": "📱",
  "E-Commerce": "🛒",
  Enterprise: "🏢",
  EdTech: "📚",
  SaaS: "💼",
  "Home Theater": "🎬",
  "Professional Audio": "🎵",
  "Smart Home": "🏠",
  "Display Systems": "📽️",
};

export default function Portfolio() {
  const [topTab, setTopTab] = useState<TopTab>("All");
  const [subFilter, setSubFilter] = useState("All");

  const isAVCategory = (cat: string) => avCategories.includes(cat);

  const topFiltered =
    topTab === "Digital"
      ? projects.filter((p) => !isAVCategory(p.category))
      : topTab === "AV"
      ? projects.filter((p) => isAVCategory(p.category))
      : projects;

  const subCategories = ["All", ...Array.from(new Set(topFiltered.map((p) => p.category)))];

  const finalFiltered =
    subFilter === "All" ? topFiltered : topFiltered.filter((p) => p.category === subFilter);

  const handleTopTab = (tab: TopTab) => {
    setTopTab(tab);
    setSubFilter("All");
  };

  return (
    <section id="portfolio" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Our Work</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Showcasing our best work across software engineering and premium AV installations.
          </p>
        </div>

        {/* Top-level tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-slate-800/60 border border-slate-700 rounded-2xl p-1.5 gap-1">
            {topTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTopTab(tab.id)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  topTab === tab.id
                    ? tab.id === "AV"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                      : "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-category filter chips */}
        {subCategories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {subCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSubFilter(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium border transition-all",
                  subFilter === cat
                    ? isAVCategory(cat) || topTab === "AV"
                      ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                      : "bg-blue-500/20 border-blue-500/50 text-blue-400"
                    : "bg-transparent border-slate-700 text-slate-500 hover:text-slate-300"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {finalFiltered.map((project) => {
            const isAV = isAVCategory(project.category);
            return (
              <div
                key={project.id}
                className={cn(
                  "group border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300",
                  isAV
                    ? "bg-slate-800/50 border-slate-700 hover:border-amber-500/40"
                    : "bg-slate-800/50 border-slate-700 hover:border-blue-500/40"
                )}
              >
                {/* Image placeholder */}
                <div
                  className={cn(
                    "h-48 relative overflow-hidden",
                    isAV
                      ? "bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-slate-800"
                      : "bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-slate-800"
                  )}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-25">{projectIcons[project.category] ?? "🖥️"}</span>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={cn(
                        "px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm",
                        isAV
                          ? "bg-amber-500/80 text-white"
                          : "bg-blue-500/80 text-white"
                      )}
                    >
                      {project.category}
                    </span>
                  </div>
                  {isAV && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 bg-slate-900/70 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30 backdrop-blur-sm">
                        AV
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className={cn(
                      "text-lg font-bold text-white mb-2 transition-colors",
                      isAV ? "group-hover:text-amber-400" : "group-hover:text-blue-400"
                    )}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "px-2.5 py-1 text-xs rounded-md",
                          isAV
                            ? "bg-amber-500/10 text-amber-400/80 border border-amber-500/10"
                            : "bg-slate-700/50 text-slate-400"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
