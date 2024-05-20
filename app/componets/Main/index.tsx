import React from 'react';

interface MainProps { }

const Main: React.FC<MainProps> = () => {
    return (
        <main className="container mx-auto px-4">
            <h2 className="text-2xl font-bold my-4">Conteúdo Principal</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam ac augue vel augue blandit bibendum. Sed augue ipsum, pretium at laoreet sed, lobortis sed mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus eget enim tincidunt, ullamcorper magna sit amet, laoreet ipsum. Donec ullamcorper nulla non metus bibendum, sit amet convallis nunc rhoncus.</p>
        </main>
    );
};

export default Main;
