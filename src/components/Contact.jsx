import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-2">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let's Work Together
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5 leading-7">
            I'm currently open to junior opportunities, internships
            and remote positions in software development, data analysis
            and artificial intelligence.
          </p>
        </motion.div>

        {/* Contact cards */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {/* Email */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=richardbashale@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-50 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />

            <h3 className="font-bold text-lg">
              Email
            </h3>

            <p className="text-gray-500 text-sm mt-2 break-all">
              richardbashale@gmail.com
            </p>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/richard-bashale-69028b3b1/"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-50 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <FaLinkedin className="text-4xl text-blue-600 mx-auto mb-4" />

            <h3 className="font-bold text-lg">
              LinkedIn
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Connect with me
            </p>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/richardbashale-web"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-50 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <FaGithub className="text-4xl text-gray-800 mx-auto mb-4" />

            <h3 className="font-bold text-lg">
              GitHub
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              View my projects
            </p>
          </a>

          {/* Location */}

          <div className="bg-gray-50 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />

            <h3 className="font-bold text-lg">
              Location
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Kinshasa, DRC
            </p>
          </div>

        </motion.div>

        {/* CV */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/Richard_Bashale_CV.pdf"
            download
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Download My CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;