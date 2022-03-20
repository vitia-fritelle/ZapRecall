import TelaInicial from './pages/Page1/Page1';
import Tela2 from './pages/Page2/Page2';
import './App.css';
import React, { useState } from 'react';

type PageState = [
    number,
    (pageNumber: number) => void
];

const App = () => {
    const [page, setPage]: PageState = useState(0);
    const [metaZaps, setMetaZaps] = useState(1);
    const pages = [
        <TelaInicial setPage={setPage} setMeta={setMetaZaps}/>, 
        <Tela2 meta={metaZaps}/>
    ];
    return (
        <div className="App">
            {pages[page]}
        </div>
    );
}

export default App;
