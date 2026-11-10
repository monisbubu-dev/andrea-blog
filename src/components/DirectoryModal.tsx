import React from 'react';
import { X, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';

interface DirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (id: string) => void;
}

export const DirectoryModal: React.FC<DirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  if (!isOpen) return null;

  const handleSelect = (id: string) => {
    onSelectSection(id);
    onClose();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-2xl w-full bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003C7F] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#00E1C6]" />
            <h3 className="font-serif-display text-lg font-medium">Table of Contents · 7 Sections</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 overflow-y-auto divide-y divide-slate-100">
          {BLOG_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => handleSelect(article.id)}
              className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 group cursor-pointer hover:bg-slate-50 px-2 rounded-sm transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <span className="font-mono text-xs font-bold text-[#0065A8] bg-slate-100 px-2 py-1 rounded">
                  0{article.sectionNumber}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-[#003C7F] transition-colors leading-snug">
                    {article.fullTitle}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{article.imageMarker}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center text-xs text-[#008FC2] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Jump</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium rounded-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
