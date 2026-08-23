import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

function Reveal({
  children,
  variant = fadeUp,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;