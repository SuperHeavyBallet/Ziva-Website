import styles from "./aboutUsBanner.module.css"

export default function AboutUsBanner( {bannerTitle, bannerTextObject} )
{
    return(
        <div className={styles.aboutUsBannerContainer}>
            <div className={styles.aboutUsBannerTextArea}>
                <h3>{bannerTitle}</h3>

                <p>{bannerTextObject.line1}</p>
                <p>{bannerTextObject.line2}</p>
                <p>{bannerTextObject.line3}</p>
                <p>{bannerTextObject.line4}</p>
                <p>{bannerTextObject.line5}</p>

            </div>
        </div>
    )
}