import { useEffect, useState } from "react";
import styles from "./shoppingCart.module.css"

export default function ShoppingCart( {cartContents} )
{
    console.log(cartContents);

    function removeItem(item)
    {
        window.alert(item.name);
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