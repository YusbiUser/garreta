export default function Reservations() {
  return (
    <section id="reservations" className="section-padding bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-5xl mb-12">Reserves</h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="grid gap-6"
        >
          {/* REPLACE WITH YOUR WEB3FORMS ACCESS KEY */}
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

          <input
            type="text"
            name="name"
            placeholder="Nom i cognoms"
            className="border p-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correu electrònic"
            className="border p-4"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Telèfon"
            className="border p-4"
          />

          <select name="menu" className="border p-4">
            <option>Menú degustació</option>
            <option>Carta</option>
          </select>

          <input
            type="number"
            name="people"
            placeholder="Nombre de persones"
            className="border p-4"
          />

          <input
            type="date"
            name="date"
            className="border p-4"
          />

          <input
            type="time"
            name="time"
            className="border p-4"
          />

          <textarea
            name="allergies"
            placeholder="Al·lèrgies o intoleràncies alimentàries"
            className="border p-4 h-32"
          />

          <textarea
            name="preferences"
            placeholder="Preferències alimentàries"
            className="border p-4 h-32"
          />

          <textarea
            name="notes"
            placeholder="Altres aspectes a tenir en compte"
            className="border p-4 h-32"
          />

          <label className="flex items-center gap-3">
            <input type="checkbox" required />
            Accepto la política de reserves
            </label>

          <button className="bg-black text-white py-5 uppercase tracking-[0.3em] hover:opacity-90 transition-all duration-300">
            Reservar
          </button>
        </form>
      </div>
    </section>
  )
}