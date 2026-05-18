import { motion } from 'framer-motion'

export default function LoadingScreen({ setEntered }) {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50 cursor-pointer"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setEntered(true)}
      onWheel={() => setEntered(true)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center"
      >
        {/* REPLACE WITH YOUR LOGO */}
        <img
          src="/images/hero-logo.png"
          alt="Garreta"
          className="w-52 md:w-72 mx-auto"
        />

        <p className="mt-8 text-sm tracking-[0.4em] uppercase text-gray-500">
          Scroll or click to enter
        </p>
      </motion.div>
    </motion.div>
  )
}