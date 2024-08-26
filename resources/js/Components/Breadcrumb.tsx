import { Link, usePage } from '@inertiajs/react';

type BreadcrumbProps = {
    title: string;
};

const Breadcrumb = ({ title }: BreadcrumbProps) => {
    const { url } = usePage();

    // Split the URL by '?' to ignore query parameters, then split by '/'
    const pathnames = url.split('?')[0].split('/').filter((x) => x);

    return (
        <div
            className="relative flex items-center justify-center object-cover text-white bg-center bg-cover h-52"
            style={{ backgroundImage: `url('/images/breadcrumb.webp')` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <nav className="flex mt-2 space-x-2 text-sm">
                    <Link href="/" className="hover:underline">Inicio</Link>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <span key={index} className="text-gray-300">
                                {' > '} {name.charAt(0).toUpperCase() + name.slice(1)}
                            </span>
                        ) : (
                            <Link key={index} href={routeTo} className="hover:underline">
                                {' > '} {name.charAt(0).toUpperCase() + name.slice(1)}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;
