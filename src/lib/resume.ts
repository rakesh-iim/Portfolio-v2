import React from 'react';
import { personalInfo, experiences, skillCategories } from '@/data/portfolio';

const buildResumeText = () => {
  const lines: string[] = [];
  lines.push(`${personalInfo.name} — Resume`);
  lines.push('');
  lines.push(`${personalInfo.role} | ${personalInfo.tagline}`);
  lines.push('');
  lines.push('About');
  personalInfo.about.forEach((p) => lines.push(p));
  lines.push('');
  lines.push('Experience');
  experiences.forEach((exp) => {
    lines.push(`- ${exp.role} @ ${exp.company} (${exp.period})`);
    lines.push(`  ${exp.summary}`);
    lines.push(`  Tech: ${exp.technologies.join(', ')}`);
  });
  lines.push('');
  lines.push('Skills');
  (Object.entries(skillCategories) as [string, readonly string[]][]).forEach(([category, items]) => {
    lines.push(`- ${category}: ${items.join(', ')}`);
  });
  return lines.join('\n');
};

export const downloadResume = (e: React.MouseEvent) => {
  e.preventDefault();
  const blob = new Blob([buildResumeText()], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
