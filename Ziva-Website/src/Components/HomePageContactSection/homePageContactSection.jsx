
import styles from "./homePageContactSection.module.css"


export default function HomePageContactSection()
{

    return(
        <div className={styles.homePageContactSectionContainer}>
            <h3>Where We're Located</h3>

            <div className={styles.homePageContactSectionSquares}>
                <div className={styles.homePageContactSectionTextArea}>
                    
                    <h3>Ziva Komerc D.O.O</h3>
                    <p>Pere Segedinca 8</p>
                    <p>Pancevo</p>
                    <p>Serbia</p>
                    <p>20000</p>
                </div>

            <div className={styles.homePageContactSectionMapArea}>
            <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.6286491553988!2d20.651448676633812!3d44.86985417289718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7f50aa7fe441%3A0x5cc5c596d4110682!2s%C5%BDiva%20Komerc%20D.O.O.!5e0!3m2!1sen!2srs!4v1722991405814!5m2!1sen!2srs`}
    
      
    ></iframe>
            </div>
            </div>
        </div>
    )
}