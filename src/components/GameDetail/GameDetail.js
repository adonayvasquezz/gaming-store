import { useEffect, useState } from 'react';
import StoreCard from '../StoreCard/StoreCard';
import styles from './GameDetail.module.css';

const GameDetail = ({ game, store }) => {

    const [date, setDate] = useState('');
    const [stores, setStores] = useState([]);

    useEffect(() => {
        let stores = game.deals.map((deal) => {
            let st = store.find((item) => deal.storeID === item.storeID);
            if (st) {
                deal.storeName = st.storeName;
                deal.image = st.images.logo;
            }
            /* let newDeal = {
                ...deal,
                storeName: st.storeName,
                image: st.images.logo
            } */
            return deal;
        });
        //console.log('stores: ',stores);

        let data = stores.map((deal, id) => {
            return <StoreCard deal={deal} key={id} />
        });
        setStores(data);
    }, [game.deals, store])

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

    const handleFavorites = (e) => {
        e.preventDefault();

        let fav = JSON.parse(localStorage.getItem('favoritesGames'));
        if (fav==null) {
            let fa = [];
            fa.push(game.info.steamAppID);
            localStorage.setItem('favoritesGames', JSON.stringify(fa));
        } else {
            fav.push(game.info.steamAppID);
            localStorage.setItem('favoritesGames', JSON.stringify(fav));
        }
        console.log(game);
    }

    return (
        <div className="container d-flex justify-content-center">
            <div>
                {game.info.title && <h1 className="my-2 text-center">{game.info.title}</h1>}
                <div className={styles.imgContainer}>
                    {game.info.thumb && <img loading="lazy" className={styles.imgDetail} src={game.info.thumb} alt="" />}
                </div>
                <div className="mt-5 d-flex justify-content-center align-items-center">
                    <div>
                        <label className={styles.lowestPriceText}>Lowest historical price: </label>
                        {game.cheapestPriceEver.price &&
                            <label className={styles.price}>
                                $ {game.cheapestPriceEver.price}</label>}

                        {date && <label className="mx-3 text-center fs-5 "> in  {date}</label>}
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-success" onClick={handleFavorites} >Add to Favorites</button>
                </div>
                
                <div className="row my-5">
                    <h3>Stores: </h3>
                    {stores}
                </div>
            </div>
        </div>
    )
}
export default GameDetail;