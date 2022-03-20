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
    },
    {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula'
    },
    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões'
    },
    {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes'
    },
    {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas'
                +'devem renderizar a tela novamente'
    }
];

const shuffle: (qzzs: Quizz[]) => Quizz[] = (qzzs) => {
    const res = [...qzzs];
    return res.sort((_) => Math.random() - 0.5);
}

let shuffledQuizzes: Quizz[] = quizzes;

export default () => {

    const [answers, setAnswers]: AnswersState = useState(Array(0));
    const [reset, setReset] = useState(true);

    const HandlingReset = ({setAnswers, setReset}: {
        setAnswers: (answers: Answer[]) => void, 
        setReset: (reset: boolean) => void}) => {

        setAnswers(Array(0));
        setReset(false);
        return null;
    }

    if(reset) {
        shuffledQuizzes = shuffle(quizzes); 
    };
    
    return (
        <>
            <Header/>
            <ol>
            {shuffledQuizzes.map(({question, answer},index) => {
                return (
                    <li key={index}>
                        <FlashCard position={index} 
                                    question={question} 
                                    answer={answer}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    reset={reset}/>
                    </li>
                )})
            }
            </ol>
            <Footer numberOfQuizzes={quizzes.length} 
                    answers={answers} 
                    setReset={setReset}/>
            {reset && <HandlingReset setAnswers={setAnswers} 
                                     setReset={setReset}/>}
        </>
    );
}

//Gabriel, ele está dando um warning no Handlingreset porque eu 
// estou atualizando um componente desconhecido. Depois tenta melhorar
// essa parte, por favor. =)