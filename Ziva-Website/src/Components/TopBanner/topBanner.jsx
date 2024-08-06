import styles from "./topBanner.module.css"

export default function TopBanner( {bannerText})
{
    return(
        
            <div className={styles.topBanner}>
                <h4>{bannerText}</h4>

            </div>
        
    )
}