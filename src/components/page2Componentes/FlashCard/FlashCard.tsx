import React, { useState } from 'react';
import './FlashCard.css';
import {PlayOutline, CloseCircle, 
        HelpCircle, CheckmarkCircle } from 'react-ionicons';
import TurnCard from '../../../assets/imgs/turn.svg';
import { Answer } from '../../../pages/Page2/Page2';

enum Card {
    Hidden,
    Question,
    Answer
}

enum Score {
    NotAnswered,
    Wrong,
    AlmostForgot,
    Zap
}

type Flashcard = {
    position: number, 
    question: string, 
    answer: string,
    answers: Answer[],
    setAnswers: (answers: Answer[]) => void
}

export default ({
    position, question, 
    answer, answers, setAnswers}: Flashcard) => {
    
    const [score, setScore] = useState(Score.NotAnswered);
    const [card, setCard] = useState(Card.Hidden);

    const scoreFactory: Answer[] = [
        {style: '', icon: <PlayOutline onClick={() => setCard(Card.Question)}/>},
        {style: 'wrong-answer', icon: <CloseCircle color={'#FF3030'}/>},
        {style: 'almost-right-answer', icon: <HelpCircle color={'#FF922E'}/>},
        {style: 'right-answer', icon: <CheckmarkCircle color={'#2FBE34'}/>}
    ]

    type CustomButton = {
        style: string,
        order: Score,
        innerText: string
    }

    const Button = ({style, order, innerText}: CustomButton) => {

        return (
            <button className={`${style}`} 
                    onClick={() => {
                        setScore(order); 
                        setCard(Card.Hidden);
                        setAnswers([
                            ...answers, 
                            scoreFactory[order]]);}}>
                {`${innerText}`}
            </button>
        );
    }

    const buttons: CustomButton[] = [
        {
            style: 'background-color-red', 
            order: Score.Wrong, 
            innerText: 'Não lembrei'
        },
        {
            style: 'background-color-yellow', 
            order: Score.AlmostForgot, 
            innerText: 'Quase não lembrei'
        },
        {
            style: 'background-color-green', 
            order: Score.Zap, 
            innerText: 'Zap!'
        }
    ];

    if(card === Card.Hidden) {
        return (
            <>
                <div className={`flashcard ${scoreFactory[score].style}`}>
                    {`Pergunta ${position+1}`}
                    {scoreFactory[score].icon}
                </div>
            </>
        );
    } else if(card === Card.Question) {
        return (
            <>
                <div className={`flashcard flipped`}>
                    <p>{question}</p>
                    <div>
                        <img src={`${TurnCard}`} 
                            alt="turn card" 
                            onClick={() => setCard(Card.Answer)}/>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={`flashcard flipped`}>
                    {answer}
                    <ul>
                        {buttons.map(({style, order, innerText}, index) => {
                            return (
                                <li key={index}>
                                    <Button style={style} 
                                                  order={order} 
                                                  innerText={innerText}/>
                                </li>)})}
                    </ul>
                </div>
            </>
        );
    }
}




