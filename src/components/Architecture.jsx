import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import { SiDjango, SiPostgresql } from "react-icons/si";

const architecture = [
  {
    title: "Frontend",
    technology: "React + Tailwind CSS",
    description:
      "Provides the user interface for students and administrators.",
    icon: FaReact,
  },
  {
    title: "Backend",
    technology: "Django + Django REST Framework",
    description:
      "Handles business logic, authentication, APIs and communication between the application components.",
    icon: SiDjango,
  },
  {
    title: "Relational Database",
    technology: "PostgreSQL",
    description:
      "Stores users, students, courses, conversations and other application data.",
    icon: SiPostgresql,
  },
  {
    title: "AI / RAG Layer",
    technology: "RAG + spaCy",
    description:
      "Processes user questions and retrieves relevant information from the knowledge base.",
    icon: FaBrain,
  },
  {
    title: "Vector Database",
    technology: "ChromaDB",
    description:
      "Stores and retrieves vector representations of the educational documents.",
    icon: FaDatabase,
  },
  {
    title: "Language Model",
    technology: "LLM",
    description:
      "Uses the retrieved context to generate a relevant response to the student's question.",
    icon: FaRobot,
  },
];

function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-gray-50">
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
            SYSTEM DESIGN
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            System Architecture
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5 leading-7">
            The application combines a modern web architecture with an
            AI-powered retrieval system to provide intelligent educational
            assistance.
          </p>
        </motion.div>

        {/* Architecture cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {architecture.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition"
              >

                <Icon className="text-4xl text-blue-600 mb-5" />

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-semibold mt-2">
                  {item.technology}
                </p>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Architecture flow */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-md p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Application Flow
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">

            <div className="px-6 py-4 bg-blue-50 rounded-xl font-semibold">
              React
            </div>

            <span className="text-2xl hidden md:block">→</span>
            <span className="text-2xl md:hidden">↓</span>

            <div className="px-6 py-4 bg-green-50 rounded-xl font-semibold">
              Django REST API
            </div>

            <span className="text-2xl hidden md:block">→</span>
            <span className="text-2xl md:hidden">↓</span>

            <div className="px-6 py-4 bg-purple-50 rounded-xl font-semibold">
              PostgreSQL
            </div>

            <span className="text-2xl hidden md:block">+</span>
            <span className="text-2xl md:hidden">↓</span>

            <div className="px-6 py-4 bg-yellow-50 rounded-xl font-semibold">
              RAG + ChromaDB
            </div>

            <span className="text-2xl hidden md:block">→</span>
            <span className="text-2xl md:hidden">↓</span>

            <div className="px-6 py-4 bg-red-50 rounded-xl font-semibold">
              LLM
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Architecture;