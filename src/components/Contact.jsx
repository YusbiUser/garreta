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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5245095261694!2d2.826228876588679!3d41.98901765846158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae6ef4b4a17d7%3A0xad71d7e77cb908aa!2sPujada%20a%20la%20Torrassa%2C%2019%2C%2017007%20Girona!5e0!3m2!1sca!2ses!4v1779139091739!5m2!1sca!2ses"
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