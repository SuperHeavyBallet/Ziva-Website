import { useEffect, useState } from "react";
import styles from "./itemView.module.css"

export default function ItemView( {selectedItem, onClickAddToCart})
{

    const [ itemQuantity, setItemQuantity ] = useState(1);

    const allImages = selectedItem.image;

    if (selectedItem === Array)
    {
        console.log("Is Array");
    }
    else
    {
        console.log("Not an array");
    }


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

    function SwitchDisplayImage()
    {
        window.alert("CLICKED");
    }   

    useEffect(() =>
    {

    })
    return(
        <div className={styles.itemViewContainer}>
            
            <div className={styles.imageSection}>
                <div className={styles.mainImageSection}>
                    <img src={selectedItem.image}></img>
                </div>
            
            

                <div className={styles.subImageSection}>
                    <img src={selectedItem.image} onClick={() => SwitchDisplayImage()}></img>
                    <img src={selectedItem.image} onClick={() => SwitchDisplayImage()}></img>
                    <img src={selectedItem.image} onClick={() => SwitchDisplayImage()}></img>
                </div>

            </div>

            <div className={styles.textSection}>
            <h3>{selectedItem.name}</h3>
            <h3>${selectedItem.price}</h3>
            <p>Dimensions: {selectedItem.dimensions}</p>
            <p>Weight: {selectedItem.weight}</p>
            <p>{selectedItem.description}</p>
            <div className={styles.quantityAdjust}>
                <h4>Quantity: </h4>
                <p onClick={() => changeQuantity(-1)}>-</p>
                <h4>{itemQuantity}</h4>
                <p onClick={() => changeQuantity(1)}>+</p>
            </div>
            <button onClick={() => addToCart()}>Add To Cart</button>
            </div>
            </div>
    )
}