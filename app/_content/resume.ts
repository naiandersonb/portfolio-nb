export const profile = {
  name: "Naianderson Bruno",
  fullName: "Naianderson Bruno França da Silva",
  location: "Caxias, MA",
  email: "naiandersonb.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/naianderson-bruno",
  github: "https://github.com/naiandersonb",
  resumePath: "/naianderson-bruno-front-end.pdf",
};

export const stats = [
  { key: "experienceYears", value: "4+" },
  { key: "trainingHours", value: "1062H" },
  { key: "dailyTechnologies", value: "16" },
  { key: "liveProducts", value: "04" },
] as const;

export const experience = {
  company: "TheMembers",
  stack: ["TypeScript", "Next.js", "TanStack Query", "Chakra UI", "shadcn/ui"],
  projectCodes: ["ADM", "COM", "PLY", "POS"],
} as const;

export const ownProduct = {
  name: "AcheiConsulta",
  projects: [
    {
      code: "LDG",
      stack: ["Astro"],
      link: { href: "https://acheiconsulta.com/", label: "acheiconsulta.com" },
    },
    {
      code: "PNL",
      stack: [
        "React",
        "Vite",
        "TanStack Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "MUI",
        "Vitest",
      ],
      link: null,
    },
  ],
} as const;

export const skillGroups = [
  {
    key: "languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  { key: "frameworks", items: ["React.js", "Next.js", "Vite", "Astro"] },
  { key: "stateAndData", items: ["TanStack Query", "Context API", "Zustand"] },
  {
    key: "interface",
    items: [
      "Tailwind",
      "shadcn/ui",
      "Chakra UI",
      "Material UI",
      "Styled Components",
    ],
  },
] as const;

export const education = [
  { key: "systemsTechnician", school: "SENAI", hours: "1000H", year: "2021" },
  { key: "reactArchitecture", school: "Alura", hours: "35H", year: "2025" },
  { key: "advancedTypeScript", school: "Alura", hours: "27H", year: "2025" },
] as const;
