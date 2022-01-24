import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsimg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return(
  <Fragment>
    <header className={classes.header}>
      <h1>Meals</h1>
      <HeaderCartButton onClick={props.onShow}/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsimg} alt="idk" />
    </div>
  </Fragment>);
};

export default Header;
