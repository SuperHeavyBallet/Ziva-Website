import styles from "./itemView.module.css"

export default function ItemView( {selectedItem, onClickAddToCart})
{

    function addToCart()
    {
        onClickAddToCart(selectedItem);
    }
    return(
        <div className={styles.itemViewContainer}>
            
            <div className={styles.imageSection}>
            <img src={selectedItem.image}></img>
            </div>

            <div className={styles.textSection}>
            <h3>{selectedItem.name}</h3>
            <h3>${selectedItem.price}</h3>
            <p>Dimensions: {selectedItem.dimensions}</p>
            <p>Weight: {selectedItem.weight}</p>
            <p>{selectedItem.description}</p>
            <button onClick={() => addToCart()}>Add To Cart</button>
            </div>
            </div>
    )
}