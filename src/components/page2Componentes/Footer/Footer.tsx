import { Answer } from "../../../pages/Page2/Page2";

type Footer = {
    numberOfQuizzes: number,
    answers: Answer[]
}

export default ({numberOfQuizzes, answers}: Footer) => {
    
    const counter = answers.length;

    const isComplete = () => {
        return counter === numberOfQuizzes;
    }

    const hasForgot = () => {
        return answers.find(element => element.style === 'wrong-answer');
    }

    return (
        <footer>
            {isComplete() && (!hasForgot()?<h3>PARABÉNS!</h3>:<h3>{}PUTZ!</h3>)}
            {counter}/{numberOfQuizzes} {counter > 1?'CONCLUÍDOS':'CONCLUÍDO'}
            <ol>
                {answers.map((element, index) => <li key={index}>{element.icon}</li>)}
            </ol>
        </footer>
    );
}