import NavBar from "../../Components/NavBar/navBar"
import styles from "./homePage.module.css"
import HeroBanner from "../../Components/HeroBanner/heroBanner"
import HomePageItemHighlight from "../../Components/HomePageItemHighlight/homePageItemHighlight"
import bannerImage from "../../../public/images/tempBannerImage.png"
import HomePageContactSection from "../../Components/HomePageContactSection/homePageContactSection"
import products from "../../../public/products.json"
import Footer from "../../Components/Footer/footer"
import { useEffect, useState } from "react";
import Button from "../../Components/Button/button"
import TopBanner from "../../Components/TopBanner/topBanner"
import HomePageTextBanner from "../../Components/HomePageTextBanner/homePageTextBanner"
import LargeImageRow from "../../Components/LargeImageRow/largeImageRow"



export default function HomePage(){


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

                <div className={styles.partialPageStrip}>
                    <HeroBanner
                        bannerTitle="ZIVA KOMERC"
                        bannerImageSrc={bannerImage}
                        bannerText="Veros odus quintum fax niel et hadif."
                    />
                </div>

                <div className={styles.fullPageStrip}>
                    <HomePageItemHighlight 
                        highlightItems={products}
                    />
                </div>

                <div className={styles.partialPageStrip}>
                <HomePageTextBanner />
                </div>

                <div className={styles.partialPageStrip}>
                <LargeImageRow />
                </div>

                <div className={styles.partialPageStrip}>
                    <HomePageContactSection />
                </div>

           

            </div>
            
        <Button className={styles.backToTopButton}
            buttonText="Back to top"
            buttonFunction={() => backToTop()}
        />

            <Footer />
        </div>
    )
}