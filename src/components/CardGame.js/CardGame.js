import { useHistory } from 'react-router-dom';
import styles from './CardGame.module.css';
//import imgNotFound from '../../../public/image-not-found.jpg';

const CardGame = ({ game }) => {
    //let noImg = imgNotFound;
    //let gameImg = game.thumb ? game.thumb : noImg;

    const history = useHistory();

    const handleDetailGame = (gameID) => {
        history.push("/detail", gameID);
    }
    return (
        <div onClick={() => handleDetailGame(game.gameID)} className={game.title ? styles.card : styles.cardSearch}>
            <div>
                <img loading="lazy" src={game.thumb} className={styles.imgCover} alt={game.internalName}></img>
            </div>
            <div className="card-body d-flex justify-content-between flex-column">
                <h6 className="card-text text-center pt-2">{game.title ? game.title : game.external}</h6>

               {game.savings && 
                <div className="d-flex justify-content-end align-items-center">
                    <div className="me-2">
                        <label className="bg-success p-2 text-white rounded">
                            -{Math.round(game.savings)}%
                        </label>
                    </div>
                    <div className="pe-3 pb-2">
                        <div className={styles.normalPrice}>$ {game.normalPrice}</div>
                        <div className={styles.salePrice}>$ {game.salePrice}</div>
                    </div>
                </div>}

                {!game.savings && 
                <div className="d-flex justify-content-center">
                    <label className="btn btn-success" >View Details</label>
                </div>}
            </div>
        </div>
    )
}

export default CardGame;