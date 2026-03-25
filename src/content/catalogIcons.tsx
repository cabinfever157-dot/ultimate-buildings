// Icon components for catalog items
import React from 'react';

export const WindowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12h18M12 3v18" />
  </svg>
);

export const DoorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18M14 12h.01" />
  </svg>
);

export const StoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M4 14.5l5.5-5.5 4-4 6.5 6.5M4 14.5L10 20l4-4 6.5-6.5" />
    <path d="M10 14.5l4-4" />
  </svg>
);

export const WoodIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M4 6V4a2 2 0 012-2h12a2 2 0 012 2v2M4 18v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    <path d="M4 12h16M10 6v12M14 6v12" />
  </svg>
);

export const PrefabIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 11v10M15 11v10M9 7h6" />
  </svg>
);

export const FlooringIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M3 12l9-7 9 7M4 10v11h16V10M12 14v7" />
    <path d="M4 17h16" />
  </svg>
);

export const PowerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
    <line x1="12" y1="2" x2="12" y2="12"/>
  </svg>
);