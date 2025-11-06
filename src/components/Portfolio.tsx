import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
}

export function Portfolio({ projects }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "UI", "Poster Design", "Event Design"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="w-full px-4 sm:px-8 mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-8 sm:mb-12">Portfolio</h2>

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
          {filteredProjects.slice().reverse().map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block transition-transform duration-200 hover:scale-105"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
