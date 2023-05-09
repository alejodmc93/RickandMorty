import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from "./NavBar.module.css"
import { Link, NavLink} from "react-router-dom";

    const NavBar = ({onSearch})=>{
        return(
            <div className={styles.navbar}>
                <img className={styles.titulo} src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="titulo"/>
                <SearchBar onSearch={onSearch}/>

                <ul className={styles.menu}>
                <Link to="/home">
                    <li className={styles.home}>Home</li>
                </Link>
                <NavLink to="/about">
                    <li className={styles.about}>About</li>
                </NavLink>
                </ul>
            </div>
        )
    }


export default NavBar;



