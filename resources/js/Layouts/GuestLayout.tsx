import TopBar from '@/Components/TopBar';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <header>
                <TopBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className="py-6 bg-orange-400 dark:bg-gray-700">
                    <p className="px-4 text-xl font-bold text-center text-gray-700 dark:text-white">
                        Copyright © 2024 - HEAT FACTORY SAC
                    </p>
                </div>
            </footer>
        </>
    );
}
