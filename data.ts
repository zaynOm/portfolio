import { CardProps } from "@/components/projects";

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

export const projects: CardProps[] = [
  {
    title: "Koffee | coffee shop",
    image: "/koffee.png",
    descreption:
      "Discover the art of exceptional coffee with Koffee. From handpicked beans to carefully curated blends, we’re dedicated to serving the finest coffee experience. Step in for a sip of quality, taste, and comfort.",
    url: "https://koff-ee.vercel.app",
  },
  {
    title: "Tabadol | Location exchange for educational personnel",
    image: "/tabadol.png",
    descreption:
      "Tabadol is a mobile app that enables educational personnel to share their demands to exchange post with others.",
    url: "https://github.com/zaynOm/tabadol",
  },
];
