import { Link } from "react-router-dom";
import styles from "./homePageItemHighlight.module.css"
import { useEffect, useId, useState } from "react";



export default function HomePageItemHighlight( {highlightItems})
{
    const selectedProducts = highlightItems;

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const itemsPerPage = 4;

    function chooseItemsToShow(numberOfItems)
    {
  

        const newIndex = (currentIndex + itemsPerPage) % highlightItems.length;
        setCurrentIndex(newIndex);

       
    }

    const itemsToShow = highlightItems.slice(currentIndex, currentIndex + itemsPerPage).concat(
        highlightItems.slice(0, Math.max(0, (currentIndex + itemsPerPage) - highlightItems.length))
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            chooseItemsToShow();
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex]);


    return(
        <div className={styles.homePageItemHighlightContainer}>
        <h3 className={styles.homePageHighlightItemTitle}>Our Products</h3>
            <div className={styles.homePageItemReel}>
                {
                    itemsToShow.map((product, index) => (
                        
                        <div className={styles.homePageHighlightItem}
                        onClick={() => chooseItemsToShow()}
                            key={index}>
                                <Link to={"/products"}
                                className={styles.link}
                                
                                >
                            <img src={product.image} alt={product.name}></img>
                            </Link>
                        </div>
                       
                    ))
                }
                </div>
            
    
        </div>
    )
}