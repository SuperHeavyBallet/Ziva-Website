import NavBar from "../../Components/NavBar/navBar"
import styles from "./cataloguePage.module.css"

export default function CataloguePage()
{
    return(
        <div className={styles.pageContainer}>
            <NavBar />
            Catalogue Page
        </div>
    )
}