import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { About } from "./components/About";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


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
    title: "Computer Muesum Visiting Poster",
    image: "/Images/Computer Museum Visiting Without logoes.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
    {
    id: 2,
    title: "Soft Skill Course Poster",
    image: "/Images/Maharat Narm Course Poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 3,
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
    title: "Front End Course Poster",
    image: "/Images/Front poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 6,
    title: "Dotamid - Responsive",
    image: "/Images/Dotamid/Slide 16_9 - 2.png",
    category: "UI",
    description: "",
    additionalImages: [
    "/Images/Dotamid/iphone 15.jpg",
    "/Images/Dotamid/iphone 18.jpg",
    "/Images/Dotamid/iphone 16.jpg",
    "/Images/Dotamid/Events UI-Desktop (1).jpg",
    "/Images/Dotamid/Web Mockup 27.jpg"

    ]
  },
  {
    id: 7,
    title: "Hamdam – Mental Health App",
    image: "/Images/Mental Health/Slide 16_9 - 1.png",
    category: "UI",
    description : "Hamdam is a calm and minimal mobile app designed to support mental well-being and emotional balance. The interface focuses on simplicity, soft colors, and intuitive navigation to create a relaxing experience for users.",
    additionalImages: [
      "/Images/Mental Health/iphone 15-1.jpg",
      "/Images/Mental Health/iphone 16.jpg",
      "/Images/Mental Health/iphone 15.jpg",
      "/Images/Mental Health/Hamdam.jpg"
    ]
  },
    {
    id: 8,
    title: "MOS.CBEDARD — Responsive Website Design",
    image: "/Images//mos/Project Thumeb.jpg",
    category: "UI",
    description : "",
    additionalImages: [
      "/Images/mos/mos mobile 1.jpg",
      "/Images/mos/mos mobile 2.jpg",
      "/Images/mos/mos mobile 3.jpg",
      "/Images/mos/Home.jpg",
      "/Images/mos/Job Posting.jpg"
    ]
  }
 
];

function ProjectDetailWrapper() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);
  const navigate = useNavigate();

  if (!project) return <div className="p-10 text-center">Project not found.</div>;

  return <ProjectDetail project={project} onBack={() => navigate("/")} />;
}
function AppContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Portfolio
                projects={projects}
                onProjectClick={(project) => navigate(`/project/${project.id}`)}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetailWrapper />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
  }