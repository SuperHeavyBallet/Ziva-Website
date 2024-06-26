import NavBar from "../../Components/NavBar/navBar"
import styles from "./homePage.module.css"
import HeroBanner from "../../Components/HeroBanner/heroBanner"
import HomePageItemHighlight from "../../Components/HomePageItemHighlight/homePageItemHighlight"
import bannerImage from "../../../public/images/tempBannerImage.png"
import HomePageContactSection from "../../Components/HomePageContactSection/homePageContactSection"
import products from "../../../public/products.json"
import Footer from "../../Components/Footer/footer"
import { useEffect } from "react";


export default function HomePage(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className={styles.pageContainer}>
            <NavBar />

            <div className={styles.centreSection}>
            <HeroBanner
                bannerTitle="Banner Title"
                bannerImageSrc={bannerImage}
                bannerText="Veros odus quintum fax niel et hadif qul far epo"
            />
            <HomePageItemHighlight 
                highlightItems={products}
            />
            <HomePageContactSection />

            </div>
            
            <Footer />
        </div>
    )
}