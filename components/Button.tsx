interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <a
      href="#projects"
      className="inline-block rounded bg-red-600 px-5 py-2 text-white hover:bg-red-700"
    >
      {title}
    </a>
  );
}