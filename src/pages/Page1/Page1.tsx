import lightning from '../../assets/imgs/lightning.svg';
import './Page1.css';
import React, { useState } from 'react';

export default ({setPage, setMeta}: {
    setPage: (pageNumber: number) => void,
    setMeta: (meta: number) => void}) => {
    const [inputValue, setInputValue] = useState(0);
    const setValue = () => {
        
        const element = document.getElementById('metaInput');
        if(element !== null) {
            const input = element as HTMLInputElement;
            setInputValue(Number.parseInt(input.value));
        } else {
            setInputValue(0);
        }
    }

    return (
        <>
            <figure className='tela-inicial'>
                <img className='tela-inicial' src={lightning} alt="trovão" />
                <figcaption className='tela-inicial'>ZapRecall</figcaption>
            </figure>
            <input type="text" 
                   onChange={setValue} 
                   placeholder="Digite sua meta de zaps..."
                   id="metaInput"/>
            <button className='tela-inicial' 
                    onClick={() => {setMeta(inputValue);setPage(1)}}
                    disabled={!(inputValue >= 1)}>Iniciar Recall!</button>
        </>
    );
}