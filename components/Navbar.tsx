export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-gray-950 px-8 py-5 text-white">

      <h1 className="text-2xl font-bold text-red-500
         ">
        KG
      </h1>

      <div className="flex gap-8 text-sm">
        <a href="#home" className="hover:text-red-400 text-green-400">Home</a>
        <a href="#about" className="hover:text-red-400 text-green-400">About</a>
        <a href="#skills" className="hover:text-red-400 text-green-400">Skills</a>
        <a href="#projects" className="hover:text-red-400 text-green-400">Projects</a>
        <a href="#contact" className="hover:text-red-400 text-green-400">Contact</a>
      </div>

      <a
        href="#contact"
        className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-red-700"
      >
        Let's Talk
      </a>

    </div>
  );
}
