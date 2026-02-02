
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-brown font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1.5 w-24 bg-brown rounded-full ${centered ? 'mx-auto' : 'ml-0'}`}></div>
    </div>
  );
};

export default SectionHeading;
