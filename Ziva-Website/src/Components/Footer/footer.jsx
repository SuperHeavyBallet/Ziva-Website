import styles from "./footer.module.css"

export default function Footer()
{
    return(
        <div className={styles.footerContainer}>

            <div className={styles.footerLeftSide}>
                 <p>Ziva Komerc</p>
                 <p>zivakomerc@email.com</p>
            </div>

            <div className={styles.footerRightSide}>
                <p>Pere Segedinca 8</p>

                <p>Pancevo</p>

                <p>Serbia</p>

                <p>20000</p>
            </div>
        </div>
    )
    
}