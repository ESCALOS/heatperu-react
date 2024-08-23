import { navbarLinks } from "@/constants"
import { Link, usePage } from "@inertiajs/react"
import { useState } from "react";

function Navbar() {
    const { component: currentComponent } = usePage();
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-secondary-500'>
            <button className='p-4 font-bold text-white md:hidden bg-primary-500' onClick={() => setOpen(!open)}>Abri Menú</button>
            <ul className="container items-center justify-around hidden w-full py-8 text-lg font-black md:flex">
                {
                    navbarLinks.map(({ id, title, url, component }) =>
                        <li key={id}><Link className={component === currentComponent ? 'text-primary-500' : 'text-white hover:text-primary-500'} href={url}>{title}</Link></li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar
