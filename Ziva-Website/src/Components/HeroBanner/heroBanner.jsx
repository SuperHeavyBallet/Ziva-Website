import styles from "./heroBanner.module.css"

export default function HeroBanner( { bannerTitle, bannerImageSrc, bannerText } )
{
    return(
        <div className={styles.heroBannerContainer}>
            <div className={styles.heroBannerTextArea}>
            <h3>{bannerTitle}</h3>
            
            <p>{bannerText}</p>
            </div>

            <div className={styles.heroBannerImageArea}>
            <img src={bannerImageSrc}></img>
            </div>
        </div>
    )
}