import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaRobot, FaProjectDiagram } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/profile.JPG"
            alt="Richard Bashale"
            className="w-80 rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* Texte */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h4 className="text-blue-600 font-semibold text-lg mb-2">
            ABOUT ME
          </h4>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Passionate about Software Development & Artificial Intelligence
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            I'm a final-year Computer Science and Artificial Intelligence student
            at William Booth University in the Democratic Republic of the Congo.
            I enjoy designing modern web applications that solve real-world problems.
          </p>

          <p className="text-gray-600 leading-8 mb-10">
            My main project is an AI-powered Educational Assistant built with
            Django REST Framework, React, PostgreSQL and Natural Language Processing.
            Through this project, I strengthened my skills in backend development,
            frontend development, REST APIs and database design.
          </p>

          {/* Cards */}

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-blue-50 rounded-xl p-5 shadow">
              <FaUserGraduate className="text-3xl text-blue-600 mb-3" />
              <h3 className="font-semibold">
                Final-Year Student
              </h3>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 shadow">
              <FaLaptopCode className="text-3xl text-blue-600 mb-3" />
              <h3 className="font-semibold">
                Full Stack Developer
              </h3>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 shadow">
              <FaRobot className="text-3xl text-blue-600 mb-3" />
              <h3 className="font-semibold">
                AI Enthusiast
              </h3>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 shadow">
              <FaProjectDiagram className="text-3xl text-blue-600 mb-3" />
              <h3 className="font-semibold">
                Academic Projects
              </h3>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;