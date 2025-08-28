import { color } from "framer-motion";

export const siteMeta = {
  name: "Jaimin Acharya",
  title: "Full Stack Developer | React & Next.js Specialist",
  description:
    "Passionate full-stack developer specializing in React, Next.js, and cloud-based microservices architecture. Currently improving scalable solutions with modern web technologies.",
  url: "https://jaiminacharya.dev",
  ogImage: "/og.png",
  author: "Jaimin Acharya",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Microservices",
  ],
};

export const hero = {
  greeting: "Jaimin Acharya",
  subtitle: "FullStack Developer",
  description:
    "Currently improving cloud-based solutions and implementing microservices architecture. I specialize in React, Next.js, and modern web technologies, always eager to collaborate on innovative fullstack projects.",
  ctas: [
    { text: "View Projects", href: "#projects", variant: "primary" },
    { text: "Contact Me", href: "#contact", variant: "secondary" },
    {
      text: "Download Resume",
      href: "/Jaimin-Acharya-Resume.pdf",
      variant: "outline",
    },
  ],
};

export const NavLinks = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export const about = {
  head: "I'm Jaimin Acharya focused on user-friendly interfaces and solid engineering. My toolkit includes Next.js, React, and Tailwind CSS. I enjoy shipping small, polished products.",
  bio: "I'm a passionate Full Stack Developer currently focused on improving cloud-based solutions and implementing microservices architecture. With expertise in modern web technologies, I enjoy building scalable applications and am always learning new technologies like Next.js with TypeScript.",

  currentFocus:
    "Currently learning Next.js with TypeScript and improving cloud-based solutions",
  collaboration: "Let's connect and collaborate!",
};

export const contact = {
  email: "jaiminacharya9@gmail.com",
  phone: "+91 9106212679",
  socials: {
    linkedin: "https://www.linkedin.com/in/jaimin-acharya-40774b295/",
    github: "https://github.com/jaimin-acharya",
    instagram: "https://www.instagram.com/jaiminacharya9/",
    facebook: "https://www.facebook.com/jaiminacharya333",
    x: "https://x.com/JaiminAcha3064",
  },
  availability: "Open to fullstack project collaborations",
};

export const experience = [
  {
    role: "Fullstack Developer Intern",
    company: "SNB Innovations",
    duration: "Aug 2025 — Present",
    description:
      "Developed and deployed microservices using React.js and REST APIs. Currently improving cloud-based solutions and implementing microservices architecture.",
    skills: ["React.js", "REST APIs", "Microservices", "Cloud Solutions"],
  },
];

export const projects = [
  {
    title: "Movies World",
    img: "/projects/moviesworld.png",
    description:
      "a modern movie browsing platform that allows users to explore trending movies and series, manage wishlists, and enjoy a seamless movie discovery experience.",
    tags: [
      "react",
      "reactrouter",
      "tailwindcss",
      "firebase",
      "appwrite",
      "themoviedatabase",
    ],
    href: "https://infomoviesworld.vercel.app/",
  },
  {
    title: "Vatsal Acharya Architects",
    img: "/projects/vatsalacharyaarchitects.png",
    description:
      "Vatsal Acharya Architects is a modern architecture portfolio website that showcases premium architectural projects in a clean, elegant format.",
    tags: [
      "react",
      "tailwindcss",
      "javascript",
      "styledcomponents",
      "maildotru", // no Email.js, fallback to Mail.ru
    ],
    href: "https://vatsalacharyaarchitects.vercel.app/",
  },
  {
    title: "3D Portfolio",
    img: "/projects/3dportfolio.png",
    description:
      "Interactive 3D portfolio built with React, Three.js, and React Three Fiber. Showcase your skills, projects, and contact info in a visually immersive way.",
    tags: [
      "react",
      "tailwindcss",
      "threedotjs",
      "gsap", // React Three Fiber fallback
      "javascript",
    ],
    href: "https://jaiminacharya3d.vercel.app/",
  },
  {
    title: "Pokemon Info",
    img: "/projects/pokemoninfo.png",
    description: "Searchable PokemonCards With States.",
    tags: ["react", "javascript"],
    href: "https://jaimin-pokemon-project.netlify.app/",
  },
];

export const techIcons = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "React Router", slug: "reactrouter", color: "CA4245" },
  {
    name: "Next.js",
    slug: "nextdotjs",
    darkColor: "FFFFFF",
    lightColor: "000000",
  },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  {
    name: "Express",
    slug: "express",
    darkColor: "FFFFFF",
    lightColor: "000000",
  },
  { name: "Vercel", slug: "vercel", darkColor: "FFFFFF", lightColor: "000000" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github", darkColor: "FFFFFF", lightColor: "000000" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
  { name: "Figma", slug: "figma" },
  { name: "Canva", slug: "canva" },
  { name: "Postman", slug: "postman" },
  { name: "Prettier", slug: "prettier" },
  { name: "Prisma", slug: "prisma" },
  { name: "MySQL", slug: "mysql" },
  {
    name: "Shadcn/UI",
    slug: "shadcnui",
    darkColor: "FFFFFF",
    lightColor: "000000",
  },
  {
    name: "Radix UI",
    slug: "radixui",
    darkColor: "FFFFFF",
    lightColor: "000000",
  },
  { name: "Chakra UI", slug: "chakraui" },
  { name: "MUI", slug: "mui" },
  { name: "Notion", slug: "notion", darkColor: "FFFFFF", lightColor: "000000" },
  { name: "v0", slug: "v0", darkColor: "FFFFFF", lightColor: "000000" },
  { name: "Claude", slug: "claude" },
  {
    name: "ChatGPT",
    slug: "openai",
    darkColor: "FFFFFF",
    lightColor: "000000",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Vatsal Acharya",
    position: "Architect at Vatsal Acharya Architects",
    img: "/clients/review1.jpg",
    review:
      "Working with Jaimin was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web development projects.",
  },
  {
    id: 2,
    name: "Ravi Acharya",
    position: "Civil Engineer at Dhuvanshi Constuction",
    img: "/clients/review2.jpg",
    review:
      "Jaimin’s expertise in web development is truly Impressive. He delivered a robust and scalable solution for our constuction site, and our online reach have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "Raval Krutarth",
    position: "Web Developer",
    img: "/clients/review3.svg",
    review:
      "I can’t say enough good things about Jaimin. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
];
