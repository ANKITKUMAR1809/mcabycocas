import { Key, Lock } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const Faculty = () => {
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <title>Faculty | MCABYCOCAS</title>

        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="w-full shadow-2xl relative"
        >
          <motion.ul
            variants={containerVariants}
            className="flex space-x-4 bg-zinc-800 p-4 text-white justify-between items-center"
          >
            <motion.div variants={itemVariants}>
              <h1>Only For Faculty Members</h1>
            </motion.div>
            <div className="flex gap-4 text-xl">
              <motion.li variants={itemVariants}>
                <NavLink
                  to="/faculty/login"
                  className="hover:underline flex items-center gap-1"
                >
                  Login <Lock />
                </NavLink>
              </motion.li>

              <motion.li variants={itemVariants}>
                <NavLink
                  to="/faculty/signUp"
                  className="hover:underline flex items-center gap-1"
                >
                  SignUp <Key />
                </NavLink>
              </motion.li>
            </div>
          </motion.ul>
        </motion.nav>

        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Faculty Page</h1>
          <p className="text-lg">Welcome to the Faculty page!</p>
        </div>
      </motion.div>
    </>
  );
};

export default Faculty;
