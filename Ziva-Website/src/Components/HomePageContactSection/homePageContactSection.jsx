import GoogleMapComponent from "../GoogleMap/googleMap"
import styles from "./homePageContactSection.module.css"
import tempMap from "../../../public/images/temp_map.png"
import { useEffect } from "react"
import loadMap from '../../Components/GoogleMap/googleMap.jsx';

export default function HomePageContactSection()
{

    useEffect(() =>
    {
        loadMap();

    }, []);

    return(
        <div className={styles.homePageContactSectionContainer}>
            
            <div className={styles.homePageContactSectionTextArea}>
            <h5>Find us at:</h5>
            <p>Ziva Komerc</p>
            <p>Pere Segedinca 8</p>
            <p>Pancevo</p>
            <p>Serbia</p>
            <p>20000</p>
            </div>

            <div className={styles.homePageContactSectionMapArea}>
            <GoogleMapComponent/>
            </div>
        </div>
    )
}