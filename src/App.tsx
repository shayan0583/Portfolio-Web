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
  fileLink?: string;
  fileLink2?: string;
  role?:string;
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
    id: 3,
    title: "AbrArvan Visit Poster",
    image: "/Images/Abrarvan visit without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 4,
    title: "Front End Course Poster",
    image: "/Images/Front poster without logo.jpg",
    category: "Poster Design",
    description: "In this portfolio version, original logos have been replaced with sample logos to respect brand privacy and maintain confidentiality.",
    additionalImages: [
    ]
  },
  {
    id: 5,
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

    ],
    fileLink : "https://www.figma.com/design/01knUGBXOAiLS56F0qhEb6/Dotamid?node-id=44-17&t=PktX8ZVgop0jNJbq-1"
  },
  {
    id: 6,
    title: "Hamdam – Mental Health App + Landing",
    image: "/Images/Mental Health/Cover (1).jpg",
    category: "UI",
    description : "Hamdam is a calm and minimal mobile app designed to support mental well-being and emotional balance. The interface focuses on simplicity, soft colors, and intuitive navigation to create a relaxing experience for users.",
    additionalImages: [
      "/Images/Mental Health/Slice 10 (1).jpg",
      "/Images/Mental Health/Slice 11.jpg",
      "/Images/Mental Health/Slice 14.jpg",
      "/Images/Mental Health/Slice 15.jpg",
      "/Images/Mental Health/Landing - Desktop-2.jpg",
      "/Images/Mental Health/Landing - Desktop-1.jpg",
      "/Images/Mental Health/Landing - Desktop.jpg"
    ],
    fileLink : "https://www.figma.com/design/LjhIUWb3HLK4ZSyo3uGyMx/project---gp-175?node-id=543-8447&t=qcShRsA9TuvmRl4p-1",
    fileLink2:"https://www.linkedin.com/posts/shayan-abyar-87b46832a_aefaezaepaevahyabraezaepaeqaefabragpaepaezaeqaezahy-activity-7408116861164474368-VNVa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMBcN8B91xG6o9Gp7UM3Ycgl9ClGjwLWdk"
  },
  {
    id: 7,
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
  },
  {
    id: 8,
    title: "SRPC — Graphic Design (Media Team Lead)",
    image: "/Images/SRPC/SRPC Cover.jpg",
    category: "Event Design",
    description: `Worked as a Graphic Designer for the Student Relay Programming Competition.
Designed posters and ID cards based on a consistent visual identity.
Contributed to creating a clear and unified visual style for the event.
Collaborated with the team in a fast-paced, team-oriented environment.
Gained valuable experience in teamwork and creative collaboration`,
    additionalImages: [
      '/Images/SRPC/14 Day Countdown Poster .jpg',
      '/Images/SRPC/Awards.jpg',
      '/Images/SRPC/7 Day Countdown Poster .jpg',
      '/Images/SRPC/Note.jpg',
      '/Images/SRPC/Sign Guide Poster.jpg',
      '/Images/SRPC/Location 2.jpg',
      '/Images/SRPC/Id Card abyar.jpg'
    ],
    fileLink2 : "https://www.linkedin.com/posts/shayan-abyar-87b46832a_%D8%AA%D8%AC%D8%B1%D8%A8%D9%87%D8%A7%DB%8C-%D8%AC%D8%B0%D8%A7%D8%A8-%D8%A7%D8%B2-%DA%A9%D8%A7%D8%B1-%D8%AA%DB%8C%D9%85%DB%8C-%D8%AF%D8%B1-%D9%85%D8%B3%D8%A7%D8%A8%D9%82%D9%87-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%D9%86%D9%88%DB%8C%D8%B3%DB%8C-activity-7409345970850873344-kkBn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMBcN8B91xG6o9Gp7UM3Ycgl9ClGjwLWdk",
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