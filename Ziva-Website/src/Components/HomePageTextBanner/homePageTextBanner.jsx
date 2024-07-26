import styles from "./homePageTextBanner.module.css"

export default function HomePageTextBanner()
{
    return(
        <div className={styles.homepageTextBannerContainer}>
            
            <div className={styles.leftColumn}>
                Left Column
            </div>

            <div className={styles.rightColumn}>
                Right Column
            </div>
            </div>
    )
}