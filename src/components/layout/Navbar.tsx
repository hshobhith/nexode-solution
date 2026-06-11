"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((n) => n.href.replace("#", ""));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNav("#home")} className="flex items-center group">
            <img
              src="/images/logo/logo.jpeg"
              alt="Nexode Logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-all",
                      activeId === id
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNav("#contact")}
            className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-blue-500/25"
          >
            Get a Quote
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={cn("h-0.5 bg-current transition-all", isOpen ? "rotate-45 translate-y-1.5" : "")} />
              <span className={cn("h-0.5 bg-current transition-all", isOpen ? "opacity-0" : "")} />
              <span className={cn("h-0.5 bg-current transition-all", isOpen ? "-rotate-45 -translate-y-1.5" : "")} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn("md:hidden transition-all duration-300 overflow-hidden", isOpen ? "max-h-96 pb-4" : "max-h-0")}>
          <div className="bg-slate-800/90 rounded-xl p-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
