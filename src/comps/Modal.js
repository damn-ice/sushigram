import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ source, setSelectedImg }) => {
    return (
        <motion.div className="backdrop"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
        >
            <motion.img initial={{ y: '-100vh'}} animate={{ y: 0}} src={source} alt="Enlarged Pix" onClick={() => setSelectedImg(null)}/>
        </motion.div>
    )
}

export default Modal
