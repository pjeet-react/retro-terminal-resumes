import React from 'react';
import { cn } from '@/lib/utils';
import { sections } from '@/data/content';

interface TaskbarProps {
  currentScreen: number;
  onNavigate: (index: number) => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({ currentScreen, onNavigate }) => {
  return (
    <nav className="taskbar" role="navigation" aria-label="Main navigation">
      {/* Start button / Logo */}
      <div className="flex items-center mr-2">
        <div className="px-3 py-1.5 font-display text-lg text-primary border border-primary bg-secondary/50">
          <span className="phosphor-glow-subtle">PJ</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-border mx-2" />

      {/* Section buttons */}
      <div className="flex-1 flex items-center gap-1 overflow-x-auto px-1">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onNavigate(index)}
            className={cn(
              'taskbar-button whitespace-nowrap flex items-center gap-1.5',
              currentScreen === index && 'active'
            )}
            aria-current={currentScreen === index ? 'page' : undefined}
          >
            <span className="hidden sm:inline">{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* System tray */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-card/50 border border-border ml-2">
        <span className="text-xs text-muted-foreground font-mono">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </nav>
  );
};
