import styles from "./heroBanner.module.css"

export default function HeroBanner( { bannerTitle, bannerImageSrc, bannerText } )
{
    return(
        <div className={styles.heroBannerContainer}
        style={{backgroundImage: `url(${bannerImageSrc})`}}>

        <div className={styles.heroBannerOverlay}>
            <div className={styles.heroBannerTextArea}>
                <h1>{bannerTitle}</h1>
            
                <h3>{bannerText}</h3>
            </div>
            </div>
        </div>
    )
}