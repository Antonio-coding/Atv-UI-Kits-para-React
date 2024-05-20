import React from 'react';
import Header from './componets/Header/index';
import Main from './componets/Main/index';
import Footer from './componets/Footer';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
