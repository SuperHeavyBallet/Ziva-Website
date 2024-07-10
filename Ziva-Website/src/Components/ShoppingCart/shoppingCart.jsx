import { useEffect, useState } from "react";
import styles from "./shoppingCart.module.css"

export default function ShoppingCart( {cartContents, onRemoveItem} )
{
    console.log(cartContents);

    function removeItem(item)
    {
        
        onRemoveItem(item);
    }

    return(
        <div className={styles.shoppingCartContainer}>
            Shopping Cart
            
        <div className={styles.shoppingCartItems}>
            {
                cartContents.map((product, index) => (
                    <div className={styles.shoppingCartEachItem}>
                        <img className={styles.shoppingCartImage}
                        src={product.image}></img>
                       
                       
                        {product.name}

                        <div>
                       x {product.quantity}
                       $: {(product.price * product.quantity).toFixed(2)}
                       </div>

                        <div onClick={() => removeItem(product)}>
                            Remove
                            </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}