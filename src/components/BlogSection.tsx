import React, { useState } from 'react';
import { Volume2, VolumeX, Eye, BookOpen, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { BlogArticle, PALETTE } from '../data/blogData';

interface BlogSectionProps {
  article: BlogArticle;
  imageLeft: boolean;
  highlightVocabulary: boolean;
  onOpenArticleModal: (article: BlogArticle) => void;
  onOpenLightbox: (imageSrc: string, title: string, marker: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  article,
  imageLeft,
  highlightVocabulary,
  onOpenArticleModal,
  onOpenLightbox,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Audio Speech Synthesis Handler
  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Your browser does not support audio speech synthesis.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(article.text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  // Render text with interactive highlighted vocabulary
  const renderHighlightedText = () => {
    if (!highlightVocabulary || article.keyVocabulary.length === 0) {
      return <span>{article.text}</span>;
    }

    // Build regex for all vocabulary words
    const words = article.keyVocabulary.map((v) => v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');

    const parts = article.text.split(regex);

    return parts.map((part, index) => {
      const match = article.keyVocabulary.find(
        (v) => v.word.toLowerCase() === part.toLowerCase()
      );

      if (match) {
        return (
          <span
            key={index}
            className="group/vocab relative inline-block cursor-help font-semibold bg-[#00E1C6]/25 text-[#003C7F] px-1 py-0.5 rounded transition-colors hover:bg-[#00E1C6]/50"
          >
            {part}
            {/* Tooltip on hover */}
            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 bg-slate-900 text-white text-[11px] font-normal leading-tight rounded-md shadow-xl opacity-0 group-hover/vocab:opacity-100 transition-opacity z-30">
              <span className="block font-bold text-[#00E1C6] capitalize">
                {match.word} ({match.type})
              </span>
              <span className="block text-slate-300 mt-0.5">{match.definition}</span>
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
            </span>
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section
      id={article.id}
      className="scroll-mt-24 py-16 sm:py-24 border-b border-slate-200/60 relative overflow-hidden"
    >
      {/* Subtle background ambient element */}
      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] text-9xl font-serif font-black select-none"
        style={{
          [imageLeft ? 'right' : 'left']: '5%',
          color: article.accentColor,
        }}
        aria-hidden="true"
      >
        0{article.sectionNumber}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            imageLeft ? '' : 'lg:grid-flow-dense'
          }`}
        >
          {/* ==================== IMAGE COLUMN ==================== */}
          <div
            className={`lg:col-span-6 relative ${
              imageLeft ? 'lg:order-1' : 'lg:col-start-7 lg:order-2'
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Asymmetric Offset Backdrop Box (Faithfully replicating Blog_ejemplo_6a532ddf.jpg) */}
              <div
                className={`absolute -inset-3 sm:-inset-5 z-0 transition-transform duration-500 rounded-sm opacity-90 ${
                  imageLeft ? 'translate-x-4 -translate-y-4' : '-translate-x-4 translate-y-4'
                }`}
                style={{
                  backgroundColor: article.secondaryAccent,
                  opacity: 0.85,
                }}
              />

              {/* Second lighter geometric accent tile for depth */}
              <div
                className={`hidden sm:block absolute w-32 h-32 -z-10 rounded-sm ${
                  imageLeft ? '-bottom-6 -left-6' : '-top-6 -right-6'
                }`}
                style={{
                  backgroundColor: article.accentColor,
                  opacity: 0.25,
                }}
              />

              {/* White Framed Image Box (Exact signature style from Blog_ejemplo_6a532ddf.jpg) */}
              <div className="relative z-10 bg-white p-3 sm:p-4 shadow-xl transition-all duration-300 hover:shadow-2xl group">
                <div className="relative overflow-hidden bg-slate-100 aspect-4/3 flex items-center justify-center">
                  <img
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    onClick={() =>
                      onOpenLightbox(article.imageSrc, article.fullTitle, article.imageMarker)
                    }
                  />

                  {/* Hover Quick Overlay with Inspect / Lightbox Action */}
                  <div
                    onClick={() =>
                      onOpenLightbox(article.imageSrc, article.fullTitle, article.imageMarker)
                    }
                    className="absolute inset-0 bg-[#003C7F]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer text-white p-4 text-center"
                  >
                    <Eye className="w-8 h-8 text-[#00E1C6]" />
                    <span className="text-xs uppercase tracking-widest font-semibold text-white">
                      Click to Expand Image
                    </span>
                    <span className="text-[11px] font-mono text-cyan-200">
                      File: {article.imageMarker}
                    </span>
                  </div>
                </div>

                {/* Subtle Image Marker Caption below the frame */}
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="truncate">Marker: {article.imageMarker}</span>
                  <span className="text-[#008FC2] shrink-0 font-sans font-medium">
                    Fig. 0{article.sectionNumber}
                  </span>
                </div>
              </div>

              {/* Overlapping Decorative Color Banner (Exact signature from reference image sections) */}
              <div
                className={`relative sm:absolute z-20 mt-4 sm:mt-0 ${
                  imageLeft
                    ? 'sm:-bottom-6 sm:-right-8 sm:max-w-xs'
                    : 'sm:-top-6 sm:-left-8 sm:max-w-xs'
                } p-4 text-white shadow-lg`}
                style={{ backgroundColor: article.ribbonColor }}
              >
                <div className="text-[10px] tracking-widest uppercase font-semibold text-cyan-200 mb-0.5">
                  {article.category}
                </div>
                <div className="font-serif-display italic text-sm sm:text-base leading-snug font-medium">
                  "{article.fullTitle}"
                </div>
              </div>
            </div>
          </div>

          {/* ==================== TEXT COLUMN ==================== */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              imageLeft ? 'lg:order-2' : 'lg:col-start-1 lg:order-1'
            }`}
          >
            {/* Metadata Line (Clean, unboxed text with typographic separators) */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3 tracking-wide">
              <span className="font-mono text-[#0065A8] font-bold">0{article.sectionNumber}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="uppercase text-[11px] tracking-wider text-[#008FC2]">
                {article.category}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{article.readTime}</span>
            </div>

            {/* Article Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-medium text-[#003C7F] leading-tight mb-5 tracking-tight text-balance">
              {article.fullTitle}
            </h2>

            {/* Exact Paragraph Content */}
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-sans-body space-y-4">
              <p className="leading-[1.8] text-justify">{renderHighlightedText()}</p>
            </div>

            {/* Key Takeaway Callout Box */}
            <div className="mb-6 p-4 bg-white border border-slate-200/80 rounded-sm shadow-2xs">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#008FC2] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#003C7F] block">
                    Core Reflection
                  </span>
                  <p className="text-xs text-slate-600 mt-0.5 italic">
                    "{article.keyTakeaway}"
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary "Read More" Button */}
              <button
                type="button"
                onClick={() => onOpenArticleModal(article)}
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                style={{ backgroundColor: article.accentColor }}
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Audio Listen Button */}
              <button
                type="button"
                onClick={handleToggleAudio}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium border transition-colors cursor-pointer rounded-sm ${
                  isPlayingAudio
                    ? 'bg-[#00E1C6]/20 border-[#00B9CB] text-[#003C7F] font-semibold'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                }`}
                title={isPlayingAudio ? 'Stop audio' : 'Listen to English narration'}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#003C7F] animate-pulse" />
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#008FC2]" />
                    <span>Listen (English)</span>
                  </>
                )}
              </button>

              {/* View High-Res Image Button */}
              <button
                type="button"
                onClick={() =>
                  onOpenLightbox(article.imageSrc, article.fullTitle, article.imageMarker)
                }
                className="inline-flex items-center gap-1 px-3 py-2 text-xs text-slate-600 hover:text-[#003C7F] hover:bg-white rounded-sm transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Image</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
