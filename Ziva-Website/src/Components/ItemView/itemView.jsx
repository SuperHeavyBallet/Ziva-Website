import { useEffect, useState } from "react";
import styles from "./itemView.module.css"

export default function ItemView( {selectedItem, onClickAddToCart})
{

    const [ itemQuantity, setItemQuantity ] = useState(1);


    // Intermittent problemms, some adding numbers fine, some adding as string and contacenating
    function addToCart()
    {
        if (itemQuantity > 0)
        {
            onClickAddToCart(selectedItem, Number(itemQuantity));
        }
        
    }

    
    function changeQuantity(amountToChange)
    {

        if (itemQuantity + amountToChange >= 1)
        {
            setItemQuantity(itemQuantity + amountToChange);
        }
 
        
        
    }

    useEffect(() =>
    {

    })
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
            <div className={styles.quantityAdjust}>
                <p>Quantity: </p>
                <p onClick={() => changeQuantity(1)}>+</p>
                <h4>{itemQuantity}</h4>
                <p onClick={() => changeQuantity(-1)}>-</p>
            </div>
            <button onClick={() => addToCart()}>Add To Cart</button>
            </div>
            </div>
    )
}