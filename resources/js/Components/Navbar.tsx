import { navbarLinks } from "@/constants"
import { Link, usePage } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Menu({ isMobile = false }) {
    const { component: currentComponent } = usePage();
    return (
        <ul className={`container items-center justify-end w-full gap-6 py-6 ${isMobile ? 'flex flex-col' : 'hidden md:flex'}`}>
            {
                navbarLinks.map(({ id, title, url, component }) =>
                    <li key={id}>
                        <Link className={component === currentComponent ? 'text-primary-500' : 'text-white hover:text-primary-500'} href={url}>
                            {title}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 768 && setOpen(false),
        );
    }, []);

    return (
        <nav className='text-right bg-secondary-500'>
            <button className='inline-block p-4 font-bold text-white md:hidden bg-primary-500' onClick={() => setOpen(!open)}>
                {
                    open ? <FaXmark className="w-6 h-6" strokeWidth={2} />
                        : <FaBars className="w-6 h-6" strokeWidth={2} />

                }
            </button>
            <Menu />
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: open ? 'auto' : 0 }}
                transition={{ duration: .5 }}
                style={{ overflow: 'hidden' }}
            >
                <Menu isMobile />
            </motion.div>
        </nav>
    )
}

export default Navbar
