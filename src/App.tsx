import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  additionalImages?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hamdam – Mental Health App",
    image: "/src/public/Images/Mental Health/Slide 16_9 - 1.png",
    category: "UI",
    description : "Hamdam is a calm and minimal mobile app designed to support mental well-being and emotional balance. The interface focuses on simplicity, soft colors, and intuitive navigation to create a relaxing experience for users.",
    additionalImages: [
     "/src/public/Images/Mental Health/iphone 15.png",
     "/src/public/Images/Mental Health/iphone 15 (1).png",
     "/src/public/Images/Mental Health/iphone 15 (2).png",
     "/src/public/Images/Mental Health/iphone 15 (3).png",
     "/src/public/Images/Mental Health/iphone 15 (4).png"
    ]
  },
  {
    id: 2,
    title: "Dotamid - Responsive",
    image: "/src/public/Images/Dotamid/Slide 16_9 - 2.png",
    category: "UI",
    description: "",
    additionalImages: [
    "/src/public/Images/Dotamid/iphone 15.png",
    "/src/public/Images/Dotamid/iphone 15 (1).png"
    ]
  },
  {
    id: 3,
    title: "Front End Course Poster",
    image: "/src/public/Images/Front poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 4,
    title: "AbrArvan Visit Poster",
    image: "/src/public/Images/Abrarvan visit without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 5,
    title: "Soft Skill Course Poster",
    image: "/src/public/Images/Maharat Narm Course Poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 6,
    title: "Computer Muesum Visiting Poster",
    image: "/src/public/Images/Computer Museum Visiting Without logoes.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  }
 
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <ProjectDetail
      project={selectedProject}
      onBack={() => setSelectedProject(null)}
      />
      // <Footer />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Portfolio
        projects={projects}
        onProjectClick={setSelectedProject}
      />
      <Footer />
    </div>
  );
}
