import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BlogSection } from './components/BlogSection';
import { AccentStripe } from './components/AccentStripe';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ArticleModal } from './components/ArticleModal';
import { PaletteModal } from './components/PaletteModal';
import { DirectoryModal } from './components/DirectoryModal';
import { BLOG_ARTICLES, BlogArticle, PALETTE } from './data/blogData';
import { Sparkles, BookOpen, GraduationCap, ArrowDown } from 'lucide-react';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('section-1');
  const [highlightVocabulary, setHighlightVocabulary] = useState<boolean>(true);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [paletteModalOpen, setPaletteModalOpen] = useState<boolean>(false);
  const [directoryModalOpen, setDirectoryModalOpen] = useState<boolean>(false);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    marker: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
    marker: '',
  });

  // Observe active section on scroll
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    BLOG_ARTICLES.forEach((article) => {
      const el = document.getElementById(article.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenLightbox = (imageSrc: string, title: string, marker: string) => {
    setLightboxData({
      isOpen: true,
      imageSrc,
      title,
      marker,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans-body">
      {/* Fixed Sticky Top Navbar */}
      <Navbar
        activeSectionId={activeSectionId}
        onSelectSection={setActiveSectionId}
        highlightVocabulary={highlightVocabulary}
        onToggleHighlightVocabulary={() => setHighlightVocabulary(!highlightVocabulary)}
        onOpenPaletteModal={() => setPaletteModalOpen(true)}
        onOpenDirectory={() => setDirectoryModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {/* Editorial Sub-Hero Banner */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="border-b border-slate-200/70 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#008FC2]">
                Portfolio & Language Learning Environment
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-[#003C7F] mt-1 tracking-tight">
                Andrea Ospina
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Multimedia and Web Development Technology · SENA. Interactive reflections on English
                communication, culture, technology, and pedagogical environments.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setDirectoryModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#003C7F] bg-white border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#008FC2]" />
                <span>All 7 Articles</span>
              </button>

              <button
                type="button"
                onClick={() => setPaletteModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#0065A8] hover:bg-[#003C7F] rounded-sm transition-colors shadow-2xs"
              >
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#003C7F]" />
                  <span className="w-2 h-2 rounded-full bg-[#008FC2]" />
                  <span className="w-2 h-2 rounded-full bg-[#00E1C6]" />
                </div>
                <span>Color Palette</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: My Personal English Learning Blog (Image Left, Text Right) */}
        <BlogSection
          article={BLOG_ARTICLES[0]}
          imageLeft={true}
          highlightVocabulary={highlightVocabulary}
          onOpenArticleModal={setSelectedArticle}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 2: About me (Text Left, Image Right) */}
        <BlogSection
          article={BLOG_ARTICLES[1]}
          imageLeft={false}
          highlightVocabulary={highlightVocabulary}
          onOpenArticleModal={setSelectedArticle}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Signature Editorial Accent Stripe (Replicating reference image middle divider) */}
        <AccentStripe />

        {/* Section 3: Dialoguing possible solutions to problems in a social context (Image Left, Text Right) */}
        <BlogSection
          article={BLOG_ARTICLES[2]}
          imageLeft={true}
          highlightVocabulary={highlightVocabulary}
          onOpenArticleModal={setSelectedArticle}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 4: Gold museum in Bogotá (Text Left, Image Right) */}
        <BlogSection
          article={BLOG_ARTICLES[3]}
          imageLeft={false}
          highlightVocabulary={highlightVocabulary}
          onOpenArticleModal={setSelectedArticle}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 5: Job Interview (Image Left, Text Right) */}
        <BlogSection
          article={BLOG_ARTICLES[4]}
          imageLeft={true}
          highlightVocabulary={highlightVocabulary}
          onOpenArticleModal={setSelectedArticle}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 6: Student-Centered Mind Map: Personal Learning Environment (PLE) (Text Left, Image Right) */}
        <BlogSection
          article={BLOG_ARTICLES[5]}
          imageLeft={false}
          highlightVocabulary={highlightVocabulary}
          onOpenArticleModal={setSelectedArticle}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 7: Crime and Punishment (Image Left, Text Right) */}
        <BlogSection
          article={BLOG_ARTICLES[6]}
          imageLeft={true}
          highlightVocabulary={highlightVocabulary}
          onOpenArticleModal={setSelectedArticle}
          onOpenLightbox={handleOpenLightbox}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectSection={setActiveSectionId}
        onOpenPaletteModal={() => setPaletteModalOpen(true)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightboxData.imageSrc}
        title={lightboxData.title}
        marker={lightboxData.marker}
      />

      {/* Detailed Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Color Palette Modal */}
      <PaletteModal
        isOpen={paletteModalOpen}
        onClose={() => setPaletteModalOpen(false)}
      />

      {/* 7-Section Table of Contents Modal */}
      <DirectoryModal
        isOpen={directoryModalOpen}
        onClose={() => setDirectoryModalOpen(false)}
        onSelectSection={setActiveSectionId}
      />
    </div>
  );
}
