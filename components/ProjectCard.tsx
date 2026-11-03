interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="rounded bg-gray-800 p-5 text-white">

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>

    </div>
  );
}