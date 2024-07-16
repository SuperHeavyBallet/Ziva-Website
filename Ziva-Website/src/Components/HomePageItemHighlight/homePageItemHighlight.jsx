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

    function skipReel(direction)
    {
        chooseItemsToShow();
    }
    


    return(
        <div className={styles.homePageItemHighlightContainer}>
        <h3 className={styles.homePageHighlightItemTitle}>Our Products</h3>
            <div className={styles.homePageItemReel}>
                <button onClick={() => skipReel("backward")}>
                    <svg fill="#000000" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330.002 330.002"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g> <path id="XMLID_227_" d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3 L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001 C236.878,322.03,238.221,312.628,233.25,306.001z"></path></svg>
                </button>
                {
                    itemsToShow.map((product, index) => (
                        
                        <div className={
                            
                            `${styles.homePageHighlightItem} ${index === activeIndex ? styles.activeClass : ''}`}
                            key={index}>
                                <Link to="/products" state={{ productID: product.id }}
                                className={styles.link}
                                
                                >
                            <img src={product.image} alt={product.name}></img>
                            </Link>
                        </div>
                       
                    ))
                }
                <button onClick={() => skipReel("forward")}>
                    <svg fill="#000000" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 330 330" ><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path></svg>
                </button>
                </div>
            
    
        </div>
    )
}