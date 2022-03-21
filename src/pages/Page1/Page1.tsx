import lightning from '../../assets/imgs/lightning.svg';
import './Page1.css';
import React, { useState } from 'react';
import { Quizz } from '../../App';

export default ({setPage, setMeta, decks, setQuizzes}: {
    setPage: () => void,
    setMeta: (meta: number) => void,
    decks: {name: string, deck: Quizz[]}[],
    setQuizzes: (quizzes: Quizz[]) => void}) => {

    const [inputValue, setInputValue] = useState(0);
    const [selectValue, setSelectValue] = useState('Escolha seu deck');
    const setValue = () => {
        
        const element = document.getElementById('metaInput');
        if(element !== null) {
            const input = element as HTMLInputElement;
            setInputValue(Number.parseInt(input.value));
        } else {
            setInputValue(0);
        }
    }
    const selectQuizzes = () => {

        const elements = document.querySelectorAll('option');
        if(elements.length !== 0) {
            const candidate = Array.from(elements)
                                   .find(element => element.selected);
            if(candidate) {
                const option = candidate;
                setSelectValue(option.innerText);
            } else {
                return null;
            }
        } else {
            return null
        }
    }
    const selectDeck = () => {
        
        const qzzs = decks.find(deck => deck.name === selectValue);
        if (qzzs) {
            setQuizzes(qzzs.deck);
        }
    }

    const isDisabled = () => {
        return !(inputValue >= 1 && selectValue !== 'Escolha seu deck')
    }
    return (
        <>
            <figure className='tela-inicial'>
                <img className='tela-inicial' 
                     src={lightning} 
                     alt="trovão"/>
                <figcaption className='tela-inicial'>
                    ZapRecall
                </figcaption>
            </figure>
            <input className='tela-inicial'
                   type="text" 
                   onChange={setValue} 
                   placeholder="Digite sua meta de zaps..."
                   id="metaInput"/>
            <select onChange={selectQuizzes} 
                    className='tela-inicial'>
                <option>
                    Escolha seu deck
                </option>
                {decks.map(deck => <option>{deck.name}</option>)}
            </select>
            <button className='tela-inicial' 
                    onClick={() => {
                        setMeta(inputValue);
                        selectDeck();
                        setPage();}}
                    disabled={isDisabled()}>
                Iniciar Recall!
            </button>
        </>
    );
}