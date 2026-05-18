export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-heading text-5xl mb-10">Contacte</h2>

          <div className="space-y-6 text-lg text-gray-700">
            <p>Pujada a la Torrassa, 19, Girona</p>
            <p>+34 660 50 60 09</p>
            <p>myname.yusbel@gmail.com</p>
            <p>@yusmeals</p>

            <div className="pt-8">
              <p className="font-semibold">Horari</p>
              <p>Dinar: 13:00 – 15:30</p>
              <p>Sopar: 20:00 – 22:30</p>
              <p>Tancat dilluns i dimarts</p>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </section>
  )
}