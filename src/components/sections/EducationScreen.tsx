import React from 'react';
import { education } from '@/data/content';
import { Award, GraduationCap } from 'lucide-react';

export const EducationScreen: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
      {/* Section header */}
      <div className="text-center mb-8 animate-cascade cascade-delay-1">
        <h2 className="section-header">Credentials</h2>
        <p className="text-muted-foreground text-sm mt-2">CERTIFICATIONS & TRAINING // VERIFIED</p>
      </div>

      {/* Education cards */}
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`retro-panel flex gap-4 animate-cascade cascade-delay-${index + 2}`}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-secondary border border-primary text-primary shrink-0">
              {edu.degree.toLowerCase().includes('b.s') || edu.degree.toLowerCase().includes('m.s') ? (
                <GraduationCap size={24} />
              ) : (
                <Award size={24} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-display text-lg md:text-xl text-primary phosphor-glow-subtle">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 bg-secondary border border-border text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-foreground mt-1">{edu.institution}</p>
              <p className="text-xs text-muted-foreground mt-2">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
