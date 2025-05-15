import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <title>Home | MCA BY COCAS</title>

        <div className="body">
          {/* PRINCIPAL */}
          <motion.div
            className="bg-green-100 py-10 px-4"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
              {/* Principal Image Section */}
              <div className="text-center md:w-1/3">
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://www.cocaspatna.ac.in/img/principal-img.jpeg"
                    alt="Principal"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  Prof. Indrajit Prasad Roy
                </h3>
                <p className="text-gray-600">Principal</p>
              </div>

              {/* Principal Message */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                  From The Principal's Desk
                </h2>
                <p className="text-justify text-gray-800 leading-relaxed">
                  I feel honored to lead the College of Commerce, Arts &
                  Science, Patna — a renowned institution known for its legacy
                  of academic excellence and innovation. We provide education
                  across Commerce, Social Sciences, Sciences, Humanities, Law,
                  and professional courses like{" "}
                  <span className="font-semibold">
                    MCA (Master of Computer Applications)
                  </span>
                  , empowering students with practical knowledge and modern
                  skills. Our committed faculty, vibrant students, and balanced
                  blend of traditional values with modern perspectives make our
                  campus a nurturing space for growth. Year after year, our
                  students excel in academics and co-curricular pursuits,
                  reflecting our dedication to excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section Divider */}
          <div className="max-w-6xl mx-auto my-10 border-t-2 border-gray-300"></div>

          {/* HOD Section */}
          <motion.div
            className="bg-yellow-100 py-10 px-4"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-8">
              {/* HOD Message */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                  From The HOD's Desk
                </h2>
                <p className="text-justify text-gray-800 leading-relaxed">
                  Welcome to the Department of Computer Applications at COCAS,
                  Patna. Our mission is to provide a comprehensive education in
                  computer applications, preparing students for the dynamic
                  world of technology. We offer a robust curriculum, hands-on
                  training, and opportunities for research and innovation. Our
                  faculty is dedicated to nurturing talent and fostering a
                  collaborative learning environment. Join us in exploring the
                  exciting world of computer applications!
                </p>
              </div>

              {/* HOD Image Section */}
              <div className="text-center md:w-1/4">
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://www.cocaspatna.ac.in/uploads/photo/6820231017.jpg"
                    alt="HOD"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">PROF ANITA SAGAR</h3>
                <p className="text-gray-600">HOD, MCA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
