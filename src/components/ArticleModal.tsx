import React, { useEffect, useState } from 'react';
import { X, Volume2, VolumeX, Sparkles, BookOpen, Quote, HelpCircle, CheckCircle } from 'lucide-react';
import { BlogArticle } from '../data/blogData';

interface ArticleModalProps {
  article: BlogArticle | null;
  onClose: () => void;
  onOpenLightbox: (src: string, title: string, marker: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenLightbox,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isPlayingAudio) window.speechSynthesis.cancel();
        onClose();
      }
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
      if (isPlayingAudio) window.speechSynthesis.cancel();
    };
  }, [article, isPlayingAudio, onClose]);

  if (!article) return null;

  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(article.text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="absolute inset-0"
        onClick={() => {
          if (isPlayingAudio) window.speechSynthesis.cancel();
          onClose();
        }}
      />

      <div className="relative z-10 max-w-3xl w-full bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[92vh] border border-slate-200">
        {/* Top Header */}
        <div
          className="px-6 py-4 text-white flex items-center justify-between"
          style={{ backgroundColor: article.accentColor }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/20">
              0{article.sectionNumber}
            </span>
            <span className="text-xs uppercase tracking-widest text-cyan-200">
              {article.category}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (isPlayingAudio) window.speechSynthesis.cancel();
              onClose();
            }}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#003C7F] leading-tight mb-2">
              {article.fullTitle}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-600">Image: {article.imageMarker}</span>
            </div>
          </div>

          {/* Featured Image with Click to Zoom */}
          <div
            className="relative rounded-sm overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer"
            onClick={() => onOpenLightbox(article.imageSrc, article.fullTitle, article.imageMarker)}
          >
            <img
              src={article.imageSrc}
              alt={article.imageAlt}
              className="w-full max-h-72 object-cover object-center group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-[#003C7F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1.5">
              <span>Click to view full image</span>
            </div>
          </div>

          {/* Audio Player Bar */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-sm">
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <Volume2 className="w-4 h-4 text-[#008FC2]" />
              <span className="font-medium">Audio Pronunciation & Reading Practice</span>
            </div>
            <button
              type="button"
              onClick={handleToggleAudio}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider text-white transition-colors"
              style={{ backgroundColor: article.accentColor }}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                  <span>Stop</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Listen in English</span>
                </>
              )}
            </button>
          </div>

          {/* Full Text */}
          <div className="text-slate-800 text-base leading-relaxed font-sans-body space-y-4">
            <p className="leading-relaxed whitespace-pre-line text-justify">{article.text}</p>
          </div>

          {/* Core Reflection Quote */}
          <div className="p-4 bg-[#00E1C6]/10 border-l-4 border-[#00B9CB] rounded-r-sm">
            <div className="flex items-start gap-2.5">
              <Quote className="w-4 h-4 text-[#0065A8] shrink-0 mt-0.5" />
              <p className="text-sm italic text-slate-700">"{article.keyTakeaway}"</p>
            </div>
          </div>

          {/* Key Vocabulary Breakdown */}
          {article.keyVocabulary.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#008FC2]" />
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#003C7F]">
                  English Vocabulary & Idiomatic Terms
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {article.keyVocabulary.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 border border-slate-200/80 rounded-sm text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#003C7F]">{item.word}</span>
                      <span className="text-[10px] italic text-slate-500 font-mono">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-normal">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Andrea Ospina · English Learning Portfolio</span>
          <button
            type="button"
            onClick={() => {
              if (isPlayingAudio) window.speechSynthesis.cancel();
              onClose();
            }}
            className="px-4 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
