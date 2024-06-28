import HeroBanner from "../../Components/HeroBanner/heroBanner";
import NavBar from "../../Components/NavBar/navBar";
import styles from "./aboutUsPage.module.css"
import bannerImage from "../../../public/images/tempBannerImage.png"
import Footer from "../../Components/Footer/footer";

export default function AboutUsPage()
{
    return(
        <div className={styles.pageContainer}>
            <NavBar />

            <div className={styles.centreSection}>

                <HeroBanner
                bannerTitle="Banner Title"
                bannerImageSrc={bannerImage}
                bannerText="Veros odus quintum fax niel et hadif qul far epo"
            />
            </div>

            <Footer />
            
        </div>
    )
}