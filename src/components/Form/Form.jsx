import { useState } from "react";
import validation from "../Validation/Validation";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import styles from "./Form.module.css"

const Form = ({login})=>{
    const[errors, setErrors] = useState({});
    const[userData, setUserData] = useState({
        email:"",
        password:""
    });

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))

        // setErrors(validateErrors)
    }

        const handleSubmit=(event)=>{
            event.preventDefault();
            login(userData);
        }
    return(
        <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="email" className={styles.login}>Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} className={styles.dato}/>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password" className={styles.login}>Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} className={styles.dato}/>
            {errors.password &&  <p>{errors.password}</p>}
            <button className={styles.enviar}>submit</button>
        </form>
    )
}

export default Form;