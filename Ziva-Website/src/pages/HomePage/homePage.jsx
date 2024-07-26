import NavBar from "../../Components/NavBar/navBar"
import styles from "./homePage.module.css"
import HeroBanner from "../../Components/HeroBanner/heroBanner"
import HomePageItemHighlight from "../../Components/HomePageItemHighlight/homePageItemHighlight"
import bannerImage from "../../../public/images/tempBannerImage.png"
import HomePageContactSection from "../../Components/HomePageContactSection/homePageContactSection"
import products from "../../../public/products.json"
import Footer from "../../Components/Footer/footer"
import { useEffect, useState } from "react";
import ShoppingCart from "../../Components/ShoppingCart/shoppingCart"
import Button from "../../Components/Button/button"
import TopBanner from "../../Components/TopBanner/topBanner"
import HomePageTextBanner from "../../Components/HomePageTextBanner/homePageTextBanner"



export default function HomePage(){

    const [ currentCartContents, setCurrentCartContents ] = useState([]);

    function updateShoppingCart(itemToAdd)
    {
        setCurrentCartContents(...currentCartContents, itemToAdd);
    }

    useEffect(() => {
        backToTop();
      }, []);

      function backToTop()
      {
        window.scrollTo(0, 0);
      }

    return(
        <div className={styles.pageContainer}>
            <NavBar />

            <TopBanner 
            className={styles.topBanner}
            bannerText="Add Items To Your Shopping List and Send an Email Enquiry!"
            />

            
            <div className={styles.centreSection}>
            <HeroBanner
                bannerTitle="ZIVA KOMERC"
                bannerImageSrc={bannerImage}
                bannerText="Veros odus quintum fax niel et hadif qul far epo"
            />
            <HomePageItemHighlight 
                highlightItems={products}
            />

            <HomePageTextBanner />

            <HomePageContactSection />

           

            </div>
            
        <Button 
            buttonText="Back to top"
            buttonFunction={() => backToTop()}
        />

            <Footer />
        </div>
    )
}