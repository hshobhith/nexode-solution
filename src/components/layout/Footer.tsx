"use client";

const links: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: "About Us", href: "#about" },
    // { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Services: [
    { label: "AV Solutions", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "AI & ML", href: "#services" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const handleFooterNav = (href: string) => {
  if (href === "#") return;
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo/logo.jpeg"
                alt="Nexode Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Nexode Solution Pvt Ltd — transforming ideas into powerful digital products. Your trusted technology partner since 2016.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: "𝕏", label: "Twitter" },
                { icon: "in", label: "LinkedIn" },
                { icon: "gh", label: "GitHub" },
                { icon: "yt", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 text-xs font-bold transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-white font-semibold text-sm mb-4">{group}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleFooterNav(item.href)}
                      className="text-slate-400 hover:text-blue-400 text-sm transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nexode Solution Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
