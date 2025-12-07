import React from 'react';
import { personalInfo, socialLinks } from '@/data/content';
import { Github, Linkedin, Mail } from 'lucide-react';

export const AboutScreen: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 text-center">
      {/* System boot text */}
      <div className="text-muted-foreground text-xs md:text-sm font-mono mb-4 animate-cascade cascade-delay-1">
        SYSTEM INITIALIZED... LOADING PROFILE...
      </div>

      {/* Name - Main headline */}
      <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary phosphor-glow animate-cascade cascade-delay-2 tracking-wider">
        {personalInfo.name}
      </h1>

      {/* Role designation */}
      <div className="mt-4 animate-cascade cascade-delay-3">
        <span className="inline-block px-4 py-2 bg-secondary border-2 border-primary font-display text-xl md:text-2xl text-primary uppercase tracking-widest">
          {personalInfo.role}
        </span>
      </div>

      {/* Tagline */}
      <p className="mt-6 md:mt-8 text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed animate-cascade cascade-delay-4">
        {personalInfo.tagline}
      </p>

      {/* Bio */}
      <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed animate-cascade cascade-delay-5">
        {personalInfo.bio}
      </p>

      {/* Quick links */}
      <div className="mt-8 md:mt-12 flex justify-center gap-4 animate-cascade cascade-delay-6">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button flex items-center gap-2"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={18} />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button flex items-center gap-2"
          aria-label="GitHub Profile"
        >
          <Github size={18} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href={`mailto:${socialLinks.email}`}
          className="retro-button flex items-center gap-2"
          aria-label="Email Contact"
        >
          <Mail size={18} />
          <span className="hidden sm:inline">Email</span>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-muted-foreground text-xs animate-pulse-glow">
        <span className="font-display">↓ SCROLL TO CONTINUE ↓</span>
      </div>
    </div>
  );
};
