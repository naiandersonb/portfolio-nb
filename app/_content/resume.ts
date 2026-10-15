export const profile = {
  name: "Naianderson Bruno",
  fullName: "Naianderson Bruno França da Silva",
  role: "Desenvolvedor Front-End",
  location: "Caxias, MA",
  headlines: [
    "construindo um dashboard white label",
    "criando interfaces que escalam",
    "tipando tudo com TypeScript",
    "levando produtos para produção",
  ],
  availability: "Disponível para novos projetos",
  tagline: "Interfaces que escalam, código que dura",
  summary: "Desenvolvedor front-end · React, Next.js e TypeScript",
  email: "naiandersonb.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/naianderson-bruno",
  github: "https://github.com/naiandersonb",
  resumePath: "/naianderson-bruno-front-end.pdf",
};

export const about = [
  {
    text: "Transformo regras de negócio complexas em interfaces ",
    muted: false,
  },
  { text: "claras, rápidas", muted: true },
  { text: " e fáceis de manter, ", muted: false },
  { text: "do primeiro commit", muted: true },
  { text: " à produção.", muted: false },
];

export const stats = [
  { label: "Anos de experiência", value: "4+" },
  { label: "Horas de formação", value: "1062H" },
  { label: "Tecnologias no dia a dia", value: "16" },
  { label: "Produtos em produção", value: "04" },
];

export const experience = {
  company: "TheMembers",
  role: "Desenvolvedor Front-End",
  period: "Jun 2022 — Presente",
  stack: ["TypeScript", "Next.js", "TanStack Query", "Chakra UI", "shadcn/ui"],
  projects: [
    {
      code: "ADM",
      title: "Dashboard Admin & White Label",
      description:
        "Manutenção e evolução da dashboard de administração e da plataforma white label com TypeScript e Next.js, garantindo escalabilidade para que diversos clientes gerenciem conteúdos e dados de forma eficiente e segura.",
    },
    {
      code: "COM",
      title: "Comunidade interativa",
      description:
        "Rede social interna com postagens multimídia e sistema de reações dinâmicas no estilo LinkedIn, aumentando de forma significativa o engajamento e a retenção de alunos.",
    },
    {
      code: "PLY",
      title: "Player de vídeo",
      description:
        "Player interno customizado sobre a biblioteca Plyr, com interface e funcionalidades adaptadas ao consumo de conteúdo dos alunos para uma experiência de aprendizado fluida.",
    },
    {
      code: "POS",
      title: "Dashboard de pós-venda",
      description:
        "Fluxos autônomos de reembolso e cancelamento construídos com shadcn/ui e o design system da empresa, reduzindo a carga de solicitações manuais ao suporte.",
    },
  ],
};

export const ownProduct = {
  name: "AcheiConsulta",
  role: "Sócio & Desenvolvedor Front-End",
  period: "Ago 2024 — Presente",
  summary:
    "SaaS de agenda e agendamento online 24h para profissionais de saúde, vitrine profissional, pagamento antecipado das consultas e gestão financeira em uma única plataforma.",
  projects: [
    {
      code: "LDG",
      title: "Landing page",
      description:
        "Página de aquisição do produto, focada em conversão para o teste grátis, com apresentação do plano, prova social e dúvidas frequentes.",
      stack: ["Astro"],
      link: { href: "https://acheiconsulta.com/", label: "acheiconsulta.com" },
    },
    {
      code: "PNL",
      title: "Painel do profissional",
      description:
        "Principal desenvolvedor do painel onde o profissional gerencia agenda, consultas, locais de atendimento, assinatura do plano, extratos e saques. Arquitetura em camadas (domain, application, infrastructure, presentation), notificações em tempo real e testes automatizados.",
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
};

export const skillGroups = [
  {
    label: "Linguagens",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  { label: "Frameworks", items: ["React.js", "Next.js", "Vite", "Astro"] },
  {
    label: "Estado & Dados",
    items: ["TanStack Query", "Context API", "Zustand"],
  },
  {
    label: "Interface",
    items: [
      "Tailwind",
      "shadcn/ui",
      "Chakra UI",
      "Material UI",
      "Styled Components",
    ],
  },
];

export const education = [
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    school: "SENAI",
    hours: "1000H",
    year: "2021",
  },
  {
    title: "Arquitetura e Design de Aplicações React",
    school: "Alura",
    hours: "35H",
    year: "2025",
  },
  {
    title: "TypeScript Avançado no Front-end",
    school: "Alura",
    hours: "27H",
    year: "2025",
  },
];
