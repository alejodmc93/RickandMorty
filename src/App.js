import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import styles from "./App.module.css";
import { useState, useEffect } from 'react';
// import characters from "./data.js"
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from "./components/Form/Form";
import userEvent from '@testing-library/user-event';

const email = "fmendozala@gmail.com";
const password = "123456@";

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const[characters, setCharacters] = useState([]);
   const[access, setAccess] = useState(false);

   const login = (userData)=>{
      if(userData.email===email && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(()=>{
      !access && navigate("")
   },[access])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id)=>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   };

   return (
      <div className={styles.App}>
         {
            location.pathname !== "/" ? <NavBar onSearch={onSearch}/> : null
         }
         <Routes>
            <Route path="/" element={<Form login={login}/>}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/> }></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
