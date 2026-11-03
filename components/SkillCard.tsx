interface SkillCardProps {
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="rounded bg-gray-800 p-4 text-center text-white">
      {name}
    </div>
  );
}