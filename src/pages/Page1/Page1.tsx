import lightning from '../../assets/imgs/lightning.svg';
import './Page1.css';
import React from 'react';

export default ({setPage}: {setPage: (pageNumber: number) => void
    }) => {
    return (
        <>
            <figure className='tela-inicial'>
                <img className='tela-inicial' src={lightning} alt="trovão" />
                <figcaption className='tela-inicial'>ZapRecall</figcaption>
            </figure>
            <button className='tela-inicial' onClick={() => setPage(1)}>Iniciar Recall!</button>
        </>
    );
}