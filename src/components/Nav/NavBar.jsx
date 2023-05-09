import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from "./NavBar.module.css"
import { Link, NavLink} from "react-router-dom";

    const NavBar = ({onSearch})=>{
        return(
            <div className={styles.navbar}>
                <img className={styles.titulo} src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"/>
                <SearchBar onSearch={onSearch}/>

                <div className={styles.menu}>
                <Link to="/home">
                    <button className={styles.home}>Home</button>
                </Link>
                <NavLink to="/about">
                    <button className={styles.about}>About</button>
                </NavLink>
                </div>
            </div>
        )
    }


export default NavBar;



