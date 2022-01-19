import { useState } from "react";
import Login from "./Components/Login";
import ApplicationForm from "./Components/ApplicationForm";

function App() {
  const Arindam = {
    username: "arindam@login.com",
    password: "arindam123",
  };

  const[cred,setCred] = useState({username:'',password:''}) 

  const Login1 = (details) =>{
    console.log(details);

    if(details.username == Arindam.username && details.password == Arindam.password){
      console.log("logged in");
      setCred({
        username: details.username,
        password: details.password
      });
    } else{
      console.log('no')
      alert("Invalid Details")
    }

  };
  const Logout1 = (lout) =>{
    setCred(lout);
  }
  return (
    <div>
      {(cred.username != "") ? <ApplicationForm Logout={Logout1}/> : <Login Login={Login1} />}
      
    </div>
  );
}

export default App;
