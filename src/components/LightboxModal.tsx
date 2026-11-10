import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Image as ImageIcon } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  marker: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  marker,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-5xl w-full bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5 truncate">
            <ImageIcon className="w-4 h-4 text-[#00E1C6] shrink-0" />
            <h3 className="text-sm font-medium truncate font-serif-display">{title}</h3>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-mono text-cyan-300 bg-white/10 px-2 py-0.5 rounded">
              {marker}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display Area */}
        <div className="relative flex-1 overflow-auto bg-slate-950/95 flex items-center justify-center p-4 min-h-[300px]">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[72vh] max-w-full object-contain mx-auto shadow-lg"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-sans font-medium text-slate-700">
            Personal English Learning Blog — High-Resolution Asset View
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-medium transition-colors"
          >
            Close Viewer (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
