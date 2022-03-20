import React, { useState } from 'react';
import Header from '../../components/page2Componentes/Header/Header';
import FlashCard from '../../components/page2Componentes/FlashCard/FlashCard';
import Footer from '../../components/page2Componentes/Footer/Footer';
import './Page2.css';

type Quizz = {
    question: string,
    answer: string
}

export type Answer = {
    style: string,
    icon: any
}

type AnswersState = [
    Answer[],
    (answers: Answer[]) => void
]

const quizzes: Quizz[] = [
    {
        question: 'O que é JSX?',
        answer: 'JSX é uma sintaxe para escrever HTML dentro do JS'
    }
];

export default () => {

    const [answers, setAnswers]: AnswersState = useState(Array(0));
    return (
        <>
            <Header/>
            <ol>
            {quizzes.map(({question, answer},index) => {
                return (
                <li key={index}>
                    <FlashCard position={index} 
                               question={question} 
                               answer={answer}
                               answers={answers}
                               setAnswers={setAnswers} />
                </li>
                )})
            }
            </ol>
            <Footer numberOfQuizzes={quizzes.length} answers={answers}/>
        </>
    );
}