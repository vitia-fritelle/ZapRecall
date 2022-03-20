import TelaInicial from './pages/Page1/Page1';
import Tela2 from './pages/Page2/Page2';
import './App.css';
import React, { useState } from 'react';

type PageState = [
    number,
    (pageNumber: number) => void
];

export enum Page {
    Page1,
    Page2
}

const App = () => {
    const [page, setPage]: PageState = useState(Page.Page1);
    const [metaZaps, setMetaZaps] = useState(1);
    const pages = [
        <TelaInicial setPage={() => setPage(Page.Page2)} setMeta={setMetaZaps}/>, 
        <Tela2 meta={metaZaps}/>
    ];
    return (
        <div className="App">
            {pages[page]}
        </div>
    );
}

export default App;
