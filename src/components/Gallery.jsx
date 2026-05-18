export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-5xl mb-16">Espai & Plats</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/gallery-1.jpg" className="h-[500px] object-cover w-full rounded-xl" />
          <img src="/images/gallery-2.jpg" className="h-[500px] object-cover w-full rounded-xl" />
          <img src="/images/gallery-3.jpg" className="h-[500px] object-cover w-full rounded-xl" />
        </div>
      </div>
    </section>
  )
}