import { Link } from "react-router-dom";
import styles from "./homePageItemHighlight.module.css"
import { useEffect, useId, useState } from "react";



export default function HomePageItemHighlight( {highlightItems})
{

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ activeIndex, setActiveIndex ] = useState(0);
    const itemsPerPage = 6;
    const timeBeforeReload = itemsPerPage * 1000;
    const timeBeforeItemAdvance = timeBeforeReload / itemsPerPage;

    function chooseItemsToShow()
    {
        const newIndex = (currentIndex + itemsPerPage) % highlightItems.length;
        setCurrentIndex(newIndex);
        setActiveIndex(0); 
    }

    const itemsToShow = 
        highlightItems.slice(currentIndex, currentIndex + itemsPerPage)
        .concat(
        highlightItems.slice(0, Math.max(0, (currentIndex + itemsPerPage) 
            - highlightItems.length))
    );


    useEffect(() => {
        const cycleActiveClass = setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex +1) % itemsPerPage);
        }, timeBeforeItemAdvance);

        return () => clearTimeout(cycleActiveClass);
    }, [activeIndex, itemsToShow]);

    useEffect(() => {
        const timer = setTimeout(() => {
            chooseItemsToShow();

        }, timeBeforeReload);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    


    return(
        <div className={styles.homePageItemHighlightContainer}>
        <h3 className={styles.homePageHighlightItemTitle}>Our Products</h3>
            <div className={styles.homePageItemReel}>
                {
                    itemsToShow.map((product, index) => (
                        
                        <div className={
                            `${styles.homePageHighlightItem} ${index === activeIndex ? styles.activeClass : ''}`}
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