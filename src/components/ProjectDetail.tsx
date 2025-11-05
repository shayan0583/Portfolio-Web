import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Footer } from "./Footer";
import "./ProjectDetail.css";

interface Project {
  id: number;
  title: string;
  image: string;
  tag?: string;
  category: string;
  description: string;
  additionalImages?: string[];
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-6 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 -ml-4 hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      <main className="flex-1 w-full px-4 sm:px-8 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-12 sm:mb-16">
            {project.description}
          </p>

          {/* تصویر اصلی پروژه */}
          <div className="hero-banner mb-12">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-md object-contain"
            />
          </div>

          {/* گالری تصاویر اضافه */}
{project.additionalImages && project.additionalImages.length > 0 && (
  <div
    className="project-gallery flex flex-wrap justify-center gap-6 mt-16 px-4"
    style={{
      alignItems: "flex-start",
    }}
  >
    {project.additionalImages.map((image, index) => (
      <div
        key={index}
        className="rounded-lg shadow-md overflow-visible"
        style={{
          flex: "0 1 auto",
          maxWidth: "800px", // حداکثر عرض هر عکس
        }}
      >
        <img
          src={image}
          alt={`${project.title} - Image ${index + 2}`}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "90vh",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    ))}
  </div>
)}


        </div>
      </main>

    </div>
  );
}
