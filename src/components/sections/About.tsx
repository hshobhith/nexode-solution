import { technologies } from "@/data";

const avBrands = [
  "Monitor Audio", "Bowers & Wilkins", "JBL", "James Loudspeaker",
  "REL Acoustics", "Revel Harman", "Marantz", "Denon", "Onkyo",
  "BenQ", "JVC", "LG",
];

export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Who We Are</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About <span className="text-blue-400">Nexode</span>
          </h2>
        </div>

        {/* Two verticals overview */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-7">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-white font-bold text-lg mb-2">Digital &amp; Software Division</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-service software engineering for startups and enterprises — web apps, mobile, cloud infrastructure, AI, and UX design. 250+ projects delivered globally.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-7">
            <div className="text-3xl mb-3">🔊</div>
            <h3 className="text-white font-bold text-lg mb-2">AV &amp; Home Theater Division</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium audio-visual design, supply, and installation — home theaters, professional audio, projectors, amplifiers, and smart-home integration. 120+ dealer partners across Karnataka.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Company Story + Values */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Your End-to-End Technology Partner
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Founded in 2025, Nexode Solution Pvt Ltd is headquartered in Bengaluru, India. We combine deep engineering expertise with a passion for exceptional experiences — whether that&apos;s a high-performance SaaS platform or a luxury home theater.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our multidisciplinary team of developers, designers, and AV engineers work as a single cohesive unit, delivering solutions that are scalable, future-ready, and built to impress.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", title: "Speed", desc: "Agile sprints for rapid delivery" },
                { icon: "🎯", title: "Quality", desc: "Zero-compromise on standards" },
                { icon: "🤝", title: "Partnership", desc: "We succeed when you succeed" },
                { icon: "🔍", title: "Transparency", desc: "Full visibility at every stage" },
              ].map((v) => (
                <div key={v.title} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{v.title}</div>
                  <div className="text-slate-400 text-xs">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack + AV Brands */}
          <div className="space-y-10">
            {/* AV Brands */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                Authorised AV Brands
              </h3>
              <div className="flex flex-wrap gap-2">
                {avBrands.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 bg-slate-800 border border-amber-700/30 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 rounded-lg text-sm transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Tech */}
            {/* <div>
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Software Technology Stack
              </h3>
              <div className="space-y-4">
                {["Frontend", "Backend", "Mobile", "Cloud", "Database", "DevOps", "Language"].map((cat) => {
                  const techs = technologies.filter((t) => t.category === cat);
                  if (!techs.length) return null;
                  return (
                    <div key={cat}>
                      <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest block mb-2">{cat}</span>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((t) => (
                          <span
                            key={t.name}
                            className="px-3 py-1.5 bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 rounded-lg text-sm transition-colors"
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
