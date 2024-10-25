export type IconData = {
  name: string;
  icon: string;
};

export type Fields = {
  feild: string;
  data: IconData[];
};

export const fields: Fields[] = [
  {
    feild: "backend",
    data: [
      { name: "NodeJs", icon: "/nodejs.svg" },
      { name: "Express", icon: "/express.svg" },
      { name: "Python", icon: "/python.svg" },
      { name: "Flask", icon: "/flask.svg" },
      { name: "Django", icon: "/django.svg" },
      { name: "PostgreSQL", icon: "/postgresql.svg" },
      { name: "MySQL", icon: "/mysql.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
    ],
  },
  {
    feild: "frontend",
    data: [
      { name: "Html", icon: "/html.svg" },
      { name: "Css", icon: "/css.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "TailwindCss", icon: "/tailwind.svg" },
      { name: "ReactJs", icon: "/react.svg" },
      { name: "NextJs", icon: "/nextjs.svg" },
      { name: "React Native", icon: "/react.svg" },
      { name: "Expo", icon: "/expo.svg" },
    ],
  },
  {
    feild: "tools & devops",
    data: [
      { name: "Linux", icon: "/linux.svg" },
      { name: "Nginx", icon: "/nginx.svg" },
      { name: "Docker", icon: "/docker.svg" },
      { name: "Git", icon: "/git.svg" },
      { name: "Figma", icon: "/figma.svg" },
    ],
  },
];
