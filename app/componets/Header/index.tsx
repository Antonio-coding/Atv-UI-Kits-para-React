import Link from 'next/link';
import React from 'react';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="bg-gray-800 p-4">
            <h1 className="text-3xl font-bold text-white">Meu Site</h1>
            <nav className="flex space-x-4">
                <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                <Link href="example-one" className="text-white hover:text-gray-300">Página 1</Link>
                <Link href="example-two" className="text-white hover:text-gray-300">Página 2</Link>
                <Link href="example-tree" className="text-white hover:text-gray-300">Página 3</Link>
            </nav>
        </header>
    );
};

export default Header;
