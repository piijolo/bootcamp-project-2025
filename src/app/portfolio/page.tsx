import PortfolioPreview from "@/components/portfolioPreview";
import project from "../projectData";
import grid from "./portfolioGrid.module.css";

export default function Portfolio() {
  return (
    <div className={grid.container}>
        <h1 className="portfolio-title"> My Portfolio </h1>
        <div className={grid.grid}>
          {project.map((project) => (
            <PortfolioPreview key={project.title} project={project} />
          ))}
        </div>
    </div>
  );
}