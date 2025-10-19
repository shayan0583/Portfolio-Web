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
    image: "/Images/Mental Health/Slide 16_9 - 1.png",
    category: "UI",
    description : "Hamdam is a calm and minimal mobile app designed to support mental well-being and emotional balance. The interface focuses on simplicity, soft colors, and intuitive navigation to create a relaxing experience for users.",
    additionalImages: [
     "/Images/Mental Health/iphone 15.png",
     "/Images/Mental Health/iphone 15 (1).png",
     "/Images/Mental Health/iphone 15 (2).png",
     "/Images/Mental Health/iphone 15 (3).png",
     "/Images/Mental Health/iphone 15 (4).png"
    ]
  },
  {
    id: 2,
    title: "Dotamid - Responsive",
    image: "/Images/Dotamid/Slide 16_9 - 2.png",
    category: "UI",
    description: "",
    additionalImages: [
    "/Images/Dotamid/iphone 15.png",
    "/Images/Dotamid/iphone 15 (1).png"
    ]
  },
  {
    id: 3,
    title: "Front End Course Poster",
    image: "/Images/Front poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 4,
    title: "AbrArvan Visit Poster",
    image: "/Images/Abrarvan visit without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 5,
    title: "Soft Skill Course Poster",
    image: "/Images/Maharat Narm Course Poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 6,
    title: "Computer Muesum Visiting Poster",
    image: "/Images/Computer Museum Visiting Without logoes.jpg",
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
