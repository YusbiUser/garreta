import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden flex items-center justify-center bg-black text-white">
      {/* HERO IMAGE HERE */}
      <img
        src="/images/placeholder.jpg"
        alt="Restaurant Garreta"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-6xl md:text-8xl mb-6"
        >
          Garreta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Gastronomia creativa amb influències internacionals.
        </motion.p>
      </div>
    </section>
  )
}