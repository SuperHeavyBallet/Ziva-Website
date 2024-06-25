import NavBar from "../../Components/NavBar/navBar"
import styles from "./homePage.module.css"
import HeroBanner from "../../Components/HeroBanner/heroBanner"
import HomePageItemHighlight from "../../Components/HomePageItemHighlight/homePageItemHighlight"
import bannerImage from "../../../public/images/tempBannerImage.png"
import HomePageContactSection from "../../Components/HomePageContactSection/homePageContactSection"

export default function HomePage(){

    return(
        <div className={styles.pageContainer}>
            <NavBar />
            <HeroBanner
                bannerTitle="Banner Title"
                bannerImageSrc={bannerImage}
                bannerText="Veros odus quintum fax niel et hadif qul far epo"
            />
            <HomePageItemHighlight />
            <HomePageContactSection />
            Home Page!
        </div>
    )
}