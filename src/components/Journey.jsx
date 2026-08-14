import { motion } from "framer-motion";
import { journey } from "../data/journey";

function Journey() {
  return (
    <section id="journey" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Journey
        </motion.h2>

        <div className="relative border-l-4 border-blue-600 ml-6">

          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="mb-12 ml-8 relative"
            >

              {/* Cercle */}

              <div className="absolute -left-12 top-2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>

              <span className="text-blue-600 font-bold text-lg">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;