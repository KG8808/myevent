export default function Hero() {
  return (
    <div
      id="home"
      className="flex min-h-500px flex-col items-center justify-center bg-gray-950 px-6 py-20 text-center text-white"
    >

      {/* Introduction */}
      <p className="mb-4 text-blue-400">
        Hello, I'm
      </p>

      {/* Name */}
      <h1 className="text-4xl font-bold md:text-6xl">
   RB
      </h1>

      {/* Role */}
      <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
   FSD
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-2xl leading-7 text-gray-400">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusamus, eligendi nihil, odio amet architecto minima delectus maiores autem enim, iste corporis quod accusantium nesciunt voluptate ab excepturi aperiam quisquam.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">

        <a
          href="#projects"
          className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
        >
          PROJECTS
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-gray-500 px-6 py-3 hover:bg-gray-800"
        >
          Contact 
        </a>

      </div>

    </div>
  );
}