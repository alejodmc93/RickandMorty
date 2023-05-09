import axios from "axios";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () =>{

    const{id}=useParams();
    const[character, setCharacter] = useState({});

useEffect(()=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    if (data.name) {
        setCharacter(data);
    } else {
        window.alert('No hay personajes con ese ID');
    }
});
    return setCharacter({});
},[id]);

    return(
        <div className={styles.contenedor}>
            <div className={styles.descripcion}>
                <h1>name : {character.name && character.name}</h1>
                <h1>status : {character.status && character.status}</h1>
                <h1>specie : {character.species && character.species}</h1>
                <h1>gender : {character.gender && character.gender}</h1>
                <h1>origin : {character.origin?.name && character.origin?.name}</h1>
            </div>
            <img className={styles.imagen} src={character.image && character.image}/>
        </div>
    )
};

export default Detail;