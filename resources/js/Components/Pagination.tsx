import { Link } from "@inertiajs/react";

type Props = {
    links: {
        url: string | null,
        label: string,
        active: boolean
    }[],
    lastPage: number,
    currentPage: number,
}

export default function Pagination({ links, lastPage, currentPage }: Props) {
    return (
        lastPage > 1 &&
        (<div className="flex flex-wrap justify-around gap-1 mt-8 lg:justify-center">
            {links.map((link, index) => {
                // Ocultar botón de "Anterior" en la primera página
                if (index === 0 && currentPage === 1) return null;
                // Ocultar botón de "Siguiente" en la última página
                if (index === links.length - 1 && currentPage === lastPage) return null;

                return link.url ? (
                    <Link
                        key={index}
                        href={link.url}
                        className={`px-4 py-2 border rounded-md
                            ${link.active ? 'bg-primary-500 text-white' : 'bg-white text-gray-700 hover:bg-primary-400 hover:text-white'}
                            ${(index !== 0 && index !== links.length - 1) && 'hidden lg:inline'}
                            transition-colors duration-200 ease-in-out`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span
                        key={index}
                        className={`px-4 py-2 mx-1 text-gray-500 border rounded-md
                            ${(index !== 0 && index !== links.length - 1) && 'hidden lg:inline'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </div>)
    );
}
