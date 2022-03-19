import lightning from '../../assets/imgs/lightning.svg';
import './Page1.css';
export default ({setPage}: {setPage: (pageNumber: number) => void
    }) => {
    return (
        <>
            <figure>
                <img src={lightning} alt="trovão" />
                <figcaption>ZapRecall</figcaption>
            </figure>
            <button onClick={() => setPage(1)}>Iniciar Recall!</button>
        </>
    );
}