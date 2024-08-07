import styles from "./largeImageRow.module.css"
import products from "../../../public/displayProducts.json"

export default function LargeImageRow()
{

    return(
        <div className={styles.largeImageRow}>
            {
                products.map((product, index) => (
                    <div className={styles.largeImage}>
                        <img src={product.image}></img>
                    </div>
                
                
                   
                ))
            }
        </div>
    )
}