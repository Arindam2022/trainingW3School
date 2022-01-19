import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button";

const Login = (props) => {
    
    const[details,setDetails]= useState({username:'',password:''});
    

    const credCheck = (event) =>{
        event.preventDefault();


        props.Login(details);

    };

    const userInput = (event) =>{
        setDetails({...details,username: event.target.value});
    }
    const passInput = (event) =>{
        setDetails({...details,password:event.target.value});
    }

  return (
    <Card className={styles.input}>
      <form onSubmit={credCheck}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={details.username} autoComplete="off" onChange={userInput} />
        <label htmlFor="pass">Password</label>
        <input id="pass" type="password" value={details.password} onChange={passInput} />
        <Button type="submit">Login</Button>
        <p>(Correct username - arindam@login.com, password - arindam123)</p>
      </form>
    </Card>
  );
};

export default Login;
