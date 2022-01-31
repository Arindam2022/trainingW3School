import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const empty = (value) => value.trim() === "";
const isPin = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    pincode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const pincodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPincode = pincodeInputRef.current.value;

    const enteredNameIsValid = !empty(enteredName);
    const enteredStreetIsValid = !empty(enteredStreet);
    const enteredCityIsValid = !empty(enteredCity);
    const enteredPincodeIsValid = isPin(enteredPincode);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      pincode: enteredPincodeIsValid,
    });

    const formIsValid =
      enteredPincodeIsValid &&
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      pincode: enteredPincode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" autoComplete="off" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid Name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          autoComplete="off"
          ref={streetInputRef}
        />
        {!formValidity.street && <p>PLease enter a valid Street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.pincode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="pincode">PinCode</label>
        <input
          id="pincode"
          type="text"
          autoComplete="off"
          ref={pincodeInputRef}
        />
        {!formValidity.pincode && <p>PLease enter a valid PinCode</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input id="city" type="text" autoComplete="off" ref={cityInputRef} />
        {!formValidity.city && <p>PLease enter a valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
