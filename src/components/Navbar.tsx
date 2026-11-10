import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, Sparkles, Compass, Palette, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES, PALETTE } from '../data/blogData';

interface NavbarProps {
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  highlightVocabulary: boolean;
  onToggleHighlightVocabulary: () => void;
  onOpenPaletteModal: () => void;
  onOpenDirectory: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSectionId,
  onSelectSection,
  highlightVocabulary,
  onToggleHighlightVocabulary,
  onOpenPaletteModal,
  onOpenDirectory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onSelectSection(id);
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
            : 'bg-white/90 backdrop-blur-xs border-b border-slate-100 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand / Logo "Andrea" in stylized elegant serif/cursive */}
            <a
              href="#section-1"
              onClick={(e) => handleNavClick(e, 'section-1')}
              className="group flex flex-col items-start leading-none shrink-0"
              aria-label="Andrea - Home"
            >
              <span className="font-logo text-3xl sm:text-4xl text-[#003C7F] italic tracking-wide group-hover:text-[#0065A8] transition-colors">
                Andrea
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#008FC2] font-medium mt-1">
                English Learning Blog
              </span>
            </a>

            {/* Zone 2: Navigation Links (single-line, clean editorial links) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs tracking-wider uppercase font-medium text-slate-600">
              {BLOG_ARTICLES.map((article) => {
                const isActive = activeSectionId === article.id;
                // Compact display label for top bar to ensure single-line elegance
                const shortLabels: Record<string, string> = {
                  'section-1': 'Home & Intro',
                  'section-2': 'About Me',
                  'section-3': 'Social Dialogue',
                  'section-4': 'Gold Museum',
                  'section-5': 'Job Interview',
                  'section-6': 'PLE Mind Map',
                  'section-7': 'Crime & Punishment',
                };

                return (
                  <a
                    key={article.id}
                    href={`#${article.id}`}
                    onClick={(e) => handleNavClick(e, article.id)}
                    className={`whitespace-nowrap transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#003C7F] font-semibold'
                        : 'text-slate-600 hover:text-[#0065A8]'
                    }`}
                  >
                    {shortLabels[article.id] || article.navTitle}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#008FC2] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Tools */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Highlight Vocabulary Tool Toggle */}
              <button
                type="button"
                onClick={onToggleHighlightVocabulary}
                title={highlightVocabulary ? 'Vocabulary Highlights: ON' : 'Turn on Vocabulary Highlights'}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  highlightVocabulary
                    ? 'bg-[#00E1C6]/20 text-[#003C7F] border border-[#00B9CB] ring-2 ring-[#00E1C6]/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#008FC2]" />
                <span className="hidden sm:inline">Vocabulary</span>
                <span className="text-[10px] opacity-75">{highlightVocabulary ? 'ON' : 'OFF'}</span>
              </button>

              {/* Index / Sections Drawer Trigger */}
              <button
                type="button"
                onClick={onOpenDirectory}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#003C7F] hover:bg-[#0065A8] rounded-full transition-colors shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>All 7 Articles</span>
              </button>

              {/* Color Palette Modal Trigger */}
              <button
                type="button"
                onClick={onOpenPaletteModal}
                title="View Color Palette"
                className="p-1.5 text-slate-600 hover:text-[#003C7F] hover:bg-slate-100 rounded-full transition-colors"
                aria-label="View Color Palette"
              >
                <Palette className="w-4 h-4 text-[#0065A8]" />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#003C7F] hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 overflow-y-auto pt-24 border-l border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <span className="font-logo text-2xl text-[#003C7F] italic">Andrea</span>
                <p className="text-xs text-slate-500">Navigation & Articles</p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-800 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Direct Sections
            </p>

            <div className="space-y-1.5">
              {BLOG_ARTICLES.map((article) => {
                const isActive = activeSectionId === article.id;
                return (
                  <a
                    key={article.id}
                    href={`#${article.id}`}
                    onClick={(e) => handleNavClick(e, article.id)}
                    className={`block px-3 py-2.5 rounded-lg text-sm transition-all ${
                      isActive
                        ? 'bg-[#003C7F] text-white font-medium shadow-xs'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-[#0065A8] font-mono'
                        }`}
                      >
                        0{article.sectionNumber}
                      </span>
                      <span className="truncate">{article.navTitle}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  onToggleHighlightVocabulary();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 text-xs text-slate-700 font-medium"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#008FC2]" />
                  Vocabulary Highlighter
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    highlightVocabulary ? 'bg-[#00E1C6]/30 text-[#003C7F]' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {highlightVocabulary ? 'Active' : 'Off'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onOpenPaletteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 text-xs text-slate-700 font-medium"
              >
                <Palette className="w-4 h-4 text-[#0065A8]" />
                Explore Color Palette
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
