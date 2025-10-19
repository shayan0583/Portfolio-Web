import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image: string;
    tag: string;
    category: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-4">
        <div className="w-full">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain bg-muted group-hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
      <h3 className="mb-2">{project.title}</h3>
      <Badge variant="secondary" className="rounded-full">
        {project.category}
      </Badge>
    </div>
  );
}
