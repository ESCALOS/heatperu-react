import ApplicationLogo from '@/Components/ApplicationLogo';
import HeaderSearch from '@/Components/HeaderSearch';
import Navbar from '@/Components/Navbar';
import { Head, Link } from '@inertiajs/react';
type Props = {
    children: React.ReactNode,
    title: string,
}

export default function Guest({ children, title }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <div className='flex flex-wrap items-center justify-center gap-4 px-4 py-6 mx-auto md:justify-between max-w-7xl'>
                    <ApplicationLogo />
                    <HeaderSearch />
                </div>
                <Navbar />
            </header>
            <main className='bg-orange-200'>
                {children}
            </main>
            <footer>
                <div className="py-6 bg-orange-400">
                    <p className="px-4 text-xl font-bold text-center text-gray-700 dark:text-white">
                        Copyright © 2024 - HEAT FACTORY SAC
                    </p>
                </div>
            </footer>
        </>
    );
}
