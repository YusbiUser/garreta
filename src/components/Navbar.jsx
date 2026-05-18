import { Link } from 'react-scroll'
import { FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="font-heading text-3xl">Garreta</h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link to="about" smooth duration={700} className="cursor-pointer hover:opacity-60">
            Sobre nosaltres
          </Link>

          <Link to="menu" smooth duration={700} className="cursor-pointer hover:opacity-60">
            Menú
          </Link>

          <Link to="gallery" smooth duration={700} className="cursor-pointer hover:opacity-60">
            Espai
          </Link>

          <Link to="reservations" smooth duration={700} className="cursor-pointer hover:opacity-60">
            Reserves
          </Link>

          <Link to="contact" smooth duration={700} className="cursor-pointer hover:opacity-60">
            Contacte
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex gap-2 text-sm uppercase">
            <button>CAT</button>
            <button>ES</button>
            <button>EN</button>
          </div>

          <a
            href="https://instagram.com/yusmeals"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}