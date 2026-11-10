import React, { useState } from 'react';
import { X, Check, Copy, Palette as PaletteIcon } from 'lucide-react';

interface PaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PALETTE_DETAILS = [
  {
    hex: '#003C7F',
    name: 'Deep Royal Navy',
    role: 'Primary Brand, Headings, Logo & Dominant Accents',
    textColor: 'text-white',
  },
  {
    hex: '#0065A8',
    name: 'Ocean Blue',
    role: 'Editorial Buttons, Quote Banners & Subheadings',
    textColor: 'text-white',
  },
  {
    hex: '#008FC2',
    name: 'Cerulean Sky',
    role: 'Active Indicators, Ribbon Banners & Framing Blocks',
    textColor: 'text-white',
  },
  {
    hex: '#00B9CB',
    name: 'Teal Cyan',
    role: 'Highlights, Offset Accent Tiles & Callout Borders',
    textColor: 'text-slate-900',
  },
  {
    hex: '#00E1C6',
    name: 'Bright Mint Turquoise',
    role: 'Vocabulary Highlighting, Micro-Glows & Hover States',
    textColor: 'text-slate-900',
  },
];

export const PaletteModal: React.FC<PaletteModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-lg w-full bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003C7F] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PaletteIcon className="w-5 h-5 text-[#00E1C6]" />
            <h3 className="font-serif-display text-lg font-medium">Design Color Palette</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Swatches List */}
        <div className="p-6 space-y-3">
          <p className="text-xs text-slate-600 mb-4">
            Curated blues and cyans specified for Andrea Ospina's blog, applied to backgrounds, borders, buttons, and layered offset cards:
          </p>

          <div className="space-y-2.5">
            {PALETTE_DETAILS.map((color) => (
              <div
                key={color.hex}
                className="flex items-center justify-between p-3 rounded-sm border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-sm shadow-xs border border-black/10 shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-slate-800">
                        {color.hex}
                      </span>
                      <span className="text-xs text-slate-700 font-medium">{color.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{color.role}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(color.hex)}
                  className="p-1.5 text-slate-400 hover:text-[#003C7F] hover:bg-slate-100 rounded transition-colors"
                  title="Copy Hex Code"
                >
                  {copiedHex === color.hex ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Combined Visual Swatch Strip */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              Harmonic Gradient
            </span>
            <div className="h-4 rounded-sm flex overflow-hidden shadow-inner">
              {PALETTE_DETAILS.map((c) => (
                <div key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#003C7F] text-white text-xs font-medium rounded-sm hover:bg-[#0065A8] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
