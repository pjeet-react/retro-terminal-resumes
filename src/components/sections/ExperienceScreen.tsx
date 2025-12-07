import React from 'react';
import { experience } from '@/data/content';

export const ExperienceScreen: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
      {/* Section header */}
      <div className="text-center mb-8 animate-cascade cascade-delay-1">
        <h2 className="section-header">System Log</h2>
        <p className="text-muted-foreground text-sm mt-2">MISSION HISTORY // EXPERIENCE RECORDS</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="timeline-connector hidden md:block" />

        {/* Experience entries */}
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`retro-panel md:ml-12 animate-cascade cascade-delay-${index + 2}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-4 w-4 h-4 bg-primary border-2 border-background box-glow" 
                   style={{ marginTop: '1rem' }} />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-primary phosphor-glow-subtle">
                    {exp.role}
                  </h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-secondary border border-border text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono bg-card border border-primary/30 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
