import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  additionalImages?: string[];
}

interface PortfolioProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function Portfolio({ projects, onProjectClick }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "UI", "Poster Design"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="w-full px-4 sm:px-8 mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-8 sm:mb-12 ">Portfolio</h2>
        
        <div className="flex justify-center gap-3 mb-12 sm:mb-16 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
