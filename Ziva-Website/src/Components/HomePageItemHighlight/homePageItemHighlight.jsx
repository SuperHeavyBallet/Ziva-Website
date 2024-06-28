import { Link } from "react-router-dom";
import styles from "./homePageItemHighlight.module.css"



export default function HomePageItemHighlight( {highlightItems})
{
    const selectedProducts = highlightItems.slice(0,5);

    return(
        <div className={styles.homePageItemHighlightContainer}>
        <h3>New Products</h3>
            <div className={styles.homePageItemReel}>
                {
                    selectedProducts.map(product => (
                        <Link to={"/catalogue"}>
                        <div className={styles.homePageHighlightItem}
                            key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name}></img>

                        </div>
                        </Link>
                    ))
                }
                </div>
            
    
        </div>
    )
}