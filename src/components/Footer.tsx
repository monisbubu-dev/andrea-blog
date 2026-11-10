import React from 'react';
import { ArrowUp, Palette, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import { BLOG_ARTICLES, PALETTE } from '../data/blogData';

interface FooterProps {
  onSelectSection: (id: string) => void;
  onOpenPaletteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection, onOpenPaletteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onSelectSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top colored line using the palette gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[#003C7F]" />
        <div className="flex-1 bg-[#0065A8]" />
        <div className="flex-1 bg-[#008FC2]" />
        <div className="flex-1 bg-[#00B9CB]" />
        <div className="flex-1 bg-[#00E1C6]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Logo & Philosophy Block (resembling the bottom of Blog_ejemplo_6a532ddf.jpg) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <a
            href="#section-1"
            onClick={(e) => handleNavClick(e, 'section-1')}
            className="inline-block group"
          >
            <span className="font-logo text-4xl sm:text-5xl text-[#003C7F] italic tracking-wide group-hover:text-[#0065A8] transition-colors">
              Andrea
            </span>
          </a>
          <p className="text-xs uppercase tracking-[0.25em] text-[#008FC2] font-semibold mt-2">
            TECHNOLOGY · MULTIMEDIA · DESIGN · ENGLISH
          </p>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed font-sans-body">
            Personal English Learning Blog created by Andrea Ospina, student of Multimedia and Web
            Development Technology at SENA. Exploring language acquisition through culture,
            pedagogy, communication, and real-world immersion.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-slate-100 mb-10 text-xs">
          {/* Column 1: Index Sections 1-4 */}
          <div>
            <h5 className="font-semibold uppercase tracking-wider text-[#003C7F] mb-3">
              Articles 01 — 04
            </h5>
            <ul className="space-y-2 text-slate-600">
              {BLOG_ARTICLES.slice(0, 4).map((art) => (
                <li key={art.id}>
                  <a
                    href={`#${art.id}`}
                    onClick={(e) => handleNavClick(e, art.id)}
                    className="hover:text-[#0065A8] transition-colors flex items-center gap-1.5"
                  >
                    <span className="font-mono text-slate-400">0{art.sectionNumber}.</span>
                    <span className="truncate">{art.navTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Index Sections 5-7 */}
          <div>
            <h5 className="font-semibold uppercase tracking-wider text-[#003C7F] mb-3">
              Articles 05 — 07
            </h5>
            <ul className="space-y-2 text-slate-600">
              {BLOG_ARTICLES.slice(4).map((art) => (
                <li key={art.id}>
                  <a
                    href={`#${art.id}`}
                    onClick={(e) => handleNavClick(e, art.id)}
                    className="hover:text-[#0065A8] transition-colors flex items-center gap-1.5"
                  >
                    <span className="font-mono text-slate-400">0{art.sectionNumber}.</span>
                    <span className="truncate">{art.navTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic & Palette Info */}
          <div>
            <h5 className="font-semibold uppercase tracking-wider text-[#003C7F] mb-3">
              Academic Program
            </h5>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-[#008FC2] shrink-0 mt-0.5" />
                <span>SENA · Multimedia & Web Development Technology</span>
              </div>
              <button
                type="button"
                onClick={onOpenPaletteModal}
                className="flex items-center gap-2 text-[#0065A8] hover:text-[#003C7F] font-medium pt-1"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Palette: #003C7F, #0065A8, #008FC2, #00B9CB, #00E1C6</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Andrea Ospina · All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#0065A8] hover:text-[#003C7F] transition-colors font-medium px-3 py-1.5 rounded-full hover:bg-slate-50"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
