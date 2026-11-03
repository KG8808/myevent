import SkillCard from "../components/SkillCard";

const skills = [
  { id: 2, name: "Next.js" },

];

export default function Skills() {
  return (
    <div id="skills" className="bg-gray-950 p-10 text-white">
      <h2 className="mb-6 text-3xl font-bold text-blue-400">
        My Skills
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 justify-center">
        {skills.map((skill) => (
          <SkillCard key={skill.id} name={skill.name} />
        ))}
      </div>
    </div>
  );
}