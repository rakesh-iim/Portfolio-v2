import React from 'react';

export const downloadResume = (e: React.MouseEvent) => {
  e.preventDefault();
  const content = "Rakesh Kumar Behera - Resume\n\nSoftware Engineer | Tech Innovator\n\nExperience: \n- Software Engineer\n\nSkills:\n- React\n- TypeScript\n- Next.js";
  const blob = new Blob([content], { type: "application/pdf" }); // Simulating PDF with text content for the sake of example, normally it'd be base64 or a real URL
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Rakesh_Kumar_Behera_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
