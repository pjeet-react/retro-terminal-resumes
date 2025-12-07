import React, { useState } from 'react';
import { skills } from '@/data/content';
import { cn } from '@/lib/utils';

type SkillCategory = keyof typeof skills;

const categoryLabels: Record<SkillCategory, string> = {
  cloud: 'CLOUD',
  containers: 'CONTAINERS',
  cicd: 'CI/CD',
  iac: 'INFRASTRUCTURE',
  scripting: 'SCRIPTING',
  monitoring: 'MONITORING',
};

export const SkillsScreen: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; level: string; icon: string } | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
      {/* Section header */}
      <div className="text-center mb-6 animate-cascade cascade-delay-1">
        <h2 className="section-header">Tech Inventory</h2>
        <p className="text-muted-foreground text-sm mt-2">ACQUIRED SKILLS // SELECT TO INSPECT</p>
      </div>

      {/* Skill inventory grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {(Object.keys(skills) as SkillCategory[]).map((category, catIndex) => (
          <div
            key={category}
            className={`retro-panel animate-cascade cascade-delay-${catIndex + 2}`}
          >
            {/* Category header */}
            <div className="text-xs font-display text-primary mb-3 tracking-wider border-b border-border pb-2">
              {categoryLabels[category]}
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-3 gap-2">
              {skills[category].map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={cn(
                    'inventory-slot flex flex-col items-center justify-center',
                    selectedSkill?.name === skill.name && 'border-primary box-glow'
                  )}
                  title={`${skill.name} - ${skill.level}`}
                >
                  <span className="text-2xl mb-1">{skill.icon}</span>
                  <span className="text-[10px] font-mono text-muted-foreground truncate w-full text-center">
                    {skill.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected skill info panel */}
      <div className="mt-6 retro-panel min-h-[80px] flex items-center justify-center animate-cascade cascade-delay-6">
        {selectedSkill ? (
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl">{selectedSkill.icon}</span>
              <span className="font-display text-2xl text-primary phosphor-glow-subtle">
                {selectedSkill.name}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">PROFICIENCY:</span>
              <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-display">
                {selectedSkill.level.toUpperCase()}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm font-mono animate-pulse">
            [ SELECT A SKILL TO INSPECT ]
          </p>
        )}
      </div>
    </div>
  );
};
