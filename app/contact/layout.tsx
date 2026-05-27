import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Japheth Jerry for web development projects, collaboration opportunities, or any inquiries. Contact via email, phone, or social media.",
  keywords: [
    "Contact Japheth Jerry",
    "Hire Web Developer",
    "Software Engineer Contact",
    "Project Inquiry",
    "Collaboration",
    "Japheth",
    "Jerry",
    "Timileyin",
    "Oluwatimileyin",
    "Japheth Oluwatimileyin Jerry",
    "Japheth Jerry",
    "Qallie",
  ],
  openGraph: {
    title: "Contact Japheth Jerry - Software Engineer",
    description: "Get in touch with Japheth Jerry for web development projects, collaboration opportunities, or any inquiries.",
    images: [
      {
        url: "/assets/images/project_0.png",
        width: 1200,
        height: 630,
        alt: "Contact Japheth Jerry",
      },
    ],
  },
  alternates: {
    canonical: "https://japhethjerry.space/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
