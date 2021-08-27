import { useEffect, useState } from 'react';
import styles from './GameDetail.module.css';

const GameDetail = ({ game }) => {

    const [date, setDate] = useState('')

    useEffect(() => {
        let date = game.cheapestPriceEver.date;
        let d = new Date(date * 1000);
        let month = d.toLocaleString('default', { month: 'long' });
        let day = d.getDate();
        let year = d.getFullYear();
        let formatedDate = `${month} ${day}, ${year}`;
        setDate(formatedDate.toString());
        //console.log(formatedDate.toString());
    }, [game.cheapestPriceEver.date])

    return (
        <div className="container d-flex justify-content-center">
            <div>
                {game.info.title && <h1 className="my-2 text-center">{game.info.title}</h1>}
                <div className={styles.imgContainer}>
                    {game.info.thumb && <img className={styles.imgDetail} src={game.info.thumb} alt="" />}
                </div>
                <div className="mt-3 d-flex justify-content-start align-items-center">
                    <div>
                        <label className={styles.lowestPriceText}>Lowest historical price: </label>
                        {game.cheapestPriceEver.price &&
                            <label className={styles.price}>
                                $ {game.cheapestPriceEver.price}</label>}

                        {date && <label className="mx-3 text-center fs-5 ">  {date}</label>}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameDetail;