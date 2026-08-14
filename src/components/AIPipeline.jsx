import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaFileAlt,
  FaCut,
  FaBrain,
  FaDatabase,
  FaSearch,
  FaRobot,
  FaComments,
} from "react-icons/fa";

const pipeline = [
  {
    title: "PDF Upload",
    description: "Course materials are uploaded into the system.",
    icon: FaFilePdf,
  },
  {
    title: "Text Extraction",
    description: "Text content is extracted from the uploaded PDF.",
    icon: FaFileAlt,
  },
  {
    title: "Text Chunking",
    description: "The extracted content is divided into smaller chunks.",
    icon: FaCut,
  },
  {
    title: "Embedding Generation",
    description: "Text chunks are transformed into vector representations.",
    icon: FaBrain,
  },
  {
    title: "ChromaDB",
    description: "Embeddings are stored in the vector database.",
    icon: FaDatabase,
  },
  {
    title: "RAG Retrieval",
    description: "Relevant document chunks are retrieved for the user's question.",
    icon: FaSearch,
  },
  {
    title: "LLM",
    description: "The retrieved context is used to generate the answer.",
    icon: FaRobot,
  },
  {
    title: "AI Response",
    description: "The student receives a context-aware response.",
    icon: FaComments,
  },
];

function AIPipeline() {
  return (
    <section id="ai-pipeline" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-2">
            ARTIFICIAL INTELLIGENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How the AI Works
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-7">
            The assistant uses a Retrieval-Augmented Generation (RAG)
            pipeline to retrieve relevant information from uploaded
            educational documents before generating an answer.
          </p>
        </motion.div>

        {/* Pipeline */}

        <div className="relative">

          {/* Ligne verticale */}

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 md:-translate-x-1/2"></div>

          {pipeline.map((step, index) => {
            const Icon = step.icon;
            const isRight = index % 2 !== 0;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: isRight ? 60 : -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`relative flex items-center mb-12 ${
                  isRight ? "md:justify-end" : "md:justify-start"
                }`}
              >

                {/* Point central */}

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center z-10 shadow-lg">
                  <Icon />
                </div>

                {/* Carte */}

                <div className="ml-20 md:ml-0 md:w-[42%] bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">

                  <span className="text-sm font-semibold text-blue-600">
                    STEP {index + 1}
                  </span>

                  <h3 className="text-xl font-bold mt-2 text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {step.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default AIPipeline;