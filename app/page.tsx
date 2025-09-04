import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        {/* Hero Section */}
        <main className="flex flex-1 flex-col items-center justify-center text-center px-6 sm:px-12">
          {/* Profile Image */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6">
            <Image
              src="/images/faysal.jpg" // Replace with your image
              alt="Profile Picture"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hi, I’m <span className="text-blue-600">Faysal</span> 👋
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            A passionate <span className="font-semibold">Full-Stack Developer </span> 
            who loves building modern web apps with{" "}
            <span className="font-semibold">Laravel & Next.js</span>.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
