import { useState } from "react";
import Login from "./Components/Login";
import ApplicationForm from "./Components/ApplicationForm";

function App() {
  const Arindam = {
    username: "arindam@login.com",
    password: "arindam123",
  };

  const[cred,setCred] = useState({username:'',password:''}) 
  const[isLogin,setIsLogin] = useState(false);

  const Login1 = (details) =>{
    console.log(details);

    if((details.username == Arindam.username) && (details.password == Arindam.password)){
      console.log("logged in");
      setIsLogin(true);
    } else{
      console.log('no')
      alert("Invalid Details")
    }

  };
  const Logout1 = (lout) =>{
    setIsLogin(lout);
  }
  return (
    <div>
      {(isLogin === true) ? <ApplicationForm Logout={Logout1}/> : <Login Login={Login1} />}
      
    </div>
  );
}

export default App;
