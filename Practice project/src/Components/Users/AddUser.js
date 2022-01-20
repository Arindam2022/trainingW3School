import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";


const AddUser = (props)=> {
    const[enteredUsername,setUsername] = useState('');
    const[enteredAge,setAge] = useState('');
    const[error , setError] = useState();
 

    const addUserHandler = (event) =>{
        event.preventDefault();
        if( enteredUsername.trim().length ===0 || enteredAge.trim().length === 0){
            setError({
                title: 'INVALID INPUT',
                msg: 'Enter a Value in All Fields.'
            })
            return;
        }
        if (+enteredAge < 1){
            setError({
                title: 'INVALID AGE',
                msg: 'Enter a Valid Age.'
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setUsername('');
        setAge('');
    };

    const userChangeHandler = (event) => {
        setUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
        setUsername('');
        setAge('');
    }
    return (
        <React.Fragment>
        {error && <ErrorModal onErrorHandler={errorHandler} title={error.title} msg={error.msg}/>}
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type='text'value={enteredUsername} autoComplete="off" onChange={userChangeHandler}/>
            <label htmlFor="age">Age</label>
            <input id="age" type='number' value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </React.Fragment>
    )
};
export default AddUser;