import React, { useState } from 'react';
import './FlashCard.css';
import {PlayOutline, CloseCircle, HelpCircle, CheckmarkCircle } from 'react-ionicons';
import TurnCard from '../../../assets/imgs/turn.svg';
import { Score } from '../../../pages/Page2/Page2';

enum Card {
    Hidden,
    Question,
    Answer
}

type Flashcard = {
    position: number, 
    question: string, 
    answer: string
}

export default ({position, question, answer}: Flashcard) => {
    
    const [score, setScore] = useState(Score.NotAnswered);
    const [card, setCard] = useState(Card.Hidden);
    
    const scoreFactory = [
        {style: '', icon: <PlayOutline onClick={() => setCard(Card.Question)}/>},
        {style: 'wrong-answer', icon: <CloseCircle color={'#FF3030'}/>},
        {style: 'almost-right-answer', icon: <HelpCircle color={'#FF922E'}/>},
        {style: 'right-answer', icon: <CheckmarkCircle color={'#2FBE34'}/>}
    ]

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
                    {question}
                    <img src={`${TurnCard}`} 
                        alt="turn card" 
                        onClick={() => setCard(Card.Answer)}/>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={`flashcard flipped`}>
                    {answer}
                    <ul>
                        <li>
                            <button className='background-color-red' 
                                    onClick={() => {
                                        setScore(Score.Wrong); 
                                        setCard(Card.Hidden);}}>
                                Não lembrei
                            </button>
                        </li>
                        <li>
                            <button className='background-color-yellow' 
                                    onClick={() => {
                                        setScore(Score.AlmostForgot); 
                                        setCard(Card.Hidden);}}>
                                Quase não lembrei
                            </button>
                        </li>
                        <li>
                            <button className='background-color-green' 
                                    onClick={() => {
                                        setScore(Score.Zap); 
                                        setCard(Card.Hidden);}}>
                                Zap!
                            </button>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}




