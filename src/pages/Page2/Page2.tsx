import React, { useState } from 'react';
import Header from '../../components/page2Componentes/Header/Header';
import FlashCard from '../../components/page2Componentes/FlashCard/FlashCard';
import Footer from '../../components/page2Componentes/Footer/Footer';
import './Page2.css';
import { Quizz } from '../../App';

export type Answer = {
    style: string,
    icon: any
}

type AnswersState = [
    Answer[],
    (answers: Answer[]) => void
]

const shuffle: (qzzs: Quizz[]) => Quizz[] = (qzzs) => {
    const res = [...qzzs];
    return res.sort((_) => Math.random() - 0.5);
}

let shuffledQuizzes: Quizz[] = [];

export default ({meta, quizzes}: {meta: number, quizzes: Quizz[]}) => {

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
                    meta={meta} 
                    setReset={setReset}/>
            {reset && <HandlingReset setAnswers={setAnswers} 
                                     setReset={setReset}/>}
        </>
    );
}

//Gabriel, ele está dando um warning no Handlingreset porque eu 
// estou atualizando um componente desconhecido. Depois tenta melhorar
// essa parte, por favor. =)