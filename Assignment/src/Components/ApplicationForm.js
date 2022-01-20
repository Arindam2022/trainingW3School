import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Application.module.css";

const ApplicationForm = (props) => {
  const [data, setData] = useState({
    name: "",
    age: "",
    phone: "",
    gender: "",
    language: "",
  });

  const [submit,setSubmit] = useState(false);

  let lout = "";
  const logout = () => {
    lout = (false);
    props.Logout(lout);
  };

  const userDataHandler = (event) => {
    event.preventDefault();
    setSubmit(true);
  };
  const nameHandler = (event) => {
    setData({ ...data, name: event.target.value });
  };
  const ageHandler = (event) => {
    setData({ ...data, age: event.target.value });
  };
  const phoneHandler = (event) => {
    setData({ ...data, phone: event.target.value });
  };
  const radioHandler = (event) => {
    setData({ ...data, gender: event.target.value });
  };
  const checkHandler = (event) => {
    setData({ ...data, language: event.target.value });
  };

  return (
    <>
      <Card className={styles.input}>
        <h2>LogOut</h2>
        <Button onClick={logout}>Log Out</Button>
      </Card>
      <Card className={styles.input}>
        <form onSubmit={userDataHandler}>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            style={{ width: "100%" }}
            value={data.name}
            onChange={nameHandler}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            style={{ width: "100%" }}
            value={data.age}
            onChange={ageHandler}
          ></input>
          <label htmlFor="number">Enter Phone Number:</label>
          <input
            type="text"
            id="number"
            autoComplete="off"
            style={{ width: "100%" }}
            value={data.phone}
            onChange={phoneHandler}
          ></input>

          <p>Select Gender</p>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            onChange={radioHandler}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={radioHandler}
          />

          <p>Languages you can speak</p>
          <input
            type="checkbox"
            id="eng"
            value="English"
            onChange={checkHandler}
          />
          <label htmlFor="eng"> English</label>
          <input
            type="checkbox"
            id="hnd"
            value="Hindi"
            onChange={checkHandler}
          />
          <label htmlFor="hnd"> Hindi</label>
          <input
            type="checkbox"
            id="jpn"
            value="Japanese"
            onChange={checkHandler}
          />
          <label htmlFor="jpn"> Japanese</label>
          <br/>

          <Button  type="submit">Submit</Button>
        </form>
      </Card>

      <Card className={styles.input}>
      {(submit=== true) ? <div>
          <h3>Name : {data.name}</h3>
          <h3>Age : {data.age}</h3>
          <h3>Phone : {data.phone}</h3>
          <h3>Gender : {data.gender}</h3>
          <h3>Language : {data.language}</h3>

      </div>: null }
      </Card>
    </>
  );
};
export default ApplicationForm;
