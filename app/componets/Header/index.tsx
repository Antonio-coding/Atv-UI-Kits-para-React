import React from 'react';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="bg-gray-800 p-4">
            <h1 className="text-3xl font-bold text-white">Meu Site</h1>
            <nav className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">Página 1</a>
                <a href="#" className="text-white hover:text-gray-300">Página 2</a>
                <a href="#" className="text-white hover:text-gray-300">Página 3</a>
            </nav>
        </header>
    );
};

export default Header;
