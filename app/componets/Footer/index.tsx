import React from 'react';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-gray-800 p-4 text-center">
            <p className="text-white">© 2024 Meu Site</p>
        </footer>
    );
};

export default Footer;
