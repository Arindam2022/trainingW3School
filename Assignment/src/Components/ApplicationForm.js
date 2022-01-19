import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
const ApplicationForm = (props) =>{
    let lout = "";
    const logout =()=>{
        lout = {username:'',password:''};
        props.Logout(lout);
    }

    return(
        <Card>
            
            <Button onClick={logout}>Log Out</Button>

        </Card>
    )
};
export default ApplicationForm;