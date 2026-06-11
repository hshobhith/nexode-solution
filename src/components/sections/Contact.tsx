"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", phone: "", service: "", message: "" };

const serviceGroups = [
  {
    label: "── Digital Services ──",
    options: [
      "Web Development",
      "Mobile App Development",
      "AI & Machine Learning",
    ],
  },
  {
    label: "── AV Solutions ──",
    options: [
      "Home Theater Solutions",
      "Professional Audio",
      "Projector & Display Systems",
      "Amplifiers & AV Receivers",
      "Smart Home Integration",
      "AV Supply & Distribution",
    ],
  },
  {
    label: "── Other ──",
    options: ["Other / Not Sure"],
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Build <span className="text-blue-400">Together</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Fill in the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: "📍", title: "Office", lines: ["3rd phase, Watch Factory Rd, Platinum City, Industrial Area,Stage 1, Yeswanthpur,", "Bengaluru – 560066, India"] },
              { icon: "📧", title: "Email", lines: ["contact@nexodesolutions.com"] },
              { icon: "📞", title: "Phone", lines: ["+91 72599 57310"] },
              { icon: "🕐", title: "Hours", lines: ["Mon – Sat: 10:00 AM – 7:00 PM"] },
            ].map((info) => (
              <div key={info.title} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{info.title}</div>
                  {info.lines.map((line) => (
                    <div key={line} className="text-slate-400 text-sm">{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Service Needed *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceGroups.map((group) => (
                          <optgroup key={group.label} label={group.label}>
                            {group.options.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-sm mb-1.5 block">Project Details *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, timeline, and budget..."
                      className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
