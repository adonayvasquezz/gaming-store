import styles from './StoreCard.module.css';

const StoreCard = ({ deal }) => {
    return (
        <div className="col-6 col-md-4 my-4">
            <div>
                <img className={styles.logoStore} alt={styles.logoStore} src={`https://www.cheapshark.com${deal.image}`}></img>
            </div>
            {/* <div className="card-body d-flex justify-content-between flex-column">
                ${deal.price}
                ${deal.retailPrice}
                {Math.round(deal.savings)}%
            </div> */}
            
            <div className="d-flex justify-content-start align-items-center">
                <div className="me-2 mt-2">
                    <label className="bg-success p-2 text-white rounded">
                        -{Math.round(deal.savings)}%
                    </label>
                </div>
                <div >
                    <div className={styles.normalPrice}>$ {deal.retailPrice}</div>
                    <div className={styles.salePrice}>$ {deal.price}</div>
                </div>
            </div>

        </div>
    )
}

export default StoreCard
