import { useState } from "react";
import validation from "../Validation/Validation";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

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

        const validateErrors=validation({
            ...userData,
            [event.target.name]:event.target.value
        })

        // setErrors(validateErrors)
    }

        const handleSubmit=(event)=>{
            event.preventDefault();
            login(userData);
        }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password &&  <p>{errors.password}</p>}
            <button>submit</button>
        </form>
    )
}

export default Form;