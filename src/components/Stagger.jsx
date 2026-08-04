import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";

function Stagger({ children, className = "" }) {

    return (

        <motion.div

            className={className}

            variants={staggerContainer}

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

export default Stagger;