import styles from "./Card.module.css";
import {Link} from "react-router-dom";
import {addFav , removeFav} from "../../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect} from "react";

const Card = ({id,name, status, species, gender, origin, image, onClose,addFav, removeFav, myFavorites})=>{

   const[isFav, setIsFav] = useState(false);

   const handleFavorite=()=>{
      isFav ? removeFav(id):addFav({id,name, status, species, gender, origin, image, onClose});
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      
         <div className={styles.carta}>
            {
               isFav ? (
                  <button className={styles.favorito} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={styles.favorito} onClick={handleFavorite}>🤍</button>
               )
            }
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

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav:(character)=>dispatch(addFav(character)),
      removeFav:(id)=>dispatch(removeFav(id))
   }
}

const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps , mapDispatchToProps)(Card);
