import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: " Website",
    description: "lorem ipsum dolor sit amet.",
  }
];

export default function Projects() {
  return (
    <div id="projects" className="bg-gray-900 p-10 text-white">

      <h2 className="mb-6 text-3xl font-bold text-blue-400">
        My Projects
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}

      </div>
    </div>
  );
}