import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { email, linkedIn } from "../assets";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div
          onClick={() => window.open("mailto:faizakhan2214@gmail.com")}
          className="flex items-center gap-x-2 mt-3 cursor-pointer"
        >
          <img src={email} alt="Email" className="w-6 h-6" />
          <p className={styles.sectionSubText}>Email</p>
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/faiza-khan-0032141a0/",
              "_blank"
            )
          }
          className="flex items-center gap-x-2 mt-3 cursor-pointer"
        >
          <img src={linkedIn} alt="LinkedIn" className="w-5 h-5" />
          <p className={styles.sectionSubText}>LinkedIn</p>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
