import { useState } from "react";
import { motion } from "framer-motion";
import { featuredProject } from "../data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedProject() {

  const [selectedImage, setSelectedImage] = useState(
    featuredProject.images[0]
  );

  return (
    <section
      id="projects"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          ⭐ Featured Project
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Images */}

          <div>

            <motion.img
              whileHover={{ scale: 1.02 }}
              src={selectedImage}
              alt="Project"
              className="rounded-2xl shadow-xl mb-6 w-full"
            />

            <div className="grid grid-cols-4 gap-3">

              {featuredProject.images.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg cursor-pointer border-4 transition
                    ${
                      selectedImage === image
                        ? "border-blue-600"
                        : "border-transparent"
                    }`}
                />

              ))}

            </div>

          </div>

          {/* Informations */}

          <div>

            <span className="text-blue-600 font-semibold">
              {featuredProject.category}
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-5">
              {featuredProject.title}
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              {featuredProject.description}
            </p>

            <h3 className="font-bold text-xl mb-4">
              Key Features
            </h3>

            <ul className="grid grid-cols-2 gap-3 mb-8">

              {featuredProject.features.map((feature, index) => (

                <li
                  key={index}
                  className="bg-white rounded-lg p-3 shadow"
                >
                  ✅ {feature}
                </li>

              ))}

            </ul>

            <h3 className="font-bold text-xl mb-4">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">

              {featuredProject.technologies.map((tech, index) => (

                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>

              ))}

            </div>

            <div className="flex gap-4">

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <button
                className="flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-lg cursor-not-allowed opacity-70"
              >
                <FaExternalLinkAlt />
                Coming Soon
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProject;