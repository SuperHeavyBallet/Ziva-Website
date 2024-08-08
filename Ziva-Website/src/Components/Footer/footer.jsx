import styles from "./footer.module.css"
import { useEffect } from "react";
import Button from "../Button/button";

export default function Footer()
{
    useEffect(() => {
        backToTop();
      }, []);

      function backToTop()
      {

        
        window.scrollTo(0, 0);
      }

    return(
        <div className={styles.footerContainer}>

            <div className={styles.footerLeftSide}>
                 <p>Ziva Komerc</p>
                 <p>zivakomerc@email.com</p>
            </div>

            <div className={styles.footerRightSide}>
                <p>Pere Segedinca 8</p>

                <p>Pancevo</p>

                <p>Serbia</p>

                <p>20000</p>
            </div>
        
            <Button 
            buttonText="Back to top"
            buttonFunction={() => backToTop()}
        />
        
        </div>

        
    )
    
}