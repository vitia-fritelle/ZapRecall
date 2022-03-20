import { Answer } from "../../../pages/Page2/Page2";
import './Footer.css';
import Sad from '../../../assets/imgs/sad.svg';
import Happy from '../../../assets/imgs/party.svg';


type Footer = {
    numberOfQuizzes: number,
    answers: Answer[],
    setReset: (reset: boolean) => void
}

export default ({numberOfQuizzes, answers, setReset}: Footer) => {
    
    const counter = answers.length;

    const isComplete = () => {
        return counter === numberOfQuizzes;
    }

    const hasForgot = () => {
        return answers.find(element => element.style === 'wrong-answer');
    }

    const conditionalRendering = () => {
        return isComplete()
               ? !hasForgot()
                 ?<>
                    <h3>
                        <img src={Happy} alt="Felicidades! "/>
                        PARABÉNS!
                    </h3>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                 </>
                  
                 :<>
                    <h3>
                        <img src={Sad} alt="Que pena! "/>
                        PUTZ!
                    </h3>
                    <p>Ainda faltaram alguns... Mas não desanime!</p>
                 </>
               : `${counter}/${numberOfQuizzes} ${counter > 1
                                                  ?'CONCLUÍDOS'
                                                  :'CONCLUÍDO'}`
    }

    return (
        <footer>
            {conditionalRendering()}
            <ol>
                {answers.map((element, index) => <li key={index}>
                                                     {element.icon}
                                                 </li>)}
            </ol>
            {isComplete() && <button onClick={() => setReset(true)}>REINICIAR RECALL</button>}
        </footer>
    );
}