import React from "react";
import './HeroBanner.css';

interface HeroBannerProps {
  message: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ message }) => {
  return (
    <main className="hero-banner">
      <h2 className="text-banner">{message}</h2>
    </main>
  );
};
