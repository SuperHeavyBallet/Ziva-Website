import { Link } from "react-router-dom"
import styles from "./navBar.module.css"

export default function NavBar()
{
    return(
        <div className={styles.navBar}>
            NavBar
            <Link to={"/"}>
            <div>Home</div>
            </Link>

            <Link to={"/catalogue"}>
            <div>Catalogue</div>
            </Link>

            <Link>
                <div>Search Bar</div>
            </Link>

            <Link to={"/about"}>
            <div>About Us</div>
            </Link>

        </div>
    )
}