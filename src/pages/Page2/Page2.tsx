import Header from '../../components/page2Componentes/Header/Header';
import React from 'react';
import FlashCard from '../../components/page2Componentes/FlashCard/FlashCard';
import './Page2.css';

export type Quizz = {
    question: string,
    answer: string
}

export enum Score {
    NotAnswered,
    Wrong,
    AlmostForgot,
    Zap
}

const quizzes: Quizz[] = [
    {
        question: 'O que é JSX?',
        answer: 'JSX é uma sintaxe para escrever HTML dentro do JS'
    }
];

export default () => {
    return (
        <>
            <Header/>
            <ul>
            {quizzes.map(({question, answer},index) => {
                return (
                <ol>
                    <FlashCard key={index} 
                               position={index} 
                               question={question} 
                               answer={answer} />
                </ol>
                )})
            }
            </ul>
            
        </>
    );
}