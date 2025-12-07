import React, { useState } from 'react';
import { projects } from '@/data/content';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, X } from 'lucide-react';

export const ProjectsScreen: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
      {/* Section header */}
      <div className="text-center mb-6 animate-cascade cascade-delay-1">
        <h2 className="section-header">Programs</h2>
        <p className="text-muted-foreground text-sm mt-2">DEVELOPED APPLICATIONS // CLICK TO EXECUTE</p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={cn(
              'retro-panel text-left transition-all hover:border-primary group',
              `animate-cascade cascade-delay-${index + 2}`,
              selectedProject?.id === project.id && 'border-primary box-glow'
            )}
          >
            {/* Project icon/number */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary border border-primary text-primary font-display text-xl shrink-0">
                {String(project.id).padStart(2, '0')}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg text-primary group-hover:phosphor-glow-subtle truncate">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1 mt-3">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 text-[10px] font-mono bg-card border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90">
          <div className="retro-panel max-w-lg w-full box-glow-strong animate-screen-on">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground font-display">
                  {String(selectedProject.id).padStart(2, '0')}
                </div>
                <h3 className="font-display text-2xl text-primary phosphor-glow-subtle">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 hover:bg-secondary transition-colors"
                aria-label="Close"
              >
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>

            {/* Description */}
            <p className="text-foreground mb-4 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <span className="text-xs text-muted-foreground font-mono">TECHNOLOGIES:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary border border-primary/50 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button flex items-center gap-2 flex-1 justify-center"
              >
                <Github size={16} />
                VIEW SOURCE
              </a>
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button flex items-center gap-2 flex-1 justify-center"
                >
                  <ExternalLink size={16} />
                  LAUNCH
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
