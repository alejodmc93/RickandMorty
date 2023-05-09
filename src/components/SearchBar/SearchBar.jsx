import styles from "./SearchBar.module.css"
import { useState } from "react";

const SearchBar = ({onSearch}) =>{
   const [id, setId] = useState("");

   const handleChange = (event)=>{
      setId(event.target.value)
   };

   return (
      <div className={styles.bar}>
         <input className={styles.texto} type='search' onChange={handleChange} value={id}/>
         <button className={styles.boton} onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;