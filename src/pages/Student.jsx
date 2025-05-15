import { BellDot } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Student = () => {
  const handleRegisterStudent = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      batch: formData.get("batch"),
      email: formData.get("email"),
    };

    try {
      const response = await fetch("http://localhost:5000/register-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        e.target.reset();
      } else {
        // Show error or info toast based on backend message
        toast.error(result.error || result.info || "Something went wrong");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      toast.error("Network error, please try again");
    }
  };

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
        <title>Student | MCABYCOCAS</title>
        <div className="flex flex-col items-center justify-start h-screen">
          <form
            className="flex flex-col items-center justify-center gap-4 w-full bg-gray-100 shadow-md py-8"
            onSubmit={handleRegisterStudent}
          >
            <div className="w-1/2 flex flex-col items-center justify-center gap-4 p-4">
              <div>
                <h1 className="flex items-center gap-2 text-4xl font-semibold mb-4">
                  Register to Get Notification <BellDot />
                </h1>
              </div>

              <div className="flex gap-4 w-full justify-between ">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    className="border-2 border-black w-full text-center rounded-md p-2"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="batch"
                    className="border-2 border-black w-full text-center rounded-md p-2"
                    placeholder="Your Batch Year (2024)"
                  />
                </div>
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  id=""
                  className="border-2 border-black w-full text-center rounded-md p-2"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full text-center text-xl bg-green-400 text-white rounded-md shadow-md py-2 transition-all font-semibold hover:scale-105 hover:bg-green-500 active:scale-95"
                >
                  Get Notified{" "}
                </button>
              </div>
            </div>
          </form>
          <h1 className="text-4xl font-bold mb-4">Student Page</h1>
          <p className="text-lg">Welcome to the Student page!</p>
        </div>
      </motion.div>
    </>
  );
};

export default Student;
