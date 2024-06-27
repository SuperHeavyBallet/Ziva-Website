import styles from "./homePageItemHighlight.module.css"



export default function HomePageItemHighlight( {highlightItems})
{
    const selectedProducts = highlightItems.slice(-3);

    return(
        <div className={styles.homePageItemHighlightContainer}>
        
            
                {
                    selectedProducts.map(product => (
                        <div className={styles.homePageHighlightItem}
                            key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name}></img>

                        </div>
                    ))
                }
                
            
    
        </div>
    )
}