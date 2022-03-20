import lightning from '../../../assets/imgs/lightning.svg';
import './Header.css';
import React from 'react';

export default () => {
    return (
        <header className='tela2'>
            <figure className='tela2'>
                <img className='tela2' src={lightning} alt="trovão" />
                <figcaption className='tela2' >ZapRecall</figcaption>
            </figure>
        </header>
    );
}