import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { PALETTE } from '../data/blogData';

export const AccentStripe: React.FC = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 text-white relative overflow-hidden my-4"
      style={{
        backgroundColor: PALETTE.ocean,
      }}
    >
      {/* Decorative background geometry */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#00E1C6]/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#003C7F]/40 blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <Quote className="w-8 h-8 mx-auto text-[#00E1C6] opacity-80 mb-4" />
        <p className="font-serif-display text-xl sm:text-2xl lg:text-3xl italic font-normal leading-relaxed text-slate-50 max-w-3xl mx-auto">
          "When we learn a language in a versatile way—immersing ourselves in contexts we love to research and explore—expanding vocabulary becomes truly enriching."
        </p>
        <div className="mt-4 flex items-center justify-center gap-3 text-xs tracking-widest uppercase font-medium text-cyan-200">
          <span>Andrea Ospina</span>
          <span aria-hidden="true">·</span>
          <span>SENA Multimedia & Web Development Technology</span>
        </div>
      </div>
    </div>
  );
};
