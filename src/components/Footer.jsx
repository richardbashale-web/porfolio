import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Identity */}

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Richard Bashale
            </h2>

            <p className="text-gray-400 mt-2">
              Computer Science & AI Student
            </p>

            <p className="text-gray-400">
              Full-Stack Developer | AI Enthusiast
            </p>
          </div>

          {/* Social links */}

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/richardbashale-web"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/richard-bashale-69028b3b1/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=richardbashale@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaEnvelope className="text-xl" />
            </a>

          </div>

          {/* Back to top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
          >
            <FaArrowUp />
          </button>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Richard Bashale. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Built with React, Tailwind CSS & Framer Motion.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;