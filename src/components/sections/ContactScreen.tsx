import React from 'react';
import { personalInfo, socialLinks } from '@/data/content';
import { Github, Linkedin, Mail, Radio } from 'lucide-react';

export const ContactScreen: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 text-center">
      {/* Section header */}
      <div className="mb-8 animate-cascade cascade-delay-1">
        <h2 className="section-header">Establish Connection</h2>
        <p className="text-muted-foreground text-sm mt-4">
          READY TO RECEIVE TRANSMISSION // SELECT CHANNEL
        </p>
      </div>

      {/* Connection status */}
      <div className="retro-panel inline-flex items-center gap-3 mb-8 animate-cascade cascade-delay-2">
        <Radio className="text-primary animate-pulse" size={20} />
        <span className="text-sm text-foreground">
          STATUS: <span className="text-primary font-bold">{personalInfo.availability.toUpperCase()}</span>
        </span>
      </div>

      {/* Contact channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* LinkedIn */}
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="retro-panel flex flex-col items-center py-8 hover:border-primary hover:box-glow transition-all group animate-cascade cascade-delay-3"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-secondary border-2 border-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Linkedin size={32} className="text-primary group-hover:text-primary-foreground" />
          </div>
          <span className="font-display text-lg text-primary group-hover:phosphor-glow-subtle">LINKEDIN</span>
          <span className="text-xs text-muted-foreground mt-1">Professional Network</span>
        </a>

        {/* GitHub */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="retro-panel flex flex-col items-center py-8 hover:border-primary hover:box-glow transition-all group animate-cascade cascade-delay-4"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-secondary border-2 border-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Github size={32} className="text-primary group-hover:text-primary-foreground" />
          </div>
          <span className="font-display text-lg text-primary group-hover:phosphor-glow-subtle">GITHUB</span>
          <span className="text-xs text-muted-foreground mt-1">Code Repository</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${socialLinks.email}`}
          className="retro-panel flex flex-col items-center py-8 hover:border-primary hover:box-glow transition-all group animate-cascade cascade-delay-5"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-secondary border-2 border-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Mail size={32} className="text-primary group-hover:text-primary-foreground" />
          </div>
          <span className="font-display text-lg text-primary group-hover:phosphor-glow-subtle">EMAIL</span>
          <span className="text-xs text-muted-foreground mt-1">Direct Message</span>
        </a>
      </div>

      {/* Closing message */}
      <div className="text-sm text-muted-foreground animate-cascade cascade-delay-6">
        <p className="mb-2">Thanks for exploring my portfolio.</p>
        <p className="font-display text-primary phosphor-glow-subtle text-lg">
          Let's build something great together.
        </p>
      </div>
    </div>
  );
};
