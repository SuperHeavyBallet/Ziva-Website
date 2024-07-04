import styles from "./shoppingCart.module.css"

export default function ShoppingCart( {cartContents} )
{
    return(
        <div className={styles.shoppingCartContainer}>
            Shopping Cart
            
        <div className={styles.shoppingCartItems}>
            {
                cartContents.map((product, index) => (
                    <div>
                        {product}
                    </div>
                ))
            }
            </div>
        </div>
    )
}