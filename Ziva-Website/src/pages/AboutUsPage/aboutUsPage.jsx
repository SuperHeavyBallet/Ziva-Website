import HeroBanner from "../../Components/HeroBanner/heroBanner";
import NavBar from "../../Components/NavBar/navBar";
import styles from "./aboutUsPage.module.css"
import bannerImage from "../../../public/images/tempBannerImage.png"
import Footer from "../../Components/Footer/footer";
import HomePageContactSection from "../../Components/HomePageContactSection/homePageContactSection";
import { useEffect } from "react";
import AboutUsBanner from "../../Components/AboutUsBanner/aboutUsBanner";
import Button from "../../Components/Button/button";
import LargeImageRow from "../../Components/LargeImageRow/largeImageRow";


export default function AboutUsPage()
{
    const aboutText = 
    {
        line1: "Welcome to Ziva Komerc, your trusted source for high-quality products in Pancevo, Serbia.",
        line2: "We are an independent company dedicated to sourcing the best items from reliable suppliers and providing them to both businesses and individuals.",
        line3: "Our diverse product range includes food containers, plastic bags for takeaways and rubbish, foil and wrapping materials, wine bags, sauce containers, tissues, kitchen rolls, napkins, aluminum foil, paper bags, French fry containers, and more.",
        lime4: "At Ziva Komerc, we pride ourselves on our commitment to quality and customer satisfaction.",
        line5: "Explore our wide selection of products and experience exceptional service tailored to your needs. Thank you for choosing Ziva Komerc!"
    }


    return(
        <div className={styles.pageContainer}>
            <NavBar />

            <div className={styles.centreSection}>

            <div className={styles.partialPageStrip}>
                    <HeroBanner
                        bannerTitle="ZIVA KOMERC"
                        bannerImageSrc={bannerImage}
                        bannerText="Veros odus quintum fax niel et hadif."
                    />
                </div>
                
                <AboutUsBanner 
                    bannerTitle="About Ziva Komerc"
                    bannerTextObject={aboutText}
                />

                <LargeImageRow />

                <HomePageContactSection />
            </div>

            

            <Footer />
            
        </div>
    )
}