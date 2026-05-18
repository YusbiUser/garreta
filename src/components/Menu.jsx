import { motion } from 'framer-motion'

export default function Menu() {
  return (
    <section id="menu" className="section-padding bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl mb-16"
        >
          Menú degustació
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <img
            src="/images/menu-front.jpg"
            alt="Menu Front"
            className="rounded-xl shadow-lg"
          />

          <img
            src="/images/menu-back.jpg"
            alt="Menu Back"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/menu.pdf"
            target="_blank"
            className="border border-black px-8 py-4 uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            Descarregar menú
          </a>
        </div>
      </div>
    </section>
  )
}