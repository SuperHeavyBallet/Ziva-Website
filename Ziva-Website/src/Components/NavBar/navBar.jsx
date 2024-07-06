import { Link } from "react-router-dom"
import styles from "./navBar.module.css"

export default function NavBar()
{
    return(
        <div className={styles.navBar}>

            <div className={styles.navBarFirstRow}>
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -256 1792 1792"
                >
                    <path
                    d="m 1408,296 q 0,-27 -10,-70.5 Q 1388,182 1377,157 1356,107 1255,51 1161,0 1069,0 1042,0 1016.5,3.5 991,7 959,16 927,25 911.5,30.5 896,36 856,51 816,66 807,69 709,104 632,152 504,231 367.5,367.5 231,504 152,632 104,709 69,807 66,816 51,856 36,896 30.5,911.5 25,927 16,959 7,991 3.5,1016.5 0,1042 0,1069 q 0,92 51,186 56,101 106,122 25,11 68.5,21 43.5,10 70.5,10 14,0 21,-3 18,-6 53,-76 11,-19 30,-54 19,-35 35,-63.5 16,-28.5 31,-53.5 3,-4 17.5,-25 14.5,-21 21.5,-35.5 7,-14.5 7,-28.5 0,-20 -28.5,-50 -28.5,-30 -62,-55 -33.5,-25 -62,-53 -28.5,-28 -28.5,-46 0,-9 5,-22.5 5,-13.5 8.5,-20.5 3.5,-7 14,-24 10.5,-17 11.5,-19 76,-137 174,-235 98,-98 235,-174 2,-1 19,-11.5 17,-10.5 24,-14 7,-3.5 20.5,-8.5 13.5,-5 22.5,-5 18,0 46,28.5 28,28.5 53,62 25,33.5 55,62 30,28.5 50,28.5 14,0 28.5,-7 14.5,-7 35.5,-21.5 21,-14.5 25,-17.5 25,-15 53.5,-31 28.5,-16 63.5,-35 35,-19 54,-30 70,-35 76,-53 3,-7 3,-21 z"
                    fill="white"/>
                </svg>
                Contact us: 0100 240340
                </div>

            <div className={styles.navBarSecondRow}>
            <h3>ZIVA KOMERC</h3>
            <Link to={"/"}>
            <div className={styles.navBarLink}>Home</div>
            </Link>

            <Link to={"/products"}>
            <div className={styles.navBarLink}>Products</div>
            </Link>

           
                <div className={styles.searchBar}>
                <input
                        type="text"
                        placeholder="Search..."
                    ></input>
                    <svg
                    fill="#FFF" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	                    viewBox="0 0 488.4 488.4" xmlSpace="preserve">
                    <g>
	                    <g>
		                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			                    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			                    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			                    S381.9,104.65,381.9,203.25z"/>
	                    </g>
                    </g>
                    </svg>
                    
                </div>
           

            <Link to={"/about"}>
            <div className={styles.navBarLink}>About Us</div>
            </Link>

        </div>
        </div>
    )
}