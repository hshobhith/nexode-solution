import { team } from "@/data";

export default function Team() {
  return (
    <section id="team" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">The People</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Meet Our <span className="text-blue-400">Team</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A group of passionate technologists, designers, and problem-solvers dedicated to building exceptional products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/20">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-white font-bold text-base mb-0.5 group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-blue-400 text-xs font-semibold mb-3">{member.role}</p>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-2">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="w-8 h-8 bg-slate-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 text-xs transition-all">
                    in
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="w-8 h-8 bg-slate-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 text-xs transition-all">
                    𝕏
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="w-8 h-8 bg-slate-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 text-xs transition-all">
                    gh
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
