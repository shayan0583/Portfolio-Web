import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { About } from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
      "/Images/Mental Health/iphone 15-1.jpg",
      "/Images/Mental Health/iphone 16.jpg",
      "/Images/Mental Health/iphone 15.jpg"
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
    "/Images/Dotamid/iphone 16.png",
    "/Images/Dotamid/Apple iMac Retina.png"
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
    title: "Decode Cup — Event Visual Identity",
    image: "/Images/Decode Cup 3/Cover Decode Cup3.jpg",
    category: "Event Design",
    description: "Decode Cup is a programming competition series held across different universities. The third edition was organized in collaboration with Khatam University, where I worked as the graphic designer for the event. I designed the visual materials including ID cards for participants (C++ and Python teams), staff badges for mentors, judges, and supervisors, and a custom T-shirt for the organizing team. Some visuals were adapted with my personal logo for portfolio display. Tools: Adobe Illustrator, Photoshop.",
    additionalImages: ['/Images/Decode Cup 3/Mockup Cpp.jpg',
      '/Images/Decode Cup 3/Mockup Python.jpg',
      '/Images/Decode Cup 3/Mockup Mentor.jpg',
      '/Images/Decode Cup 3/Mockup refree.jpg',
      '/Images/Decode Cup 3/Mockup Sarparast.jpg',
      '/Images/Decode Cup 3/Mockup Tshirt.jpg'
    ]
  },
  {
    id: 6,
    title: "Soft Skill Course Poster",
    image: "/Images/Maharat Narm Course Poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 7,
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
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Portfolio  
                  projects={projects}
                  onProjectClick={setSelectedProject}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
