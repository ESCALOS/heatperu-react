import { Link } from "@inertiajs/react"

function Navbar() {
    return (
        <div className='bg-primary-500'>
            <nav className='container flex items-center justify-around w-full h-20 py-4 text-lg font-black text-white'>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/productos">Productos</Link>
                <Link href="/contactenos">Contáctanos</Link>
            </nav>
        </div>
    )
}

export default Navbar
