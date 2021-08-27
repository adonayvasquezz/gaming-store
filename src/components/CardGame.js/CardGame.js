import styles from './CardGame.module.css';
//import imgNotFound from '../../../public/image-not-found.jpg';

const CardGame = ({ game }) => {
    //let noImg = imgNotFound;
    //let gameImg = game.thumb ? game.thumb : noImg;
    return (
        <div className="card">
            <div >
                <img src={game.thumb} className={styles.imgCover} alt={game.internalName}></img>
            </div>
            <div className="card-body d-flex justify-content-between flex-column">
                <div className="card-text text-center pt-1">{game.title}</div>

                <div className="d-flex justify-content-end align-items-center">
                    <div className="me-2">
                        <label className="bg-success p-1 text-white rounded">
                            -{Math.round(game.savings)}%
                        </label>
                    </div>
                    <div className="pe-1 pb-1">
                        <div className={styles.normalPrice}>$ {game.normalPrice}</div>
                        <div className={styles.salePrice}>$ {game.salePrice}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardGame;