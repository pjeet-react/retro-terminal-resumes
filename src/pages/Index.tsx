import React, { useState, useEffect } from 'react';
import { useScreenNavigation } from '@/hooks/useScreenNavigation';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { ScreenIndicator } from '@/components/ScreenIndicator';
import { Taskbar } from '@/components/Taskbar';
import { AboutScreen } from '@/components/sections/AboutScreen';
import { ExperienceScreen } from '@/components/sections/ExperienceScreen';
import { SkillsScreen } from '@/components/sections/SkillsScreen';
import { ProjectsScreen } from '@/components/sections/ProjectsScreen';
import { EducationScreen } from '@/components/sections/EducationScreen';
import { ContactScreen } from '@/components/sections/ContactScreen';
import { sections } from '@/data/content';

const screenComponents = [AboutScreen, ExperienceScreen, SkillsScreen, ProjectsScreen, EducationScreen, ContactScreen];

const Index: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { currentScreen, isTransitioning, goToScreen } = useScreenNavigation({ totalScreens: sections.length, transitionDuration: 600 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
      setTimeout(() => setShowContent(true), 100);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isBooting) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center">
        <div className="crt-scanlines" />
        <div className="text-center">
          <div className="font-display text-xl md:text-2xl text-primary phosphor-glow mb-4 animate-pulse">INITIALIZING SYSTEM...</div>
          <div className="flex gap-1 justify-center">
            {[0, 1, 2, 3, 4].map((i) => (<div key={i} className="w-3 h-3 bg-primary animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <div className="crt-scanlines" />
      <main className="relative h-full w-full">
        {showContent && screenComponents.map((ScreenComponent, index) => (
          <ScreenWrapper key={sections[index].id} isActive={currentScreen === index} isExiting={false}>
            <ScreenComponent />
          </ScreenWrapper>
        ))}
      </main>
      {showContent && <ScreenIndicator totalScreens={sections.length} currentScreen={currentScreen} onNavigate={goToScreen} />}
      {showContent && <Taskbar currentScreen={currentScreen} onNavigate={goToScreen} />}
    </div>
  );
};

export default Index;
