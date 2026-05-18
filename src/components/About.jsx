import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl mb-12"
        >
          Sobre nosaltres
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="leading-8 text-lg text-gray-700">
              Restaurant Garreta neix amb la idea de crear una experiència gastronòmica personal i propera, basada en la cuina d’autor i el respecte pel producte.
            </p>
          </div>

          <div className="space-y-5 text-gray-700 leading-8">
            <p>Producte local i de temporada</p>
            <p>Cuina creativa amb identitat pròpia</p>
            <p>Elaboració artesanal</p>
            <p>Experiència gastronòmica personalitzada</p>
          </div>
        </div>
      </div>
    </section>
  )
}