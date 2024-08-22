import { useId } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useForm } from '@inertiajs/react';

export default function HeaderSearch() {
    const searchId = useId();
    const { setData, get } = useForm({ search: '' });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        get('/', { only: ['commodities'], preserveScroll: true });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center md:justify-around w-full max-w-[600px] h-[52px]"
        >
            <input
                type="search"
                name="search"
                id={searchId}
                className="w-full p-4 text-sm text-gray-700 border-gray-400 rounded-s-sm focus:ring focus:ring-white focus:border-gray-400"
                placeholder="Buscar por producto o marca"
                required
                onChange={e => setData('search', e.target.value)}
            />
            <button
                className="flex items-center justify-center w-[15%] min-w-16 h-[54px] text-white hover:text-gray-800 duration-300 transition-colors bg-primary-500 border-y border-r border-gray-400 max-w-8 rounded-e-sm outline-none">
                <BiSearchAlt size={24} />
            </button>
        </form>
    );
}
