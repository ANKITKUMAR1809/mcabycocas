import React from "react";
import { motion } from "framer-motion";
const Notification = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <title>Contact | MCABYCOCAS</title>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Notification</h1>
          <p className="text-lg">Welcome to the Contact page!</p>
        </div>
      </motion.div>
    </>
  );
};

export default Notification;
