import styles from "./homePageTextBanner.module.css"

export default function HomePageTextBanner()
{
    const leftColumnText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const rightColumnText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


    return(
        <div className={styles.homepageTextBannerContainer}>
            
            
            <div className={styles.leftColumn}>
                <h3>Who We Are</h3>
                <div className={styles.columnContents}>
                   <p>{leftColumnText}</p>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <h3>What We Do</h3>
                <div className={styles.columnContents}>
                    <p>{rightColumnText}</p>
                </div>
            </div>
        </div>
    )
}