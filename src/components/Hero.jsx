import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 pt-24"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Texte */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h3 className="text-xl text-blue-600 font-semibold mb-2">
            Hello, I'm
          </h3>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Richard Bashale
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Full Stack Developer <br />
            AI & Data Analytics Enthusiast
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-8">
            I build intelligent web applications using
            Python, Django, React, PostgreSQL and Artificial Intelligence
            to solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/Richard_Bashale_CV.pdf"
              download
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Download CV
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl text-gray-600">

            <a
              href="https://github.com/richardbashale-web"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-black transition" />
            </a>

            <a
              href="https://linkedin.com/in/richard-bashale-69028b3b1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>

            <a
              href="mailto:richardbashale@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope className="hover:text-red-500 transition" />
            </a>

          </div>

        </motion.div>

        {/* Photo */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <img
            src="/profile.JPG"
            alt="Richard Bashale"
            className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-blue-500"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;