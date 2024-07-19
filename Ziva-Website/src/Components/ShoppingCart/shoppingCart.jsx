import { useEffect, useState } from "react";
import styles from "./shoppingCart.module.css"
import { Link } from "react-router-dom";


export default function ShoppingCart( {cartContents, onRemoveItem, itemClicked, itemQuantityAdjusted, isOrderPage} )
{
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ hasOrder, setHasOrder ] = useState(false);

    function removeItem(item)
    {
        
        onRemoveItem(item);
    }
    function handleItemClicked(itemId)
    {
        itemClicked(itemId);
    }

    function adjustQuantity(amountToAdjust, itemId)
    {
        itemQuantityAdjusted([itemId, amountToAdjust]);
        calculateTotalPrice();
    }

    function calculateTotalPrice()
    {
        let totalCost = 0; 

        for (let i = 0; i < cartContents.length; i++) {
            totalCost += cartContents[i].item.price * cartContents[i].quantity;
        }

        setTotalPrice(parseFloat(totalCost.toFixed(2)));
       
    }

    function setOrderReady()
    {
        if (cartContents.length > 0)
        {
            setHasOrder(true);
        }
        else
        {
            setHasOrder(false);
        }
    }

    useEffect(() =>
    {
        console.log(typeof(totalPrice));
    }, [totalPrice]);

    useEffect(() =>
    {
        calculateTotalPrice();
        setOrderReady();
        
        
    }, [cartContents] );

    function SendOrderButton()
    {
        if (!isOrderPage)
        {
            return(
                <Link to={"/orders"}>
                <button className={`${styles.shoppingCartSendOrder} ${hasOrder ? styles.visible : styles.hidden}`}>
                    Send Order</button>
                    </Link>
            )
        }
        else
        {
            return null;
        }
    }


    return(
        <div className={styles.shoppingCartContainer}>
            Shopping Cart
            
        <div className={styles.shoppingCartItems}>
            {
                cartContents.map((product, index) => (
                    
                    <div className={styles.shoppingCartEachItem}
                    key={index}
                    
                    >
                        <div className={styles.shoppingCartFirstBox}>
                            <img className={styles.shoppingCartImage}
                                onClick={() => handleItemClicked(product.item.id)}
                                src={product.item.image}></img>
                        </div>

                        <div className={styles.shoppingCartSecondBox}>
                            <div className={styles.shoppingCartItemTitle}>
                                <div>
                                    <h4>{product.name}</h4>
                                </div>
                            </div>
 
                            

                                <div className={styles.price}>
                                    $: {Number(product.item.price * product.quantity).toFixed(2)}
                                </div>

                                <div className={styles.stats}>
                                    {product.item.dimensions} {product.item.weight}
                                </div>
                            
                        </div>

                            

                           
                        <div className={styles.shoppingCartThirdBox}>
                            <div>
                                <div className={styles.removeButton} onClick={() => removeItem(product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1000 1000" width="500" height="500">
                                        <path d="M0 281.296l0 -68.355q1.953 -37.107 29.295 -62.496t64.449 -25.389l93.744 0l0 -31.248q0 -39.06 27.342 -66.402t66.402 -27.342l312.48 0q39.06 0 66.402 27.342t27.342 66.402l0 31.248l93.744 0q37.107 0 64.449 25.389t29.295 62.496l0 68.355q0 25.389 -18.553 43.943t-43.943 18.553l0 531.216q0 52.731 -36.13 88.862t-88.862 36.13l-499.968 0q-52.731 0 -88.862 -36.13t-36.13 -88.862l0 -531.216q-25.389 0 -43.943 -18.553t-18.553 -43.943zm62.496 0l749.952 0l0 -62.496q0 -13.671 -8.789 -22.46t-22.46 -8.789l-687.456 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 62.496zm62.496 593.712q0 25.389 18.553 43.943t43.943 18.553l499.968 0q25.389 0 43.943 -18.553t18.553 -43.943l0 -531.216l-624.96 0l0 531.216zm62.496 -31.248l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm31.248 -718.704l374.976 0l0 -31.248q0 -13.671 -8.789 -22.46t-22.46 -8.789l-312.48 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 31.248zm124.992 718.704l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm156.24 0l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224z"/>
                                        </svg>
                                </div>
                            </div>

                            <div className={styles.shoppingCartItemQuantity}>
                                <div className={styles.quantity}>
                                    <h4 onClick={() => adjustQuantity(-1, product)}>-</h4>

                                        <div className={styles.quantityDisplay}>{product.quantity} </div>
                                    
                                    <h4 onClick={() => adjustQuantity(1, product)}>+</h4>
                                </div>
                            </div>




                        </div>

                       
                        
                    </div>

                    
                    
                    
                ))
            }
            </div>

            <div>
                Total: ${Number(totalPrice)}
            </div>

            <SendOrderButton />
            
            
            
        </div>
    )
}