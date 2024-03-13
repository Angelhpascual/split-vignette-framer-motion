import Image from "next/image"
import { motion } from "framer-motion"

import styles from "./style.module.scss"

export default function index({ handle, mousePosition }) {
  const { x, y } = mousePosition

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image alt="image" fill src={`/images/${handle}/background.jpg`} />
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        <Image alt="image" src={`/images/${handle}/1.jpg`} fill />
      </motion.div>
    </div>
  )
}
