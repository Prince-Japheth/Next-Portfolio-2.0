import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern technologies. View case studies, live demos, and project details.",
  keywords: [
    "Japheth",
    "Jerry",
    "Timileyin",
    "Oluwatimileyin",
    "Japheth Oluwatimileyin Jerry",
    "Japheth Jerry", 
    "Qallie",
    "Co-Founder of Qallie",
    "Portfolio Projects",
    "Web Development Projects",
    "React Projects",
    "Next.js Projects",
    "TypeScript Projects",
    "Case Studies",
    "Project Showcase"
  ],
  openGraph: {
    title: "Japheth Jerry - Project Portfolio",
    description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern technologies.",
    images: [
      {
        url: "/assets/images/project_0.png",
        width: 1200,
        height: 630,
        alt: "Japheth Jerry - Project Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://japhethjerry.space/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}