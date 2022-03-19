import lightning from '../../assets/imgs/lightning.svg';
import './Page1.css';
export default () => {
    return (
        <>
            <figure>
                <img src={lightning} alt="trovão" />
                <figcaption>ZapRecall</figcaption>
            </figure>
            <button>Iniciar Recall!</button>
        </>
    );
}