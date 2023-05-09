import styles from "./Card.module.css"
import {Link} from "react-router-dom";

const Card = ({id,name, status, species, gender, origin, image, onClose})=>{
   return (
      
         <div className={styles.carta}>
            <button className={styles.boton} onClick={()=>{onClose(id)}}>Eliminar</button>
            <h2 className={styles.nombre}>{name}</h2>
            <h2 className={styles.status}>Status: {status}</h2>
            <h2 className={styles.especie}>Especie: {species}</h2>
            <h2 className={styles.genero}>Genero: {gender}</h2>
            <div className={styles.contenedor}>
            </div>
            <h2>{origin.name}</h2>
            <Link to={`/detail/${id}`}>  
            <img className={styles.imagen}src={image} alt='' />
            </Link>
         </div>
      
   );
}

export default Card;
