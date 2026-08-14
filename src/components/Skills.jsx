import { motion } from "framer-motion";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-14"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-3">
                    <Icon className={`text-3xl ${skill.color}`} />
                    <span className="font-semibold text-lg">
                      {skill.name}
                    </span>
                  </div>

                  <span className="font-bold">
                    {skill.level}%
                  </span>

                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                    }}
                    className="h-full bg-blue-600 rounded-full"
                  />

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Skills;