import Copyright from '@/Components/Copyright';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
type Props = {
    children: React.ReactNode,
    title: string
}

export default function Guest({ children, title }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <Header />
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
                <Copyright />
            </footer>
        </>
    );
}
