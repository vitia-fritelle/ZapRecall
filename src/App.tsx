import TelaInicial from './pages/Page1/Page1';
import Tela2 from './pages/Page2/Page2';
import './App.css';
import React, { useState } from 'react';

const App = () => {
    const [page, setPage]: [number, (pageNumber: number) => void] = useState(0);
    const pages = [
        <TelaInicial setPage={setPage}/>, 
        <Tela2/>
    ];
    return (
        <div className="App">
            {pages[page]}
        </div>
    );
}

export default App;
